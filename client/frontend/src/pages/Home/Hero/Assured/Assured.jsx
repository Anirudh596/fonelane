import Block from "./Assured_blocks/Block";

function Assured() {
  return (
    <>
    <div className="custom-w">
      <div className="flex justify-between items-center  my-20">
        <Block  imgSrc={"./images/shield.png"} text={"12 month warranty"} />
        <Block imgSrc={"./images/rupee.png"} text={"No cost Emi"} />
        <Block imgSrc={"./images/cash-on-delivery.png"} text={"Cash On Delivery"} />
        <Block imgSrc={"./images/100-percent.png"} text={"100% Genuine Products"} />
        <Block imgSrc={"./images/battery.png"} text={"90% Battery Health or Better"} />
        <Block imgSrc={"./images/lowest-price.png"} text={"Lowest Price"} />
        <Block imgSrc={"./images/lowest-price.png"} text={"Free and Secure Shipping"} />
      </div>
      </div>
    </>
  );
}

export default Assured;
