export const getLargeExpenses = (csv?: string[][]) => {
  if (!csv) return []

  const copied = [...csv].filter((row) => Number(row[8]) === 0)
  const sorted = copied.sort((a, b) => Number(a[3]) - Number(b[3]))

  return sorted.slice(0, 10)
}
