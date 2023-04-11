import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: 'Antojitos Frit',
    version: '1.0.0'
  },
  servers: [
    {
      url: 'http://localhost:3000'
    }
  ],
  components: {
    securitySchemes: {
      // validation with JWT
    },
    schemas: {
      product: {
        type: "object",
        required: ['title', 'description', 'price'],
        properties: {
          title: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          price: {
            type: 'number'
          }
        }
      }
    },
  }
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition, 
  apis: ["./src/routes/*.ts"]
};

export default swaggerJSDoc(swaggerOptions);