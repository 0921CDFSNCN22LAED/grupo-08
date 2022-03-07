import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImagesDetailProduct from "./ImagesDetailProduct";
export default function DetailProducts() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const PORT = "http://localhost:3001";
  async function getProductInDb() {
    const response = await fetch(`${PORT}/api/products/${id}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    getProductInDb();
  }, [null]);
  const product = data ? data.data : null;
  const images = data ? data.data.image : null;
  const category = data ? data.data.category : null;
  const price = data ? data.data.price[0] : null;
  return !data ? (
    <div class="loader"></div>
  ) : (
    <div class="container bootdey">
      <div class="col-md-12">
        <section class="panel">
          <div class="panel-body">
            <div class="col-md-6 d-flex">
              {images.map((image) => (
                <ImagesDetailProduct image={image.filename} />
              ))}
            </div>
            <div class="col-md-6">
              <h4 class="pro-d-title">
                <a href="#" class="">
                  {product.name}
                </a>
              </h4>
              <p>{product.longDescription}</p>
              <div class="product_meta">
                <span class="posted_in">
                  {" "}
                  <strong>Categorías:</strong>{" "}
                  {category.map((cat) => cat.categoryName + ", ")}
                </span>
              </div>
              <div class="m-bot15">
                {" "}
                <strong>Precio : </strong>{" "}
                <span class="amount-old">$ {price.priceDiscount}</span>{" "}
                <span class="pro-price">$ {price.price}</span>
              </div>
              <strong>Descuento : </strong>{" "}
              <span class="text-success"> {price.discount}%</span>
              <div class="form-group">
                <label>Cantidad</label>
                <input
                  type="quantiy"
                  placeholder="1"
                  class="form-control quantity"
                />
              </div>
              <p>
                <button class="btn btn-round btn-danger" type="button">
                  <i class="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
