export default function ImagesDetailProduct(props) {
  return (
    <div className="pro-img-list">
      <a href="#">
        <img
          src={require(`../../../website/public/img/products/${props.image}`)}
          alt=""
          style={{ width: "300px" }}
        />
      </a>
    </div>
  );
}
