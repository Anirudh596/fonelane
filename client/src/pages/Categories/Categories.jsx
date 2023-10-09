import {
  Breadcrumbs,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Slider,
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";


import 'swiper/css'; // Import Swiper styles

function Categories() {
  return (
    <div className="custom-w min-h-screen">
      <div className="flex justify-between items-center my-5">
        <Breadcrumbs separator=">" className="bg-white font-medium">
          <Link to="/">
            <a href="/" className="font-medium">
              Home
            </a>
          </Link>
          <a href="#" className="font-medium">
            iPhone
          </a>
        </Breadcrumbs>
        <div className="sort options">
          <Menu
            animate={{
              mount: { y: 0 },
              unmount: { y: 25 },
            }}
          >
            <MenuHandler>
              <Button
                size="sm"
                className="flex items-center gap-2"
                variant="outlined"
              >
                Sort by <p className="rotate-90">{">"}</p>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>Price: Low to High</MenuItem>
              <MenuItem>Price: High to low</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="flex w-full border border-gray-800 rounded-xl">
        <div className="flex flex-col bg-gray-300 h-screen w-1/4 rounded-xl">
          <div className="flex flex-col p-6 w-full">
            <p>Price Range</p>
            <hr className="h-px bg-gray-800 border-0 my-2" />
            <div>
              <Slider defaultValue={100} />
            </div>
            <div className="flex w-fit my-2">
              <div className="flex flex-col">
                <label htmlFor="minPrice" className="text-xs">
                  Min. Price
                </label>
                <input
                  type="number"
                  className="flex-1 w-1/2 bg-transparent border border-gray-800 rounded-md pl-2"
                  id="minPrice"
                  defaultValue={0}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="maxPrice" className="text-xs">
                  Max Price
                </label>
                <input
                  type="number"
                  className="flex-1 w-1/2 bg-transparent border border-gray-800 rounded-md pl-2"
                  id="maxPrice"
                  defaultValue={0}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full p-10 bg-[#f8fafc]">
        <Card className="w-48 h-72 cursor-pointer">
      <CardHeader shadow={false} floated={false} className="flex justify-center items-center ">
        <img
          src="./images/iphone 2-1.png"
          alt="card-image"
          className=" w-fit h-full object-cover"
        />
      </CardHeader>
      <CardBody >
        <Rating Value={4} readonly/>
        <div className="  items-center justify-between">
          <Typography color="blue-gray" className="font-medium text-sm">
            IPhone 13
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            $95.00
          </Typography>
        </div>
        
      </CardBody>
      
    </Card>
        </div>
      </div>
    </div>
  );
}

export default Categories;

