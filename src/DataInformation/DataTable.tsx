import { IStockRow } from "./DataInformation.types";

function DataTable({ stockInformation }: { stockInformation: IStockRow[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>date</th>
          <th>open</th>
          <th>high</th>
          <th>low</th>
          <th>close</th>
        </tr>
      </thead>

      <tbody>
        {stockInformation.map((stockRow) => {
          return (
            <tr key={stockRow.date}>
              <td>{stockRow.date}</td>
              <td>{stockRow.open}</td>
              <td>{stockRow.high}</td>
              <td>{stockRow.low}</td>
              <td>{stockRow.close}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default DataTable;
