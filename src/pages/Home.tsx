import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'
import { ChangeEvent, useState } from 'react'
import { parse } from 'papaparse'
import { isValidMFFormat } from '../utils/isValidMFFormat'
import { calcExpenses } from '../utils/calcExpenses'

export const Home = () => {
  // このhooksで画面遷移のためのメソッドを取ってくることができる
  const navigate = useNavigate()

  const [filename, setFilename] = useState('')
  // このstateはstringですよといっている
  // useState時に初期値をいれないと、undefinedになるが、 <string> などとすると、 undefined | string の型のstateとして宣言される
  const [csv, setCsv] = useState<string[][]>()

  // ボタンを押したときに画面遷移するためのハンドラー
  const handleClickButton = () => {
    navigate('/result', { state: calcExpenses(csv) })
  }

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      return
    }
    const targetCsv = files[0]

    setFilename(targetCsv.name)

    parse(targetCsv, {
      encoding: 'Shift-JIS',
      complete: (results) => {
        setCsv(results?.data as string[][])
      },
    })
  }

  return (
    <div className="p-10 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">MoneyForward Calculator</h1>
      <p className="text-lg">
        PC版マネーフォワードからダウンロードできるCSVファイルを入力して、集計するためのアプリケーションです。
      </p>

      <div className="py-16">
        <input type="file" accept=".csv" onChange={handleInputFile} />
      </div>

      <div className="text-center">
        <Button
          label="集計する"
          onClick={handleClickButton}
          variant="info"
          isDisable={!isValidMFFormat(csv)}
        />

        {filename &&
          (isValidMFFormat(csv) ? (
            <p className="mt-4">{filename}は正しいフォーマットのファイルです</p>
          ) : (
            <p className="mt-4 text-red-700">{filename}は不正なフォーマットです</p>
          ))}
      </div>
    </div>
  )
}
