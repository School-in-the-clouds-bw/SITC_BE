module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/sitc.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      // tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' }
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/testing.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    }
  }
};
