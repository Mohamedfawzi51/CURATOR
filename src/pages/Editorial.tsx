import { ChevronDown } from "lucide-react";

const Editorial = () => {
  return (
    <main className="pt-32">
      <header className="max-w-[1920px] mx-auto px-8 mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 leading-tight">
              THE WINTER EDIT
            </h1>
            <p className="font-body text-xl text-on-surface-variant leading-relaxed italic max-w-xl">
              A study in silhouette and texture. This curation explores the
              quiet strength of architectural forms meeting the softness of
              premium natural fibers. Designed for the discerning eye.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-outline">
              Winter // 2024 Collection
            </span>
          </div>
        </div>
      </header>

      <section className="sticky top-[88px] z-40 bg-surface/90 backdrop-blur-md border-y border-outline-variant/15">
        <div className="max-w-[1920px] mx-auto px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
              <span>Category</span>
              <ChevronDown />
            </button>
            <button className="flex items-center space-x-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
              <span>Material</span>
              <ChevronDown />
            </button>
            <button className="flex items-center space-x-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">
              <span>Size</span>
              <ChevronDown />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-label text-[10px] uppercase tracking-widest text-outline">
              Sort By
            </span>
            <button className="flex items-center space-x-2 font-label text-xs uppercase tracking-widest text-on-surface transition-colors">
              <span>Newest</span>
              <span className="material-symbols-outlined !text-sm">sort</span>
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1920px] mx-auto px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Double-Breasted Wool Coat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Long minimalist charcoal wool coat studio shot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBpsasSBnYTkhEKT56tToxrw5K6eivMtMcJoJNmNDduq4jgCywtA3tcbDTvOnmQw2NyTRJHWIFlFrtvPHmatU8SCe3vtOWCahw_XVuKI4F73rQ82LHGyGFe5CdwyyPcta-O2LFPqxc_1OmkksQ8XXHJI1-RcWVt08I8Us-u_5OFtXDBlCc7RsKs9SmruZsUIpaJqxVmqndvqgFUQ81g8zn6yMg_LEResXbYBY9nBF240Xh29PEEIIs0Lc_aHmcv6ZYW-zzZ1Yhfd0"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Double-Breasted Wool Coat
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Noir / Virgin Wool
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$1,250</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Architectural Knit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Textured white designer sweater close up"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_6-Kf-78Frv0QaPlfLaa8qDBcisAObh5LOmujhKIosaHVEDfw88lNhIicM11n2nCxb9LVmu2zsFpcsS6Epsn-6kh0w6yQ4krbSRoQlSyh4Y-4mM6uICd89Qou8Wc4P1DK62DkCM659HAJR7ZHhMWg4j_D80PhXo3KrC_9hLwyE9TbwRYpl8enqhMMkxQH-kzrx8NxgxXjMSU5-zmLH6XKu4Zw_m2_poe8KjgnJJKrw1shB5ETbIBPUEhDZBEC_zhqEHUn1XKLLZE"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Architectural Knit
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Alabaster / Cashmere
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$540</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Pleated Trousers"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Wide leg tailored black trousers lifestyle shot"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmE9LW-FQpblwdwqA6Sy-fxfO_WEkilE6U9OJuY147_Uphmq5gLwt6-_JG6uxSIJdVVajHJx8iJcsHCXPo_rMBtyQLRBJ5JjwsxZ3-HQwpZ5furR-QbfpPFgaJTYOYmYBlnNmWD7Oz5A-i2BwI6mWJoxYxTR0oUNMkFGIZcno7tl74u5UPPruD_lKwnyswx6QKKVRdWcABxu7Ox8rI24_GxlvGczgLddH-ZsvZeHYfV_624y3D8wfnUN6jgb6MO9RgxdI3FHm5txo"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Structured Tailored Trouser
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Obsidian / Twill
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$390</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Satin Slip Dress"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Minimalist long black silk dress"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX1fHL7ubBn9ie0RU_RymREuaea6V6YCR1ezlXaousDKzzkY2gfVwoC7xJcdzl0wx4Vn84TDGFinqklOxVUqB3rNngcjQBvg9IBqKHH1pIIxLq8NxwLcNM_TgSYrQymnjzTLZ05nnF4YMWctUlrwiZPd7po-6Nt1rkUIkr74hOiJxg8qZjm4mQBMMWICCgedxPAd172f1THuQ-3wFHnvZaFaU-nbmejrVcY5KPsS4-XSWyOt7hGm25Lwc6wsRBNs_ZO0WqyH0B5yM"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Column Satin Dress
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Noir / Silk Satin
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$680</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Leather Chelsea Boot"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Sleek black leather designer chelsea boots"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQTEmWPJ7rKP9KjMl61sy-PfGN1Ewn-DSX09Cd_7D9F3XNgBjOl-oDRPj-jongPX87MxEO7jmPYtRzU5_l6FSwNksAVtkGa6_XBXNv70ugI5Xp_Szlx-TdW8EAMZClc7RBe1mZgw9_-qGRnVD-E6yhHBbMLd-CXtF80nCi0E8_F4yWlc4ULWJMEo9Y_YNw6h0Vf3B_G_Zfd78JmZBiTg9-9PLp3NpMDzuWP2f52Dr-5RWeSHTU2l92f0w5dNOileuu0f0JQVCE9Ug"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  The Sculpted Boot
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Onyx / Calfskin
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$820</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Cashmere Scarf"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Thick textured gray cashmere scarf"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gK0UmnGMaQMwm56vkc-1lQMynnN5yV17_V8knlb3tM_jcWkOgIKYfiv3C7Isp6NqQvDLDC9p3dghIEzPQefgt_E5jxpyN7LzsOUDzFrhUNbdWaEOGmYrMWlyDti_CTHWFymVPn1w_DzUJchYHyArhNg1iGf66UKs05cFeBwHs1KOzWtCwoZ_qR9BfTGBva3cggIWOJWLoq6VE1JE1C5qIDcslxitVP6D5mgsqJbJ3LKhajxtgg8rDqEECsdrI8MvBR5iEJw46cM"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Oversized Cashmere Wrap
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Slate / Inner Mongolian Cashmere
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$295</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Wool Blazer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Sharp tailored black wool blazer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDw_XEV3ETXQn7js8AIaHQETw_j_AhI_ei0-4EWqwZYMFskNwQZ-HsttzG_ole8mfLQHUNEefbFpsaJbBKfwpZ1QQQVCTfmaYf0pqr3635cJHPFnOJs2kuBcx02R46qvD-6NdtAoT-pe58bIjeAFzbgCyT5vIlFlAOJFUomFqsdBS0b4gVtMEZC9g3847U5u3IG-WkX5KEgZk0L1y6UMCC7kXHE4xHX5Qfu3mkhp8yAy5GEozbIJxxVFfEeJEOPnOVbXIngnmALsCI"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Modernist Wool Blazer
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Noir / Super 120s Wool
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$750</span>
            </div>
          </article>

          <article className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
              <img
                alt="Silk Scarf"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                data-alt="Abstract monochrome pattern silk scarf"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWhuU1vaXBdLEVNPKjCDZJhu57WLn-oFZg4eCZHiC6pU1bdOlk1pYhb1xj4QAHCW5S4dNNYkQevsWY5ESh-u8bZQhw6vfwFzq4fQblnh2X4Kx5T2-2G3ToPHP_I7FM1btpZf5jHDlmewchZeAdxjB6gjJxSLQoRsMSs5X6vlvbmt4OSuQhkaaBpWpFUQtEEhr8SxZH9p1MZ6_4HWXqhQQVfbeoYUK2jvU7T8TlisdFQcr3eqNsysv35Kj-jMABNQB0bg3L_Jo8RrI"
              />
              <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full bg-primary text-on-primary py-3 font-label text-[10px] uppercase tracking-[0.2em] rounded-sm shadow-xl">
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-body text-sm tracking-tight text-on-surface">
                  Geometric Silk Carré
                </h3>
                <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">
                  Monochrome / Habotai Silk
                </p>
              </div>
              <span className="font-body text-sm text-on-surface">$210</span>
            </div>
          </article>
        </div>
      </section>

      <section className="mt-48 px-8 max-w-[1920px] mx-auto text-center">
        <div className="bg-surface-container py-32 rounded-lg flex flex-col items-center">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-outline mb-6">
            Stay Curated
          </span>
          <h2 className="font-headline text-4xl md:text-5xl tracking-tighter mb-12 max-w-2xl leading-tight">
            Join the Archive for early access and seasonal narratives.
          </h2>
          <div className="w-full max-w-md relative group">
            <input
              className="w-full bg-transparent border-none border-b border-primary focus:ring-0 focus:border-primary px-0 py-4 font-body text-sm tracking-wide placeholder:text-outline/50 transition-all"
              placeholder="Your Email Address"
              type="email"
            />
            <button className="absolute right-0 bottom-4 font-label text-[10px] uppercase tracking-widest hover:opacity-60 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Editorial;
