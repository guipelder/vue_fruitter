
<template >
  <section>
    <header   >
      <theHeader  />

    </header>

    <main>


      <div>
        <!-- <RouterView /> -->
        <router-view>
        </router-view>

      </div>
      <!-- </section> -->

    </main>

    <footer id="contactus">
      <theFooter />
    </footer>
  </section>
</template>

<script >
// import vitePluginRequire from 'vite-plugin-require'
import { RouterLink, RouterView } from 'vue-router'
import theHeader from './components/theHeader.vue';
import theFooter from './components/theFooter.vue'

export default {
  components: { theHeader, theFooter },
  plugins: [
    // vitePluginRequire()
  ]
}

</script>


<style scoped>
.sticky {
  position: fixed;
  top: 0;
  /* z-index: inherit; */
  
  width: 100%
}

header {
  max-height: fit-content;
  
}

/* section {
  /* orientation: por; */
/* } */
div {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>        
