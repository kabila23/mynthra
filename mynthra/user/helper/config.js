if (process.env.NODE_ENV === "development") {
    let config = {
        env:{
            JWT_SECRET:'secretstring'
        },
        app: {
            origin: 'http://localhost:3000',
            port: 3000
        },
        db: {
            host: 'localhost',
            port: 27017,
            name: 'myntra'
        },
       
    };
    module.exports = config;
  }