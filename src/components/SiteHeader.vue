<template>
  <header id="site-header">
    <nav data-inview="false">
      <div class="container">
        <h1 class="title">Frontend Developer <span>❤</span></h1>
        <ul class="nav nav-desktop">
          <li class="nav-item">
            <a href="#">Who we are</a>
          </li>
          <li class="nav-item">
            <a href="#">What we do</a>
          </li>
          <li class="nav-item">
            <a href="#">Mission</a>
          </li>
          <li class="nav-item">
            <a href="#">What we have done</a>
          </li>
          <li class="nav-item">
            <a href="#">Events</a>
          </li>
          <li class="nav-item">
            <a href="#">Team</a>
          </li>
          <li class="nav-item">
            <a href="#">Sponsoring opportunities</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'siteheader'
}
</script>

<style lang="scss">
#site-header nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100vw;
  color: #fff;
  transform: translateY(-30px);
  transition: opacity 0.5s 0.4s ease-out, transform 0.5s 0.4s ease-out;

  &[data-inview="true"] {
    opacity: 0.98;
    transform: none;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    height: calc(100% + 60px);
    background: #0e0e0e;
    z-index: -1;
    width: calc(100% + 10px);
    left: -10px;
    top: -50px;
    transform: rotate(-1.5deg);
    opacity: 0.4;
  }

  &:before {
    transform: rotate(-1deg);
    background: #333;
    transition: height 0.3s ease-out;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 1.5em;
    font-weight: 500;
    letter-spacing: 0.5px;
    width: 160px;
    position: relative;
    cursor: none;

    span {
      color: #43b682;
      position: absolute;
      font-size: 1.1em;
      right: 22px;
      top: 2px;
      transition: all 0.3s;
      animation: beatIdle 6s infinite alternate;
    }

    &:hover span {
      opacity: 0.8;
      animation: beat .35s infinite alternate;
	    transform-origin: center;
    }
  }

  .nav-desktop {
    margin: 0;
    padding: 0;
    font-size: 1em;
  }

  .nav-item {
    display: inline-block;

    a {
      display: inline-block;
      padding: 20px 15px;
      font-weight: 500;
      position: relative;
      z-index: 1;

      &:after {
        content: '';
        position: absolute;
        right: 15%;
        top: 60%;
        width: 70%;
        height: 1px;
        background: white;
        border-radius: 2.5px;
        transition: all 0.2s ease-in-out;
        z-index: 0;
        opacity: 0;
      }

      &:hover:after,
      &:active:after,
      &.active:after {
        top: 70%;
        opacity: 1;
      }
    }
  }

  @media (max-width: 1200px) {
    .nav-desktop {
      display: none;
    }
  }
}

@keyframes beat {
	from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0.9;
    transform: scale(1.3);
  }
}

@keyframes beatIdle {
	0%, 95% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0.9;
    transform: scale(1.3);
  }
}
</style>
