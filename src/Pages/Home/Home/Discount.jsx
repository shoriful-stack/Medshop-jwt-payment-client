import "swiper/css";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import "animate.css";
import { Card, CardContent } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

const Discount = () => {
  const discountProducts = [
    {
      id: 1,
      name: "Bextram Kids",
      image:
        "https://i.ibb.co/j5Zb6jr/Bextram-Kids-Syrup-100-ml-Beximco-Pharmaceuticals-Ltd.webp",
      alt: "Bextram Kids",
      discount: "20%",
      originalPrice: "৳25",
      discountedPrice: "৳20",
    },
    {
      id: 2,
      name: "NovoMix 30",
      image:
        "https://i.ibb.co/3fJGpy9/novomix-30-70-injection-805872026-i1-Mo2-X3p-Cd-U7phx-GCff-JJ6.webp",
      alt: "NovoMix 30",
      discount: "20%",
      originalPrice: "৳45",
      discountedPrice: "৳36",
    },
    {
      id: 3,
      name: "Cetirizine 10mg",
      image:
        "https://i.ibb.co/6sH7bx3/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-LXBfa-W1h-Z2-Vz-XC8z-ODY4-XC8z-ODY4-LUNld-G.jpg",
      alt: "Cetirizine 10mg",
      discount: "20%",
      originalPrice: "৳15",
      discountedPrice: "৳12",
    },
    {
      id: 4,
      name: "Zimax 250mg",
      image:
        "https://i.ibb.co/Mg6xRGC/ey-Jid-WNr-ZXQi-Oi-Jhcm9n-Z2-Ei-LCJr-ZXki-Oi-JQcm9kd-WN0-LXBfa-W1h-Z2-Vz-XC8y-MDgy-OVwv-Mj-A4-Mjktem.jpg",
      alt: "Zimax 250mg",
      discount: "20%",
      originalPrice: "৳30",
      discountedPrice: "৳24",
    },
    {
      id: 5,
      name: "Ceftriaxone",
      image:
        "https://i.ibb.co/B4n2Xz3/ceftriaxone-sodium-1gm-intriax-1000-500x500.webp",
      alt: "Ceftriaxone",
      discount: "20%",
      originalPrice: "৳35",
      discountedPrice: "৳28",
    },
  ];

  return (
    <section>
      <Marquee>
        {discountProducts.map((product) => (
          <Card
            key={product.id}
            className="relative max-w-80 lg:mx-10 mx-4 lg:mb-16 mb-3 overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm px-3 py-1 rounded-full shadow-lg animate-pulse">
                {product.discount} OFF
              </Badge>
            </div>
            <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-t-[50px] border-t-red-600 z-10">
              <div className="absolute -top-12 -right-1 text-white text-xs font-bold transform rotate-45">
                SALE
              </div>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-44 lg:h-[350px] overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <CardContent className="bg-[#4ecdc4] dark:text-white p-4 relative">
              <h2 className="font-bold lg:text-[22px] text-xl text-center mb-3 text-white">
                {product.name}
              </h2>
              <div className="flex items-center justify-center gap-3">
                <span className="text-lg font-bold text-white">
                  {product.discountedPrice}
                </span>
                <span className="text-sm text-white/70 line-through">
                  {product.originalPrice}
                </span>
              </div>
              <div className="flex justify-center mt-2">
                <Badge
                  variant="secondary"
                  className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs"
                >
                  Save ৳
                  {(
                    Number.parseFloat(product.originalPrice.slice(1)) -
                    Number.parseFloat(product.discountedPrice.slice(1))
                  ).toFixed(2)}
                </Badge>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white/20 rounded-full"></div>
            </CardContent>
          </Card>
        ))}
      </Marquee>
    </section>
  );
};

export default Discount;
