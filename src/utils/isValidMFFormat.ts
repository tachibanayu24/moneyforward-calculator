/**
 * 正しいマネーフォワードのフォーマットのcsvファイルかどうかを判定するメソッド
 */
export const isValidMFFormat = (entireCsv?: string[][]) => {
  if (!entireCsv) return false

  const head = entireCsv[0]

  if (head.length !== 10) return false
  if (!(head[0] === '計算対象' && head[1] === '日付' && head[9] === 'ID')) return false

  return true
}
