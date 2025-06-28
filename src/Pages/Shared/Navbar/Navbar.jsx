import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import {
  ChevronDown,
  Menu,
  MapPin,
  User,
  LogOut,
  Settings,
} from "lucide-react";

import useAuth from "../../../Hooks/useAuth";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";
import useSeller from "../../../Hooks/useSeller";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Badge } from "@/Components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/Components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/Components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Separator } from "@/Components/ui/separator";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  const [isSeller] = useSeller();
  const [searchQuery, setSearchQuery] = useState("");
  const [deliveryLocation, setDeliveryLocation] = useState("110002");
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [pincode, setPincode] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleLocationUpdate = (newLocation) => {
    setDeliveryLocation(newLocation);
    setIsLocationModalOpen(false);
    setPincode("");
  };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location detected:", position.coords);
          handleLocationUpdate("110001");
        },
        (error) => {
          console.error("Error detecting location:", error);
        }
      );
    }
  };

  return (
    <div className="fixed w-full z-50 shadow-md bg-gradient-to-r from-[#92cccf] via-[#32AEB1] to-[#32AEB1]">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link to="/cart" className="flex items-center space-x-2">
                    <FaShoppingCart size={18} />
                    <span>Cart</span>
                    <Badge variant="secondary" className="ml-auto">
                      {cart.length}
                    </Badge>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                className="w-10 h-12"
                src="https://i.ibb.co/LD25mkKc/logomoos-removebg-1-removebg-preview.png"
                alt="Logo"
              />
            </Link>
          </div>

          {/* Logo */}
          <Link to="/" className="hidden lg:flex flex-shrink-0">
            <img
              className="w-16 h-[72px]"
              src="https://i.ibb.co/LD25mkKc/logomoos-removebg-1-removebg-preview.png"
              alt="Logo"
            />
          </Link>

          {/* Search and Location Section - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="flex w-full bg-white rounded-lg overflow-hidden shadow-sm">
              {/* Location Dropdown */}
              <Dialog
                open={isLocationModalOpen}
                onOpenChange={setIsLocationModalOpen}
              >
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center px-4 py-2 bg-gray-50 border-r border-gray-200 hover:bg-gray-100 rounded-none h-12"
                  >
                    <FaMapMarkerAlt className="text-[#32AEB1] mr-2" size={14} />
                    <span className="text-sm font-medium text-gray-700">
                      Deliver to {deliveryLocation}
                    </span>
                    <ChevronDown className="ml-2 h-4 w-4 text-gray-500" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Where do you want the delivery?</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Get access to your Addresses, Orders, and Wishlist
                    </p>

                    {user ? (
                      <Button
                        onClick={() => handleLocationUpdate("Your Location")}
                        className="w-full bg-[#32AEB1] hover:bg-[#2a9599]"
                      >
                        Sign in to see your location
                      </Button>
                    ) : (
                      <Link to="/login">
                        <Button
                          onClick={() => setIsLocationModalOpen(false)}
                          className="w-full bg-[#32AEB1] hover:bg-[#2a9599]"
                        >
                          Sign in to see your location
                        </Button>
                      </Link>
                    )}

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">OR</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-800">
                        Enter Pincode
                      </h4>
                      <p className="text-sm text-gray-600">
                        Select pincode to see product availability.
                      </p>

                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          type="text"
                          placeholder="Enter Pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          className="pl-10"
                        />
                      </div>

                      <Button
                        variant="link"
                        onClick={detectLocation}
                        className="flex items-center text-[#32AEB1] hover:text-[#2a9599] p-0 h-auto"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        Detect my location
                      </Button>

                      <p className="text-xs text-gray-500">
                        Allow to access your location.
                      </p>

                      <Button
                        onClick={() => pincode && handleLocationUpdate(pincode)}
                        disabled={!pincode}
                        className="w-full bg-[#32AEB1] hover:bg-[#2a9599] disabled:opacity-50"
                      >
                        Update Location
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Search Field */}
              <form onSubmit={handleSearch} className="flex flex-1">
                <Input
                  type="text"
                  placeholder="Search for medicine & wellness products (Ex:Napa)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 border-0 focus-visible:ring-0 rounded-none h-12 bg-white"
                />
                <Button
                  type="submit"
                  className="bg-[#32AEB1] hover:bg-[#2a9599] text-white px-6 rounded-none rounded-r-lg h-12"
                >
                  <FaSearch size={16} />
                </Button>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart - Desktop */}
            <div className="hidden lg:flex">
              <Link to="/cart">
                <Button variant="outline" className="relative bg-white">
                  <FaShoppingCart size={20} />
                  <Badge
                    variant="destructive"
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {cart.length}
                  </Badge>
                </Button>
              </Link>
            </div>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={
                          user?.photoURL ||
                          "https://i.ibb.co/LnFWKKk/download-8.jpg"
                        }
                        alt="Profile"
                      />
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/updateProfile" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Update Profile
                    </Link>
                  </DropdownMenuItem>

                  {user && isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link
                        to="/dashboard/adminHome"
                        className="flex items-center"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Admin Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}

                  {user && isSeller && (
                    <DropdownMenuItem asChild>
                      <Link
                        to="/dashboard/sellerHome"
                        className="flex items-center"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Seller Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}

                  {user && !isAdmin && !isSeller && (
                    <DropdownMenuItem asChild>
                      <Link
                        to="/dashboard/paymentHistory"
                        className="flex items-center"
                      >
                        <User className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                  )}

                  <Separator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="flex items-center"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button className="bg-[#32AEB1] hover:bg-white text-white hover:text-black border border-white">
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-3">
          <div className="flex bg-white rounded-lg overflow-hidden shadow-sm">
            <Dialog
              open={isLocationModalOpen}
              onOpenChange={setIsLocationModalOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center px-3 py-2 bg-gray-50 border-r border-gray-200 rounded-none"
                >
                  <FaMapMarkerAlt className="text-[#32AEB1] mr-1" size={12} />
                  <span className="text-xs font-medium text-gray-700">
                    {deliveryLocation}
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Where do you want the delivery?</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">
                    Get access to your Addresses, Orders, and Wishlist
                  </p>

                  {user ? (
                    <Button
                      onClick={() => handleLocationUpdate("Your Location")}
                      className="w-full bg-[#32AEB1] hover:bg-[#2a9599]"
                    >
                      Sign in to see your location
                    </Button>
                  ) : (
                    <Link to="/login">
                      <Button
                        onClick={() => setIsLocationModalOpen(false)}
                        className="w-full bg-[#32AEB1] hover:bg-[#2a9599]"
                      >
                        Sign in to see your location
                      </Button>
                    </Link>
                  )}

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">OR</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium text-gray-800">Enter Pincode</h4>
                    <p className="text-sm text-gray-600">
                      Select pincode to see product availability.
                    </p>

                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <Input
                        type="text"
                        placeholder="Enter Pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="pl-10"
                      />
                    </div>

                    <Button
                      variant="link"
                      onClick={detectLocation}
                      className="flex items-center text-[#32AEB1] hover:text-[#2a9599] p-0 h-auto"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Detect my location
                    </Button>

                    <p className="text-xs text-gray-500">
                      Allow to access your location.
                    </p>

                    <Button
                      onClick={() => pincode && handleLocationUpdate(pincode)}
                      disabled={!pincode}
                      className="w-full bg-[#32AEB1] hover:bg-[#2a9599] disabled:opacity-50"
                    >
                      Update Location
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <form onSubmit={handleSearch} className="flex flex-1">
              <Input
                type="text"
                placeholder="Search for medicine & wellness products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-0 focus-visible:ring-0 rounded-none py-2 px-3 text-sm bg-white"
              />
              <Button
                type="submit"
                className="bg-[#32AEB1] hover:bg-[#2a9599] text-white px-4 rounded-none rounded-r-lg"
              >
                <FaSearch size={14} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
