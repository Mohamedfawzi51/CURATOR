const Cart = () => {
  return (
    <div>
      <main className="pt-32 pb-40 px-6 max-w-screen-2xl mx-auto min-h-screen">
        <header className="mb-20">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface">
            Your Shopping Bag
          </h1>
          <p className="mt-4 font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant">
            2 Items Selected
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <section className="lg:col-span-8 space-y-16">
            <article className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-64 aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low group">
                <img
                  alt="Structured Wool Overcoat"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Minimalist long structured wool overcoat in deep charcoal grey hanging in a bright high-end showroom with soft natural light"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkpWX2w1avgfsF8I_yNpoabMXSHQ911-Q9lYb2ren3YNsOKXXlQ96tzv-fUFx5o31SoFKSrM2FS8XlxPWERcOcmHYrhiHG7aikVUe2QFSextb1uj-EqUzdTIoVCbdp60JNQhBwzWXp4ZzwgSoRXh-pmcE4wfzaWfpVwBDE5kSbsbCxs0glP1B4L6Qyp8hH17HzABVdkf6CeOXxDX7n86PnkEaoUlwx00oE-M8Yf1dDaCpcoBfGnkWTLFhBhEn5nyve-2-wLMeVhPk"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full py-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-headline text-2xl font-bold tracking-tight">
                        Structured Wool Overcoat
                      </h2>
                      <p className="font-label text-xs uppercase tracking-widest text-outline mt-1">
                        Ref. 8921/402
                      </p>
                    </div>
                    <span className="font-headline text-xl">$1,450.00</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                        Color
                      </p>
                      <p className="text-sm font-medium">Anthracite</p>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                        Size
                      </p>
                      <p className="text-sm font-medium">Large (50)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-12">
                  <div className="flex items-center border-b border-outline-variant pb-2">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mr-6">
                      Quantity
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        1
                      </span>
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                  <button className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                    Remove
                  </button>
                </div>
              </div>
            </article>
            <div className="h-px w-full bg-surface-container-high"></div>

            <article className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-full md:w-64 aspect-[3/4] overflow-hidden rounded-lg bg-surface-container-low group">
                <img
                  alt="Architectural Trouser"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Wide leg architectural trousers in matte black fabric draped elegantly on a designer mannequin in a minimal studio"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0d2kiUas0xKauUiWDEXTVzSQxhD8AgcUP0rYFVZNsTRJ0_JN7JDs9Xui9n4bz3_OqDYmP0BTjb5LjgdZjH5QtUHB6OExFDb_rRenslCq-OA55rImiblgd9Hxc4M-jNZGw56CtgOB6n_cd_fcNMEqUS3WGGqZkkdem3ojyQLs-hridbDZyqtIvX8VIK6jQP2XgVTi2A-D3jsAkLg_PeRxf0qilAOqwd2IgtzWElXuZn-htara_4aZVA7oClt5o8rxU4Fyi1chkhXs"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between h-full py-2">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="font-headline text-2xl font-bold tracking-tight">
                        Architectural Trouser
                      </h2>
                      <p className="font-label text-xs uppercase tracking-widest text-outline mt-1">
                        Ref. 4402/108
                      </p>
                    </div>
                    <span className="font-headline text-xl">$680.00</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 max-w-xs">
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                        Color
                      </p>
                      <p className="text-sm font-medium">Matte Black</p>
                    </div>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">
                        Size
                      </p>
                      <p className="text-sm font-medium">32</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-12">
                  <div className="flex items-center border-b border-outline-variant pb-2">
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mr-6">
                      Quantity
                    </p>
                    <div className="flex items-center gap-4">
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="text-sm font-medium w-4 text-center">
                        1
                      </span>
                      <button className="hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                  </div>
                  <button className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-error transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">
                      close
                    </span>
                    Remove
                  </button>
                </div>
              </div>
            </article>
          </section>

          <aside className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <div className="bg-surface-container-low p-10 rounded-xl">
              <h3 className="font-headline text-xl font-bold mb-8">Summary</h3>
              <div className="space-y-6">
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Subtotal</span>
                  <span className="font-medium">$2,130.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Shipping</span>
                  <span className="font-label text-[10px] uppercase tracking-widest">
                    Calculated at checkout
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-on-surface-variant">Tax</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="h-px bg-outline-variant/30 my-8"></div>
                <div className="flex justify-between items-baseline">
                  <span className="font-headline text-lg">Total</span>
                  <span className="font-headline text-3xl font-bold">
                    $2,130.00
                  </span>
                </div>
              </div>
              <button className="w-full mt-10 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-[10px] uppercase tracking-[0.3em] font-bold rounded-md hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/10">
                Proceed to Checkout
              </button>
              <div className="mt-8 space-y-4">
                <p className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">
                    verified
                  </span>
                  Secure encrypted checkout
                </p>
                <p className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-on-surface-variant">
                  <span className="material-symbols-outlined text-lg">
                    local_shipping
                  </span>
                  Complimentary shipping on orders $500+
                </p>
              </div>
            </div>
            <div className="mt-8 px-4">
              <p className="text-xs text-on-surface-variant leading-relaxed italic">
                "Luxury is not a matter of possession, but a matter of choice."
                — The Archive
              </p>
            </div>
          </aside>
        </div>

        <section className="mt-40">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="font-headline text-4xl font-bold tracking-tight">
              You May Also Like
            </h2>
            <a
              className="font-label text-[10px] uppercase tracking-widest border-b border-primary pb-1"
              href="#"
            >
              View Collections
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4 group">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container rounded-lg">
                <img
                  alt="Cashmere Scarf"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Draped cashmere scarf in light oatmeal color, textured knit detail, soft cinematic studio lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlG8GyhA-E8oJvXMyNe3qzT8knJ0v_fePxmXl1k-OG5b4olWA_nqvdVyu1B4CxBr8TebwlOox3iw-IcV5dwpsnewLyT0vlg6nawWy1rahkGkbc53J8vjGi1_K201ChzlLs2y_mnvs2sTId5ZkKnTdfPc624ZD62Y1FAWqxxL-jeVEGnJxhVMtAYfMxcJuIcePskz0tlY8kIrXQLrVBzXLBmXrZs1UGHLhUnoZk2Nj_xnWtOiu0FpoN4o4R9IHeYlkXWknbDwdTU1Y"
                />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Accessories
                </p>
                <h3 className="font-body text-sm font-semibold mt-1">
                  Raw Edge Cashmere Scarf
                </h3>
                <p className="font-headline text-sm mt-1">$320.00</p>
              </div>
            </div>

            <div className="space-y-4 group">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container rounded-lg">
                <img
                  alt="Leather Chelsea Boot"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="High-end black polished leather chelsea boots on a clean reflective surface, sharp focus, magazine style photography"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqqQ7_Qw2zDl1y_j-Kz3hEafAC_uRcOMMpvjgMjtxRbC585zswKJyTPBVFVd1sT4BevCEOAvxOuJAWdrukZkeimNu6h1PBl1AeWCuWI7D9Z_OzrZNuyrIUEd7H-SWUedMI7z8MyJQOY0yOQWtQLAbw65kxIjBK68W-SoG3FzIDMkK7EuIaNrOhXoDU97Vr8eYFySN-iyQSalF_ysRdlRX4Z8GcObvAH9Cg8mFzfhkHb6R272H7A_D51KjhjRV-yWPhK7npRuRLnlo"
                />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Footwear
                </p>
                <h3 className="font-body text-sm font-semibold mt-1">
                  Polished Leather Boot
                </h3>
                <p className="font-headline text-sm mt-1">$750.00</p>
              </div>
            </div>

            <div className="space-y-4 group">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container rounded-lg">
                <img
                  alt="Minimalist Shirt"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-alt="Crisp white poplin shirt with hidden placket, architectural collar, minimalist fashion editorial look"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARdWTIovaY_XdzCW1JSb_fJHOgoWrfdDk4hoS-JWuBK62yqaMPd6Mo8wk6APDPCRBTQf4m3pdwWwhna5tNTZC37ncPeelC4aGksmSYNvJTfQZS_NmtpznZz3cL9S2XS7WcKPurYMQz8BEq4JffgMpBT3vdiVKPgcg822Y-bwZCRZdHhejnTLIzKG6C0u7x3AYhEwqCzOaFQYE-Sb73YDJEuQ02onxoMM8sm7m8pQQj_c9G2C9r_mck4xyQf1WjIHPidAgMpVTDNSs"
                />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Essentials
                </p>
                <h3 className="font-body text-sm font-semibold mt-1">
                  Poplin Signature Shirt
                </h3>
                <p className="font-headline text-sm mt-1">$450.00</p>
              </div>
            </div>

            <div className="space-y-4 group">
              <div className="aspect-[3/4] overflow-hidden bg-surface-container rounded-lg">
                <img
                  alt="Fragrance"
                  className="w-full h-full object-crop group-hover:scale-105 transition-transform duration-700"
                  data-alt="Minimalist clear glass perfume bottle with black cap on a concrete plinth, dramatic shadows, editorial aesthetic"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLKmdKHs0tdOzcHtcjXIQkDO34BPGa47pqff7fVp8VQhGAtpopEjS-u8IjPlP1VKDuLO4bm1KnvddTcP0zDGFlyAw8vFWnKSlmYc5fpbun2U5au3D7As9VrqsfMZRzLb0iE4HZiPbWEiR1VIy4puORL1E1Fk5lXPLMvf5BhEcSk3wB-l4FZKSe1GG2C78kG-JtSjkoYledYTgjCv8l6rb8bweTyYt8D0hTO0Zf0iibddOteW59fDW861ZwKY9eK-KK2Mksrj6eH0Q"
                />
              </div>
              <div>
                <p className="font-label text-[10px] uppercase tracking-widest text-outline">
                  Objects
                </p>
                <h3 className="font-body text-sm font-semibold mt-1">
                  No. 01 'Obscura' Extrait
                </h3>
                <p className="font-headline text-sm mt-1">$210.00</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4 p-4 z-40 hidden lg:flex">
        <div className="bg-surface-container-high/40 backdrop-blur-lg p-2 rounded-full vertical-rl text-[10px] uppercase tracking-[0.4em] font-label text-on-surface-variant cursor-default py-6">
          Recently Viewed
        </div>
        <div className="group relative">
          <div className="w-12 h-16 rounded overflow-hidden shadow-lg border border-white/20">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
              data-alt="Small thumbnail of yellow fashion garment in minimalist style"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiqHtk3U3C_vMBuw8qx4RmXXenAsP_bP9iglqlp4oj_B4P7g6HIlKqf-QtACEoGN5N60tgH97f6efYJa9rgvNIk9fXzff86c78flRYpqytZb0cxuM28v_sseAxOpwHDeN0bjI_QGbBcj6w20DSHPxAvvpuO7l9veFUqmm7OvN3Vx8XXyFPrmgVnB4Z5rWTyp_WiWLbBGmDpbn3MN6JbX_ayFRWVCCOGJ-_Sqeqg-VkRk_LtsVecua8aVwZJ0Mouj5r4pYF_mMLWeA"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
