import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Layout = () => {
    const count = useSelector((state) => state.counter.value)

  return (
    <>
      <nav>
        <ul style={{display: 'flex', justifyContent: 'space-between', padding: '0 55px'}}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/playground">Playground</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">BAG {count}</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;