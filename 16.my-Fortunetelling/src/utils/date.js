// 今日の日付を "YYYY-MM-DD" 形式で返す(月・日を2桁ゼロ埋めして文字列比較できるようにする)
export function todayStr() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

// "YYYY-MM-DD" を "M/D" の表示用文字列に変換する
export function fmtDate(dateStr) {
  const [, m, d] = dateStr.split('-')
  return `${m}/${d}`
}
