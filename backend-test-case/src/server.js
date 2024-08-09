require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.SERVER_PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
        title: 'Library API',
        description: 'Library API Information',
        version: '1.0.0',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Local server'
        }
    ]
},
apis: ['./src/modules/book/routes/*.js', './src/modules/member/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const apiRouter = express.Router();
apiRoutes(apiRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server berjalan di port: ${port}`);
});