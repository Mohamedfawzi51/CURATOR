const ProductDetail = () => {
  return (
    <main className="pt-32 pb-24 px-8 md:px-12 max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="aspect-[4/5] overflow-hidden rounded-lg bg-surface-container-low group">
            <img
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              data-alt="Close up of a structured charcoal wool overcoat"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYAkIuSmHJz3ytjM89ea34LvMC4WmG3dPBIt5tavfdZCdFVoMLBWb4_Mp4bqG7dBXWAk6u3PiDJzKSO04WQbq0es1BlUPqaDTXkyY_uXLXO-UKCUpC0PSS0Nh3Ix25XpUOb6hOt3BL5ydNa9OmWkoOIwYABhNWBsDMxN60br9tbGxTORtN4pwxVlm12cOMUclB85MIzoUJp-AEnjqYHC6vkakumvhPKlfBd0KEpldVqo-hxYKEvsXgSDNhszTijwQ20m_1E9pxWI0"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="aspect-[4/5] rounded bg-surface-container-low overflow-hidden cursor-pointer outline outline-1 outline-primary/10">
              <img
                className="w-full h-full object-cover"
                data-alt="Wool overcoat side view"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBuavghuprp5dw1VyJ4Re5wWyjFCQME_xWWVSrsfeA-ZTTLQJeCA7kGiDr5ZH0xi_JIIxKNGhkCujwvhuyCPyl4R7pC2_chw5Kwtm2MUmwKVmVdTVfzLXpI1y4u12pVDfwJ8-PhJRPihlCHfUdrzY8rEp4mtqaCfi5crhV52RzGEWMfUvBQ8iJJHxHs3nqZtsdJWv57fBAERXaebiRkFXJ5oVe1ph1IVJfVLmtbpHTOaySvuxV3AvwS73zOBxGVZcv9JzePb-3zMA"
              />
            </div>
            <div className="aspect-[4/5] rounded bg-surface-container-low overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <img
                className="w-full h-full object-cover"
                data-alt="Model wearing a wool overcoat"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHSM2hrTLZvUvPuFa88N-QPf1M8UpheaS10z-2IUNVl_SFECN1KQTQ2q0F4P9rHnUi0upsvzlR2SitrSdBiWjVVIIqXoi8bowqHCVKYGE4PXIBGsvFnTpQR5G7Tc_kFMttKoBKeyOnx-STsuccKxV1_3UD3cx0zFerbDxxIiJOaiDLxcq0IhbBgo2m9GN2y4GvrsxT0CRFACvF2jYF39o3I9g0DLaSSqkkPU0p49SrE_wqUityIha_CDkF_1QV1fBfUNKt1Mr-xgU"
              />
            </div>
            <div className="aspect-[4/5] rounded bg-surface-container-low overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <img
                className="w-full h-full object-cover"
                data-alt="Wool fabric detail texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1D8xKss4mbVVOKyFTLoSWIDzyZhXScvD3Vujf7MZEjIm7O1M8yilPVZdoH5Lg6Xxf1z4kFFO5SfWW0oRSfXizhI7oXPKsThfrh5cFoEZHwOWKCjHHS1v1XXTSAyLOTKcL3UHHI2S8uOPmQU_eLl_37oU2kt0HL2V9KaRoAsfW0QDOpupnmhsPbHGHsK8eRGnHsOb_5QBymZoGbojFaQzSpWlqX5sJxn9ujpb2beRHPSF65LVIqvoHw_fDNt4QUWOqEy4YHzBD-ic"
              />
            </div>
            <div className="aspect-[4/5] rounded bg-surface-container-low overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
              <img
                className="w-full h-full object-cover"
                data-alt="Overcoat interior lining detail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGqgwrcBZHq5DgFIKf16rbkT2-_WGqfRXpHpJD0s5xS6vaaR2zxZVw0r70q0oytItujmxlqfAXRh1bJ3k1k25h8vxeUVN4jdZZTiIVbi7y7Cv-cry17wAq1Rb1q2jBPrp1z_DP30zxIhlrm1xMfoBHp24XQzM4teNl7o1mBCtF92Q6y5QyZlfOggkBMN6ZZVHqOye6wgq_FyEYreC25Yo0F_9sRvqxP0ZLpJ2OjzcPghkz3viDFdL3LEicRPW_zYfQoaMGLEBfNPI"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="sticky top-32 flex flex-col gap-10">
            <div>
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                Outerwear / AW24
              </p>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Structured Wool Overcoat
              </h1>
              <p className="font-serif text-2xl text-on-surface-variant">
                $890
              </p>
            </div>
            <p className="text-on-surface-variant leading-relaxed font-light text-lg">
              A timeless silhouette crafted from premium double-faced wool.
              Features a sharp peak lapel, structural shoulder definition, and a
              hidden button closure for a minimal finish. Made in Italy.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] mb-4 block">
                  Color: Charcoal
                </span>
                <div className="flex gap-4">
                  <button
                    className="w-8 h-8 rounded-full bg-[#D2B48C] border-2 border-white ring-1 ring-outline-variant/30"
                    title="Camel"
                  ></button>
                  <button
                    className="w-8 h-8 rounded-full bg-[#36454F] border-2 border-white ring-2 ring-primary"
                    title="Charcoal"
                  ></button>
                  <button
                    className="w-8 h-8 rounded-full bg-[#191970] border-2 border-white ring-1 ring-outline-variant/30"
                    title="Midnight"
                  ></button>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-4">
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em]">
                    Select Size
                  </span>
                  <button className="text-[10px] uppercase tracking-[0.15em] underline underline-offset-4 text-on-surface-variant">
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  <button className="py-3 text-[10px] tracking-widest border border-outline-variant/20 hover:border-primary transition-colors">
                    XS
                  </button>
                  <button className="py-3 text-[10px] tracking-widest border border-outline-variant/20 hover:border-primary transition-colors">
                    S
                  </button>
                  <button className="py-3 text-[10px] tracking-widest border border-primary bg-primary text-white">
                    M
                  </button>
                  <button className="py-3 text-[10px] tracking-widest border border-outline-variant/20 hover:border-primary transition-colors">
                    L
                  </button>
                  <button className="py-3 text-[10px] tracking-widest border border-outline-variant/20 hover:border-primary transition-colors">
                    XL
                  </button>
                </div>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded font-sans text-[10px] uppercase tracking-[0.2em] shadow-lg hover:opacity-90 transition-opacity active:scale-[0.98]">
              Add to Bag
            </button>

            <div className="border-t border-outline-variant/20">
              <details className="group">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none">
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em]">
                    Composition &amp; Care
                  </span>
                  <span
                    className="material-symbols-outlined transition-transform group-open:rotate-45"
                    data-icon="add"
                  >
                    add
                  </span>
                </summary>
                <div className="pb-6 text-sm text-on-surface-variant leading-relaxed">
                  <ul className="space-y-2">
                    <li>Outer: 100% Virgin Wool</li>
                    <li>Lining: 100% Cupro</li>
                    <li>Professional dry clean only</li>
                    <li>Store on a wide-shouldered hanger</li>
                  </ul>
                </div>
              </details>
              <div className="h-[1px] w-full bg-outline-variant/20"></div>
              <details className="group">
                <summary className="flex justify-between items-center py-6 cursor-pointer list-none">
                  <span className="font-sans text-[10px] uppercase tracking-[0.15em]">
                    Shipping &amp; Returns
                  </span>
                  <span
                    className="material-symbols-outlined transition-transform group-open:rotate-45"
                    data-icon="add"
                  >
                    add
                  </span>
                </summary>
                <div className="pb-6 text-sm text-on-surface-variant leading-relaxed">
                  <p>
                    Complementary express shipping on all orders over $500.
                    Returns accepted within 14 days of delivery in original
                    condition.
                  </p>
                </div>
              </details>
              <div className="h-[1px] w-full bg-outline-variant/20"></div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-48">
        <h2 className="font-serif text-3xl mb-16 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden rounded-lg relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Black luxury leather tote bag"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUCoGsuycAMeDK_Zwz8wqpfAX1l9caJsFbLmMHvalDRpsLXjOIZCjvKgaFO1rmTC_Gn3aKiw4CqPV6xnxPd15HWakNIVeGKK_YbXIgzyVWbsRwWYMMajGSXaGJ6uHxgRpGvOX9661mJwJnxsWUCoaO6rxleJkxK9W7QIcsIJHg2wPQKL3CUJCxNioHDWBWGgoMofOp-B2-auy5npdGjt45rlNQ05_Jhm_9URUX5QB0ChV-i904CNzW2e4XKytAe2WQqpb-j6CtBPM"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-1">
                  Accessories
                </p>
                <h3 className="font-serif text-lg">Bespoke Calfskin Tote</h3>
              </div>
              <span className="font-sans text-sm">$1,200</span>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden rounded-lg relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Minimalist sand-colored leather sandals"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK6If4YMM9A4klC_bMZgEu342HrEtH46uQD6DnNuwzGwD4yyKFcren3s01Vfp5ANCkUrCE8of9r5uSQk2IQIBBHYaVLjXIFOm6EFMiTmKTYxvOJwgMYQ7OCYI6hfMp6u9tPclP1ppf6HpfLKqnWfxJG8fLFlKNZijcGVDC7vMDOAxA4wdo3KpQKHftACPGY2qk4Lc4x37ORl_vJo1P_KxCU5waXJYuxmcbFRdAosJ2Y1V6BENo3Yir51ebmJite7vcN1lJ8-64kmU"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-1">
                  Footwear
                </p>
                <h3 className="font-serif text-lg">Arc Sandal</h3>
              </div>
              <span className="font-sans text-sm">$450</span>
            </div>
          </div>

          <div className="group cursor-pointer translate-y-12">
            <div className="aspect-[4/5] bg-surface-container-low mb-6 overflow-hidden rounded-lg relative">
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                data-alt="Off-white silk trousers tailored"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8knz_TlYumBFDFkvtWkyfevB_wr1EwDQnW4H3z35bZ5wACjXLLs5nEhOO7rZejLmSN_v28qMSmAtFA-w6irZkpTbukv0GG1TWG1tEU29nvDX3ATEN7FDPEwXfvRVX_sWpyXbAB5AZTZQMpG-zG7M9QuBi2Zv2x58hx7aKxcoXckIf0eLmpwRmXt8Hcnx4pwcR47m6j8_u--kD6_76aPgkkZd14nMJcU4OIV2hfDUttL3GeD5jM7__wBblWn3u3xS8l9dwmD88NW8"
              />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-1">
                  Trousers
                </p>
                <h3 className="font-serif text-lg">Pleated Wool Trouser</h3>
              </div>
              <span className="font-sans text-sm">$390</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
