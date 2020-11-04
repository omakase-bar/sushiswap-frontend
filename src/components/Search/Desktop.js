import React from "react";
import Search from "./Search";

const Desktop = () => {
  return (
    <>
      <div className="sushi-hidden lg:sushi-block sushi-px-4 sushi-flex-1 sushi-flex sushi-justify-center lg:sushi-justify-end">
        <div className="sushi-w-full sushi-px-3 sushi-mt-4">
          <Search theme={""} />
        </div>
      </div>
    </>
  );
};

export default Desktop;
