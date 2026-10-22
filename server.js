const express = require('express');
const clientesRoutes = require('./src/routes/clientesRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/clientes', clientesRoutes);

app.get('/', (req, res) => {
  res.json({ mensagem: 'API de clientes e pedidos funcionando!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
