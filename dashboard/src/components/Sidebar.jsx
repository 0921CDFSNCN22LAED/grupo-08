import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
export default function Sidebar() {
  return (
    <div class="vertical-nav bg-white" id="sidebar">
      <div class="py-4 px-3 mb-4 bg-light">
        <div class="media d-flex align-items-center">
          <img
            src={logo}
            alt="..."
            width="65"
            class="mr-3 rounded-circle img-thumbnail shadow-sm"
          />
          <div class="media-body">
            <h4 class="m-0">Vission</h4>
            <p class="font-weight-light text-muted mb-0"></p>
          </div>
        </div>
      </div>

      <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
        Main
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <Link to={"/"} class="nav-link text-dark font-italic bg-light">
            <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/about"} class="nav-link text-dark font-italic">
            <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
            About
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/users"} class="nav-link text-dark font-italic">
            <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
            Users
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/products"} class="nav-link text-dark font-italic">
            <i class="fa fa-picture-o mr-3 text-primary fa-fw"></i>
            Products
          </Link>
        </li>
      </ul>

      <p class="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
        ...
      </p>

      <ul class="nav flex-column bg-white mb-0">
        <li class="nav-item">
          <Link to={"/orders"} class="nav-link text-dark font-italic">
            <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
            Orders
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/categories"} class="nav-link text-dark font-italic">
            <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
            Categories
          </Link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
            ...
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link text-dark font-italic">
            <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
            ...
          </a>
        </li>
      </ul>
    </div>
  );
}
