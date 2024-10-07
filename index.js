import bodyParser from 'body-parser';
import express from 'express'
const app = express();


app.use(bodyParser());



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
