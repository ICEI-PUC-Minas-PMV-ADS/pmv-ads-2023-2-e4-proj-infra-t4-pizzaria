import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Reservation from "../components/Reservation"
import ReservationPlace from "../components/ReservationPlace"
import Slogan from "../components/Slogan"

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slogan />
      <Categories />
      <Products />
      <Reservation />
      <ReservationPlace />
      <Footer />
    </div>
  )
}

export default Home