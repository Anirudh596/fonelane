import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImLinkedin } from "react-icons/im";

function About() {
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
      <div className="relative p-1 md:p-0">
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
            <h3 className="text-2xl font-semibold">
              The Brighter future we envision{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut
              consequuntur, quibusdam doloribus ipsum adipisci, maxime corporis
              praesentium iste sapiente, laboriosam nulla dolor eos voluptates
              illo omnis ipsam dicta porro saepe totam. Iure deleniti et nam
              reprehenderit magnam repellendus sequi, ex, minus officiis
              excepturi dolore non, qui explicabo fuga beatae aliquid quas? Ad,
              veniam perspiciatis eligendi est architecto voluptate mollitia!
              Minima illum id fugiat unde qui praesentium, sint expedita
              cupiditate doloribus minus blanditiis repellendus nesciunt
              quaerat, quo ab doloremque beatae consequatur quam aliquid
              veritatis alias tempore. Quidem incidunt, ab doloremque
              consequatur eius modi esse fugit possimus accusantium adipisci.
              Quae, eaque!
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="images/about1.png" alt="" className="" />
          </div>
        </div>
        <div className="flex justify-between items-center relative">
          <div className="flex-1 flex justify-center items-center">
            <img src="images/about2.png" alt="" className="rounded-3xl" />
          </div>
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold">
              The Brighter future we envision{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut
              consequuntur, quibusdam doloribus ipsum adipisci, maxime corporis
              praesentium iste sapiente, laboriosam nulla dolor eos voluptates
              illo omnis ipsam dicta porro saepe totam. Iure deleniti et nam
              reprehenderit magnam repellendus sequi, ex, minus officiis
              excepturi dolore non, qui explicabo fuga beatae aliquid quas? Ad,
              veniam perspiciatis eligendi est architecto voluptate mollitia!
              Minima illum id fugiat unde qui praesentium, sint expedita
              cupiditate doloribus minus blanditiis repellendus nesciunt
              quaerat, quo ab doloremque beatae consequatur quam aliquid
              veritatis alias tempore. Quidem incidunt, ab doloremque
              consequatur eius modi esse fugit possimus accusantium adipisci.
              Quae, eaque!
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center relative">
          <div className="flex-1 flex flex-col items-start justify-center">
            <h3 className="text-2xl font-semibold">
              The Brighter future we envision{" "}
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ut
              consequuntur, quibusdam doloribus ipsum adipisci, maxime corporis
              praesentium iste sapiente, laboriosam nulla dolor eos voluptates
              illo omnis ipsam dicta porro saepe totam. Iure deleniti et nam
              reprehenderit magnam repellendus sequi, ex, minus officiis
              excepturi dolore non, qui explicabo fuga beatae aliquid quas? Ad,
              veniam perspiciatis eligendi est architecto voluptate mollitia!
              Minima illum id fugiat unde qui praesentium, sint expedita
              cupiditate doloribus minus blanditiis repellendus nesciunt
              quaerat, quo ab doloremque beatae consequatur quam aliquid
              veritatis alias tempore. Quidem incidunt, ab doloremque
              consequatur eius modi esse fugit possimus accusantium adipisci.
              Quae, eaque!
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src="images/about3.png" alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col p-16 gap-5 justify-between items-center relative rounded-lg border border-gray-700">
          <h2 className="text-3xl font-bold italic">Founder{"'"}s Message</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt labore
            ipsum aut, minima illum quam atque iure vel quos libero commodi
            voluptatum eius dignissimos odio cupiditate ab sed debitis sapiente
            nobis numquam voluptates, quod iste? Unde ab voluptatum non illum.
          </p>
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
