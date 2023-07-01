<template>
  <JobsHeader />
  <router-view></router-view>
</template>

<script>
import JobsHeader from './components/JobsHeader.vue';

export default {
  name: 'App',
  components: {
    JobsHeader
  }
}
</script>
