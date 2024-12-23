import { Outlet } from "react-router";
import Nav from "../components/Nav";

const Root = () => {
  return (
    <div>
      <div id="sidebar">
        <Nav />
      </div>
      <div id="detail">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
