import DataHeader from "./DataHeader";
import DataTable from "./DataTable";
import mockAPIResponse from "./mockAPIResponse.json";

function DataInformation() {
  return (
    <>
      <div>1. Data Information</div>

      <DataHeader stockRows={mockAPIResponse.data.length} />
      <DataTable stockInformation={mockAPIResponse.data} />
    </>
  );
}

export default DataInformation;
