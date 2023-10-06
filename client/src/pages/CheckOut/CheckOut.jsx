import {
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { BsCreditCard, BsWallet2 } from "react-icons/bs";
import { Radio, Typography } from "@material-tailwind/react";
import BackBtn from "../../components/BackBtn/BackBtn";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper CSS

function CheckOut() {
    const goBack = () => {
        window.history();
    }

    const selectedPro = [{
        title : "iphone 12",
        storage: "64gb",
        quality: "fair",
        price: "40000",
    }
    ]

  return (
    <>
      <div className="min-h-screen custom-w">
        <div className="flex my-10">
          <div className="flex-1 flex flex-col mx-5 gap-2 m-16">
            <div className="w-full">
              <Input label="Contact Number" />
            </div>
            <h3>Shipping Address</h3>
            <div className="w-full">
              <Input label="Country/Region" />
            </div>
            <div className="w-full flex gap-5">
              <div className="w-full">
                <Input label="First Name" />
              </div>
              <div className="w-full">
                <Input label="Last Name" />
              </div>
            </div>
            <div className="w-full">
              <Input label="Address" />
            </div>
            <div className="w-full flex gap-5">
              <div className="w-full">
                <Input label="City" />
              </div>
              <div className="w-full">
                <Input label="Postal Code" />
              </div>
            </div>
            <div className="flex items-center ">
              <Checkbox label="Remember Me" />;
            </div>
            <div>
              <h3>Payment Methods</h3>
              <div>
                <List>
                  <ListItem className="p-0">
                    <label
                      htmlFor="vertical-list-card"
                      className="flex w-full cursor-pointer justify-between items-center px-3 py-2"
                    >
                      <BsCreditCard className="text-3xl" />
                      <Typography color="blue-gray" className="font-medium">
                        Credit/Debit Card
                      </Typography>
                      <ListItemPrefix className="mr-3">
                        <Radio
                          name="vertical-list"
                          id="vertical-list-card"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="vertical-list-upi"
                      className="flex w-full cursor-pointer justify-between items-center px-3 py-2"
                    >
                      <img src="./images/upi.png" alt="upi image" className="w-12"/>
                      <Typography color="blue-gray" className="font-medium">
                        UPI
                      </Typography>
                      <ListItemPrefix className="mr-3">
                        <Radio
                          name="vertical-list"
                          id="vertical-list-upi"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="vertical-list-net"
                      className="flex w-full cursor-pointer justify-between items-center px-3 py-2"
                    >
                      <img src="./images/netbanking.png" alt="netbanking image" className="w-10"/>
                      <Typography color="blue-gray" className="font-medium">
                        NetBanking
                      </Typography>
                      <ListItemPrefix className="mr-3">
                        <Radio
                          name="vertical-list"
                          id="vertical-list-net"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="vertical-list-wallet"
                      className="flex w-full cursor-pointer justify-between items-center px-3 py-2"
                    >
                      <BsWallet2 className="text-3xl" />
                      <Typography color="blue-gray" className="font-medium">
                        Wallet
                      </Typography>
                      <ListItemPrefix className="mr-3">
                        <Radio
                          name="vertical-list"
                          id="vertical-list-wallet"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                    </label>
                  </ListItem>
                  <ListItem className="p-0">
                    <label
                      htmlFor="vertical-list-cod"
                      className="flex w-full cursor-pointer justify-between items-center px-3 py-2"
                    >
                      <img src="./images/cod2.png" alt="cod image" className="w-10"/>
                      <Typography color="blue-gray" className="font-medium">
                        Cash On Delivery
                      </Typography>
                      <ListItemPrefix className="mr-3">
                        <Radio
                          name="vertical-list"
                          id="vertical-list-cod"
                          ripple={false}
                          className="hover:before:opacity-0"
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                    </label>
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
          <div className="flex-1 relative bg-gray-300 p-10">
          <div className= "absolute top-0 right-0 m-5 z-50">
            <BackBtn func={goBack} className="text-base text-white md:text-black " />
          </div>
          <Swiper
            className=""
            direction="vertical"
            slidesPerView="auto"
            scrollbar={{ draggable: true }}
          >
            {selectedPro.map((product, index) => (
              <SwiperSlide key={index} className="flex flex-col ">
              <div>
                <div className="m-3 flex justify-evenly items-center cursor-pointer bg-white">
                  <div className="flex">
                  <img
              src="./images/iphone 2-1.png"
              alt=""
              className="w-[100px] h-[100px]"
            />
                  </div>
                  <div className="flex">
                    <div className="flex flex-col justify-start items-start leading-5 w-full h-full p-3">
                      <div className="title text-sm md:text-base font-semibold">
                        <h2>{product.title}</h2>
                      </div>
                      <div className="detail flex flex-wrap justify-start items-center gap-2 text-xs md:text-xs">
                        <p>Quality: {product.quality}</p>
                        <p>Storage: {product.spec}</p>
                        {/* Display other product details */}
                      </div>
                      <div className="pricePro">
                        <h2 className="flex font-medium justify-center items-center gap-2">
                          ₹{product.price}
                          {/* Display price and other details */}
                        </h2>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
