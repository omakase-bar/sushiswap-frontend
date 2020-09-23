import React from "react";

const SectionCards = ({ children }) => {
  return (
    <div className="sushi-mt-6 md:sushi-flex">
      <div className="sushi-relative sushi-w-full sushi-mx-auto sm:sushi-px-6 lg:sushi-px-6">
        <div className="sushi-grid sushi-gap-2 sushi-mx-auto md:sushi-grid-cols-2 lg:sushi-grid-cols-2 lg:sushi-max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
