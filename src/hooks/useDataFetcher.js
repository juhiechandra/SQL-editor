import { useState, useEffect, useCallback } from "react";

const dataMap = {
  "select * from categories;": "/src/assets/data/categories.json",
  "select * from customer;": "/src/assets/data/customer.json",
  "select * from orders;": "/src/assets/data/orders.json",
  "select * from product;": "/src/assets/data/product.json",
  "select * from regions;": "/src/assets/data/regions.json",
  "select * from shippers;": "/src/assets/data/shippers.json",
  "select * from supplier;": "/src/assets/data/supplier.json",
};

export default function useDataFetcher(query) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = useCallback(async (query) => {
    setLoading(true);
    try {
      const jsonFile =
        dataMap[query.toLowerCase()] || "/src/assets/data/customer.json";
      var { default: data } = await import(jsonFile);
      setData(data);
    } catch (error) {
      setData(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData(query);
  }, [query, fetchData]);

  return { data, isLoading };
}
