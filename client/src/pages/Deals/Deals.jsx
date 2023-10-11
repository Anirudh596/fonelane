import { useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Card,
  CardBody,
  CardHeader,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Scroll from "../../components/scroll/Scroll";

function Deals() {
  const newDevices = [1, 2, 3, 4, 5,6,7,8,9,10];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const paginatedDevices = newDevices.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );





  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const animations = {
    initial: { opacity: 0, x: -100 },
    final: { opacity: 1, x: 0 },
  };

  return (
    <div className="custom-w min-h-screen">
      <Scroll />
      <div className="relative md:p-0">
        <img
          className="h-64 md:h-96 w-full rounded-lg object-cover object-center mt-5"
          src="./images/back.jpg"
          alt="nature image"
        />
        <div
          className={`absolute bottom-10 md:top-1/2 left-10 text-white flex gap-3 md:gap-7 flex-col justify-center items-center w-1/2 h-fit ${
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-100"
          } z-30`}
          ref={ref}
        >
          <motion.h2
            transition={{ duration: 2 }}
            initial="initial"
            animate={inView ? "final" : "initial"}
            variants={animations}
            className="text-base md:text-4xl font-semibold"
          >
            Deals
          </motion.h2>
        </div>
        <img
          src="images/ip1.png"
          alt=""
          className="absolute top-0 right-0 w-2/3 h-full "
        />
      </div>

      <div className="flex w-full my-10 border border-gray-800 rounded-xl">
        <div className="flex w-full p-10 bg-[#f8fafc] flex-wrap justify-center">
          {paginatedDevices.map((device, index) => (
            <Card
              key={index} className="w-48 h-72 m-3 cursor-pointer">
              <CardHeader
                shadow={false}
                floated={false}
                className="flex justify-center items-center"
              >
                <img
                  src="./images/iphone 2-1.png"
                  alt="card-image"
                  className="w-fit h-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Rating Value={4} readonly />
                <div className="items-center justify-between">
                  <Typography
                    color="blue-gray"
                    className="font-medium text-sm"
                  >
                    IPhone 13
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    $95.00
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(newDevices.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}

export default Deals;
