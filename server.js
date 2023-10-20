const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors({
    origin:'*',
}))
 
app.get("/", (req, res) => {
    res.send("hello shivraj");
});
app.post("/generateApk", (req, res) => {
    const body = req.body; 
    res.send("apk sent back to client");
});

app.listen(3000, () => {
    console.log(`Server running on port `);
  });