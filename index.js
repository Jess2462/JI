const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
  res.send('3...2...1...');
});


app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);
});
app.get('/1', (req, res) => {
  res.send('Description');
});
app.get('bio', (req, res) => {
  res.sendFile(__dirname+'/Guy1.html');
});
