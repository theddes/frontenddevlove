<template>
  <main id="index">
    <Splash />
    <Articles />
    <SiteFooter />
  </main>
</template>

<script>
import Splash from '@/components/Splash.vue'
import Articles from '@/components/Articles.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'index',
  components: {
    Splash, Articles, SiteFooter
  }
}
</script>
