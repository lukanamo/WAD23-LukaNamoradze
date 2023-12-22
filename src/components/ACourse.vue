<template>
  <div class="course">
    <h4>{{ course.coursename }}</h4>
    <p>Code: {{ course.coursecode }}</p>
    <p>ECTS: {{ course.courseects }}</p>
    <p>Max No. of Students: {{ course.studentsnumbers }}</p>
    <p>No. of groups: {{ course.groupsnumbers }}</p>
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
.course {
  background-color: #b58df9;
  margin: 0.5rem;
  padding: 1rem;
  border-radius: 4px;
}

h4 {
  color: #010101;
}
</style>
