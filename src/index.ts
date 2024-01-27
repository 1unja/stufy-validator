import express from 'express'
import { productRouter } from './routes/products-routes'
const app = express()
const port = 3000


app.use('/products', productRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})