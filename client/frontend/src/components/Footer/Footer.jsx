import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faInstagram, faSquareFacebook, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <div className="w-full bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100  h-[70vh] mt-20">
        <div className="contact-bar custom-w h-[12vh] flex justify-between items-center">
           
                <p className="text-[28px] font-semibold">Contact Us On</p>
            
            <div>
                <ul className="list-none flex justify-center items-center gap-10 text-[36px] realtive">
                    <li className="group opacity-100"><a href="#" className=" hover:text-[#405de6] hover:text-[37px] ease-linear duration-150"><FontAwesomeIcon icon={faInstagram} /></a></li>
                    <li className="group opacity-100"><a href="#" className=" hover:text-[#405de6] hover:text-[37px] ease-linear duration-150"><FontAwesomeIcon icon={faSquareFacebook} /></a></li>
                    <li className="group opacity-100"><a href="#" className=" hover:text-[#ff3535] hover:text-[37px] ease-linear duration-150"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    <li className="group opacity-100"><a href="#" className=" hover:text-gray-400 hover:text-[37px] ease-linear duration-150"><FontAwesomeIcon icon={faXTwitter} /></a></li>
                </ul>
            </div>
        </div>
        <hr className="h-px bg-slate-300 border-0"/>
        <div className="custom-w flex justify-between  ">
            <div className="comapny-visit w-2/5 h-full p-5">
                <div className="  h-1/2  ">
                    <p className="text-[18px] font-semibold ">Company</p>
                    <ul className="list-none text-[14px] leading-7 p-3">
                        <li className="group"><a href="#" className="hover:opacity-60">Home</a></li>
                        <li className="group"><a href="#" className="hover:opacity-60">Categories</a></li>
                        <li className="group"><a href="#" className="hover:opacity-60">About Us</a></li>
                        <li className="group"><a href="#" className="hover:opacity-60">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-full h-1/2 ">
                    <p className="text-[18px] font-semibold mt-3 mb-1">Visit Office:</p>
                    <ul className="list-none text-[14px] p-5">
                        <li>
                            <p>A-341, Building No.2,</p>
                        </li>
                        <li>
                            <p>3rd Floor, Near Crc Estate 2,</p>
                        </li>
                        <li>
                            <p>Sultanpur, Gurgaon,</p>
                        </li>
                        <li>
                            <p>110030.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="policies-links w-3/4 h-full  p-5">
                <div className=" w-full h-3/4 flex">
                    <div className="w-1/2 h-full ">
                    <p className="text-[18px] font-semibold ">Policies</p>
                    <ul className="list-none text-[14px] leading-7 p-2">
                        <li><a href="#" className="hover:opacity-60">Refund Policy</a></li>
                        <li><a href="#" className="hover:opacity-60">Return Policy</a></li>
                        <li><a href="#" className="hover:opacity-60">Terms and Conditions</a></li>
                        <li><a href="#" className="hover:opacity-60">Contact Us</a></li>
                        <li><a href="#" className="hover:opacity-60">Contact Us</a></li>
                    </ul>
                    </div>
                    <div className="w-1/2 h-full ">
                    <p className="text-[18px] font-semibold ">Useful Links</p>
                    <ul className="list-none text-[14px] leading-7 p-2">
                        <li><a href="#" className="hover:opacity-60">Track Orders</a></li>
                        <li><a href="#" className="hover:opacity-60">Return Products</a></li>
                        <li><a href="#" className="hover:opacity-60">Our Blogs</a></li>
                        <li><a href="#" className="hover:opacity-60">Refurbished ?</a></li>
                    </ul>
                    </div>
                </div>
                <div className=" w-full h-1/3 flex-col justify-center items-center">
                    <p>fonelane</p>
                    <p></p>
                </div>
            </div>
            <div className=" newsetter-feedback w-2/3 h-full bg-gray-600">
                Hello
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer