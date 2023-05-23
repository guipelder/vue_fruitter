<template>
    <div class="container"> 

        <div class="row">
                    <div class="column"  v-for="item in fruits">

                        <singleFruit :fruit="item"  />

                    </div>
    
        </div>
    </div>
</template>

<script> 
import singleFruit from './Fruit.vue'
export default {
    components: { singleFruit },
   
    setup (){
        // const friutsStore =useFruits()
        // return {friutsStore}
    },
    // not necessary to hace props
    props:{
        fruits: Object,
        required:false
    }
    


}


</script>
<style scoped>
 div    {
    /* display: flex; */
    padding: 1rem;
    padding-top: 1rem;

    border-radius: 1rem;
    border-width: .1rem;
        background-color: rgb(254, 239, 239);
}
.container{
    padding-top: 1rem;
     max-width: 70rem;
     max-height: 70rem;
     width: 90%;
     border-radius: 1rem;
     border-style: solid;
     overflow-y: scroll;
}
    
    
.row {
  display: flex;
  flex-direction: row;
/* padding-left: 30%; */
  flex-wrap: wrap;
}

.column {
  flex-basis: 100%;
  /* max-width: 10rem; */
  align-items: center;
}

@media screen and (min-width: 10rem) {
  .column {
    flex: 1;

  }
}

</style>






<!-- //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
            //     {
            //         img: "../src/assets/images/400/apple1.jpeg",
            //         name: 'apple'
            //     },
                 -->