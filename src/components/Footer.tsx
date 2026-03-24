const Footer = () => {
  return (
    <footer className="w-full pt-24 pb-12 bg-[#f6f3f4]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 max-w-[1920px] mx-auto">
        <div className="flex flex-col gap-6">
          <a className="font-serif text-xl font-bold text-slate-900" href="#">
            CURATOR
          </a>
          <p className="font-body text-sm text-slate-500 leading-relaxed max-w-xs">
            Elevating everyday life through meticulously designed objects and
            clothing.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              className="text-slate-900 hover:opacity-70 transition-opacity"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z"></path>
              </svg>
            </a>
            <a
              className="text-slate-900 hover:opacity-70 transition-opacity"
              href="#"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.43 7l-1.54 10.1c-.16.71-.58.89-1.18.55l-2.35-1.73-1.14 1.09c-.13.13-.23.24-.48.24l.17-2.4 4.37-3.95c.19-.17-.04-.26-.3-.09l-5.4 3.4-2.33-.73c-.5-.16-.51-.5.1-.73l9.1-3.5c.42-.15.79.11.65.69z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-900 font-bold mb-2">
            Shopping
          </span>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Shipping &amp; Returns
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Wholesale
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Sustainability
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Store Locator
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-900 font-bold mb-2">
            Legal
          </span>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-500 hover:text-slate-900 transition-colors"
            href="#"
          >
            Cookie Policy
          </a>
        </div>
        <div className="flex flex-col gap-6">
          <span className="font-label text-[10px] uppercase tracking-[0.15em] text-slate-900 font-bold mb-2">
            Journal
          </span>
          <p className="font-body text-[10px] text-slate-500 uppercase tracking-[0.1em]">
            Subscribe for limited releases and exhibition invitations.
          </p>
          <div className="relative">
            <input
              className="w-full bg-transparent border-b border-slate-300 py-2 font-label text-[10px] focus:outline-none focus:border-slate-900 transition-colors"
              placeholder="YOUR EMAIL"
              type="email"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-24 px-12 max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-slate-500">
          © 2024 CURATOR DIGITAL. ALL RIGHTS RESERVED.
        </span>
        <div className="flex gap-8">
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-slate-500">
            New York
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-slate-500">
            London
          </span>
          <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-slate-500">
            Tokyo
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
