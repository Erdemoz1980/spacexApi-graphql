const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const schema = require('./schema/schema');

dotenv.config({ path: './config/config.env' })
//connectDB();

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))
const PORT = process.env.PORT;


app.listen(PORT, () => console.log(`Server is listening on PORT:${PORT} in ${process.env.NODE_ENV} mode`));
