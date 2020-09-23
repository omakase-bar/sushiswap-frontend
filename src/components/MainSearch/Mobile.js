import React from "react";
import Search from "./Search";

const Mobile = () => {
  return (
    <>
      <div className="sushi-block lg:sushi-hidden sushi-flex-1 sushi-flex sushi-justify-center lg:sushi-justify-end">
        <div className="sushi-w-full sushi-px-2 lg:sushi-px-6">
          <Search theme={"sushi-bg-orange-50"} />
        </div>
      </div>
    </>
  );
};

export default Mobile;
