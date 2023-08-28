import React, { useCallback, useEffect, useMemo, memo } from "react";
import OutboundTwoToneIcon from "@mui/icons-material/OutboundTwoTone";
import customerData from "/src/assets/data/customer.json";
import productData from "/src/assets/data/product.json";
import supplierData from "/src/assets/data/supplier.json";
import categoryData from "/src/assets/data/categories.json";
import regionData from "/src/assets/data/regions.json";
import shipperData from "/src/assets/data/shippers.json";
import StorageTwoToneIcon from "@mui/icons-material/StorageTwoTone";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";
import SchemaTwoToneIcon from "@mui/icons-material/SchemaTwoTone";

const data = {
  Product: productData,
  Supplier: supplierData,
  Category: categoryData,
  Region: regionData,
  Shipper: shipperData,
  Customer: customerData,
};

const AvailableData = memo(
  ({
    hideTableSearchHistory,
    setHideTableSearchHistory,
    setQuery,
    fullScreen,
  }) => {
    const toggleBar = useCallback(
      () => setHideTableSearchHistory((prev) => !prev),
      []
    );

    useEffect(() => setHideTableSearchHistory(fullScreen), [fullScreen]);

    const tableMeta = useMemo(
      () =>
        Object.keys(data).map((name) => ({
          name,
          fields: Object.keys(data[name][0]),
        })),
      []
    );

    const handleClick = (name, fieldItem) => () =>
      setQuery(
        fieldItem
          ? `SELECT ${fieldItem} FROM ${name};`
          : `SELECT * FROM ${name};`
      );

    return (
      <div
        className={`pb-4 relative ${
          hideTableSearchHistory
            ? "w-[50px] p-4"
            : "flex-[0.20] overflow-y-auto"
        } hidden md:block`}
        style={{ backgroundColor: "#2C3137" }}
      >
        <button
          onClick={toggleBar}
          className="absolute p-2 text-sm font-medium focus:outline-none bg-white rounded-[2px] border border-gray-200 hover:bg-gray-100 hover:text-blue-700 z-10 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-[40px] h-[40px] flex justify-center items-center top-[12px] right-[8px] outline-none text-[#1E7FD8] border-[#014A92]"
        >
          {hideTableSearchHistory ? (
            <StorageTwoToneIcon />
          ) : (
            <HighlightOffTwoToneIcon />
          )}
        </button>
        {!hideTableSearchHistory && (
          <div>
            <div className="pl-5 border-b-[1px] border-[#ffffff33] h-[80px] flex items-center justify-between">
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                Available Tables
              </span>
            </div>
            <div className="p-4">
              {tableMeta.map(({ name, fields }) => (
                <div key={name} className="mb-4">
                  <span
                    onClick={handleClick(name)}
                    className="flex items-center cursor-pointer"
                    style={{ fontSize: "1.5rem", gap: "10px" }}
                  >
                    <SchemaTwoToneIcon className="w-5 h-5 ml-2" />
                    {name}
                  </span>
                  <ul>
                    {fields.map((fieldItem) => (
                      <li
                        key={fieldItem}
                        className="text-sm cursor-pointer"
                        onClick={handleClick(name, fieldItem)}
                        style={{ fontSize: "1.2rem", padding: "8px" }}
                      >
                        {fieldItem}
                        <span className="text-[#1E7FD8]">
                          [{typeof fieldItem}]
                          <OutboundTwoToneIcon className="w-5 h-5 ml-2" />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default AvailableData;
