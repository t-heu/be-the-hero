// Update with your config settings.
//require('dotenv/config')
module.exports = {
  development: {
    client: 'postgresql', //'sqlite3',
    connection: {
      host: 'salt.db.elephantsql.com',
      database: 'ciyieeng',
      user: 'ciyieeng',
      password: 'XmKd8WK1Ednr35gwCCV-wjIrneCOPwH5',
      //filename: './dev.sqlite3'
    },
    migrations: {
      directory: './src/database/migrations',
      //tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'ciyieeng',
      user:     'ciyieeng',
      password: 'XmKd8WK1Ednr35gwCCV-wjIrneCOPwH5'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'ciyieeng',
      user:     'ciyieeng',
      password: 'XmKd8WK1Ednr35gwCCV-wjIrneCOPwH5'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/database/migrations',
      tableName: 'knex_migrations'
    }
  }
};
