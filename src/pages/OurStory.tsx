const OurStory = () => {
  return (
    <div className="pt-32 pb-24 px-8 max-w-[1920px] mx-auto">
      <div className="editorial-spacing grid grid-cols-1 lg:grid-cols-12 gap-16">
        <article className="lg:col-start-3 lg:col-end-10">
          <p className="drop-cap font-body text-xl text-on-surface leading-[2.2rem] mb-12">
            In the quiet halls of our Parisian atelier, the process begins not
            with a sketch, but with the fall of a single piece of wool. We
            believe that true luxury lies in the tension between the fluid and
            the fixed. Our Winter '24 collection is a masterclassName in this
            duality—featuring exaggerated shoulders that command presence, and
            bias-cut silks that whisper against the skin.
          </p>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-16">
            Each silhouette is engineered to transform the wearer. It is an
            armor for the modern intellectual; a uniform that demands attention
            without raising its voice. We look to the brutalist movement for our
            structural cues, finding beauty in the stark lines and the honesty
            of material.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-12 my-24 bg-surface-container-low p-12 rounded-lg">
            <div className="w-full md:w-1/2">
              <img
                className="w-full aspect-[3/4] object-cover rounded shadow-none"
                data-alt="Detailed shot of a charcoal wool coat lapel"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3FghdzCBlhspqMgsci4xHGETCZhOy2Y_nh4V7y-Gaw_m93uUHN1vjFKK3ryn-JHZhxO98OFztUDNU7qQVry29ONJCCk8jLk-uwkRUIzTrcGhCRMCMGXujkKnur2NWhIh1eG-4HVeOApCsX8XKGcR3a6sMp7YwfylJWCb2yD7NWwC8Znw1h1qFUw1u8SVhEVYGRxqUF1reA6G9cbEFr1a2Z79qc9yCoEa9_rFWjRhdnrZGY9ZFU7Mw7CQXqa9DL8Fnq6XFi4zUK1k"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <span className="font-label text-xs tracking-widest uppercase text-on-secondary-container">
                The Essential Piece
              </span>
              <h3 className="font-headline text-3xl">Sculpted Wool Overcoat</h3>
              <p className="font-body text-on-surface-variant italic">
                Crafted from 100% heavy-weight virgin wool, featuring
                architectural lapels and a hidden placket.
              </p>
              <p className="font-headline text-2xl pt-4">€1,450</p>
              <button className="mt-6 px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
                Add to Archive
              </button>
            </div>
          </div>
          <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
            The palette remains strictly nocturnal. Charcoal, onyx, and deep
            slate dominate the collection, allowing the focus to remain entirely
            on the geometry of the garment. There is a specific kind of freedom
            found within these constraints—a liberation from the noise of
            trends.
          </p>
        </article>
      </div>

      <section className="editorial-spacing">
        <div className="text-center mb-16">
          <span className="font-label text-xs tracking-[0.2em] uppercase text-outline mb-4 block">
            Behind the Curtain
          </span>
          <h2 className="font-headline text-4xl italic">In the Atelier</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[700px]">
          <div className="md:col-span-2 h-full bg-surface-container-high overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              data-alt="Fashion designer draping fabric on a mannequin"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp45g-x5XesQiQk4xKV7UKQFFUP7ippjz3kcIJUknk77Ww8ecOQ-sg_D9rMNXZvAuLhXTLtkQoNsEFfNSZevKQ8kCw7rNe2VvoKj-DfhvY3qRdcJcVev7x9KxBqilHECfTjyNLNL219-4-_aw6VHoeEh7VTrN2hGVMJ85Mt1q-_eWsfVSDJ8G36i-Ky0HxXDuYHcWN_8EcJbxdmc7NaUG2HWGMczt20uAG9W2vHtGmRAVKrJozR3djRsOxdGKdu60tbGd4LPH3-LQ"
            />
          </div>
          <div className="md:col-span-1 grid grid-rows-2 gap-4">
            <div className="bg-surface-container-low overflow-hidden group">
              <img
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                data-alt="Close up of black silk fabric texture"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfhPbH7p5IFMiVxxVTXQv-DKD-qIADfvTXVCykE8wmsm06Gsk00I4U-4xhtd03SQCW_M4OsTZe4-RhUWI8iK1buT2x8JNdH8WPB5-UD6MiXKh6kLjCpN1U9b5BiXZ909nFOHhIYpJuxPYnYdNKhMhscJFh1VfPMIuuOGKnBS1N-Tej8AEqr1shdY5t6Z0Pbrje_Pk5ccN1OQkohQ-kRGHGwdTFZXra6V09pbp2a2zK8YafsOPG4BPgkpY73e4BkHdraOwEqKIHq10"
              />
            </div>
            <div className="bg-surface-container-lowest flex flex-col justify-center p-8 border-l border-outline-variant/15">
              <h4 className="font-headline text-xl mb-4 italic">
                Material Honesty
              </h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                We source our fabrics from family-owned mills in Biella,
                ensuring every fiber meets our standard of permanence.
              </p>
            </div>
          </div>
          <div className="md:col-span-1 h-full bg-surface-container-high overflow-hidden group">
            <img
              className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
              data-alt="Minimalist clothing rack in a bright atelier"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbyQqLw4eW2wE2-zwv_5RydU9TEPSQGwv60pWrHclAycSlk-3ighTGxSJT4T0LTAnflPYr51H6G9sTEWKJ684UsoYg465_PCZrZ4-LVPCQKPHd4_3OUnFnVOSZIZyfHsREUiYpQsgZW5pAa1fnVVxpgYuAUC1lLIQTrS2AHCxsg5MA6432uzVAzePKaB-ZfUtkS3HaVMMtsslSjKMRgYl7_5NVtMXwL5v-ZdxnF8UvFz-b3A0std8RKyZMGs0f0HDcMyVq-jr0ZEI"
            />
          </div>
        </div>
      </section>

      <div className="max-w-md mx-auto editorial-spacing text-center">
        <img
          className="w-full aspect-square object-cover mb-8 rounded-lg grayscale"
          data-alt="Structured black trousers on a model"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKNgefQ_fWqY4c9EFBcn-e-elduLmdwPfh6uXaTE-hPz4w8HdzL8N6AdvjSR90StDN1B513b4SYUlqHt7qQv1NjTPY0XDF26Hnnc9jv6BLXAy7LCafgk_X6jIwJvjxnK3W8djU3yg_Kv5OxyK9maAfyT1YX5jpaLVssH2lYnEMZv-7K6wDbJ4bzxYRpYPyTTL5aEtJa6_6VTynwrYE7AvdFXWF3p0suwQVMO7bYFzpcDIk3-G7_DfRcjpYYvtiPDDy_nF6pCsfBvE"
        />
        <span className="font-label text-xs tracking-widest uppercase text-on-secondary-container">
          The Silhouette
        </span>
        <h3 className="font-headline text-3xl mt-2 mb-4">
          Architectural Trouser
        </h3>
        <p className="font-body text-sm text-on-surface-variant mb-6">
          High-waisted with a profound pleat, designed to create length and
          movement.
        </p>
        <p className="font-headline text-xl mb-8">€780</p>
        <a
          className="inline-block border-b border-primary pb-1 font-label text-xs tracking-widest uppercase hover:text-on-primary-container transition-colors"
          href="#"
        >
          View Details
        </a>
      </div>

      <section className="editorial-spacing text-center border-t border-outline-variant/20 pt-24">
        <h2 className="font-headline text-5xl md:text-7xl mb-12">
          The Winter Edit
        </h2>
        <p className="max-w-xl mx-auto font-body text-lg text-on-surface-variant mb-12 leading-relaxed">
          Explore the complete collection of structural outerwear, refined
          knitwear, and modular accessories.
        </p>
        <button className="px-12 py-5 bg-primary text-on-primary font-label text-sm tracking-[0.2em] uppercase rounded shadow-lg hover:bg-primary-container transition-all">
          Explore the Collection
        </button>
      </section>
    </div>
  );
};

export default OurStory;
