<template>
    <div id="app">
        <MenuBar :api-url="this.apiUrl"></MenuBar>
        <router-view :api-url="this.apiUrl"/>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        apiUrl: 'http://www.backstage.com/'
      }
    }
  }
</script>