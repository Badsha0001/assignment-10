const express = require('express')
const app = express();
const cors = require('cors')

const port = process.env.PORT || 5000;

app.use(cors())

const categories = require('./data/categories.json')
const courses = require('./data/coursesdata.json')

app.get('/', (req, res) => {
    res.send('good job badsha.. API is running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const categoryId = req.params.id;
    if (categoryId === '5') {
        res.send(courses)
    }
    else {
        const courseCategory = courses.filter(c => c.category_id === categoryId);
        res.send(courseCategory);
    }

});

app.get('/courses', (req, res) => {
    res.send(courses)
});


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c._id === id);
    res.send(selectedCourse);
});

app.listen(port, () => {
    console.log('Courses server running on port ', port);
});
