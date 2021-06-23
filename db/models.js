const sequelize = require('sequelize');
let db;
if(process.env.DATABASE_URL) db = new sequelize(process.env.DATABASE_URL, {
    dialect: 'postgresql',
    dialectOptions: {
        ssl: {  
            require: true,
            rejectUnauthorized: false 
        }
    }
});
else{
    db = new sequelize({
        dialect: 'sqlite',
        storage: __dirname + '/storage.db'
    });
}

const col_id = {
    type: sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
};

const Teacher = db.define('teacher', {
    id: col_id,
    name: {
       type: sequelize.DataTypes.STRING(40),
       unique: true
    }
});

const Class = db.define('class', {
    id: col_id,
    name: sequelize.DataTypes.STRING(40),
    start: sequelize.DataTypes.NUMBER,
    end: sequelize.DataTypes.NUMBER,
    date: sequelize.DataTypes.NUMBER,
    month: sequelize.DataTypes.NUMBER,
    year: sequelize.DataTypes.NUMBER
})

Teacher.hasMany(Class);
Class.belongsTo(Teacher);

module.exports = {db, Teacher, Class};