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
  useEffect(() => {
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
    FetchData()
  }, [])
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h2>There was an error</h2>
  }
  return (
    <main>
      <h2 className="title">Our Tours</h2>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}
export default App
