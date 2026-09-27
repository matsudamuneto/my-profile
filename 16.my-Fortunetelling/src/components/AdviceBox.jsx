// props: advice(翻訳済みの文字列)、status('loading' | 'done' | 'error')
export default function AdviceBox({ advice, status }) {
  return (
    <div className="relative z-10 bg-white/50 border border-paper-edge rounded px-4 py-3 text-center text-xs text-ink-soft mb-8">
      <p className="mb-1 text-[11px] tracking-widest text-gold">今日のひとこと</p>
      {status === 'loading' && <p>読み込み中…</p>}
      {status === 'error' && <p>取得できませんでした</p>}
      {status === 'done' && <p className="text-ink">{advice}</p>}
    </div>
  )
}