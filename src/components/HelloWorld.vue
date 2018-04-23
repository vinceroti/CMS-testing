<template>
  <div class="hello">
    {{ msg }}
  </div>
</template>

<script>
import Contentstack from 'contentstack'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    this.msg = Contentstack.Stack('blt327d6e6ccdef50f9', 'blt98e152db08d79009', 'Ride Snowboards')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
