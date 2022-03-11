import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [product, setProduct] = useState(null);
  const [order, setOrder] = useState(null);
  const [user, setUser] = useState(null);
  const PORT = "http://localhost:3001";
  async function getMetrics() {
    const data = await Promise.all([
      fetch(`${PORT}/api/metrics/product`),

      fetch(`${PORT}/api/metrics/order`),
      fetch(`${PORT}/api/metrics/user`),
    ]);
    const metricsProduct = await data[0].json();
    const metricsOrder = await data[1].json();
    const metricsUser = await data[2].json();
    setProduct(metricsProduct);
    setOrder(metricsOrder);
    setUser(metricsUser);
  }
  useEffect(() => {
    getMetrics();
  }, [null]);

  const porCenUser = (user * 100) / 2000;
  const porCenProduct = (product * 100) / 2000;
  const porCenOrder = (order * 100) / 100;
  console.log(order, 12312);
  return (
    <>
      {!product && !order && !user ? (
        <div class="loader"></div>
      ) : (
        <div class="col-md-10 w-100 ">
          <div class="row ">
            <div class=" col-lg-6">
              <Link to={"/orders"} style={{ textDecoration: "none" }}>
                <div class="card l-bg-cherry" id="cardHome">
                  <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large">
                      <i class="fas fa-shopping-cart"></i>
                    </div>
                    <div class="mb-4">
                      <h5 class="card-title mb-0">Nuevas Ordenes</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">{order}</h2>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                          {porCenOrder}% <i class="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      class="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        class="progress-bar l-bg-cyan"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${porCenOrder}` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div class="col-lg-6">
              <Link to={"/users"} style={{ textDecoration: "none" }}>
                <div class="card l-bg-blue-dark" id="cardHome">
                  <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large">
                      <i class="fas fa-users"></i>
                    </div>
                    <div class="mb-4">
                      <h5 class="card-title mb-0">Usuarios</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">{user}</h2>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                          {porCenUser}% <i class="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      class="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        class="progress-bar l-bg-green"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${porCenUser}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div class=" col-lg-6">
              <Link to={"/products"} style={{ textDecoration: "none" }}>
                <div class="card l-bg-green-dark" id="cardHome">
                  <div class="card-statistic-3 p-4">
                    <div class="card-icon card-icon-large">
                      <i class="fas fa-ticket-alt"></i>
                    </div>
                    <div class="mb-4">
                      <h5 class="card-title mb-0">Productos</h5>
                    </div>
                    <div class="row align-items-center mb-2 d-flex">
                      <div class="col-8">
                        <h2 class="d-flex align-items-center mb-0">
                          {product}
                        </h2>
                      </div>
                      <div class="col-4 text-right">
                        <span>
                          {porCenProduct}% <i class="fa fa-arrow-up"></i>
                        </span>
                      </div>
                    </div>
                    <div
                      class="progress mt-1 "
                      data-height="8"
                      style={{ height: "8px" }}
                    >
                      <div
                        class="progress-bar l-bg-orange"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: `${porCenProduct}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
