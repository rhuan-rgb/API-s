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
    const users = [];

    this.express.post("/users", (req, res) => {
      const {id, nome, email, senha} = req.body;
      users.push({id,nome,email,senha});
      res.status(200).send({message:'usuário cadastrado com sucesso'});
    });

    this.express.post("/auth", (req, res) => {
      const {email, senha} = req.body;
      const user = users.find((user) => user.email == email && user.senha == senha);
      if(user){
        res.status(200).send({message: "autenticação aprovada. Usuário logado."})
      }
      else{
        res.status(400).send({message: "autenticação reprovada. Credenciais faltando ou incorretas."})
      }
    })


    this.express.get("/users/:id", (req, res) => {
      const {id} = req.params;
      const user = users.find((user) => user.id == id);
      if(user){
        res.status(200).send(user);
      }
      else{
        res.status(400).send({message: "Usuário não encontrado"});
      }
    });

    this.express.get("/health/", (req, res) => {
      res.send({ status: "OK", nome: "Rhuan" });
    });//essa rota é usada para verificar se a API está ok
  }
}

// Exportando a instância de Express configurada, para que seja acessada em outros arquivos.
module.exports = new AppController().express;