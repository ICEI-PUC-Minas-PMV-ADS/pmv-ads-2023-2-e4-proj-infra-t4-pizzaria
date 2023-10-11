import AboutUs from "../components/AboutUs"
import Announcement from "../components/Announcement"
import Categories from "../components/Categories"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Reservation from "../components/Reservation"
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
      <Footer />
    </div>
  )
}

export default Home