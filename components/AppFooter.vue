<template>
  <footer>
    <div class="mui-container mui--text-center">
      <div class="footer-flex-item">
        By: <a href="http://www.arielbranco.com"> Ariel Branco</a> 
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'AppFooter'
  }
</script>

<style lang="css" scoped>
  footer {
    box-sizing: border-box;
    background-color: #eee;
    border-top: 1px solid #e0e0e0;
    padding: .5em 0;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 65px;
    z-index: 99;
  }

  .footer-flex-item {
    margin: .5em;
  }

  .footer-flex-item a {
    color: rgb(0, 112, 185);
  }
</style>
