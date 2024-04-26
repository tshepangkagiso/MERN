const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.get('/', async (req,res) =>{
    //http://localhost:5000/exercises/
    await Exercise.find()
        .then(exercises=> res.json(exercises))
        .catch(err => res.status(400).json('Error:' + err))
});
router.get('/:id', async(req,res)=>{
    await Exercise.findById(req.params.id)
        .then((exercise) => res.json(exercise))
        .catch(err => res.status(400).json('Error:' + err))
});


router.post('/add', async(req,res)=>{
    //http://localhost:5000/exercises/add
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({username,description,duration,date});


    await newExercise.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err))
});

router.put('/update/:id', async(req,res)=>{
    //http://localhost:5000/exercises/update/
    await Exercise.findById(req.params.id)
        .then( async exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            await exercise.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error:' + err))
        })
        .catch(err => res.status(400).json('Error:' + err))
});

router.delete('/:id', async(req,res)=>{
    await Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error:' + err))
});


module.exports = router