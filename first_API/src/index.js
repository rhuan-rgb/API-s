const express = require("express"); //importa o módulo 'express'

//Define uma classe para organizar a lógica da apliacação
class AppController {
  constructor() {
    //Cria uma nova instância do Express dentro da classe
    this.express = express();
    //chama o método middlewares para configurar os middlewares
    this.middlewares();
    //chama o método routes para definir as rotas da API
    this.routes();
  }
  middlewares() {
    //Permitir que a aplicação receba dados em formato JSON nas requisições
    this.express.use(express.json());
  }

  routes() {
    // Define uma rota GET para o caminho /health/
    this.express.get("/health/", (req, res) => {
      res.send({ status: "OK", nome: "Rhuan" });
    });//essa rota é usada para verificar se a API está ok
  }
}

// Exportando a instância de Express configurada, para que seja acessada em outros arquivos.
module.exports = new AppController().express;