import { useNavigate } from 'react-router-dom'

import { Button } from '../components/Button'

export const Home = () => {
  // このhooksで画面遷移のためのメソッドを取ってくることができる
  const navigate = useNavigate()

  // ボタンを押したときに画面遷移するためのハンドラー
  const handleClickButton = () => {
    navigate('/result')
  }

  return (
    <div className="p-10 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">MoneyForward Calculator</h1>
      <p className="text-lg">
        PC版マネーフォワードからダウンロードできるCSVファイルを入力して、集計するためのアプリケーションです。
      </p>

      <div className="py-16">
        <input type="file" />
      </div>

      <div className="flex justify-center">
        <Button label="集計する" onClick={handleClickButton} variant="info" />
      </div>
    </div>
  )
}
