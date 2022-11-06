import express from 'express'
import path from 'path'

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/index.html'));

})
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})