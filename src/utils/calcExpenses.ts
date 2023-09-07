/**
 * 我が家のルールに従って集計する
 */
export const calcExpenses = (entire?: string[][]) => {
  if (!entire) return 0

  let sum = 0

  entire.forEach((row) => {
    // ある条件のとき処理をやめるような書き方をガード節などという
    if (row.length !== 10) return

    if (row[7].includes('共同支出')) {
      sum += Number(row[3])
    }
  })

  return sum * -1
}
