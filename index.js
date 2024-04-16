const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const registerRoute = require('./routes/register.route.js');
const path = require('path'); // Adicione esta linha para importar o módulo 'path'
const app = express();

// ( Middleware ) -> Permitindo que o nodemon.js receba json
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Configurando o middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use("/api/products", productRoute);
app.use("/api/registers", registerRoute);

// Rota para a página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

mongoose.connect("mongodb+srv://gabrielgomesport:cim9v5cMjrmHCljd@cruddb.txa5qb3.mongodb.net/?retryWrites=true&w=majority&appName=CrudDB")
.then(() => {
    console.log("Conected to badatase")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    })
})
.catch(() => {
    console.log("Fail to conected at database")
})