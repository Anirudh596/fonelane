import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Blog() {
  return (
    <div className="w-full  block md:hidden">
      <Swiper
        slidesPerView={1.6}
        spaceBetween={10}
       
        pagination={{
          clickable: true,
        }}

      className="mySwiper"
    >
      <SwiperSlide><CardDefault /></SwiperSlide>
      <SwiperSlide><CardDefault /></SwiperSlide>
      <SwiperSlide><CardDefault /></SwiperSlide>
      <SwiperSlide><CardDefault /></SwiperSlide>
    </Swiper>
      
    </div>
  );
}

export default Blog;


export function CardDefault() {
  return (
    <Card className="mt-6 w-64">
      <CardHeader color="blue-gray" className="relative                                                                                                        ">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h6" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and 
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
  );
}