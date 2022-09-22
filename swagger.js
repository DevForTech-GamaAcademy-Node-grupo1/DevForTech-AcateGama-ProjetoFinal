const swaggerAutogen = require('swagger-autogen')();

const outputFile = './src/docs/swagger_output.json';
const endpointsFiles = ['./src/server.js'];

const doc = {
  info: {
    title: 'My API',
    description: 'Description',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

swaggerAutogen(outputFile, endpointsFiles).then(() => {
})