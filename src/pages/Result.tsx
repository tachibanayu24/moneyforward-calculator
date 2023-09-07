import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'

type Location = { state?: { amount?: number; largeExpenses?: string[][] } }

export const Result = () => {
  // このhooksで画面遷移のためのメソッドを取ってくることができる
  const navigate = useNavigate()
  const { state } = useLocation() as Location

  // ボタンを押したときに画面遷移するためのハンドラー
  const handleClickButton = () => {
    navigate('/')
  }

  return (
    <div className="p-10 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-4">MoneyForward Calculator</h1>

      <div className="py-16 text-center">
        {!state || !state.amount ? (
          <p className="text-lg text-red-700">集計に失敗しました</p>
        ) : (
          <div>
            <h2>今月の共同支出は...</h2>
            <p className="text-4xl font-extrabold">{state.amount.toLocaleString()}円</p>
          </div>
        )}
      </div>

      <div className="py-16 text-center">
        {!state || !state.largeExpenses ? (
          <p className="text-lg text-red-700">集計に失敗しました</p>
        ) : (
          <div>
            <h2 className="font-bold">代表的な支出は</h2>
            <table className="text-left mt-4">
              {state.largeExpenses.map((expense) => (
                <tr>
                  <td className="p-2">{expense[1]}</td>
                  <td className="p-2">{(Number(expense[3]) * -1).toLocaleString()}円</td>
                  <td className="p-2">{expense[5]}</td>
                  <td className="p-2 truncate block max-w-[400px]">{expense[2]}</td>
                  <td className="p-2">{expense[7] || '-'}</td>
                </tr>
              ))}
            </table>
          </div>
        )}
      </div>

      <div className="flex justify-center">
        <Button label="ホームに戻る" onClick={handleClickButton} />
      </div>
    </div>
  )
}
