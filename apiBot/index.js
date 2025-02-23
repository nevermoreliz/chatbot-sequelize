const express = require("express");
const app = express();
var cors = require('cors');

const PORT = process.env.PORT ?? 4000;

/**
 * Clase de API REST
 */
class ServerBotAPI {
  providerWS;
  providerDB;
  constructor(_providerWS, _providerDB) {
    this.providerWS = _providerWS;
    this.providerDB = _providerDB;
  }

  start() {
    const middleware = (req, _, next) => {
      req.ws = this.providerWS
      req.db = this.providerDB
      next()
    }

    // configurar CORS
    app.use(cors());
    // lectura y parseo del body
    app.use(express.json());


    // aqui invocamos a las rutas
    app.use("/api", middleware, require("./routes"));

    // app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    app.listen(PORT, () => console.log(`http://localhost:${PORT}/api/qr`));
  }
}

module.exports = ServerBotAPI;
