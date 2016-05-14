## mongoa - Simple Query API for MongoDB

### Usage

This is a very thin API layer for querying a MongoDB. Thanks to [koa-mongo](https://github.com/nswbmw/koa-mongo) also supports connection pooling.

Using it you can do simple queries to find all objects in a collection that match a given property value:

    http://localhost:3000/{collection}?{property}={value}

### Example 

Given that you are looking for all objects in the collection *cities* with the property *name* set to Taipei, you just call:

    http://localhost:3000/cities?name=Taipei

*property* also supports the dot notation to query for sub-documents e.g. you can use `city.name=Taipei`. This would find all documents
where the property *name* of the sub-document *city* is set to *Taipei*.

### Configuration

Either directly edit the `config.js` and modify its [connection string](https://docs.mongodb.com/v3.2/reference/connection-string/) in the property *uri* or you set the env variable `MONGOLAB_URI` to the value of the connection string.

### Todos

Add *greater equal* and *less equal* queries - just by modifying the query string accordingly.
The following query example would than find all cities with 30,000 or more citizens:

    http://localhost:3000/cities?citizens>=30000



