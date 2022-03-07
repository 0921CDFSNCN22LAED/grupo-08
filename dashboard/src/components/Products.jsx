import { useEffect, useState, useRef } from "react";
import axios from "axios";
import dayjs from "dayjs";
import RowProducts from "./RowProducts";
import ColumProducts from "./ColumProducts";
import { Link } from "react-router-dom";
import ButtonsPaginate from "./ButtonsPaginate";

export default function Products() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  //const [countProd, setCountProd] = useState(1000000000);
  let countProd;
  const limit = 10;
  const PORT = "http://localhost:3001";
  async function getProductsInDb() {
    const response = await axios(`${PORT}/api/products?page=${page}`);
    setData(response.data);
    //  setCountProd(response.data.meta.count);
  }
  countProd = data ? data.meta.count : null;
  function previous() {
    if (page != 1) {
      setPage(page - 1);
    }
  }
  function next() {
    setPage(page + 1);
  }
  useEffect(() => {
    getProductsInDb();
  }, [null]);
  useEffect(() => {
    getProductsInDb();
  }, [page]);
  const products = data ? data.data : "";
  console.log(products);

  return (
    <>
      {!data ? (
        <div class="loader"></div>
      ) : (
        <table class="table table-dark table-striped">
          <ColumProducts />
          {products.map((product) => (
            // createdAt = dayjs(products.createdAt).format("DD/MM/YYYY/HH:mm:ss");
            <Link to={`/products/${product.id}`}>
              <RowProducts
                keys={product.id}
                id={product.id}
                name={product.name}
                price={product.price[0].price}
                size={product.size.size}
                material={product.material.material}
                active={product.active == 1 ? "activo" : "desactivada"}
                category={product.category.map((cat) => cat.categoryName + " ")}
                createdAt={dayjs(product.createdAt).format("DD/MM/YYYY")}
              />
            </Link>
          ))}
        </table>
      )}
      <ButtonsPaginate
        previous={previous}
        next={next}
        page={page}
        limit={limit}
        countProd={countProd}
      />
    </>
  );
}
