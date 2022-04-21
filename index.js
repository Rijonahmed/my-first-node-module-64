const express = require('express');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('look this is my girl friend is so cute i love you')
});

const users = [
  { name: 'rijon', id: 1, email: 'rijon@gmail.com' },
  { name: 'nihal', id: 2, email: 'nihal@gmail.com' },
  { name: 'tanvir', id: 3, email: 'tanvir@gmail.com' },
  { name: 'minhaz', id: 4, email: 'minhaz@gmail.com' },
  { name: 'arif', id: 5, email: 'arif@gmail.com' },
]

app.get('/users', (req, res) => {
  res.send(users)
});

app.post('/user', (req, res) => {

  console.log(req.body)
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user)
});

app.get('/user/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id)
  res.send(user)
});

app.listen(port, () => {
  console.log('listening to port', port);
})