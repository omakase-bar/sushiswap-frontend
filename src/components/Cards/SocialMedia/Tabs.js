import React from "react";

const Tabs = ({ selected, setSelected }) => {
  const tabs = [
    {
      title: "Announcements",
      id: "announcements",
    },
    {
      title: "Twitter",
      id: "twitter",
    },
    {
      title: "Medium",
      id: "medium",
    },
  ];
  return (
    <div>
      <div className="sushi-hidden sm:sushi-block">
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
