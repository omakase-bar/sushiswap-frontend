import React from "react";

const Tabs = ({ selected, setSelected }) => {
  const tabs = [
    {
      title: "Team",
      id: "team",
      number: "5",
    },
    {
      title: "Signers",
      id: "signers",
      number: "9",
    },
    {
      title: "Election",
      id: "election",
      number: "50",
    },
  ];
  return (
    <div>
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
                <span
                  className={
                    selected === tab.id
                      ? "sushi-ml-2 sushi-inline-block sushi-py-0.5 sushi-px-2 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-orange-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-orange-200 group-focus:sushi-bg-orange-200"
                      : "sushi-ml-2 sushi-inline-block sushi-py-0.5 sushi-px-2 sushi-text-xs sushi-leading-4 sushi-font-medium sushi-rounded-full sushi-bg-gray-200 sushi-transition sushi-ease-in-out sushi-duration-150 group-hover:sushi-bg-gray-200 group-focus:sushi-bg-gray-200"
                  }
                >
                  {tab.number}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Tabs;
