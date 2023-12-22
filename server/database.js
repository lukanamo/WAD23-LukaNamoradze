const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "123456", // Enter your password here
    database: "testWad", //Try to use the same name for your database
    host: "localhost",
    port: "5432"
});


const execute = async(query1, query2, query3) => {
    try {
        await pool.connect(); // gets connection
        await pool.query(query1); // sends queries
        await pool.query(query2); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const createTblQuery1 = `
    CREATE TABLE IF NOT EXISTS "courses" (
	    "id" SERIAL PRIMARY KEY,         
	    "coursename" VARCHAR(200) NOT NULL,
        "coursecode" VARCHAR(200) NOT NULL,
        "courseects" integer NOT NULL,
        "studentsnumbers" integer NOT NULL,
        "groupsnumbers" integer NOT NULL,
        "description" VARCHAR(200)
    );`;


const insertDataQuery = `WITH data (coursename, coursecode, courseects,  studentsnumbers, groupsnumbers, description) AS 
    (
    VALUES
        ('Web Application Development', 'LTAT.05.004', 6,  210, 7, 'Web Application Development ...'),
        ('Enterprise System Integration', 'MTAT.03.229', 6, 60, 2,  'Enterprise System Integration ...'),
        ('Requirements Engineering', 'MTAT.03.306', 6, 120, 4, 'Requirements Engineering ...'),
        ('Systems Modelling', 'MTAT.03.083', 6, 60, 2, 'Systems Modelling ...')
    )
    
    INSERT INTO courses(coursename, coursecode, courseects,  studentsnumbers, groupsnumbers,  description) 
    SELECT   d.coursename, d.coursecode, d.courseects,  d.studentsnumbers, d.groupsnumbers, d.description 
    FROM data d
    WHERE NOT EXISTS (SELECT * FROM courses WHERE id = 1);`


// A function to execute the previous query   
execute(createTblQuery1, insertDataQuery).then(result => {
    if (result) {
        console.log('If does not exists, table "courses" is created');
    }
});

module.exports = pool;