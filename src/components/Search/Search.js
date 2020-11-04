import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
//import useDebounce from "../shared/hooks/useDebounce";
import useFuse from "../../shared/hooks/useFuse";
import useOutsideClick from "../../shared/hooks/useOutsideClick";
import _ from "lodash";
import { searchables } from "../../constants/searchables.json";

const SearchIcon = () => {
  return (
    <span className="sushi-mr-3 sushi-h-5 sushi-w-5">🔮</span>
    // <svg
    //   className="sushi-mr-3 sushi-h-5 sushi-w-5 sushi-text-gray-400"
    //   viewBox="0 0 20 20"
    //   fill="currentColor"
    // >
    //   <path
    //     fillRule="evenodd"
    //     d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
    //     clipRule="evenodd"
    //   />
    // </svg>
  );
};

const CloseIcon = ({ onClick }) => {
  return (
    <svg
      className="sushi-mr-3 sushi-h-5 sushi-w-5 sushi-text-gray-400"
      viewBox="0 0 20 20"
      fill="currentColor"
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const TokenResult = ({ item }) => {
  const result = item.item ? item.item : item;
  return (
    <li
      id="listbox-item-0"
      role="option"
      className="sushi-text-gray-900 sushi-cursor-default sushi-select-none sushi-relative sushi-py-2 sushi-pl-3 sushi-pr-9"
    >
      <Link to={"/token/" + result.address.toLowerCase()}>
        <div className="sushi-flex sushi-items-center sushi-space-x-3">
          <img
            src={
              result.name === "SushiSwap" || result.name === "YAMv2" || result.name == "SushiBar"
                ? result.logoURI
                : "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/" +
                  result.address +
                  "/logo.png"
            }
            alt={result.name + "-logo"}
            className="sushi-flex-shrink-0 sushi-h-6 sushi-w-6 sushi-rounded-full"
          />
          {/* Selected: "font-semibold", Not Selected: "font-normal" */}
          <span className="sushi-font-normal sushi-block sushi-truncate">{result.name}</span>
        </div>
      </Link>
    </li>
  );
};

const FaqResult = ({ item }) => {
  const result = item.item ? item.item : item;
  return (
    <li
      id="listbox-item-0"
      role="option"
      className="sushi-text-gray-900 sushi-cursor-default sushi-select-none sushi-relative sushi-py-2 sushi-pl-3 sushi-pr-9"
    >
      <div className="sushi-flex sushi-items-center sushi-space-x-3">
        {/* Selected: "font-semibold", Not Selected: "font-normal" */}
        <span className="sushi-font-normal sushi-block sushi-truncate">{result.title}</span>
        {/* <span className="sushi-font-sm sushi-block">{result.description}</span> */}
      </div>
    </li>
  );
};

const GovernanceResult = ({ item }) => {
  const result = item.item ? item.item : item;
  return (
    <li
      id="listbox-item-0"
      role="option"
      className="sushi-text-gray-900 sushi-cursor-default sushi-select-none sushi-relative sushi-py-2 sushi-pl-3 sushi-pr-9"
    >
      <div className="sushi-flex sushi-items-center sushi-space-x-3">
        {/* Selected: "font-semibold", Not Selected: "font-normal" */}
        <span className="sushi-font-normal sushi-block sushi-truncate">{result.title}</span>
        {/* <span className="sushi-font-sm sushi-block">{result.description}</span> */}
      </div>
    </li>
  );
};

const MainSearch = ({ theme }) => {
  const [showMenu, toggleMenu] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    toggleMenu(false);
  });
  //const [value, setValue] = useState("");
  //const debouncedSearch = useDebounce(value, 500);
  const options = {
    keys: ["address", "name", "symbol", "type", "title", "description"],
  };
  const { result, search, term, reset } = useFuse({
    data: searchables,
    options,
  });
  //console.log("SearchResults:", result);
  //console.log(showMenu);
  const query = result && result.length > 0 && result[0].item ? "item.type" : "type";
  const grouped = _.groupBy(result, query);
  console.log("GROUPED:", grouped);

  return (
    <>
      {/* <div
        ref={ref}
        className="sushi-hidden lg:sushi-block sushi-px-4 sushi-flex-1 sushi-flex sushi-justify-center lg:sushi-justify-end"
      >
        <div className="sushi-w-full sushi-px-3 sushi-mt-4"> */}
      <label htmlFor="search" className="sushi-sr-only">
        Search
      </label>
      <div className="sushi-mt-1 sushi-relative sushi-rounded-md sushi-shadow-sm" ref={ref}>
        <div className="sushi-absolute sushi-inset-y-0 sushi-left-0 sushi-pl-3 sushi-flex sushi-items-center">
          {!showMenu ? <SearchIcon /> : <CloseIcon onClick={() => toggleMenu(false)} />}
        </div>
        <input
          id="search"
          className={
            "sushi-form-input sushi-block sushi-w-full sushi-pl-10 sushi-py-3 sm:sushi-text-sm sm:sushi-leading-5 " +
            theme
          }
          placeholder="Search for anything in SushiSwap"
          value={term}
          //value={value}
          onChange={(e) => {
            search(e.target.value);
            //setValue(e.target.value);
          }}
          onFocus={() => {
            if (!showMenu) {
              toggleMenu(true);
            }
          }}
        />
        {showMenu ? (
          <div className="sushi-absolute sushi-mt-1 sushi-w-full sushi-rounded-md sushi-bg-white sushi-shadow-lg sushi-z-10">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              aria-activedescendant="listbox-item-3"
              className="sushi-rounded-md sushi-py-2 sushi-text-base sushi-leading-6 sushi-shadow-xs sushi-overflow-auto focus:sushi-outline-none sm:sushi-text-sm sm:sushi-leading-5"
              style={{
                maxHeight: "20rem",
              }}
            >
              {Object.keys(grouped).map((group, i) => {
                return (
                  <>
                    <li
                      id="listbox-item-0"
                      role="option"
                      className="sushi-text-gray-900 sushi-cursor-default sushi-select-none sushi-relative sushi-py-2 sushi-pl-3 sushi-pr-9"
                    >
                      <div className="sushi-flex sushi-items-center sushi-space-x-3">
                        <span className="sushi-font-semibold sushi-block sushi-truncate">
                          {
                            {
                              faq: "FAQs",
                              token: "Tokens",
                              governance: "Governance",
                            }[group]
                          }
                        </span>
                      </div>
                    </li>
                    {grouped[group].map((item) => {
                      const result = item.item ? item.item : item;
                      switch (result.type) {
                        case "faq":
                          return <FaqResult item={item} />;
                        case "token":
                          return <TokenResult item={item} />;
                        case "governance":
                          return <GovernanceResult item={item} />;
                        default:
                          return null;
                      }
                    })}
                  </>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default MainSearch;
