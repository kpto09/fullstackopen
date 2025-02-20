const express = require('express')
const app = express()

app.use(express.json())

let contactInfo = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

app.get('/api/persons', (request, response) => {
  response.send(contactInfo);
})

app.get('/info', (request, response) => {
  const timestamp = new Date().toString();
  response.set('Content-Type', 'text/html');
  response.send(`
    <p>Phonebook has info for ${contactInfo.length} people </p>
    <p>${timestamp}</p>
  `);
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})