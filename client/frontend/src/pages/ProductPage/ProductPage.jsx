import { Link } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Navbar from "../../components/Navigation/Navbar/Navbar"
import ProductSection from "./ProductSection/ProductSection"

function ProductPage() {
  return (
    <>
    <Navbar />
    <div className="h-screen custom-w">
      <div className="flex justify-start items-center gap-3 select-none my-4">
        <Link to='/'><p className="cursor-pointer active:opacity-80 active:underline">Home</p></Link>
        <p className="flex justify-center items-center text-[20px]">{'>'}</p>
        <p className="cursor-pointer active:opacity-80 active:underline">Refurbished Devices</p>
        <p className="flex justify-center items-center text-[20px]">{'>'}</p>
        <p className="cursor-pointer active:opacity-80 active:underline">Iphone 13 pro Max- Refurbished</p>
      </div>
      <ProductSection />
    </div>
    <Footer />
    </>

  )
}

export default ProductPage