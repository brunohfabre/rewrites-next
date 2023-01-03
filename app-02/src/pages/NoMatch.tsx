import { useLocation } from "react-router-dom"

export function NoMatch() {
  const location = useLocation()

  return (
    <div>
      <h1>Support - no-match</h1>

      <pre>
        {JSON.stringify(location, null, 2)}
      </pre>
    </div>
  )
}