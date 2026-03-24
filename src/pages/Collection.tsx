import { ChevronDown } from "lucide-react";

const Collections = () => {
  return (
    <div className="pt-32 pb-24 px-8 max-w-[1920px] mx-auto">
      <header className="mb-24 mt-12 md:mt-24 max-w-4xl">
        <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter text-on-surface mb-8">
          THE SUMMER ARCHIVE
        </h1>
        <p className="font-headline text-xl md:text-2xl text-on-surface-variant leading-relaxed italic max-w-2xl">
          A curation of light, movement, and the enduring beauty of natural
          fibers. Pieces designed for the warmth of the sun and the coolness of
          the shade.
        </p>
      </header>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 mb-16 gap-6 border-b border-outline-variant/15">
        <div className="flex flex-wrap items-center gap-8">
          <button className="flex items-center gap-2 group">
            <span className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
              Category
            </span>
            <ChevronDown />
          </button>
          <button className="flex items-center gap-2 group">
            <span className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
              Material
            </span>
            <ChevronDown />
          </button>
          <button className="flex items-center gap-2 group">
            <span className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant group-hover:text-on-surface transition-colors">
              Color
            </span>
            <ChevronDown />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
            Sort by
          </span>
          <button className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface font-bold border-b border-on-surface pb-0.5">
            Newest
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
        <div className="lg:col-span-2 group cursor-pointer">
          <div className="aspect-[16/9] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Minimalist architectural shot of a woman in a flowing sand-colored linen tunic standing in a sun-drenched white stone courtyard"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyUDW0mwzwYaQO6O1XAJVIIyywqNAlaa5ybb_eVovgO6ypVPitAevLdbbeEQzM238JJblr86NltCQrA-ruqPvz7U4W9vsKIjDyyTwuoVlienNvI1TkS0Vya2zS-1urHfHxjJYLBbhj3jIu2vH2057JMZjvqUnbHzVItTEsEBeL_hVyr97xtJhpkXeMikg1OJw3bqpiiyJoLDxycOLx-DeWWaV0tXe9IiGykZQ1cx4bNQCAANaLCfguzGPNIJEqowyxcI4W-d8MDts"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">
                The Linen Tunic
              </h3>
              <p className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
                Sand / Organic Linen
              </p>
            </div>
            <span className="font-body text-lg">$320</span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Close-up artistic shot of premium tan calfskin sandals resting on a smooth piece of sun-bleached driftwood with soft shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXLZFG2GLJOFSdP9iiLeIcyW0lVfvBdPEwgE_u_m29EJlI9d29rebEbwXFTViooRGcgAMtG4S6962L6l22DsYb6Lh1BrTbBygP1qc8e7gkpTo01TvPkPsASgXgPxGZ-h6B9MN7bCKn3S_z8IafEbva2SCnNmj_7I7QAj9p_EH2dXrNKB5Jxdhqc-4Apr29fzAqdVSW97X7hltFqfBp_OrGluj_P7RAXJ2OXJPpOHOC10fOGo0NiYp5FBW3jkEkH91kFHKQPKt9Ed8"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">
                Archival Sandal
              </h3>
              <p className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
                Tan / Calfskin
              </p>
            </div>
            <span className="font-body text-lg">$450</span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Minimalist fashion photography of ivory silk trousers hanging on a simple wooden rail against a cream-colored textured plaster wall"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4sCj1Ri1hIpwZLJgK3E8XtxbcbUP6HwpWYuq2E_ggG-P551-VlVn-oYF_ASkFQi2bwtUgYyvFrUwApvYQ1cKlRghPoCRfLa89jsSnoHzz79dGpevdeUrm7g6U3MvQ5XyLn_6xm1wSwiC7fmWH1N0ajAhvwIezgWlK38ZV5NKbSqIlQVRZDFVRk_GLulBAg7_GToQIhPIlKEceMPhflBq5vrnj7uw5NqrFFUO6-Gqqz9cbzZ2M003bV9V4QHV8hBC_u8KwIoVEI18"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">
                Wide-Leg Silk Trouser
              </h3>
              <p className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
                Ivory / Mulberry Silk
              </p>
            </div>
            <span className="font-body text-lg">$580</span>
          </div>
        </div>

        <div className="group cursor-pointer lg:mt-[-4rem]">
          <div className="aspect-square overflow-hidden bg-surface-container-low mb-6 rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Hand-woven straw hat with a wide brim captured in dramatic sunlight casting intricate shadows on a white minimalist surface"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDWHi4MHd6CDss2hvZv_FPYtSQIqvF0YDBM59kbAEVfwlWt3bmeZaGJ5nMwbdAG354hyPhSwEWLvG7CM9c_RyjilAjPrBMxe2XoRURdgfPDQNQZhqSIc6kP01APOjGqRqcIg8uKCcd3qrTzuWYI5Lk2m5PHRUQuJhjRhN1jW4zJEbberhWQ0JDvrI1RqissNz4DuLFGDozyxmLMTvL-lpE0TOlW30oWSS06q69JCYbH2tx2uxpa7Sb1IYD4ck6OSgSTJ1Fvo4W8rM"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">
                Minimalist Sun Hat
              </h3>
              <p className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
                Straw / Hand-Woven
              </p>
            </div>
            <span className="font-body text-lg">$190</span>
          </div>
        </div>

        <div className="group cursor-pointer">
          <div className="aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Soft ethereal shot of a sage green silk chiffon wrap floating gently in a summer breeze against a bright morning sky"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzpLrCeSP79onE8ZW8BXB7k812lLAXR3BjVSQk0YT2sTyGnuz9TRhishgCMy0vwlTxb63tHV9g3X-YNuWQ0MbLBjMtt2eOwhEbTwBWOE5OziNDh9hm7BFI-WMVltj5VIClV21_GpqEveWXI0Nihy-KK7Z0NR_s5fne7EfUllMhWT_utqCcZfdDNOyQFJlJpl5jEtPur7v2wvJn3eYg2vbgSV0Z0WmpRwUdqi8njLg0N7QeYA38Viu465SdaBiNRxWY6hsGvRsV5dI"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">
                The Fluid Wrap
              </h3>
              <p className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
                Sage / Silk Chiffon
              </p>
            </div>
            <span className="font-body text-lg">$280</span>
          </div>
        </div>

        <div className="group cursor-pointer lg:col-start-2">
          <div className="aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 rounded-lg">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-alt="Modern sculptural ceramic vase in bone white with a matte texture sitting on a minimalist concrete plinth in an empty gallery space"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8IQwvxuzMMp3ZyOEcJRfhiJWHx3fOQzkGluUndEF1tt0S4QwTK7rU1A8XQF1K4FzyFYJhDhk5AG6lD760409g0K3qkdj8_--uFVSwAuFOaoAGevcJI8bPxIvMDt-sENryr6WJ1P63JibV7pSrcaFzRnOU3F0f-dvTYCn9wqLdIJU31U6_VSTPgyOxRFCjzIBc-QprQ94YzXsP4cKFnV06Ct1A8XvNHF64fP_3rCswl1F7dUl7jV7zUCLofs_YEiNsQt0MsB0aHWI"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-headline text-2xl font-bold mb-1">
                Sculptural Ceramic Vase
              </h3>
              <p className="font-label text-[10px] tracking-[0.15em] uppercase text-on-surface-variant">
                Bone / Matte Finish
              </p>
            </div>
            <span className="font-body text-lg">$420</span>
          </div>
        </div>
      </div>

      <div className="mt-32 flex flex-col items-center">
        <button className="font-label text-[12px] tracking-[0.2em] uppercase py-4 px-12 border border-outline-variant/20 hover:bg-on-surface hover:text-surface transition-all duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Collections;
