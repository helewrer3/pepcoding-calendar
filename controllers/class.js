const {Class, Teacher} = require('../db/models');

const getClasses = async (year, month, date) => {
    try {
        const classes = await Class.findAll({include: [Teacher], where : {year: year, month: month, date: date}});
        return classes;
    } catch (error) {
        console.log(error);
    }
}

const getClassesById = async (year, month, date, teacherId) => {
    try {
        const classes = await Class.findAll({where : {year: year, month: month, date: date, teacherId: teacherId}});
        return classes;
    } catch (error) {
        console.log(error);
    }
}

const addClass = async (name, start, end, year, month, date, teacherId) => {
    try {
        const newclass = await Class.create({
            name: name,
            start: start,
            end: end,
            year: year,
            month: month,
            date: date,
            teacherId: teacherId
        });
        return newclass;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getClasses, addClass, getClassesById};