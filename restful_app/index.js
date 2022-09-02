const express = require('express');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

const app = express();
const methodOverride = require('method-override');

const comments = [
    {
        username: "Porter JR",
        comment: "Like I had it easy, get tf outta here lol... too much like I said",
        id: uuidv4()
    },
    {
        username: "smallhands",
        comment: "lorem ipsum, dolor sit amet consectetur fugiat soluta ab sapiente amet fonsequuntur!",
        id: uuidv4()
    },
    {
        username: "seniortimes",
        comment: "much like I said, this won't go anywhere. Screw it",
        id: uuidv4()
    },
    {
        username: "spiritedGoat",
        comment: "Ball is life, need more time to get tf outta here lol...",
        id: uuidv4()
    }
]

app.listen(3000, () => {
    console.log('Listening on port : 3000');
});
app.use(methodOverride('_method')); //middleware to enable use of a PATCH, DELETE or PUT method on a form
app.use(express.urlencoded({ extended: true })); // encoding to enable use encode req.body on a post request
app.use(express.json()); // enables json parsing on the req.body for a post request

app.set('view engine', 'ejs'); // sets the view engine to ejs

app.set('views', path.join(__dirname, 'views')) // sets the views directory path

// routes for our app
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
}) // index route

app.get('/comments/new', (req, res) => {
    res.render('comments/form');
}) // form rendering route

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newText = req.body.comment
    const foundComment = comments.find(comment => comment.id === id);
    foundComment.comment = newText;
    res.redirect('/comments')
}) //update route

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/edit', { comment })
}) // edit form rendering route

app.post('/comments', (req, res) => {
    const { user: username, comment } = req.body;
    comments.push({ username, comment, id: uuidv4() })
    res.redirect('/comments')
}) // post route

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(comment => comment.id === id);
    res.render('comments/comment', { comment })
}) // show route for a specific comment