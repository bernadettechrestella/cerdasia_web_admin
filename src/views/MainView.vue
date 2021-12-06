<template>
  <div>
    <Navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '../components/SideBar'

export default {
  components: {
    Navigation
  }
}
</script>
