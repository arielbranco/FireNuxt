<template>
  <div id="app-wrapper">
    <app-header/>
    <img class="logo" src="logo.svg">
    <div id="content-wrapper" class="mui--text-center">
      <nuxt class="mui-container"/>
      <app-Footer/>
    </div>
  </div>
</template>

<script>
  import appHeader from '@/components/AppHeader'
  import appFooter from '@/components/AppFooter'

  export default {
    components: { appHeader, appFooter },
    methods: {
      reloadPage () {
        window.location.reload()
      }
    }
  }
</script>

<style>
  #app-wrapper {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-content: center;
  }
  .logo{
    max-width: 600px;
    margin: 30px auto;
  }
.b{
  font-weight: 800;
   color: black;
}
.headline{
  color: grey;
}
</style>
