const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.json())

morgan('tiny')

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

const requestLogger = morgan('tiny', (tokens, request, response) => {
  console.log(request)
  return [
    tokens.method(request, response),
    tokens.url(request, response),
  ].join(' ')
})

app.use(requestLogger)

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
})

app.get('/info', (request, response) => {
  const timestamp = new Date().toString();
  response.set('Content-Type', 'text/html');
  response.send(`
    <p>Phonebook has info for ${contactInfo.length} people </p>
    <p>${timestamp}</p>
  `);
})

app.get('/api/persons', (request, response) => {
  response.send(contactInfo);
})

app.get('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const contact = contactInfo.find(contact => contact.id === id);
  console.log(contact)
  if (contact) {
    response.send(contact);
  } else {
    response.status(404).end()
  }  
})

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  
  const nameExist = contactInfo.find(contact => contact.name === body.name)
  const numberExist = contactInfo.find(contact => contact.number === body.number)


  if (nameExist || numberExist) {
    return response.status(409).json({
      error: 'name or number has already been added. try again.'
    })
  }

  const contactId = Math.floor(Math.random() * (Math.floor(10000) - Math.ceil(1)) + Math.ceil(1))
  
  const newContact = {
    id: contactId.toString(),
    name: body.name,
    number: body.number
  }

  contactInfo = contactInfo.concat(newContact)

  response.json(newContact)
})

app.delete('/api/persons/:id', (request, response) => {
  const id = request.params.id;
  const idFound = contactInfo.find(contact => contact.id === id);
  if (idFound) {
    contactInfo = contactInfo.filter(contact => contact.id !== id)
    response.status(204).end();
  } else {
    response.status(404).end()
  }
  
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})