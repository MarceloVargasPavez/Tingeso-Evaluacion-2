import React, { Component } from "react";
import PropiedadesService from "../services/PropiedadesService";

class ListarPropiedadesComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      propiedades: [],
    };
  }

  componentDidMount() {
    PropiedadesService.getPropiedades().then((res) => {
      this.setState({ propiedades: res.data });
    });
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Lista de Propiedades</h2>
        <div className="row"></div>
        <br></br>
        <div className="row">
          <table className="table table-striped table-bordered tabla-acopios">
            <thead>
              <tr>
                <th> Código Proveedor</th>
                <th> Porcentaje Sólidos</th>
                <th> Porcentaje Grasas</th>
              </tr>
            </thead>
            <tbody>
              {this.state.propiedades.map((propiedades) => (
                <tr key={propiedades.id}>
                  <td> {propiedades.codigo_proveedor}</td>                    
                  <td> {propiedades.porcentaje_solidos} </td>
                  <td> {propiedades.porcentaje_grasas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListarPropiedadesComponent;