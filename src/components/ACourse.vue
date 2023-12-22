<template>
    <div class="course-card">
      <div class="course-detail">
        <h4>Course name:</h4>
        <p>{{ course.coursename }}</p>
      </div>
      <router-link :to="{ name: 'ACourse', params: { id: course.id }}">
        <div class="course-detail">
          <h4>Code:</h4>
          <p>{{ course.coursecode }}</p>
        </div>
      </router-link>
      <div class="course-detail">
        <h4>ECTS:</h4>
        <p>{{ course.courseects }}</p>
      </div>
      <div class="course-detail">
        <h4>Max No. of Students:</h4>
        <p>{{ course.studentsnumbers }}</p>
      </div>
      <div class="course-detail">
        <h4>No. of groups:</h4>
        <p>{{ course.groupsnumbers }}</p>
      </div>
    </div>
  </template>

<script>
export default {
  name: "Course",
  props: {
    course: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.course-card {
  background-color: #b58df9;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
}

h4 {
  color: #010101;
}

.router-link {
  text-decoration: none;
  color: inherit;
}
</style>
