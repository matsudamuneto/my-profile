import { useState, useEffect } from 'react'

// 外部API(Advice Slip)から英語の一言アドバイスを取得し、
// さらに別の外部API(MyMemory翻訳API)で日本語に翻訳してから返すフック。
// 2つのfetchを順番に呼ぶ必要があるので、async関数として書いている。
export function useAdvice() {
  const [advice, setAdvice] = useState('')
  const [status, setStatus] = useState('loading') // 'loading' | 'done' | 'error'

  useEffect(() => {
    let cancelled = false

    async function fetchAdvice() {
      try {
        // 1. まず英語のアドバイスを取得する
        const res = await fetch('https://api.adviceslip.com/advice')
        if (!res.ok) throw new Error('advice fetch failed')
        const data = await res.json()
        const original = data.slip.advice

        // 2. 取得した英文をそのまま翻訳APIに渡し、日本語に変換する
        const translateRes = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(original)}&langpair=en|ja`,
        )
        if (!translateRes.ok) throw new Error('translate fetch failed')
        const translateData = await translateRes.json()
        const translated = translateData?.responseData?.translatedText

        if (cancelled) return
        // 翻訳が万一空だった場合は原文(英語)を表示する保険
        setAdvice(translated || original)
        setStatus('done')
      } catch {
        if (cancelled) return
        setStatus('error')
      }
    }

    fetchAdvice()

    return () => {
      cancelled = true
    }
  }, [])

  return { advice, status }
}