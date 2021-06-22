const {Teacher} = require('../db/models');

const addTeacher = async (name) => {
    try {
        const teacher = await Teacher.create({
            name: name
        });
        return teacher;
    } catch (error) {
        console.log(error);
    }
}

const getTeachers = async () => {
    try {
        const teachers = await Teacher.findAll();
        return teachers;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {addTeacher, getTeachers};