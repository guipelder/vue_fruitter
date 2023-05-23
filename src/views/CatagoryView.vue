<template>
    <div>
      <h1>Fruit Description</h1>
  
    </div>
    
      <main>
        <catagory :fruits="fruitsDesription.allFruit" />
      </main>
    
    </template>
    
    <script >
    import catagory from '../components/Catagory.vue'
    import { useFruitsDescription } from '../stores/fruitDescriptionStore';
    
     export default{
      components:{
        catagory
      },
      setup(){
          // 
          const fruitsDesription = useFruitsDescription()
        //   fruitDescription = fruitsDesription.allFruits()
          return {fruitsDesription}
      }
  
     }
    
    </script>
    <style scoped>
    
    h1 {
      padding-right: 5%;
    }
    button:hover{
      background-color: rgb(100, 178, 126);
      transition: all ease-in-out .1s;
    }
    
    main{
        /* background-color: aliceblue; */
      padding-top: 1rem;
      width: 70vw;
      
    }
    </style>
    
    