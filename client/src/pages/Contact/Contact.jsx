import { Button, Input, Textarea } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import { BiMessageDetail } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { useInView } from "react-intersection-observer";

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Adjust this threshold as needed
  });

  const animations = {
    initial: { opacity: 0, x: -100 },
    final: { opacity: 1, x: 0 }, // Change x: 100 to x: 0 to slide in from the left
  };

  const animations2 = {
    initial: { opacity: 0, x: 100 },
    final: { opacity: 1, x: 0 }, // Change x: 100 to x: 0 to slide in from the left
  };
  return (
    <>
      <div className="custom-w min-h-screen ">
        <div className="relative">
          <img
            className="h-64 md:h-96 w-full rounded-lg object-cover object-center mt-5"
            src="./images/aboutban.jpg.jpg"
            alt="nature image"
          />
          <div
            className={`absolute top-24 md:top-1/3 left-1/6 text-white flex gap-3 md:gap-7 flex-col justify-center items-center w-full h-fit ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"
            }`}
            ref={ref}
          >
            <motion.h2
              transition={{ duration: 2 }}
              initial="initial"
              animate={inView ? "final" : "initial"}
              variants={animations}
              className="text-2xl md:text-5xl font-semibold"
            >
              Need Help?
            </motion.h2>
            <motion.p
              transition={{ duration: 2 }}
              initial="initial"
              animate={inView ? "final" : "initial"}
              variants={animations2}
              className="text-base md:text-3xl font-semibold"
            >
              We are here to help please tell me
            </motion.p>
          </div>
        </div>
        <div className=" md:flex h-auto md:h-96 p-8 border border-gray-700 my-10 rounded-2xl  md:mx-32">
          <div className="flex-1">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                Contact Information
              </h2>
              <div className="flex flex-col gap-10 justify-center  items-start my-10">
                <div className="flex gap-3 justify-start md:justify-center items-center">
                  <BsTelephone className="text-3xl" />
                  <div className="text-sm">
                    <p>+91 729XXX8900</p>
                    <p>+91 729XXX8900</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start md:justify-center items-center">
                  <BiMessageDetail className="text-3xl" />
                  <div className="text-sm">
                    <p>text@gmail.com</p>
                    <p>text@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-start md:justify-center items-center w-3/4">
                  <CiLocationOn className="text-6xl flex-grow" />
                  <p className="text-sm">
                    A-341, Building No. 2, 3rd Floor, Near Crc Estate 2
                    Sultanpur, Delhi. 110030.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink flex-col  flex   bg-gray-400 gap-4 rounded-xl p-6">
            <div className="w-full flex md:flex-row flex-col gap-3">
              <Input label="FirstName" className="bg-white" />
              <Input label="LastName" className="bg-white" />
            </div>
            <Input label="Email or Contact Number" className="bg-white" />

            <Textarea label="Write you query" className="bg-white" />
            <div className="flex justify-center item-center">
              <Button className="w-1/2 flex items-center justify-center">
                Send Message
              </Button>
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;