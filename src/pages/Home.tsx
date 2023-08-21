import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      this is home page <br />
      <Link to="/result">go to result page</Link> <br />
      <a href="/result">Anchor tag</a>
    </div>
  )
}
