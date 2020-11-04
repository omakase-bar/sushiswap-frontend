import React from "react";
import { AscendingIcon, DescendingIcon } from "./icons";

const Header = ({ header, index, requestSort, getClassNamesFor }) => {
  return (
    <>
      <th
        onClick={() => requestSort(header.sortId)}
        className={
          "sushi-bg-white sushi-px-5 sushi-py-3 sushi-text-xs sushi-font-medium sushi-leading-4 sushi-tracking-wider sushi-text-left sushi-text-gray-900 sushi-uppercase sushi-border-b sushi-border-gray-200 " +
          (index === 0 ? "sushi-freeze-cell-header" : "")
        }
      >
        <a href="#" className="sushi-flex sushi-items-center">
          <span>{header.name}</span>
          {
            {
              ascending: <AscendingIcon />,
              descending: <DescendingIcon />,
            }[getClassNamesFor(header.sortId)]
          }
        </a>
      </th>
    </>
  );
};

export default Header;
