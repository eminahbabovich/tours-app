const url = 'https://course-api.com/react-tours-project'

import Loading from './Loading'
import Tours from './Tours'
import { useEffect, useState } from 'react'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }
  const FetchData = async () => {
    try {
      const resp = await fetch(url)
      if (!resp.ok) {
        setIsError(true)
        setIsLoading(false)
        console.log(error)
        return
      }
      const data = await resp.json()
      setTours(data)
    } catch (error) {
      setIsError(true)
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    FetchData()
  }, [])
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (isError) {
    return <h2>There was an error</h2>
  }
  if (tours.length === 0) {
    return (
      <div className="refresh-div">
        <h3>No Tours Left</h3>
        <button className="btn" onClick={() => FetchData()}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <div className="title-underline"></div>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
