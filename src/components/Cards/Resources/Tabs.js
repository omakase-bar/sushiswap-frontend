import React from "react";

const Tabs = ({ selected, setSelected }) => {
  const tabs = [
    {
      title: "Pinned Guides",
      id: "guides",
    },
    {
      title: "FAQs",
      id: "faqs",
    },
    {
      title: "Support",
      id: "support",
    },
  ];
  return (
    <div>
      {/* Dropdown menu on small screens */}
      {/* <div className="sm:sushi-hidden">
        <select
          aria-label="Selected tab"
          className="sushi-form-select sushi-block sushi-w-full sushi-pl-3 sushi-pr-10 sushi-py-2 sushi-text-base sushi-leading-6 sushi-border-gray-300 focus:sushi-outline-none focus:sushi-shadow-outline-blue focus:sushi-border-blue-300 sm:sushi-text-sm sm:sushi-leading-5 sushi-transition sushi-ease-in-out sushi-duration-150"
        >
          <option>Applied</option>
          <option selected>In Progress</option>
        </select>
      </div> */}
      {/* Tabs at small breakpoint and up */}
      <div className="sushi-block">
        <nav className="sushi--mb-px sushi-flex sushi-space-x-8">
          {tabs.map((tab) => {
            return (
              <button
                onClick={() => {
                  setSelected(tab.id);
                }}
                className={
                  selected === tab.id
                    ? "sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-orange-500 sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-orange-600 focus:sushi-outline-none focus:sushi-text-orange-800 focus:sushi-border-orange-700"
                    : "sushi-whitespace-no-wrap sushi-pb-4 sushi-px-1 sushi-border-b-2 sushi-border-transparent sushi-font-medium sushi-text-sm sushi-leading-5 sushi-text-gray-500 hover:sushi-text-gray-700 hover:sushi-border-gray-300 focus:sushi-outline-none focus:sushi-text-gray-700 focus:sushi-border-gray-300"
                }
              >
                {tab.title}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
