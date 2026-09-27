// おみくじの結果一覧。weightが大きいほど出やすい(合計に対する割合で抽選する)
export const RANKS = [
  { key: 'daikichi', label: '大吉', en: 'DAI-KICHI · GREAT BLESSING', weight: 8,
    msgs: ['願いごとは叶いやすい時。思い切って一歩踏み出して。', '出会いに恵まれる一日。人との縁を大切に。', '今日始めたことは長く続く良い流れに乗る。'] },
  { key: 'chukichi', label: '中吉', en: 'CHU-KICHI · GOOD BLESSING', weight: 14,
    msgs: ['物事は順調。焦らず自分のペースを保って。', '小さな幸運が積み重なる日。気配りを忘れずに。', '努力してきたことが少しずつ形になる。'] },
  { key: 'shokichi', label: '小吉', en: 'SHO-KICHI · SMALL BLESSING', weight: 18,
    msgs: ['穏やかな一日。無理をせず整えることを優先して。', '地道な作業が後々の助けになる。', '身近な人への感謝を言葉にすると運が上向く。'] },
  { key: 'kichi', label: '吉', en: 'KICHI · BLESSING', weight: 20,
    msgs: ['可もなく不可もなく、平常心が吉。', '小さな選択が明日への布石になる。', '焦らず、目の前のことを一つずつ。'] },
  { key: 'suekichi', label: '末吉', en: 'SUE-KICHI · FUTURE BLESSING', weight: 16,
    msgs: ['今はまだ種まきの時期。焦らず備えを。', '後になって良さがわかる出来事がありそう。', '慎重な判断が後の安心につながる。'] },
  { key: 'kyo', label: '凶', en: 'KYO · MISFORTUNE', weight: 14,
    msgs: ['無理は禁物。今日は守りを固める日。', '判断は一晩寝かせてから。', '小さなつまずきも次への学びになる。'] },
  { key: 'daikyo', label: '大凶', en: 'DAI-KYO · GREAT MISFORTUNE', weight: 10,
    msgs: ['大きな決断は先送りが吉。丁寧に過ごして。', '足元をよく確認して、慌てず行動を。', '嵐の後には必ず晴れ間が来る。'] },
]

// 重み付きランダムで1件選ぶ。
// なぜ: 単純なArray.random()だと全ランク均等になり大吉/大凶が出すぎるため、
// weightの合計に対する乱数の位置で「範囲に入ったランクを返す」方式にしている
export function drawRank() {
  const total = RANKS.reduce((sum, r) => sum + r.weight, 0)
  let n = Math.random() * total
  for (const r of RANKS) {
    if (n < r.weight) return r
    n -= r.weight
  }
  return RANKS[RANKS.length - 1]
}
