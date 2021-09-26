const configSwagger = {
  openapi: "3.0.0",
  info: {
    title: "UsersManagement API",
    version: "1.0.0",
    description: `This is a API for users management`,
    contact: {
      name: "alandeveloper@developer.com",
      url: "http://localhost:3333",
    },
  },
  paths: {
    "/users": {
      post: {
        tags: ["Users"],
        summary: "Create user",
        description: "Create a new user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    description: "Name of user",
                    example: "John Doe",
                  },
                  email: {
                    type: "string",
                    description: "Email of user",
                    example: "johndoe@domain.com",
                  },
                },
              },
            },
          },
        },
        responses: {
          201: {
            description: "Created new user",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "John Doe",
                    },
                    email: {
                      type: "string",
                      example: "johndoe@domain.com",
                    },
                    admin: {
                      type: "boolean",
                      example: false,
                    },
                    created_at: {
                      type: "date",
                      example: "2021-09-24",
                    },
                    updated_at: {
                      type: "date",
                      example: "2021-09-24",
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "User already exists.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "User already exists.",
                    },
                  },
                },
              },
            },
          },
        },
      },
      get: {
        tags: ["Users"],
        summary: "List users",
        description: "List all users",
        parameters: [
          {
            name: "user_id",
            in: "header",
            description: "String ID of the user to retrieve.",
            required: true,
            schema: {
              type: "string",
              minimum: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "A list all users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                        example: "John Doe",
                      },
                      email: {
                        type: "string",
                        example: "johndoe@domain.com",
                      },
                      admin: {
                        type: "boolean",
                        example: false,
                      },
                      created_at: {
                        type: "date",
                        example: "2021-09-24",
                      },
                      updated_at: {
                        type: "date",
                        example: "2021-09-24",
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: "User does not administrador.",
          },
        },
      },
    },
    "/users/{user_id}/admin": {
      patch: {
        tags: ["Users"],
        summary: "Turn user by ID into Administrator ",
        description: "Give the user admin permission",
        parameters: [
          {
            name: "user_id",
            in: "path",
            description: "String ID of the user to retrieve.",
            required: true,
            schema: {
              type: "string",
              minimum: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "John Doe",
                    },
                    email: {
                      type: "string",
                      example: "johndoe@domain.com",
                    },
                    admin: {
                      type: "boolean",
                      example: true,
                    },
                    created_at: {
                      type: "date",
                      example: "2021-09-24",
                    },
                    updated_at: {
                      type: "date",
                      example: "2021-09-24",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "User doesn't exists.",
          },
        },
      },
    },
    "/users/{user_id}": {
      get: {
        tags: ["Users"],
        summary: "Show a user by ID",
        description: "Show a unique user",
        parameters: [
          {
            name: "user_id",
            in: "path",
            description: "String ID of the user to retrieve.",
            required: true,
            schema: {
              type: "string",
              minimum: 1,
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "John Doe",
                    },
                    email: {
                      type: "string",
                      example: "johndoe@domain.com",
                    },
                    admin: {
                      type: "boolean",
                      example: false,
                    },
                    created_at: {
                      type: "date",
                      example: "2021-09-24",
                    },
                    updated_at: {
                      type: "date",
                      example: "2021-09-24",
                    },
                  },
                },
              },
            },
          },
          404: {
            description: "User doesn't exists.",
          },
        },
      },
    },
  },
  servers: [
    {
      url: "http://localhost:3333",
      description: "Development server",
    },
  ],
};

export { configSwagger };
