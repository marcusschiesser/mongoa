module.exports = {
    "uri": process.env.MONGODB_URI || "mongodb://localhost:27017/myproject",
    "max": 100,
    "min": 1,
    "timeout": 30000,
    "log": false
};
