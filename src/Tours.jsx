import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
  return (
    <section className="tours">
      {tours.map((tour) => (
        <Tour tour={tour} key={tour.id} removeTour={removeTour} />
      ))}
    </section>
  )
}
export default Tours
