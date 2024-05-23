// DrawerContent.js
const DrawerContent = ({ closeDrawer, router, headerOptions }) => {
  return (
    <div
      className="bg-[#e5b776] fixed top-0 right-0 w-64 h-full shadow-lg z-30 transition-transform transform duration-300 ease-in-out overflow-y-scroll"
      style={{
        transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
      }}
    >
      <ul className="flex flex-col p-4">
        {/* Close Button */}
        <button type="button" className="self-end p-2" onClick={closeDrawer}>
          <svg
            className="w-7 h-7 text-white"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Donate Button */}
        <div className="w-full flex justify-center pt-5">
          <button
            type="button"
            className="text-white bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 font-medium rounded-full text-sm px-4 py-2 text-center"
          >
            Donate
          </button>
        </div>

        {/* Accordion Menu */}
        <div className="pt-10">
          <Accordion>
            {headerOptions.map((hopt, i) => (
              <Accordion.Panel key={i} header={hopt.title} eventKey={1}>
                {hopt.options.map((option, ind) => (
                  <div key={ind} className="p-[2px] font-bold text-[14px]">
                    <Link
                      href={option.link}
                      className={`hover:text-black text-black hover:no-underline no-underline ${
                        // router.pathname === option.link ? 'text-orange-500' : '' 
                        ''
                      }`}
                    >
                      {option.subtitle}
                    </Link>
                  </div>
                ))}
              </Accordion.Panel>
            ))}
          </Accordion>
        </div>
      </ul>
    </div>
  );
};

export default DrawerContent;
