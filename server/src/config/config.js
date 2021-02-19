require('dotenv').config()

module.exports = {
    port: process.env.PORT || 8080,
    db: {
        database: process.env.DB_NAME || 'edsPatientCounter',
        user: process.env.DB_USER || 'edsPatientCounter',
        password: process.env.DB_PASS || 'edsPatientCounter',
        options: {
            dialect: process.env.Dialect || 'mysql',
            host: process.env.HOST || 'localhost'
        },
    dialectOptions: {
            socketPath: "/var/run/mysqld/mysqld.sock"
        }
    }
}

