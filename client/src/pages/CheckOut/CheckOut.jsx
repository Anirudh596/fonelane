import {
  Checkbox,
  Input,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { BsCreditCard, BsWallet2 } from "react-icons/bs";
import { Radio, Typography } from "@material-tailwind/react";
import BackBtn from "../../components/BackBtn/BackBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper CSS

function CheckOut() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  const handleOpen = () => setOpen(!open);
  const goBack = () => {
    window.history();
  };

  const selectedPro = [
    {
      title: "iphone 12",
      storage: "64gb",
      quality: "fair",
      price: "40000",
    },
  ];

  return (
    <>
      <div className="h-screen custom-w">
        <div className="flex my-10 border border-gray-300 rounded-md h-[80vh]">
          <div className="flex-1 flex flex-col mx-5 gap-2 m-16 overflow-y-auto ">
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
                      <img
                        src="./images/upi.png"
                        alt="upi image"
                        className="w-12"
                      />
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
                      <img
                        src="./images/netbanking.png"
                        alt="netbanking image"
                        className="w-10"
                      />
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
                      <img
                        src="./images/cod2.png"
                        alt="cod image"
                        className="w-10"
                      />
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
            <div className="absolute top-0 right-0 m-5 z-30">
              <BackBtn
                func={goBack}
                className="text-base text-white md:text-black "
              />
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
                    <div className="m-3 flex justify-start items-center cursor-pointer border border-gray-700 p-2">
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
                          <div className="pricePro mt-2">
                            <h2 className="flex font-medium justify-center items-center gap-2">
                              ₹{product.price}
                              {/* Display price and other details */}
                            </h2>
                          </div>

                          <p className="text-sm md:text-base flex items-center gap-2">
                            Quantity: <p>1</p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="relative flex w-full my-3">
              <Input
                type="number"
                label="Apply Coupon Code"
                value={email}
                onChange={onChange}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                size="sm"
                color={email ? "gray" : "blue-gray"}
                disabled={!email}
                className="!absolute right-1 top-1 rounded"
              >
                Invite
              </Button>
            </div>
            <hr className="my-2 h-px border-0 bg-gray-800" />
            <div>
              <h4>Subtotal:</h4>
              <h4>{selectedPro.map((product,index) => {<span key={index}>{product.price}</span>})}</h4>
            </div>
            <hr className="my-2 h-px border-0 bg-gray-800" />
            <Button
              className="w-full rounded-sm"
              onClick={handleOpen}
              variant="gradient"
            >
              Proceed...
            </Button>
            <Dialog
              open={open}
              handler={handleOpen}
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
              }}
            >
              <DialogHeader>Its a simple dialog.</DialogHeader>
              <DialogBody divider>
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
