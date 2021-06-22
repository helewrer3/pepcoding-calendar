const express = require('express');
const router = express.Router();
const {addTeacher, getTeachers} = require('../controllers/teacher')
const {addClass, getClasses, getClassesById} = require('../controllers/class')

router.post('/teacher', async (req, res) => {
    console.log(req.body.name);
    const result = await addTeacher(req.body.name);
    if(result == undefined) res.status(400).send();
    else res.send();
})

router.get('/teacher', async (req, res) => {
    const result = await getTeachers();
    if(result == undefined) res.status(400).send();
    else{
        console.log(result);
        let names = [];
        result.forEach(ele => {
            names.push({
                'name': ele.dataValues.name,
                'id': ele.dataValues.id,
            })
        });
        console.log(names);
        res.json({'names': names});
    }

})

router.post('/class', async (req, res) => {
    const query = await getClassesById(req.body.year, req.body.month, req.body.date, req.body.teacher);
    if(query == undefined) res.status(400).send();
    else{
        let flag = true;
        query.forEach(ele => {
            flag = flag && (req.body.end < ele.dataValues.start || req.body.start > ele.dataValues.end);
        })
        if(flag){
            const result = await addClass(req.body.name, req.body.start, req.body.end, req.body.year, req.body.month, req.body.date, req.body.teacher);
            console.log(result);
            res.send();
        }
        else res.status(400).send();
    }
})

router.get('/:year/:month/:date', async (req, res) => {
    const result = await getClasses(req.params.year, req.params.month, req.params.date);
    if(result == undefined) res.status(400).send();
    else{
        let classes = [];
        result.forEach(ele => {
            classes.push({
                'name': ele.dataValues.name,
                'start': ele.dataValues.start,
                'end': ele.dataValues.end,
                'teacher': ele.dataValues.teacher.dataValues.name
            })
        })
        res.json({
            'classes' : classes
        });
    }
})

module.exports = router;