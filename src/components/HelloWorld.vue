<template>
  <div>
    <h1>hello vue&mock</h1>
    <span>mock返回的数据：</span><span v-model="mock">{{ mock }}</span>
  </div>
</template>

<script>
  import http from '../utils/http.js'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        mock: ''
      }
    },
    created() {
     this.fetchData()
    },
    methods: {
      fetchData() {
        http.post('api/a').then(res =>{
          this.mock = res.data.data
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  span {
    color: blueviolet;
    font-weight: normal;
    font-size: 26px
  }
</style>
