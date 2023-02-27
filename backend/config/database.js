const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "172.31.27.95"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi-database"),
      user: env("DATABASE_USERNAME", ""),
      password: env("DATABASE_PASSWORD", "strapi-database2023"),
    },
    useNullAsDefault: true,
  },
});
