import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  tabs = [
    {
      title: "Example",
      id: "example",
      component: <div>Hello</div>,
    },
    {
      title: "Example2",
      id: "example2",
      component: <div>Hello2</div>,
    },
  ];
  const [selected, setSelected] = useState(tabs ? tabs[0].id : null);
  let sections = {};
  tabs.forEach((tab) => {
    sections[tab.id] = tab.component;
  });

  return (
    <>
      <div>
        <div className="block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
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
      </div>
      {sections[selected]}
    </>
  );
};

export default Tabs;
