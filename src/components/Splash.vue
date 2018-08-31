<template>
  <section>
    <div id="splash">
      <img alt="Vue logo" data-inview="false" class="vue-logo" src="../assets/logo.png">
      <a href="#" data-inview="false" class="splash-button button">View our Events</a>
      <button data-inview="false" class="splash-scroll-down"></button>
    </div>
  </section>
</template>

<script>
import { CanvasSpace, Create, Group, Line } from 'pts'

export default {
  name: 'splash',
  mounted () {
    const space = new CanvasSpace('#splash').setup({ bgcolor: 'transparent', resize: false, retina: true })
    const form = space.getForm()

    let pts = new Group()

    space.add({
      start: bound => {
        pts = Create.distributeRandom(space.innerBound, 60)
      },

      animate: (time, ftime) => {
        const perpend = new Group(space.center.$subtract(0.1), space.pointer).op(Line.perpendicularFromPt)
        pts.rotate2D(0.005, space.center)

        pts.forEach((p, i) => {
          // for each point, find the perpendicular to the line
          const lp = perpend(p)
          const ratio = Math.min(1, 1 - lp.$subtract(p).magnitude() / (space.size.x / 2))
          form.stroke(`rgba(187, 210, 199, ${ratio}`, ratio * 2).line([p, lp])
          form.fillOnly(['#435466', '#4dba87', '#717e7f'][i % 3]).point(p, 1)
        })
      }
    })
    space.play()
  }
}
</script>

<style lang="scss">
#splash {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #3e3e3e;
  text-align: center;

  &:before {
    content: '';
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform-origin: 0;
    background: linear-gradient(120deg, #b7a89a 15%, #fff4f4 50%, #c8f1de 94%);
    position: absolute;
    opacity: 0.2;
    z-index: 1;
    left: 0;
    pointer-events: none;
  }
}

.splash-button {
  top: 65%;
  position: absolute;
  left: 0;
  right: 0;
  width: 150px;
}

.vue-logo {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 38%;
  z-index: 2;
}

.splash-button,
.vue-logo,
.splash-scroll-down {
  transition: all 0.5s ease-out;

  &[data-inview="true"] {
    opacity: 0.98;
    transform: none;
  }
}

.splash-button {
  transform: translateY(-20px);
  transition: opacity 0.5s 0.4s ease-out, transform 0.5s 0.4s ease-out, color .15s ease;
}

.splash-scroll-down {
  bottom: 5%;
  position: absolute;
  left: 0;
  right: 0;
  display: inline-block;
  margin: 0 auto;
  width: 12px;
  border: none;
  background: #fff;
  height: 20px;
  border-radius: 10px;
  padding: 0;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 4px;
    margin: 0 auto;
    background: #37495e;
    height: 6px;
    width: 6px;
    border-radius: 50%;
    animation: scrolldown 0.5s linear 0s infinite alternate;
  }
}

@keyframes scrolldown {
  0%   {
    top: 4px;
  }
  100% {
    top: 10px;
  }
}
</style>
