require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Library API',
            description: 'Library API Information',
            version: '1.0.0',
        },
        servers: ['http://localhost:3000']
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server berjalan di port: ${port}`);
});