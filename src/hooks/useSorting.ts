import { useState } from "react";

export const useSorting = (array: any[]) => {
  const [data, setData] = useState<any[]>(array);
  const [order, setOrder] = useState("ASD");

  const handleSorting = (name: string): void => {
    if (order === "ASD") {
      const sorted = [...data].sort((a, b) => (a[name].toLowerCase() > b[name].toLowerCase() ? 1 : -1));
      setData(sorted);
      setOrder("DSC");
    }

    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => (a[name].toLowerCase() < b[name].toLowerCase() ? 1 : -1));
      setData(sorted);
      setOrder("ASD");
    }
  };

  return {
    handleSorting,
    data,
  };
};
