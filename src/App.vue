<template>
  <div id="app">
    <SiteHeader />
    <router-view/>
  </div>
</template>

<script>
import 'reset-css'
import SiteHeader from '@/components/SiteHeader.vue'

export default {
  name: 'app',
  components: {
    SiteHeader
  },
  mounted () {
    import('./inViewport.js')
  }
}
</script>

<style lang="scss">
@import './grid.css';

body {
  background: #fdfdfd;
  overflow-x: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a {
  text-decoration: none;
  color: #fff;
  transition: color 0.3s;

  &:hover {
    color: #56bf8d;
  }
}

.button {
    white-space: nowrap;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 14px;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
    background: #ffffff;
    border-radius: 4px;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .025em;
    color: #37495e;
    text-decoration: none;
    transition: all .15s ease;
    margin: 0 auto;
    border: none;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
      color: #43b682;
    }

    &:active {
      color: #37495e;
      background-color: #f6f9fc;
      transform: translateY(1px);
      box-shadow: 0 4px 6px rgba(50,50,93,.11),0 1px 3px rgba(0,0,0,.08);
    }
}

[data-inview="false"] {
  opacity: 0 !important;
  pointer-events: none;
}
</style>
