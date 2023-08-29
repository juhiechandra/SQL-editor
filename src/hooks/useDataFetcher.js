import { useState, useEffect, useCallback } from "react";
import customerData from "/src/assets/data/customer.json";
import productData from "/src/assets/data/product.json";
import supplierData from "/src/assets/data/supplier.json";
import categoryData from "/src/assets/data/categories.json";
import regionData from "/src/assets/data/regions.json";
import shipperData from "/src/assets/data/shippers.json";

const dataMap = {
  "select * from categories;": categoryData,
  "select * from customer;": customerData,
  "select * from product;": productData,
  "select * from regions;": regionData,
  "select * from shippers;": shipperData,
  "select * from supplier;": supplierData,
};

export default function useDataFetcher(query) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchData = useCallback((query) => {
    setLoading(true);
    try {
      const fetchedData = dataMap[query.toLowerCase()] || customerData;
      setData(fetchedData);
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
