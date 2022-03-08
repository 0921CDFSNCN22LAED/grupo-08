import { Link } from "react-router-dom";

export default function CardProducts(props) {
  return (
    <div class="col-md-3">
      <div class="ibox" id="ibox">
        <div class="ibox-content product-box">
          <div class="product-imitation">
            <img
              src={require(`../../../website/public/img/products/${props.image}`)}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div class="product-desc">
            <span class="product-price">$ {props.price}</span>
            <small class="text-muted">Categoría: {props.category} </small>
            <Link to={`/products/${props.id}`} class="product-name">
              {" "}
              {props.name}
            </Link>

            <div class="small m-t-xs">{props.shortDescription}</div>
            <div class="m-t text-righ">
              <Link
                to={`/products/${props.id}`}
                class="btn btn-xs btn-outline btn-dark"
              >
                Info <i class="fa fa-long-arrow-right"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
