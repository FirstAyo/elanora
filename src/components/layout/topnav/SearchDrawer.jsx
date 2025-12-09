function SearchDrawer({ isOpen, onClose, searchIcon }) {
  return (
    <>
      {/* 🔍 SEARCH DRAWER – slides from the right */}
      <div
        className={`
        fixed inset-0 z-50
        ${isOpen ? "pointer-events-auto" : "pointer-events-none"}
      `}
      >
        {/* dimmed background */}
        <div
          className={`
          absolute inset-0 bg-black/40 transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
          onClick={onClose}
          aria-hidden="true"
        />

        {/* right-side panel */}
        <aside
          aria-label="Search our site"
          className={`
          absolute right-0 top-0 flex h-full w-[80%] max-w-md flex-col
          bg-white shadow-2xl
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          {/* header */}
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Search our site
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close search"
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
            >
              <span className="text-xl leading-none">&times;</span>
            </button>
          </div>

          {/* content */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
            {/* category select */}
            <div className="space-y-1">
              <label
                htmlFor="search-category"
                className="text-xs font-medium text-gray-700"
              >
                All categories
              </label>
              <select
                id="search-category"
                className="w-full rounded-full border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-gray-900"
                defaultValue="all"
              >
                <option value="all">All categories</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="accessories">Accessories</option>
                <option value="sale">Sale</option>
              </select>
            </div>

            {/* search input */}
            <div className="space-y-1">
              <label
                htmlFor="search-query"
                className="text-xs font-medium text-gray-700"
              >
                Search
              </label>
              <div className="flex items-center gap-2 rounded-full border border-gray-300 px-3 py-1.5">
                <img src={searchIcon} alt="" className="h-4 w-4 opacity-60" />
                <input
                  id="search-query"
                  type="text"
                  placeholder="Search products, categories…"
                  className="h-8 flex-1 border-none bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            {/* suggestion list – static for now, you can wire this to real data later */}
            <div className="border-t border-gray-100 pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                Need some inspiration?
              </p>

              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src="/images/image-1.jpg"
                      alt="Analogue Resin Strap"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Élanora</p>
                    <p className="text-sm text-gray-900">
                      Analogue Resin Strap
                    </p>
                    <p className="text-xs text-gray-600">$43.00</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src="/images/image-2.jpg"
                      alt="Ridley High Waist"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Élanora</p>
                    <p className="text-sm text-gray-900">Ridley High Waist</p>
                    <p className="text-xs text-gray-600">$51.00</p>
                  </div>
                </li>

                <li className="flex gap-3">
                  <div className="h-14 w-14 overflow-hidden rounded-md bg-gray-100">
                    <img
                      src="/images/image-3.jpg"
                      alt="Blush Beanie"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Élanora</p>
                    <p className="text-sm text-gray-900">Blush Beanie</p>
                    <p className="text-xs text-gray-600">$22.00 – $29.00</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}

export default SearchDrawer;
