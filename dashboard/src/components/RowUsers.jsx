export default function RowUsers(props) {
  return (
    <tbody>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.lastName}</td>
        <td>{props.country}</td>
      </tr>
    </tbody>
  );
}
