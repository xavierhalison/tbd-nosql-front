import "./layout.css";
import Header from "./header/header";

function Layout({ children }) {
  return (
    <div className="container">
      <div className="content">
        <Header />
        <div className="data">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
