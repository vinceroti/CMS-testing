<template>
  <div class="hello">
    <h1></h1>
    <p v-html="bio"/>
    <p v-for="img in imgs">
      <img v-bind:src="img.url" />
    </p>
  </div>
</template>

<script>
import Contentstack from 'contentstack'

export default {
  name: 'HelloWorld',
  data () {
    return {
      bio: 'Loading...',
      imgs: '',
      entry: ''
    }
  },
  created () {
    const self = this
    const Stack = Contentstack.Stack(process.env.CONTENTSTACK_API, process.env.CONTENTSTACK_TOKEN, 'staging')

    const Query1 = Stack.ContentType('team_members').Entry('blt3ec29586cf35b4d6')
    const Query2 = Stack.ContentType('products').Query().descending('updated_at').limit(1).toJSON().find()

    Query2.then(function success (query) {
      console.log(query)
    }, function error (err) {
      console.log(err)
    })

    Query1.fetch().then(function success (entry) {

      entry = entry.toJSON()
      console.log(entry)
      self.entry = entry
      self.bio = entry.bio
      self.imgs = entry.lifestyle_photos

      console.log(entry.search('Welcome to demo'))

    }, function error (err) {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 500px;
  }
</style>
