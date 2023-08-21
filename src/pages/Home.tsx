import { Link } from 'react-router-dom'
import { Button } from '../components/Button'

export const Home = () => {
  return (
    <div>
      this is home page <br />
      <Link to="/result">go to result page</Link> <br />
      <a href="/result" className="text-blue-600">
        Anchor tag
      </a>
      <br />
      <Button label="成功" onClick={console.log} variant="success" isDisable />
      <Button label="注意" onClick={console.log} variant="warn" />
      <Button label="情報" onClick={console.log} variant="info" />
      <Button label="失敗" onClick={console.log} variant="error" />
    </div>
  )
}
