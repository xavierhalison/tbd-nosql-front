import "./filters.css";

function Filters({ onChange }) {
  return (
    <div className="filters">
      <label htmlFor="field">Campo</label>
      <select id="field" onChange={(e) => onChange(e)}>
        <option value="download" selected>
          download
        </option>
        <option value="latency">latency</option>
        <option value="upload">upload</option>
      </select>
    </div>
  );
}

export default Filters;
