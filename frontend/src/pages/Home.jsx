import Navbar from '../components/layout/Navbar'
import ProductShowcase from '../pages/ProductShowcase'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <main>
        <ProductShowcase />
      </main>
      <Footer />
    </div>
  )
}

export default Home
