const express = require('express'); 

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.express.use(express.json());
      }
    
    routes() {
        this.express.get("/Health/", (req, res) => {
          res.send({nome: "Rhuan", idade: '16', cpf: '18873592860' });
        });
      }
}

module.exports = new AppController().express;