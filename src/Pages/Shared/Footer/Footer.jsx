const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white via-[#f7fafa] to-[#9ccdcd] text-gray-700 px-4 md:py-12 py-4 text-sm">
      {/* Top Highlights Section */}
      <div className="bg-gradient-to-r from-[#f7fafa] via-[#f7fafa] to-[#d4e0e0] shadow-xl w-3/4 rounded-lg p-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2965/2965567.png"
            className="mx-auto w-10 h-10"
            alt="Store"
          />
          <h4 className="text-lg font-semibold mt-2">1000+</h4>
          <p>Offline Stores</p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
            className="mx-auto w-10 h-10"
            alt="Pincodes"
          />
          <h4 className="text-lg font-semibold mt-2">20000+</h4>
          <p>Pincodes Served</p>
        </div>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4140/4140048.png"
            className="mx-auto w-10 h-10"
            alt="Customers"
          />
          <h4 className="text-lg font-semibold mt-2">9M+</h4>
          <p>Happy Customers</p>
        </div>
      </div>

      {/* Logo and Tagline */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <img
          src="https://i.ibb.co/NndfkCd/logomoos-removebg.png"
          alt="MedShop"
          className="mx-auto w-48 mb-2"
        />
        <p className="text-gray-600">
          MedShop is one of Bangladesh’s most trusted pharmacies, dispensing
          quality medicines at reasonable prices to over 9 million happy
          customers – across the country.
        </p>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {/* Column 1: Company */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                About MedShop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Customers Speak
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                In the News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Career
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2: Policies */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-4">
            Our Policies
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Fees and Payments Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Returns & Cancellations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Shopping */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-4">
            Shopping
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Browse A-Z
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Manufacturers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Health Articles
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Offers / Coupons
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Categories */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-4">
            Popular Categories
          </h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Fitness
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Devices
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Personal Care
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Ayurveda
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#4ecdc4]">
                Surgical
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Social */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-4">Social</h4>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Column 6: Newsletter */}
        <div>
          <h4 className="text-base font-semibold text-gray-800 mb-4">
            Subscribe to our Newsletter
          </h4>
          <p className="text-gray-600 mb-4">Stay tuned for updates & offers</p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-5 py-2 rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#4ecdc4]"
            />
            <button className="p-2 bg-[#4ecdc4] text-white rounded hover:bg-[#38b6ac]">
              →
            </button>
          </div>
          <div className="flex gap-2 mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/128/888/888857.png"
              alt="PlayStore"
              className="w-12"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/888/888841.png"
              alt="AppStore"
              className="w-12"
            />
          </div>
        </div>
      </div>

      {/* Payment Section */}
      <div className="md:max-w-3xl mx-auto mt-12 pt-6 border-t text-center text-sm text-gray-500">
        <img src="https://i.ibb.co/LXGqRjFt/ssl-Commerz-images.png" alt="" className="md:max-w-3xl" />
        <p className="mt-4">© 2024 MedShop Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
