<template>
  <div class="course-container" v-if="courseDetails">
    <h1>{{ courseDetails.coursename }} - {{ courseDetails.coursecode }} - {{ courseDetails.courseects }} ECTS</h1>
    <div class="course-stat">
      <label>MAX NUMBER OF STUDENTS:</label>
      <input readonly :value="courseDetails.studentsnumbers" />
    </div>
    <div class="course-stat">
      <label>NUMBER OF GROUPS:</label>
      <input readonly :value="courseDetails.groupsnumbers" />
    </div>
    <div class="course-stat">
      <label>COURSE DESCRIPTION:</label>
      <textarea readonly>{{ courseDetails.description }}</textarea>
    </div>
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
</style>