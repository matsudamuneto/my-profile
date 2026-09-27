// props: disabled(今日は引けないか)、onClick(押した時の処理)
export default function DrawButton({ disabled, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={disabled ? '本日は引き終わりました' : '今日の運勢を占う'}
      className={`font-shippori block mx-auto mb-3 px-10 py-4 rounded-md text-lg tracking-widest transition-transform active:translate-y-1 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-gold ${
        disabled
          ? 'bg-[#cbbfae] text-[#5c655e] shadow-[0_6px_0_#a99d8b] cursor-default'
          : 'bg-torii text-[#fff8ee] shadow-[0_6px_0_#8c2c22] cursor-pointer'
      }`}
    >
      {disabled ? '本日の分は引きました' : '今日の運勢を占う'}
    </button>
  )
}
