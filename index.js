import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {

  const id = 'ASI'
  try {
    const resp = await axios.get(`https://api.joshuaproject.net/v1/continents/:${id}.json?api_key=dc0144a5838c` )
    res.send(resp.data)
  } catch (error) {
    console.error(error)
  }
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
