import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import axios from "axios";
import parse from "html-react-parser";

function ShippingPolicy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:1337/api/policies/1?populate=*`,
          {
            headers: {
              Authorization:
                "bearer " +
                "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
            },
          }
        );

        // Extract and set product images from the response data

        const privacydata = res.data.data.attributes.policy;
        setData(privacydata);
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
      <div className=" relative flex w-full h-80 md:h-72 border border-gray-500 my-10">
        <div
          className={`absolute  z-20 md:top-1/4 md:left-10 text-black flex gap-3 md:gap-7 flex-col justify-center items-center w-full md:w-1/2 h-auto ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"
          }`}
          ref={ref}
        >
          <motion.h2
            transition={{ duration: 1.5 }}
            initial="initial"
            animate={inView ? "final" : "initial"}
            variants={animations}
            className="text-2xl md:text-5xl font-semibold"
          >
            Shipping Policy.{" "}
          </motion.h2>
        </div>
        <motion.img
          transition={{ duration: 1.5 }}
          initial="initial"
          animate={inView ? "final" : "initial"}
          variants={animations2}
          src="https://res.cloudinary.com/dgl6gst2b/image/upload/v1697775094/2_smnddt.png"
          alt=""
          className="absolute w-96 top-20 md:top-7 right-7 md:right-32"
        />
      </div>
      <div>
        {data.map((item, index) => (
          <AccordionCustomIcon
            key={index}
            heading={item.heading} // Pass the title from the data
            content={item.content} // Pass the content from the data
          />
        ))}
      </div>
    </div>
  );
}

export default ShippingPolicy;

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Scroll from "../../components/scroll/Scroll";

// eslint-disable-next-line react/prop-types
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function AccordionCustomIcon({ heading, content }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          {heading} {/* Display the title from props */}
        </AccordionHeader>
        <AccordionBody>
          {parse(content)} {/* Display the content from props */}
        </AccordionBody>
      </Accordion>
    </>
  );
}
