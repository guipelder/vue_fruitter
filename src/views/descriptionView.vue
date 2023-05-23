<template>
  <main>
    <div>
    <img class="image" :src="require(this.fruits.selectedFruit[0].alt)" draggable="false" />
    <h1>{{ this.fruits.selectedFruit[0].title }}</h1>
    <p>{{ this.fruits.selectedFruit[0].description }}</p>
  </div>
  </main>
</template>
    
<script >
import { useFruitsDescription } from '../stores/fruitDescriptionStore';
import singleFruit from '../components/Fruit.vue'

export default {
  components: {
    singleFruit
  },
  props: {

    id: Number,
    required: false,
    // default: 0

  },
  setup() {
    const fruits = useFruitsDescription()
    return { fruits }
  }

}

</script>

<style scoped>
div{
  display: flex; 
  align-items: center;
  align-self: center;
  /* max-width: 70rem; */
  flex-direction: column;
  /* max-width: 70%; */
  border-style: solid;
  border-color: black;
  border-radius: 1rem;
}
img {
  max-width: 70rem;
  border-radius: 1rem;
  
}
p {
  color: white;
  background-color: rgb(76, 25, 25);
  border-radius: 1rem;
  margin: 1rem;
  padding: 1rem;
  font-size: xx-large;
  text-align: left;
}



</style>
    
    