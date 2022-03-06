import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ButtonsPaginate from "./ButtonsPaginate";
import RowOrdes from "./RowOrdes";
import RowUsers from "./RowUsers";

export default function Users() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const PORT = "http://localhost:3001";
  const limit = 10;
  let countUser;

  async function getUserInDB() {
    const response = await fetch(`${PORT}/api/users?page=${page}`);
    const data = await response.json();
    setData(data);
  }
  function previous() {
    if (page != 1) {
      setPage(page - 1);
    }
  }
  function next() {
    setPage(page + 1);
  }
  useEffect(() => {
    getUserInDB();
  }, [null]);
  useEffect(() => {
    getUserInDB();
  }, [page]);
  countUser = data ? data.meta.count : null;
  const users = data ? data.data : null;
  return (
    <>
      {!data ? (
        <div class="loader"></div>
      ) : (
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">País</th>
            </tr>
          </thead>
          {users.map((user) => (
            <Link to={`/users/${user.id}`}>
              <RowUsers
                key={user.id}
                id={user.id}
                name={user.name}
                lastName={user.lastName}
                country={user.country}
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
        countProd={countUser}
      />
    </>
  );
}
