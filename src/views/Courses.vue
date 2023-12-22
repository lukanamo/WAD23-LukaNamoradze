<template>
<div>
    <h3>Courses</h3>
    <div v-for="course in courses" :key="course.id">
      <Course :course="course" />
    </div>
</div>
</template>

<script>
import Course from '@/components/ACourse.vue';

export default {
  name: "Courses",
    components: {
      Course
    },
  data() {
    return {
      courses: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/courses`)
        .then((response) => response.json())
        .then((data) => (this.courses = data))
        .catch((err) => console.log(err.message));
  },
  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>

h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
</style>
