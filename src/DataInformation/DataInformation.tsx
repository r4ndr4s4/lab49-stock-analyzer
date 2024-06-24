import { useEffect, useState } from "react";
import DataHeader from "./DataHeader";
import { IStockInformation } from "./DataInformation.types";
import DataTable from "./DataTable";

function DataInformation() {
  const [stockInformation, setStockInformation] = useState<IStockInformation>();
  // TODO loading state

  // TODO swr/react query
  useEffect(() => {
    (async () => {
      try {
        // TODO env var validation
        const response = await fetch(
          `${import.meta.env.VITE_STOCK_INFORMATION_API_BASE_URL}/stocks`
        );

        if (!response.ok) {
          throw new Error("Network response was not OK");
        }

        const jsonResponse = await response.json();

        setStockInformation(jsonResponse);
      } catch (e) {
        // TODO overlay error message
        console.log("Error happened while fetching stock information!", e);
      }
    })();
  }, []);

  if (!stockInformation) {
    return <p>Stock information is not fetched...</p>;
  }

  return (
    <>
      <div>1. Data Information</div>

      <DataHeader stockRows={stockInformation.data.length} />
      <DataTable stockInformation={stockInformation.data} />
    </>
  );
}

export default DataInformation;
