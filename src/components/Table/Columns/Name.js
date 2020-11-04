import React from "react";
import { Link } from "react-router-dom";

const ColumnName = ({ pool }) => {
  return (
    <>
      <td className="sushi-freeze-cell sushi-px-4 sushi-py-4 sushi-text-sm sushi-whitespace-no-wrap sushi-border-b sushi-border-gray-200 sushi-bg-white">
        <div className="sushi-flex sushi-items-center">
          <div className="hidden sm:block sushi-flex-shrink-0 sushi-w-8 sushi-h-8 sushi-text-2xl">{pool.icon}</div>
          <div className="sushi-ml-0 sm:sushi-ml-2">
            <div className="sushi-flex sushi-items-center">
              <Link
                to={"/pair/" + pool.uniswapPair.id}
                className="sushi-flex sushi-items-center sushi-text-sm sushi-font-medium sushi-leading-5 sushi-text-gray-900 hover:sushi-underline"
              >
                {pool.name}
                <svg viewBox="0 0 20 20" fill="currentColor" className="sushi-w-4 sushi-h-4 sushi-ml-1">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />{" "}
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
              </Link>{" "}
              {pool.new ? (
                <span className="sushi-ml-2 sushi-inline-flex sushi-items-center sushi-px-2.5 sushi-py-0.5 sushi-rounded-full sushi-text-xs sushi-font-medium sushi-leading-4 sushi-bg-teal-100 sushi-text-teal-800">
                  New
                </span>
              ) : null}
            </div>{" "}
            <div className="sushi-text-sm sushi-leading-5 sushi-text-gray-500">{pool.uniswapPair.name}</div>
          </div>
        </div>
      </td>
    </>
  );
};

export default ColumnName;
