import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/product";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);
  return (
    <div className="pt-20">
      <section className="relative h-[921px] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            alt="Luxury interior"
            className="w-full h-full object-cover object-center scale-105"
            data-alt="Minimalist high-end fashion showroom with natural light"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYpEyC3rl9r88zu7S8oWvNMWAcdX-OFDVahYyxU7ulCadRuzDS8dDFoFgpZaR4K4perM0rokvNOrZq8MkflIMFU32YmDviQtmW3CVS6EmoX1LulE926ovhc1S3xNk8zhcFPO8pKGrmLRocoSB7iv7BlOMe2pbU_ZvgNTcgA6His7OjRaOGr1tjGC2_ARSDRBDcn7wZRXJN9AeDLXWpxf0ZRwB0qQndo4BSftVpznPbpqoIqjs3K6-quAbFwAGOyzAU-HLxe9KKKo4"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="container mx-auto px-8 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-6 block">
              Spring / Summer 2024
            </span>
            <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter text-on-surface leading-[0.9] mb-8">
              The Art of <br />
              <span className="italic font-normal">Living Well.</span>
            </h1>
            <p className="font-body text-lg text-on-surface-variant mb-10 max-w-md leading-relaxed">
              A curated collection of essential pieces designed for the modern
              aesthetic. Timeless, sustainable, and uncompromising.
            </p>
            <div className="flex items-center gap-6">
              <a
                className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-[10px] uppercase tracking-[0.2em] rounded-lg transition-transform hover:scale-[1.02] active:scale-95"
                href="#"
              >
                Shop The Collection
              </a>
              <a
                className="font-label text-[10px] uppercase tracking-[0.2em] border-b border-transparent hover:border-on-surface transition-all py-2"
                href="#"
              >
                View Lookbook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-12 max-w-[1920px] mx-auto bg-surface">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <h2 className="font-headline text-4xl font-bold tracking-tight mb-4">
              New Arrivals
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Discover the latest additions to our permanent collection. Each
              piece is hand-selected for its architectural integrity and
              craftsmanship.
            </p>
          </div>
          <a
            className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors mt-8 md:mt-0"
            href="#"
          >
            Browse All (24)
          </a>
        </div>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 md:col-span-7 group cursor-pointer">
            <div className="relative overflow-hidden aspect-[4/5] bg-surface-container rounded-xl mb-6">
              <img
                alt="Structured Coat"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Model wearing a long black structured wool coat"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY9VzXb-evdYVIMi_t2JZmzbZCljGoti_Hp4UttZfbM16LZOqdMAVV2TQVXF2swqYbV4wm68wgxsOs9zJPPSUOQ16Udalokb4C5778yDteYLA8dHNHaWy8CXl0U7nHpP0NSujhgl0CZ3lhNpuw0FWpp4tbgbmvSGwhWe3-okrMGIzTdnyOGBz4mOpIQlqJK7Ax-VhlSqT8jIv_LdIyJNmHR0XxtWnuOYfPsRCji9am80eWKmq-bBTcd_AOMzS1mAqYMiT_dWA8d-0"
              />
              <button className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="material-symbols-outlined text-primary">
                  add
                </span>
              </button>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                  Outerwear
                </span>
                <h3 className="font-headline text-xl font-bold mt-1">
                  Structured Wool Overcoat
                </h3>
              </div>
              <span className="font-body text-lg">$890</span>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex flex-col gap-16 pt-0 md:pt-32">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-square bg-surface-container rounded-xl mb-6">
                <img
                  alt="Silk Shirt"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Detail shot of a cream-colored silk shirt fabric"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYg0zfdvoh-AjNkzr96u_1lqJ6F3AaG1b5O06dF5ExXgrj4bc3SveiJPQOPyfpAnhbqRx6hARkx6JF_nBmNUA3817GRRZHYdnK_foeAmbKEYMd4Fue3hEKsRvSwbYf3V3oP7LLO0LGKZI58lgQDSPdzLjlej9Wvc51h8cROVX6tKnEIpKyr8yCUXWhydbpVcFL60yubehw1Ye9vGoDmWWgddiycWtZu8AX23GPkEA0W3C-Dm57oF_flSrL-pAA7SsNJ1-KJ54CTz0"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                    Essentials
                  </span>
                  <h3 className="font-headline text-xl font-bold mt-1">
                    Raw Silk Blouse
                  </h3>
                </div>
                <span className="font-body text-lg">$340</span>
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-square bg-surface-container rounded-xl mb-6">
                <img
                  alt="Leather Bag"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-alt="Minimalist black leather handbag on a concrete pedestal"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsNNR9Cj1CuRDkJp0PBPpRPm1dduYlz5aAu201q483GWsqILWgCFoFE41WC5ULvxZz_fMN7aIKLEHmt9nmI9TrtZPF2aHtZb07WqLwJijXbn9fBUAPujrDLkt8fM8pWChb5q8wZ2S9gDRX5sulzUTXOSspUh9gx0RBX6xt0E5yTJutrlRP3NUj8V8TnW9Ga3AsV-rv3b8L7zhFvMNHWY1GVdKssl0BaDYrTdyAd9nki-Pcbykcu1a-CTEOhBrkuvpYhCxRIjUju1Y"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant">
                    Accessories
                  </span>
                  <h3 className="font-headline text-xl font-bold mt-1">
                    Bespoke Calfskin Tote
                  </h3>
                </div>
                <span className="font-body text-lg">$1,200</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-8 md:px-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-24">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-4 block">
              Curation No. 04
            </span>
            <h2 className="font-headline text-5xl font-bold tracking-tight">
              The Sculptural Edit
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-48 bg-surface">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <span className="font-headline italic text-2xl text-on-surface-variant mb-12 block">
            "Our philosophy is simple: we believe that objects should not only
            serve a purpose but elevate the soul of the room they inhabit."
          </span>
          <div className="w-12 h-[1px] bg-primary mx-auto mb-12"></div>
          <h5 className="font-label text-[10px] uppercase tracking-[0.3em] font-bold">
            The Creative Director
          </h5>
        </div>
      </section>
    </div>
  );
};

export default Home;
