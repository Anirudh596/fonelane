import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function Blog() {
  return (
    <div className="flex justify-between items-center flex-wrap w-full mx-auto">
      <CardDefault />
      <CardDefault />
      <CardDefault />
      <CardDefault />
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