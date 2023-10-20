import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImLinkedin } from "react-icons/im";
import Scroll from "../../components/scroll/Scroll";
import { useState, useEffect } from "react";
import axios from "axios";

function About() {
  const [data, setData] = useState([]);
  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/abouts/1?populate=*`,
          {
            headers: {
              Authorization:
                "bearer " +
                "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
            },
          }
        );

        // Extract and set product images from the response data

        // console.log(res.data.data.attributes.img1.data.attributes.url)
        setData(res.data.data.attributes);
        setImages1(res.data.data.attributes.img1.data.attributes);
        setImages2(res.data.data.attributes.img2.data.attributes);
        setImages3(res.data.data.attributes.img3.data.attributes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
    <div className="custom-w min-h-screen">
      <Scroll />
      <div className="relative p-1 md:p-0">
        <img
          className="h-64 md:h-96 w-full rounded-lg object-cover object-center mt-5"
          src="https://res.cloudinary.com/dgl6gst2b/image/upload/v1697704346/Untitled_design_10_n8mrrv.png"
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
            Welcome to Fonelane
          </motion.h2>
          <motion.p
            transition={{ duration: 2 }}
            initial="initial"
            animate={inView ? "final" : "initial"}
            variants={animations2}
            className="text-[15px] md:text-3xl font-medium md:font-semibold"
          >
            walk with us on the path toward a brighter future
          </motion.p>
        </div>
      </div>
      <div className=" w-full mx-auto flex flex-col gap-10 p-24">
        <div className="flex justify-between items-center relative">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold">{data.head1} </h3>
            <p>{data.content1}</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={images1.url} alt="" className="" />
          </div>
        </div>
        <div className="flex justify-between items-center relative">
          <div className="flex-1 flex justify-center items-center">
            <img src={images2.url} alt="" className="rounded-3xl" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold">{data.head2} </h3>
            <p>{data.content2}</p>
          </div>
        </div>
        <div className="flex justify-between items-center relative">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold">{data.head3} </h3>
            <p>{data.content3}</p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={images3.url} alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col p-16 gap-5 justify-between items-center relative rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold italic">Founder{"'"}s Message</h2>
          <p>{data.founder}</p>
          <p>-Anil Singh Chadhha</p>
          <a href="https://www.linkedin.com/in/anil-chadha-6554b0206/?originalSubdomain=in">
            <ImLinkedin className="text-3xl text-blue-800 cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
