const express = require('express');
const router = express.Router();
const {addTeacher, getTeachers} = require('../controllers/teacher')
const {addClass, getClasses, getClassesById} = require('../controllers/class')

router.post('/teacher', async (req, res) => {
    try {
        const result = await addTeacher(req.body.name);
        if(result == undefined) res.status(400).send();
        else res.send();
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
})

router.get('/teacher', async (req, res) => {
    try {
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
            res.json({'names': names});
        }
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }

})

router.post('/class', async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
})

router.get('/:year/:month/:date', async (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        res.status(400).send();
    }
})

module.exports = router;