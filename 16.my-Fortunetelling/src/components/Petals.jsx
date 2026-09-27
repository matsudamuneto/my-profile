import { useMemo } from 'react'

export default function Petals() {
  // 花びらの位置・速度をランダムに「1回だけ」計算する。
  // なぜuseMemo: 再レンダリングのたびに位置が変わると花びらが飛び跳ねて見えるため、[]依存で固定する
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }).map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 7 + Math.random() * 6,
        size: 8 + Math.random() * 8,
      })),
    [],
  )

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {petals.map((p, i) => (
        <div
          key={i}
          className={`animate-fall absolute -top-[5%] rounded-[0_60%_0_60%] opacity-75 ${
            i % 2 === 0 ? 'bg-sakura' : 'bg-sakura-deep'
          }`}
          style={{
            left: `${p.left}vw`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
