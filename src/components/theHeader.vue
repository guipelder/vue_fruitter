
<template :style="`scroll-behavior:smooth;`">
    <nav>
      <div style="background-color:darkred; border-radius: 1rem;">
        <img @click="$router.push('/')" src="../assets/images/strawberry_icon.png" alt="logo" class="logo" />
        <img @click="$router.push('/account')" src="../assets/images/account_logo.png" alt="my account" class="account" />
        <img @click="$router.push('/mycarts')" src="../assets/images/cart_icon.png" alt="carts" class="cart" />
        <!-- TODO adding a carts to here through props and then show the number  -->
        <span  class="badge" v-if="fruits.selectedFruits.length > 0">{{ fruits.selectedFruits.length <  10 ?fruits.selectedFruits.length:'~'   }}</span>
  
      </div>
  
  
  
      <div class="search">
  
  
  
  
        <img v-if="search" @click="search = !search" src="../assets/images/search.png" class="fa" />
        <img v-else @click="search = !search" src="../assets/images/search.png" class="fa" />
  
        <!-- <img   class="fa"/> -->
  
        <input v-if="search" @input="search = true" type="search" placeholder="Search here …" class="deactiveSearch">
        <input v-else type="search" placeholder="Search here …" class="deactiveSearch">
  
  
  
  
  
      </div>
  
      <!-- TODO replacing the href with router link later -->
      <ul style="background-color: rgb(161, 106, 174); border-radius: 1rem;">
        <li>
          <a @click="$router.push('/catagory')" >Catagory</a>
        </li>
  
        <li>
          <!-- <a href="#aboutus">About Us</a> -->
          <a  @click="$router.push('/aboutus')">About Us</a>
        </li>
  
        <li>
          <a href="#contactus">Contact Us</a>
        </li>
  
      </ul>
  
    </nav>
  </template>
  
  <script>
  import { useFruits } from '../stores/fruitsStore'
  
  export default {
    props: {
      carts: {
        type: Number,
        required: false,
        default: 0
      }
    },
    setup() {
      const fruits = useFruits()
      return { fruits }
  
    },
    data() {
      return {
  
        search: false
  
      }
  
    },
    methods: [toggle,badgeControl]
  }
  function toggle() {
    if (search) {
      search = false
    } else {
      search = true
    }
  }
    function badgeControl(fruitsCount){
      if(fruitsCount<10){
        return fruitsCount
      }
      else{
        return "~"
      }
    }
  
  
  
  </script>
  
  <style scoped>
  /* html{
    scroll-behavior: smooth;
  } */
  
  nav {
    display: flex;
    flex-direction: row;
    /* position: absolute; */
    /* background-color:darkred; */
    /* justify-content: space-between; */
    /* padding-left: -2rem; */
    margin: .1rem;
    width: 70rem;
    /* z-index: 1; */
    /* position: fixed; */
    /* top: 0; */
    /* z-index: inherit; */
    
    /* width: 100% */
    /* height: 2rem; */
    /* margin: auto; */
  }
  
  nav ul {
    display: flex;
    flex-direction: row;
  
    justify-content: space-evenly;
    width: 50vw;
  
  }
  
  nav ul li {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-left: 5 rem;
    padding-right: 2rem;
    list-style: none;
  }
  
  nav ul li a {
    text-decoration: none;
    cursor: pointer;
    color: white;
    
  
  
  }
  
  
  nav div {
    display: flex;
    flex-direction: row;
    /* padding: ; */
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  
  /* ========================================= */
  
  
  .search {
    display: flex;
    transition: all .3s;
    width: 20rem;
    height: 3.5rem;
    background: white;
    border-radius: 2rem;
    border: .3rem solid white;
    padding-left: .2rem;
  }
  
  .activeSearch {
    display: flex;
    transition: all .3s;
    line-height: 2rem;
    width: 20rem;
    outline: 0;
    border: 0;
    cursor: text;
    font-size: 1em;
    border-radius: 2rem;
    /* margin-right: 2rem; */
    padding-left: 1rem;
  }
  
  .deactiveSearch {
    display: flex;
    transition: all .3s;
    line-height: 2rem;
    width: 7rem;
    background-color: thistle;
    outline: 0;
    border: 0;
    display: flex;
    font-size: 1em;
    border-radius: 2rem;
    padding-left: 1rem;
    cursor: text;
    /* padding: 0 1rem; */
  }
  
  .fa {
    box-sizing: border-box;
    padding-bottom: 1rem;
    /* padding-top: .3rem; */
    width: 2.1 rem;
    height: 4 rem;
    border-radius: 1rem;
    color: #07051a;
    background-color: darkblue;
    /* text-align: center; */
    font-size: 1.2rem;
    /* transition: all 0.09s; */
  }
  
  
  .search:hover {
    width: 15rem;
    width: 20rem;
    cursor: pointer;
  }
  
  .search:hover input {
    display: flex;
    width: 20rem;
    transition: all .1s;
    cursor: text;
  }
  
  .search:hover .fa {
    background: #07051a;
    color: white;
  }
  
  .logo {
    height: 3rem;
    width: 3rem;
  }
  
  .logo:hover {
  
    /* position: absolute; */
    height: 3.05rem;
    width: 3.05rem;
    transition: all .1s;
  }
  
  .account {
    height: 3rem;
    width: 3rem;
  }
  
  .account:hover {
    height: 3.05rem;
    width: 3.05rem;
  }
  
  .cart {
    height: 3rem;
    width: 3rem;
  }
  
  .cart:hover {
    height: 3.05rem;
    width: 3.05rem;
  }
  
  .badge {
    background-color: seagreen;
    height: 1rem;
    width: 1rem;
    border-radius: .5rem;
    font-size: .7rem;
    padding-left: .2rem;
    padding-bottom: .2rem;
  }
  </style>