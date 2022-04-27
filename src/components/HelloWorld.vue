<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>vue3 js ESlint prettier gitHooks Commitizen</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

p {
  color: #42b983;
  display: inline-block;
  margin: 0 10px;
  font-size: 20px;
}
</style>
