const express = require('express');
let router = express.Router();


const courseData = {
  courses:  [
  { 
    id: '1',
    name: 'React',
    description: 'Mark wants to know your location.',
  },
  { 
    id: '2',
    name: 'Javascript',
    description: 'Learn javascript today.',
  },
  { 
    id:'3',
    name: 'REST_API',
    description: 'Learn how to REST.',
  }]

}

//return all courses
router.get('/', (req, res) => { res.json(courseData) });

//add new course
router.post('/', (req, res) => {

    courseData.courses.push({
        id: courseData.courses.length +1,
        name: req.body.name,
        description: req.body.description,
    })
    
    res.sendStatus(201);
    
})

// edit course
router.put('/:courseId', (req, res) => {
    var cId = req.params.courseId - 1;
    

    courseData.courses.find( s => {
       if(s.id == cId) {
        courseData.courses[cId].name = req.body.name;
        courseData.courses[cId].description = req.body.description;
        res.json('PUT done')

       } 
    })
})

// remove
router.delete('/:courseId', function(req, res){
    var cId = req.params.courseId - 1;
    delete courseData.courses[cId];
    res.send('Delete done');
});


module.exports = router