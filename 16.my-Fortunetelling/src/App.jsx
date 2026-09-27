import { useState, useEffect } from 'react'
import Torii from './components/Torii.jsx'
import Petals from './components/Petals.jsx'
import DrawButton from './components/DrawButton.jsx'
import ResultCard from './components/ResultCard.jsx'
import HistoryList from './components/HistoryList.jsx'
import AdviceBox from './components/AdviceBox.jsx'
import { drawRank } from './data/ranks.js'
import { todayStr } from './utils/date.js'
import { useLocalHistory } from './hooks/useLocalHistory.js'
import { useAdvice } from './hooks/useAdvice.js'

export default function App() {
  const [history, setHistory] = useLocalHistory()
  const [revealed, setRevealed] = useState(false)
  const { advice, status } = useAdvice()

  const today = todayStr()
  const todaysEntry = history.find((h) => h.date === today) || null

  // 今日すでに引いていれば、リロード直後から結果を表示したままにする
  useEffect(() => {
    if (todaysEntry) setRevealed(true)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function handleDraw() {
    if (todaysEntry) return
    const rank = drawRank()
    const msg = rank.msgs[Math.floor(Math.random() * rank.msgs.length)]
    const entry = { date: today, key: rank.key, label: rank.label, en: rank.en, msg }

    setHistory((prev) => {
      const rest = prev.filter((h) => h.date !== today)
      return [entry, ...rest].slice(0, 7) // 直近7日分だけ残す
    })
    setRevealed(true)
  }

  return (
    <>
      <Petals />
      <div className="relative z-10 max-w-[520px] mx-auto px-5 pt-8 pb-16">
        <Torii />
        <header className="text-center mb-8">
          <h1 className="font-shippori text-2xl sm:text-3xl font-bold tracking-wide text-torii-dark mb-1.5">
            今日のおみくじ
          </h1>
          <p className="text-sm text-ink-soft leading-relaxed">
            一日に一回だけ、今日の運勢を占えます。
            <br />
            静かな気持ちでボタンを押してください。
          </p>
        </header>

        <DrawButton disabled={!!todaysEntry} onClick={handleDraw} />
        {!todaysEntry && (
          <p className="text-center text-xs text-ink-soft -mt-3 mb-8">
            ※ 結果は日付が変わるとまた引けます
          </p>
        )}

        {revealed && todaysEntry && (
          <ResultCard
            label={todaysEntry.label}
            en={todaysEntry.en}
            message={todaysEntry.msg}
            dateLabel={today.replaceAll('-', '/')}
          />
        )}

        <AdviceBox advice={advice} status={status} />

        <HistoryList history={history} />
      </div>
    </>
  )
}
