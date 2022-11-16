import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import TablaProducto from "./producto/TablaProducto";
import { useEffect, useState } from "react";
import { consultarApi } from "../helpers/queries";

const AdministradorProductos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    consultarApi().then((respuesta) => {
      console.log(respuesta);
      setProductos(respuesta);
    });
  }, []);

  return (
    <section className="colorFondo fuente">
      <Container>
        <div>
          <h2 className="display-3 text-center by-5 text-light">
            Administrador de Productos
          </h2>
          <hr />
        </div>
        <div className="table-responsive">
          <div className="d-flex justify-content-around  my-3 text-light">
            <h3>Listado de Productos</h3>
            <Button variant="outline-info">Agregar</Button>
          </div>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Codigo</th>
                <th> NombreProducto</th>
                <th> Estado</th>
                <th> Precio</th>
                <th> Detalle</th>
                <th> Categoria</th>
                <th> Imagen</th>
                <th> Administrar</th>
              </tr>
            </thead>
            <tbody>
                {productos.map((producto)=><TablaProducto key={producto.id} producto={producto}/>)}
              
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default AdministradorProductos;
