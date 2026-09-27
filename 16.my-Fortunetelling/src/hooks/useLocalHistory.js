import { useState, useEffect } from 'react'

const STORAGE_KEY = 'omikuji_state_v1'

// localStorageから履歴を読み込む。
// なぜtry/catch: 別サイトの古いデータが残っていたりJSONが壊れていても
// アプリごと止まらないようにするため
function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// 履歴をReactのstateとして持ちつつ、変化するたびlocalStorageに書き込むフック。
// - useState(loadHistory): 初回だけloadHistory()を実行して初期値にする
// - useEffect: historyが変わるたびに実行 → これがあるので「リロードしても消えない」
export function useLocalHistory() {
  const [history, setHistory] = useState(loadHistory)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    } catch {
      // 保存に失敗しても表示自体は続けられるので、ここでは何もしない
    }
  }, [history])

  return [history, setHistory]
}
