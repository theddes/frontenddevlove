<template>
  <footer id="site-footer">
    <div class="container">
      <svg class="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1044 1044"><defs></defs><title>Asset 3</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M522,0C233.71,0,0,233.71,0,522s233.71,522,522,522,522-233.71,522-522S810.29,0,522,0Zm-5.71,393.5v83.22L333.05,293.48l41.61-41.61ZM514.83,490,375.3,629.48l-41.61-41.61L473.22,448.34ZM279.54,250.36h83.23L179.48,433.65,137.86,392ZM517,869.07,135.71,487.8V404.58L517,785.85ZM764.46,250.71,906.14,392.39,864.52,434,681.23,250.71ZM528.06,393.5,669.69,251.87l41.61,41.61L528.06,476.72Zm179.8,194.72L668.7,627.38,531.62,490.3l39.16-39.16ZM527,869.42V786.19L908.29,404.93v83.22Z"></path></g></g></svg>
      <h1 class="logo_text">Passionate<span>People</span></h1>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'sitefooter'
}
</script>

<style lang="scss">
#site-footer {
  position: relative;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  background: #37495e;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.logo {
  height: 50px;
  margin-right: 20px;
}

.cls-1 {
  fill: #fdfdfd;
}

.logo_text {
  color: #fff;
  display: inline-block;
  font-size: 1.5em;
  font-weight: 500;

  span {
    font-weight: 400;
  }
}
</style>
