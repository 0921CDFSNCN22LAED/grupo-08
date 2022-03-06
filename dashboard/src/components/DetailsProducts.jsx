import { useParams } from "react-router-dom";
export default function DetailProducts(props) {
  const { id } = useParams();
  return <h2>detalle del producto con id : {id} </h2>;
}
