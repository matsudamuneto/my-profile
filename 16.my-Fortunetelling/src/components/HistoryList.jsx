import { fmtDate } from '../utils/date.js'

// props: history(過去の記録の配列)
export default function HistoryList({ history }) {
  const items = history.slice(0, 7) // 念のため直近7件だけに絞る

  return (
    <section className="relative z-10">
      <h2 className="font-shippori text-base font-bold text-pine text-center mb-3.5">
        過去1週間の結果
      </h2>
      {items.length === 0 ? (
        <p className="text-center text-sm text-ink-soft py-4">まだ記録がありません</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {items.map((h) => (
            <li
              key={h.date}
              className="flex items-center justify-between bg-white/60 border border-paper-edge rounded px-4 py-2.5 text-sm"
            >
              <span className="text-ink-soft">{fmtDate(h.date)}</span>
              <span className="font-shippori font-bold tracking-wide text-torii-dark">
                {h.label}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
