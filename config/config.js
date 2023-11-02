
const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb+srv://joaomarques08:12345678abc@cluster0.x6u2zvi.mongodb.net/Marketplace?retryWrites=true&w=majority'
}
module.exports = config