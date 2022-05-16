import "./table.css";

function Table({ heading, data }) {
  return (
    <table>
      <thead>
        <tr>
          {heading?.map((h, key) => (
            <th key={key}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((row, key) => {
          const field = row[heading[0]];
          const value = row[heading[1]].toFixed(2);
          const time = new Date(row[heading[2]]);

          return (
            <tr key={key}>
              <td>{field}</td>
              <td>
                {value} {field === "latency" ? "ms" : "mb"}
              </td>
              <td>{time.toLocaleTimeString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
