function DataHeader({ stockRows }: { stockRows: number }) {
  return (
    <div>
      <p>Data Available For {stockRows} days</p>
      <button>Fetch Data</button>
    </div>
  );
}

export default DataHeader;
