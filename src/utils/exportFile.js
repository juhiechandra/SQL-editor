export const downloadFile = ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

export const exportToJson = (data, fileName) => {
  downloadFile({
    data: JSON.stringify(data),
    fileName: `${fileName}.json`,
    fileType: "text/json",
  });
};

export const exportToCSV = (data, fileName) => {
  let csvContent =
    "data:text/csv;charset=utf-8," +
    data.map((item) => Object.values(item).join(",")).join("\n");
  downloadFile({
    data: csvContent,
    fileName: `${fileName}.csv`,
    fileType: "text/csv",
  });
};
