import axios from "axios";

const PROPIEDADES_API_URL = "http://localhost:8080/propiedades/";

class PropiedadesService {
  subirPropiedades(formData) {
    return axios.post(PROPIEDADES_API_URL, formData);
  }

  getPropiedades() {
    return axios.get(PROPIEDADES_API_URL);
  }
}

export default new PropiedadesService();
