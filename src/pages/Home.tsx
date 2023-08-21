import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className="bg-slate-400 text-xs">
      this is home page <br />
      <Link to="/result">go to result page</Link> <br />
      <a href="/result" className="text-blue-600">
        Anchor tag
      </a>
    </div>
  )
}
