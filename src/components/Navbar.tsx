import { Search, ShoppingCart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Shop", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Editorial", path: "/editorial" },
    { name: "Our Story", path: "/our-story" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf8fa]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center h-20 px-8 md:px-12 w-full max-w-[1920px] mx-auto">
        <div className="flex items-center gap-12">
          <Link
            className="font-serif text-2xl font-bold tracking-tight text-slate-900"
            to="/"
          >
            CURATOR
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-label text-[10px] uppercase tracking-[0.15em] pb-1 transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-slate-900 border-b border-slate-900"
                    : "text-slate-500 hover:text-slate-900 border-b border-transparent"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="hover:opacity-70 transition-opacity duration-300 scale-98 active:scale-95 transition-transform">
            <Search />
          </button>
          <button className="hover:opacity-70 transition-opacity duration-300 scale-98 active:scale-95 transition-transform">
            <User />
          </button>
          <button className="relative hover:opacity-70 transition-opacity duration-300 scale-98 active:scale-95 transition-transform">
            <ShoppingCart />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[8px] text-white">
              2
            </span>
          </button>
        </div>
      </div>
      <div className="bg-[#eae7e9] h-[1px] w-full opacity-20"></div>
    </nav>
  );
};

export default Navbar;
