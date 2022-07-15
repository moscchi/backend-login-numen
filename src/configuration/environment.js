export const enviroment = {
    PORT: process.env.PORT || 8080,
    DB_DIR: process.env.DB_DIR || '',
    MONGO: process.env.MONGO || '',
    PRIVATE_KEY: process.env.PRIVATE_KEY || 'secret',
};