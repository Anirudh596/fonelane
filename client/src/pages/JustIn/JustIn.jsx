import { useState, useEffect } from "react";
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
import axios from "axios";

function JustIn() {
  const newDevices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(`http://localhost:1337/api/iphones`, {
        const res = await axios.get(
          `http://localhost:1337/api/just-ins?populate=*`,
          {
            headers: {
              Authorization:
                "bearer " +
                "422d2e9d1a9f0707a1622e0552b49661b6e630c8d02f25c724721eedc0376e8947e98312a4adf3bf21bbc7bee43f269d1471ca84c9f927b05ed421fba03c5217ec35ecd8121e836f96e0f01fe4582de30c62aad923007ae34066f6a443dd2e554cc819db2869212bc54a139c4b28fe55de325cdf9049dd7dbf253b053c56cd14",
            },
          }
        );
        // setData(res.data.data);
        setData(res.data.data);
        setTotalProducts(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const paginatedDevices = data.slice(
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
          src="https://res.cloudinary.com/dgl6gst2b/image/upload/v1697775345/1_umsqss.png"
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
            Be the first one to get your hands on these new products.
          </motion.h2>
        </div>
        
      </div>

      <div className="flex w-full my-10 border border-gray-800 rounded-xl">
        <div className="flex w-full p-10 bg-[#f8fafc] flex-wrap justify-center">
          {data.map((device, index) => (
            <Card key={index} className="w-48 h-72 m-3 cursor-pointer">
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
                  <Typography color="blue-gray" className="font-medium text-sm">
                    {device.attributes.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    {device.attributes.baseprice}
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

export default JustIn;
