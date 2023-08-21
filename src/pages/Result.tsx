import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

export const Result = () => {
  // このhooksで画面遷移のためのメソッドを取ってくることができる
  const navigate = useNavigate()

  // ボタンを押したときに画面遷移するためのハンドラー
  const handleClickButton = () => {
    navigate('/')
  }

  return (
    <div className="p-10 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">MoneyForward Calculator</h1>
      <h2 className="text-2xl font-bold mb-4">集計</h2>

      <div className="py-16">ここに集計結果を表示する</div>

      <div className="flex justify-center">
        <Button label="ホームに戻る" onClick={handleClickButton} />
      </div>
    </div>
  )
}
