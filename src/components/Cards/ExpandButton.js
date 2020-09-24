import React from "react";
import { Link, useLocation } from "react-router-dom";

const ExpandButton = ({ widgetPath, dashboardPath }) => {
  const location = useLocation();
  const widget = location.pathname === widgetPath ? true : false;
  return (
    <>
      {widget ? (
        <Link
          to={dashboardPath}
          className="sushi-ml-2 sushi-pb-4 sushi-mt-2 sushi-text-sm sushi-leading-5 sushi-text-gray-500 sushi-truncate"
        >
          <svg
            className="sushi-arrows-expand sushi-w-6 sushi-h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </Link>
      ) : (
        <Link
          to={widgetPath}
          className="sushi-ml-2 sushi-pb-4 sushi-mt-2 sushi-text-sm sushi-leading-5 sushi-text-gray-500 sushi-truncate"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke="#b4bfd8"
            className="sushi-arrows-expand sushi-w-6 sushi-h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            ></path>
          </svg>
        </Link>
      )}
    </>
  );
};

export default ExpandButton;
