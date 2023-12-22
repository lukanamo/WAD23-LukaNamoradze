<template>
  <div class="course-container" v-if="courseDetails">
    <h1>{{ courseDetails.coursename }} - {{ courseDetails.coursecode }} - {{ courseDetails.courseects }} ECTS</h1>
    <div class="course-stat">
      <label>MAX NUMBER OF STUDENTS:</label>
      <input type="number" v-model="courseDetails.studentsnumbers" />
    </div>
    <div class="course-stat">
      <label>NUMBER OF GROUPS:</label>
      <input type="number" v-model="courseDetails.groupsnumbers" />
    </div>
    <div class="course-stat">
      <label>COURSE DESCRIPTION:</label>
      <textarea v-model="courseDetails.description"></textarea>
    </div>
    <button @click="updateCourse">Update Course</button>
  </div>
</template>

<script>
export default {
  name: "ACourse",
  data() {
    return {
      courseDetails: null,
    };
  },
  methods: {
    fetchCourseData() {
      const courseId = this.$route.params.id;
      fetch(`http://localhost:3000/api/courses/${courseId}`)
        .then(response => response.json())
        .then(data => {
          this.courseDetails = data;
        })
        .catch(error => console.error('Error:', error));
    },
    updateCourse() {
      const courseId = this.$route.params.id;
      fetch(`http://localhost:3000/api/courses/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.courseDetails),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        this.$router.push('/Courses');
      })
      .catch(error => console.error('Error:', error));
    }
  },
  mounted() {
    this.fetchCourseData();
  }
};
</script>

<style scoped>
.course-container {
  background: #868080;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 50%;
  margin: 0 auto;
}

.course-stat {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  display: block;
}

input,
textarea {
  width: 70%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  resize: none;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  border: none;
  background-color: #5cb85c;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #4cae4c;
}
</style>