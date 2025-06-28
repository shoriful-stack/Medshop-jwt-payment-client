import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import "animate.css";
import { Card, CardContent } from "@/Components/ui/card";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Bextram Kids",
      image: "/placeholder.svg?height=112&width=288",
      alt: "Bextram Kids",
    },
    {
      id: 2,
      name: "NovoMix 30",
      image: "/placeholder.svg?height=112&width=288",
      alt: "NovoMix 30",
    },
    {
      id: 3,
      name: "Cetirizine 10mg",
      image: "/placeholder.svg?height=112&width=288",
      alt: "Cetirizine 10mg",
    },
    {
      id: 4,
      name: "Zimax 250mg",
      image: "/placeholder.svg?height=112&width=288",
      alt: "Zimax 250mg",
    },
    {
      id: 5,
      name: "Ceftriaxone",
      image: "/placeholder.svg?height=112&width=288",
      alt: "Ceftriaxone",
    },
  ];

  return (
    <section>
      <h1 className="lg:text-5xl text-3xl font-bold lg:my-10 p-3 mb-3 text-center animate__animated animate__bounce">
        Product Categories
      </h1>

      <Marquee>
        {categories.map((category) => (
          <Card
            key={category.id}
            className="bg-white shadow-lg w-72 lg:mx-5 mx-4 lg:mb-12 mb-3 overflow-hidden"
          >
            <div className="w-full h-28 overflow-hidden">
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.alt}
                className="w-full h-28 object-cover"
              />
            </div>
            <CardContent className="bg-[#4ecdc4] dark:text-white p-0">
              <h2 className="font-medium lg:text-xl text-center py-3">
                {category.name}
              </h2>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </section>
  );
};

export default ProductCategories;
