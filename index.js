const express = require('express')
const app = express()

const eventList = [
    {
        id: 1,
        name: 'Event 1',
        date: '2020-01-01',
    },
    {
        id: 2,
        name: 'Event 2',
        date: '2020-01-02',
    }
]

//Get all events

app.get('/events', (req, res) => {
    res.send(eventList)
})

app.get('/events/:id', (req, res) => {
    const event = eventList.find(event => event.id === parseInt(req.params.id))
    if (!event) {
        res.status(404).send({message:'Event not found'})
    }
    else {
    res.send(event)
}
})

app.listen(8000,()=>{
    console.log('server is running on port 8000')
})