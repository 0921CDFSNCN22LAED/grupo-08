import React, { useLayoutEffect } from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import RowProducts from "./RowProducts";
import ColumProducts from "./ColumProducts";

export default function Products() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  //const [countProd, setCountProd] = useState(1000000000);
  let countProd = 200;
  const limit = 10;
  const PORT = "http://localhost:3001";
  async function getProductsInDb() {
    const response = await axios(
      `${PORT}/api/products?page=${page}&countProd=${countProd}`
    );
    setData(response.data);
    //  setCountProd(response.data.meta.count);
  }
  countProd = data ? data.meta.count : 200;
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
  return (
    <>
      {!data ? (
        <h2>Cargando...</h2>
      ) : (
        <table class="table table-dark table-striped">
          <ColumProducts />
          {products.map((product) => (
            <RowProducts
              keys={product.id}
              id={product.id}
              name={product.name}
              price={product.price[0].price}
              color={product.color[0].name}
              size={product.size.size}
              material={product.material.material}
              active={product.active == 1 ? "activo" : "desactivada"}
              category={
                product.category[0] ? product.category[0].categoryName : ""
              }
              createdAt={product.createdAt}
            />
          ))}
        </table>
      )}
      <button
        type="button"
        class="btn btn-dark"
        onClick={previous}
        id="btnPreviousProduct"
      >
        Previous
      </button>
      {countProd - page * limit > 0 ? (
        <button
          type="button"
          class="btn btn-dark"
          onClick={next}
          id="btnNextProduct"
        >
          Next
        </button>
      ) : (
        ""
      )}
    </>
  );
}
