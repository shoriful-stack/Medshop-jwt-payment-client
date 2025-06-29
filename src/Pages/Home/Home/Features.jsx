import FeatureItem from "@/Components/FeatureItem";
import { Separator } from "@/Components/ui/separator";
import { Truck, PhoneCall, ShieldCheck } from "lucide-react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Truck className="text-yellow-500" />,
      iconClass: "",
      title: "Quick Delivery",
      description: "Within 6 Hours in Dhaka City",
    },
    {
      id: 2,
      icon: <PhoneCall className="text-green-500" />,
      iconClass: "",
      title: "24/7 Hour Service",
      description: "Pharmacists On Call 24/7",
    },
    {
      id: 3,
      icon: <span className="text-blue-500 text-3xl font-bold">৳</span>,
      iconClass: "",
      title: "Affordable Prices",
      description: "Buy At Low Price And Avail Discount",
    },
    {
      id: 4,
      icon: <ShieldCheck className="text-sky-500" />,
      iconClass: "",
      title: "Verified Medicines",
      description: "100% Genuine and Quality Checked Products",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#f7fafa] via-[#f7fafa] to-[#d4e0e0] py-10 px-4 rounded-xl shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-0">
        {features.map((feature, index) => (
          <div key={feature.id} className="flex items-start gap-3">
            <FeatureItem
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconClass={feature.iconClass}
            />
            {index !== features.length - 1 && (
              <Separator
                orientation="vertical"
                className="hidden md:block h-10"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
