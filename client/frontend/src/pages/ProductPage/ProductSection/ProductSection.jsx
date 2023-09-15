import ProductImage from "./ProductImageSection/ProductImage"

function ProductSection() {
  return (
    <>
    <div className="flex ">
      <div className="flex-1">
      <ProductImage />
      </div>
      
      <div className="flex-1 w-full h-full bg-gray-300 px-40 py-8">
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductSection