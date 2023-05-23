<template>
    <div>
      <h1>Fruits in your cart</h1>
    <button> confirm purchase</button>
  
    </div>
    
      <main>
        <carts :fruits="fruits.selectedFruits" />
      </main>
    
    </template>
    
    <script >
    import { storeToRefs } from 'pinia';
  import carts from '../components/carts.vue'
    import { useFruits } from '../stores/fruitsStore';
    
    
     export default{
      components:{
        carts
      },
      setup(){
          // 
          const fruits = useFruits()
          // const {selectedFruits} = storeToRefs(fruits)
          // return selectedFruits
          return {fruits}
          // console.log("asdfa")
      }
  
     }
    
    </script>
    <style scoped>
    div {
      display: flex;
      padding: space-between;
    }
    h1 {
      padding-right: 5%;
    }
    button {
      background-color: rgb(95, 201, 95);
      width: 10rem;
      border-radius: .5rem;
      /* padding-left: 50%; */
      border-style: none;
      /* box-shadow: .1rem .1rem; */
      color: white;
      font-size: larger;
  
    }
    button:hover{
      background-color: rgb(100, 178, 126);
      transition: all ease-in-out .1s;
    }
    
    main{
      padding-top: 1rem;
      width: 70vw;
      
    }
    </style>
    
    