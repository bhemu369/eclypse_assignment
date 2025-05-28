import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MediaGrid from './components/MediaGrid'
import ProductDetail from './components/ProductDetail'
import ProductInfo from './components/ProductInfo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <MediaGrid />
      <ProductDetail />
      <ProductInfo />
      <Footer />
    </div>
  )
}

export default App
