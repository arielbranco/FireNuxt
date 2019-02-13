<template>
  <header class="mui-appbar">
    <nav>
      <nuxt-link to="/">Page 1</nuxt-link>
      <nuxt-link to="/page2">Page 2</nuxt-link>
       <nuxt-link to="/page3">Page 3</nuxt-link>
        <nuxt-link to="/page4">Page 4</nuxt-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'AppHeader'
  }
</script>

<style lang="css">

  footer {
    box-sizing: border-box;
    background-color: #eee;
    border-top: 1px solid #e0e0e0;
    padding: .5em 0;
    display: flex;
    align-items: center;
  }
  nav a{
    font-size: 18px;
    z-index: 3;
    color: #fff !important;
    margin: 20px 10px;
     
  }
header{
  align-content: center;
  text-align: center;
   padding-top: 30px;
}
  .footer-flex-item {
    margin: .5em;
    text-align: center;
  }
</style>
