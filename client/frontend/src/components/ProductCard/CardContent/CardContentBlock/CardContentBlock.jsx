import Review from "../../../Review/Review"

function CardContentBlock() {
  return (
    <div className="content flex-col justify-center items-center">
        <div className="image bg-white w-[250px] h-[200px]  rounded-[20px] flex justify-center items-center group">
            <img src="./images/iphone.png" alt="" className=" w-[450px] h-[200px] bg-cover group-hover:scale-110"/>
        </div>
        <Review />
        <div className="card-text mx-5 text-black">
            <div className="title text-[18px] font-semibold"><p>iphone 14 pro max</p></div>
            <div className="specs text-[12px]"><p>Teal Purple(128GB)</p></div>
            <div className="price flex gap-3 text-[15px]"><h4>₹39,999</h4> <h6 className="flex">M.R.P: <h6 className=" line-through">₹99,999</h6></h6></div>
            <div className="offer text-[12px]">Save extra With No Cost Emi*</div>
            <div className="buy-btn w-full flex justify-center items-center my-2">
                <button className="px-5 py-2 bg-black text-white rounded-[10px] hover:bg-[#fcfcfc] hover:text-black">Shop Now</button>
            </div>
        </div>

    </div>
  )
}

export default CardContentBlock