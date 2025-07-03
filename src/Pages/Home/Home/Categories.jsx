import { Card, CardContent } from "@/Components/ui/card";

const categories = [
  {
    id: "covid-essentials",
    name: "COVID Essentials",
    image: "https://i.ibb.co/LXLVc8Vd/7607452-3693295.jpg",
    alt: "COVID protection essentials including masks and sanitizers",
  },
  {
    id: "sexual-wellness",
    name: "Sexual Wellness",
    image: "https://i.ibb.co/1JTQqFxf/349627-5.webp",
    alt: "Sexual wellness and health products",
  },
  {
    id: "diabetes-care",
    name: "Diabetes Care",
    image: "https://i.ibb.co/q3QfHdHv/81-EZb2-Yu-KL-1.jpg",
    alt: "Diabetes monitoring and care products",
  },
  {
    id: "womens-care",
    name: "Womens Care",
    image: "https://i.ibb.co/p6gsBCsj/image-600x.webp",
    alt: "Women's health and hygiene products",
  },
  {
    id: "natural-food",
    name: "Organic food",
    image: "https://i.ibb.co/DXZYVkL/resize-organic-food.jpg",
    alt: "Organic food products",
  },
  {
    id: "mens-products",
    name: "Men's Products",
    image: "https://i.ibb.co/v684sNjy/resize-17512264901287176225menscare.png",
    alt: "Men's grooming and health products",
  },
  {
    id: "devices",
    name: "Devices & Equipment",
    image: "https://i.ibb.co/B2tqyyZg/devices.webp",
    alt: "Medical devices and equipment",
  },
  {
    id: "herbal",
    name: "Herbal",
    image: "https://i.ibb.co/R4CX9Pyn/herbal.jpg",
    alt: "Herbal medicines and supplements",
  },
  {
    id: "family-nutrition",
    name: "Family Nutrition",
    image: "https://i.ibb.co/7tDn46yn/health-drink-1.webp",
    alt: "Family nutrition and health drinks",
  },
  {
    id: "health-beauty",
    name: "Health & Beauty",
    image: "https://i.ibb.co/vx24JKhy/health-beauty.jpg",
    alt: "Health and beauty care products",
  },
  {
    id: "laundry",
    name: "Laundry & Cleaning",
    image: "https://i.ibb.co/VcGKzc6x/laundry-1.jpg",
    alt: "Laundry and cleaning products",
  },
  {
    id: "surgical",
    name: "Surgical",
    image: "https://i.ibb.co/svLRfFVL/surgical.jpg",
    alt: "Surgical supplies and medical equipment",
  },
  {
    id: "health-dental",
    name: "Health & Dental",
    image: "https://i.ibb.co/PGgfpCtr/oral.jpg",
    alt: "Dental and oral health products",
  },
  {
    id: "personal-care",
    name: "Personal Care",
    image: "https://i.ibb.co/1Gy5Qhdx/personal.jpg",
    alt: "Personal care and hygiene products",
  },
  {
    id: "baby-care",
    name: "Baby Care",
    image: "https://i.ibb.co/SwfZBb3b/baby-care.jpg",
    alt: "Baby care and infant products",
  },
  {
    id: "beverages",
    name: "Beverages",
    image: "https://i.ibb.co/6cRKzqTf/drinks.webp",
    alt: "Health drinks and beverages",
  },
];

const CategoryCard = ({ category, onClick }) => {
  return (
    <Card
      className="group cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 border border-gray-200 bg-white"
      onClick={() => onClick(category.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(category.id);
        }
      }}
      aria-label={`Shop ${category.name} category`}
    >
      <CardContent className="py-4 px-0 flex flex-col items-center text-center space-y-3">
        <div className="w-[115px] h-[115px] overflow-hidden rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors duration-200">
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.alt}
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="text-sm font-medium text-gray-900 leading-tight group-hover:text-teal-600 transition-colors duration-200">
          {category.name}
        </h3>
      </CardContent>
    </Card>
  );
};

const ShopByCategory = () => {
  const handleCategoryClick = (categoryId) => {
    console.log(`Navigating to category: ${categoryId}`);
    // Implement navigation logic here
    // For example: navigate(`/category/${categoryId}`)
  };

  return (
    <section
      className="w-full md:py-12 pb-4 px-4"
      aria-labelledby="shop-categories-title"
    >
      <div className="w-full mx-auto">
        <div className="text-center mb-8">
          <h2
            id="shop-categories-title"
            className="md:text-4xl text-2xl font-bold text-teal-600 mb-2"
          >
            Shop By Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find exactly what you need from our wide range of categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
