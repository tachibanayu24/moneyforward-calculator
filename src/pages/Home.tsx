import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'
import { ChangeEvent, useState } from 'react'

export const Home = () => {
  // このhooksで画面遷移のためのメソッドを取ってくることができる
  const navigate = useNavigate()

  const [filename, setFilename] = useState('')
  // このstateはstringですよといっている
  // useState時に初期値をいれないと、undefinedになるが、 <string> などとすると、 undefined | string の型のstateとして宣言される
  const [csv, setCsv] = useState<string>()

  // ボタンを押したときに画面遷移するためのハンドラー
  const handleClickButton = () => {
    navigate('/result')
  }

  const handleInputFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) {
      return
    }
    const targetCsv = files[0]

    setFilename(targetCsv.name)

    const reader = new FileReader()
    // ファイル読み込み完了時に発火するリスナー
    reader.addEventListener('load', () => {
      setCsv(typeof reader.result === 'string' ? reader.result : undefined)
    })
    reader.readAsText(targetCsv, 'UTF-8')
  }

  console.log(csv)

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
        {filename && <p className="mb-4">{filename}は正しいフォーマットのファイルです</p>}

        <Button label="集計する" onClick={handleClickButton} variant="info" />
      </div>
    </div>
  )
}
