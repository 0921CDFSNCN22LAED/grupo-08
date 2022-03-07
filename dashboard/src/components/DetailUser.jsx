import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useParams } from "react-router-dom";
export default function DetailUser() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const PORT = "http://localhost:3001";
  async function getUserInDb() {
    const response = await fetch(`${PORT}/api/users/${id}`);
    const data = await response.json();
    console.log(data);
    setData(data);
  }
  useEffect(() => {
    getUserInDb();
  }, [null]);
  const user = data ? data.data : null;
  let dateBirth;
  let createdAt;
  let updatedAt;
  let rol;
  if (user) {
    dateBirth = dayjs(user.dateBirth).format("DD/MM/YYYY");
    createdAt = dayjs(user.createdAt).format("DD/MM/YYYY/HH:mm:ss");
    updatedAt = dayjs(user.updatedAt).format("DD/MM/YYYY/HH:mm:ss");
  }

  user && (user.admin = 1) ? (rol = "admin") : (rol = "usuario");

  return !data ? (
    <div class="loader"></div>
  ) : (
    <div class="container bootstrap snippets bootdey">
      <div class="panel-body inf-content">
        <div class="row">
          <div class="col-md-4">
            <img
              alt=""
              style={{ width: "600px" }}
              title=""
              class="img-circle img-thumbnail isTooltip"
              src={require(`../../../website/public/img/users/${user.avatar}`)}
              data-original-title="Usuario"
            />
          </div>
          <div class="col-md-6">
            <strong>Información</strong>
            <br />
            <div class="table-responsive">
              <table class="table table-user-information">
                <tbody>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-asterisk text-primary"></span>
                        id
                      </strong>
                    </td>
                    <td class="text-primary">{(user, id)}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-user  text-primary"></span>
                        Nombre
                      </strong>
                    </td>
                    <td class="text-primary">{user.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-cloud text-primary"></span>
                        Apellido
                      </strong>
                    </td>
                    <td class="text-primary">{user.lastName}</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-bookmark text-primary"></span>
                        Dirección
                      </strong>
                    </td>
                    <td class="text-primary">{user.streetAddress}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-bookmark text-primary"></span>
                        País
                      </strong>
                    </td>
                    <td class="text-primary">{user.country}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-bookmark text-primary"></span>
                        Fecha de nacimiento
                      </strong>
                    </td>
                    <td class="text-primary">{dateBirth}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-eye-open text-primary"></span>
                        Rol
                      </strong>
                    </td>
                    <td class="text-primary">{rol}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-eye-open text-primary"></span>
                        Estado
                      </strong>
                    </td>
                    <td class="text-primary">
                      {user.active == 1 ? "activo" : "inactivo"}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-envelope text-primary"></span>
                        Email
                      </strong>
                    </td>
                    <td class="text-primary">{user.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-calendar text-primary"></span>
                        Creado en
                      </strong>
                    </td>
                    <td class="text-primary">{createdAt}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        <span class="glyphicon glyphicon-calendar text-primary"></span>
                        Editado en
                      </strong>
                    </td>
                    <td class="text-primary">{updatedAt}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
