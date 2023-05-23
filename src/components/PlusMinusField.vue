<template>
    <div class="minusplusnumber">
        <div  v-if="newValue==0" class="mpbtn minusLight" v-on:click="mpminus()">
            -
        </div>
        <div  v-if="newValue!==0"  class="mpbtn minus" v-on:click="mpminus()">
            -
        </div>
        <div id="field_container">
            <input type="number" v-model="newValue" disabled prefix="kg" />
        </div>
        <div class="mpbtn plus" v-on:click="mpplus()">
            +
        </div>
    </div>
  </template>
  
  <script>
  import { useFruits } from '../stores/fruitsStore'
  export default {
    props: {
      value: {
        default: 0,
        type: Number
      },
      min: {
        default: 0,
        type: Number
      },
      max: {
        default: 9,
        type: Number
      },
      id :{
        type:Number,
        required:false
      },
    },
  
    data () {
      return {
        newValue: 0
      }
    },
    setup() {
      const fruit = useFruits()
      return {fruit}
    },
  
    methods: {
      getNotificationClass (notification) {
        return `alert alert-${notification.type}`
      },
      mpplus: function () {
        if (this.max === undefined || (this.newValue < this.max)) {
          this.newValue = this.newValue + 1
          this.$emit('input', this.newValue)
          this.fruit.addAmount(this.id,this.newValue)
        }
      },
      mpminus: function () {
        if ((this.newValue) > this.min) {
          this.newValue = this.newValue - 1
          this.$emit('input', this.newValue)
        }
      }
    },
    watch: {
      value: {
        handler: function (newVal, oldVal) {
          this.newValue = newVal
        }
      }
    },
    created: function () {
      this.newValue = this.value
    }
  }
  </script>
  <style  scoped>
  
    .minusplusnumber {
        height: 3.5rem;
        /* padding: .1rem; */
        /* padding-bottom: .1rem; */
        border:1px solid silver;
        border-radius:.3rem;
        background-color: #e5e4d2;
        /* margin:0 5px 0 5px; */
        display:inline-block;
        user-select: none;
        color: black;
        font-size: 1.3rem;
    }
    .minusplusnumber div {
        display:inline-block;
        /* padding: 0rem; */
    }
    .minusplusnumber #field_container input {
        width:2rem;
        height: 2.5rem;
        text-align:center;
        font-size:1rem;
        padding:.1rem;
        border:none;
    }
    .minusplusnumber .mpbtn {
        padding:.1rem .3rem .1rem .3rem;
        cursor:pointer;
        border-radius:.3rem;
    }
    .minusplusnumber .mpbtn:hover {
        background-color:#d6b5b5;
    }
    .minusplusnumber .mpbtn:active {
        background-color:#d8b6b6;
    }
    .minus{
      background-color: red;
    }
    .minusLight{
      background-color: rgb(223, 143, 143);
    }
    .plus{
      background-color: green;
    }
  </style>
  