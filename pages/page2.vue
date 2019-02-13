<template>
  <section class="container">
    <div>
      <h1 class="headline">Hi from <span class="b">{{renderSource}}</span> on page 2</h1>
      <button
        id="reload-btn"
        class="mui-btn mui-btn--primary"
        @click="reloadPage">
        Reload
      </button>
    </div>
  </section>
</template>

<script>

export default {
  asyncData () {
    return {
      renderSource: process.static ? 'static' : (process.server ? 'Server' : 'Client')
    }
  },
  components: {

  },
  methods: {
    reloadPage () {
      window.location.reload()
    }
  }
}
</script>
