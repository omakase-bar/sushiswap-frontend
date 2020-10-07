import { backgrounds } from "polished";
import React, { useState, useMemo } from "react";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useState(config);

  //console.log("CONFIG:", config);
  //console.log("ITEMS:", items);
  function getNested(theObject, path, separator) {
    try {
      separator = separator || ".";
      return path
        .replace("[", separator)
        .replace("]", "")
        .split(separator)
        .reduce(function(obj, property) {
          return obj[property];
        }, theObject);
    } catch (err) {
      return undefined;
    }
  }

  const sortedItems = useMemo(() => {
    if (items && items.length > 0) {
      let sortableItems = [...items];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          //console.log("Nested:", getNested(a, sortConfig.key));
          if (getNested(a, sortConfig.key) < getNested(b, sortConfig.key)) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (getNested(a, sortConfig.key) > getNested(b, sortConfig.key)) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }
          return 0;
          //   console.log("UNESTED:", a[sortConfig.key]);
          //   if (a[sortConfig.key] < b[sortConfig.key]) {
          //     return sortConfig.direction === "ascending" ? -1 : 1;
          //   }
          //   if (a[sortConfig.key] > b[sortConfig.key]) {
          //     return sortConfig.direction === "ascending" ? 1 : -1;
          //   }
          //   return 0;
        });
      }
      return sortableItems;
    }
  }, [items, sortConfig]);

  const requestSort = (key) => {
    //console.log("SORT KEY:", key);
    //console.log("SORT CONFIG:", sortConfig);
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default useSortableData;
