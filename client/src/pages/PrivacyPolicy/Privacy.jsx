import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Scroll from "../../components/scroll/Scroll";

function Privacy() {
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
            Privacy Policy{" "}
          </motion.h2>
          <motion.p
            transition={{ duration: 1.5 }}
            initial="initial"
            animate={inView ? "final" : "initial"}
            variants={animations}
            className="text-base md:text-3xl font-semibold"
          >
            Your Data is safe with us.
          </motion.p>
        </div>
        <motion.img
          transition={{ duration: 1.5 }}
          initial="initial"
          animate={inView ? "final" : "initial"}
          variants={animations2}
          src="images/privacy.png"
          alt=""
          className="absolute w-96 top-20 md:top-7 right-7 md:right-32"
        />
      </div>
      <div>
        <AccordionCustomIcon />
      </div>
    </div>
  );
}

export default Privacy;

import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}
