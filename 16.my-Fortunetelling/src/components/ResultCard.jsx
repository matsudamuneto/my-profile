// props: label(大吉など)、en(英語表記)、message(おみくじ文)、dateLabel(表示用日付)
export default function ResultCard({ label, en, message, dateLabel }) {
  return (
    <div className="relative z-10 bg-paper border border-paper-edge rounded text-center px-6 pt-8 pb-7 shadow-[0_14px_30px_rgba(43,51,46,0.12)] animate-unfurl mb-8">
      <p className="font-shippori text-4xl sm:text-5xl font-bold tracking-wider text-torii mb-3">
        {label}
        <span className="block font-zen text-xs tracking-[0.2em] text-gold mt-1.5">{en}</span>
      </p>
      <p className="text-[15px] leading-loose text-ink whitespace-pre-line mb-4">{message}</p>
      <p className="text-xs text-ink-soft border-t border-dashed border-paper-edge pt-3">
        {dateLabel} の運勢
      </p>
    </div>
  )
}
