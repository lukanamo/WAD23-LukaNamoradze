
const express = require('express');
const pool = require('./database');
const cors = require('cors')

const port = process.env.PORT || 3000;
const app = express();


app.use(cors({ origin: 'http://localhost:8080', credentials: true }));
app.use(express.json());

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});


app.get('/api/courses', async(req, res) => {
    try {
        console.log("A GET all request has arrived");
        const course = await pool.query(
            "SELECT * FROM courses"
        );
        res.json(course.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.get('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const courseQuery = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
      if (courseQuery.rowCount > 0) {
        res.json(courseQuery.rows[0]);
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server error' });
    }
  }); 

app.put('/api/courses/:id', async (req, res) => {
    const { id } = req.params;
    const { studentsnumbers, groupsnumbers, description } = req.body;
    
    try {
      const updateQuery = `
        UPDATE courses 
        SET studentsnumbers = $1, groupsnumbers = $2, description = $3 
        WHERE id = $4
      `;
      const values = [studentsnumbers, groupsnumbers, description, id];
      const updateResult = await pool.query(updateQuery, values);
  
      if (updateResult.rowCount > 0) {
        res.json({ message: 'Course updated successfully' });
      } else {
        res.status(404).json({ message: 'Course not found' });
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server error' });
    }
});