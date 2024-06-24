export interface IStockRow {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface IStockInformation {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IStockRow[];
}
