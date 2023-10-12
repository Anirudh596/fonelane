import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);
  return (
    <div className="w-full bg-gray-100 h-auto sm:h-screen md:h-screen lg:h-[70vh] xl:h-[70vh] my-5">
      <div className="contact-bar custom-w h-[12vh] md:h-18 flex justify-between items-center ">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
          Follow Us On
        </p>
        <div>
          <ul className="list-none flex justify-center items-center gap-5 md:gap-10 text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            <li className="social-icons opacity-100">
              <img
                src="./images/instagram.png"
                alt=""
                className="w-[28px] h-[28px] md:w-[36px] md:h-[36px] "
              />
            </li>
            <li className="social-icons opacity-100">
              <a className="text-[#405de6] ">
                <FontAwesomeIcon icon={faSquareFacebook} />
              </a>
            </li>
            <li className="social-icons opacity-100">
              <a className="text-[#ff3535] ">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </li>
            <li className="social-icons opacity-100">
              <a className="text-gray-700 ">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="h-px bg-slate-300 border-0" />
      <div className="custom-w flex flex-col sm:flex-row justify-between">
        <div className="company-visit w-full sm:w-2/5 p-5">
          <div className="h-1/2">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
              Company
            </p>
            <ul className="list-none text-xs md:text-sm lg:text-base xl:text-base leading-7 p-3">
              <Link to="/">
                <li className="group">
                  <a href="#" className="hover:opacity-60">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/iphones">
                <li className="group">
                  <a href="#" className="hover:opacity-60">
                    iPhones
                  </a>
                </li>
              </Link>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/help">
                <li className="group">
                  <a className="hover:opacity-60">Help</a>
                </li>
              </Link>
            </ul>
          </div>
          <div className="w-full h-1/2">
            <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold mt-3 mb-1">
              Visit Office:
            </p>
            <ul className="list-none text-xs md:text-sm lg:text-base xl:text-base p-5">
              <li>
                <p>A-341, Building No.2,</p>
              </li>
              <li>
                <p>3rd Floor, Near Crc Estate 2,</p>
              </li>
              <li>
                <p>Sultanpur, New Delhi,</p>
              </li>
              <li>
                <p>110030.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="policies-links w-full sm:w-3/4 p-5">
          <div className="w-full h-2/3 flex">
            <div className="w-1/2 h-full">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                Policies
              </p>
              <ul className="list-none text-xs md:text-sm lg:text-base xl:text-base leading-7 p-2">
                <li>
                  <Link to="/refund-return">
                    <a href="" className="hover:opacity-60">
                      Return & Refund
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/shipping-policy">
                    <a href="" className="hover:opacity-60">
                      Shipping
                    </a>
                  </Link>
                </li>

                <li>
                  <Link to="/privacy">
                    <a href="#" className="hover:opacity-60">
                      Privacy Policy
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions">
                    <a href="#" className="hover:opacity-60">
                      Terms and Conditions
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 h-full">
              <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold">
                Useful Links
              </p>
              <ul className="list-none text-xs md:text-sm lg:text-base xl:text-base leading-7 p-2">
                <li>
                  <a href="#" className="hover:opacity-60">
                    Track Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-60">
                    Return Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-60">
                    Our Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-60">
                    Refurbished ?
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <img src="./images/logo 2.png" className="w-48 h-48" alt="" />
          </div>
        </div>
        <div className="newsletter-feedback w-full sm:w-2/3 flex flex-col justify-center items-center p-5">
          <div className="w-full h-1/3 flex flex-col">
            <p className="font-medium test-xs md:text-sm lg:text-lg xl:text-lg mb-2">
              Subscribe to Our Newsletter
            </p>
            <div className="flex">
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  type="email"
                  label="Email Address"
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
            </div>
          </div>
          <div className="w-full h-2/3 flex flex-col justify-center items-center mt-10">
            <p className="text-xs md:text-sm xl:text-base font-medium my-3">
              Give us your valuable feedback
            </p>
            <button className="px-4 py-2 w-[120px] bg-white text-black hover:bg-gray-300 active:bg-black active:text-white ease-in duration-100 text-xs md:text-sm lg:text-base xl:text-base font-medium rounded-[15px]">
              Feedback
            </button>
          </div>
          <div className="w-full h-1/3 mt-10 flex flex-col justify-center items-center">
            <p className="text-sm md:text-base lg:text-xl xl:text-2xl font-normal mb-3">
              Payment Methods
            </p>
            <div className="flex justify-center items-center gap-7">
              <img
                src="./images/visa.png"
                alt=""
                className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
              />
              <img
                src="./images/mc.png"
                alt=""
                className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
              />
              <img
                src="./images/ae.png"
                alt=""
                className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
              />
              <img
                src="./images/paytm.png"
                alt=""
                className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
              />
              <img
                src="./images/provider.png"
                alt=""
                className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
              />
              <img
                src="./images/cod.png"
                alt=""
                className="w-[20px] h-[20px] md:w-[20px] md:h-[20px] lg:w-[40px] lg:h-[40px] xl:w-[50px] xl:h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
