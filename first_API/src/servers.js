//importar a instância do Express configurada em index.js
const app = require('./index');
// inicia o servidor na porta 5000, neste caso a API será acessível em http://localhost:5000/
app.listen(5000);