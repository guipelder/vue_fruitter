<template>
  
  <img src="../assets/images/intruducer.png" />
  <p>List of available fruits</p>
  <main>
    <carts :fruits="fruits.allFruits" />
  </main>
</template>

<script >
import carts from '../components/carts.vue'
import { useFruits } from '../stores/fruitsStore';


export default {
  components: {
    carts
  },
  data(){
    return {image : "../assets/images/intruducer.png"}
  }
  ,
  setup(){
    const fruits = useFruits()
    return {fruits}
  }
}

</script>
<style scoped>

img {
  display: flex;
  width: 70rem;
  /* min-width: 5%; */

  padding: 2rem;
}
p {
  display: flex;
  padding-left: 3%;
  padding-bottom: .1rem;
  font-size: xx-large;
}
main {
  width: 70vw;

}
</style>

