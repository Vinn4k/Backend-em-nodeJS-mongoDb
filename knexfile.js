// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
      migrations:{
    directory: './src/database/migrations'
  },
  useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    debug: true,
    // busca a variavel de ambiente com string de conexão
    connection: process.env.DATABASE_URL,
    migrations: {
      // __dirname pra reconhecer o caminho das pastas no heroku
      directory: __dirname + '/src/database/migrations'
    },
  },

  production: {
    client: 'postgresql',
    debug: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
  }
};
