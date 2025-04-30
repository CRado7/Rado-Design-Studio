import { Link, useLocation } from "react-router-dom";
import "../styles/Breadcrumbs.css";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumbs">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> &gt; {formatName(name)}</span>
        ) : (
          <span key={name}>
            {" "}
            &gt; <Link to={routeTo}>{formatName(name)}</Link>
          </span>
        );
      })}
    </nav>
  );
};

function formatName(name) {
  return name.replace(/%20/g, " ").replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export default Breadcrumbs;
