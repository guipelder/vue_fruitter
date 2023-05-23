import { defineStore } from 'pinia'

export const useFruits = defineStore('fruits', {
  state: () => ({
    /** @type {{  id: number,title: string, price:number ,amount:number ,image:string , description:string }[]} */
    fruits: [
        {
            id:13,
            title:'apple',
            price:10,
            amount:0,
            image:'./src/assets/images/400/apple.jpeg',
            description:'apple is good'
        },
        {
            id:1,
            title:'apple',
            price:20,
            amount:0,
            image:'./src/assets/images/400/apple1.jpeg',
            description:'apple is better'
        },
        {
            id:2,
            title:'banana',
            price:100,
            amount:0,
            image:'./src/assets/images/400/banana.jpeg',
            description:'banana is good'
        },
        {
            id:3,
            title:'blackberry',
            price:15,
            amount:0,
            image:'./src/assets/images/400/blackberry.jpeg',
            description:'blackberry is fine'
        },
        {
            id:4,
            title:'cherry',
            price:200,
            amount:0,
            image:'./src/assets/images/400/cherry1.jpeg',
            description:'cherry is not bad'
        },
        {
            id:5,
            title:'kiwi',
            price:210,
            amount:0,
            image:'./src/assets/images/400/kiwi.jpeg',
            description:'kiwi is amazing'
        },
        {
            id:6,
            title:'kiwi',
            price:220,
            amount:0,
            image:'./src/assets/images/400/kiwi1.jpeg',
            description:'kiwi is also good'
        },
        {
            id:7,
            title:'lemon',
            price:70,
            amount:0,
            image:'./src/assets/images/400/lemon1.jpg',
            description:'lemon is good'
        },
        {   
            id:7,
            title:'orange',
            price:95,
            amount:0,
            image:'./src/assets/images/400/orange.jpeg',
            description:'orange is orange'
        },
        {
            id:8,
            title:'orange',
            price:99,
            amount:0,
            image:'./src/assets/images/400/orange2.jpg',
            description:'orange is better'
        },
        {
            id:9,
            title:'pear',
            price:110,
            amount:0,
            image:'./src/assets/images/400/pear1.jpeg',
            description:'apple is good'
        },
        {
            id:10,
            title:'pinia',
            price:500,
            amount:0,
            image:'./src/assets/images/400/piniana.jpeg',
            description:'pinia\' special appearence'
        },
        {
            id:11,
            title:'pineapple',
            price:400,
            amount:0,
            image:'./src/assets/images/400/pinia.jpeg',
            description:'pineapple  is good but not the same as pinia'
        },
        {
            id:12,
            title:'watermelon',
            price:5,
            amount:0,
            image:'./src/assets/images/400/watermelon.jpeg',
            description:'watermelon with condition of knife'
        },
        
        

        
        
        
        
        
        
        
        
        
        
        

    ],
    /** @type {'all' | 'selected' | 'nonselected'} */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    selectedFruits(state) {
      // autocompletion! ✨
      return state.fruits.filter((fruit) => fruit.amount > 0)
    },
    nonSelectedFruits(state) {
        // TODO bug potentionl
      return state.fruits.filter((fruit) => fruit.amount==0)
    },
    allFruits(state){
      return state.fruits
    },
    /**
     * @returns {{ text: string, id: number, isFinished: boolean }[]}
     */
    filteredFruits(state) {
      if (this.filter === 'selected') {
        // call other getters with autocompletion ✨
        return this.selectedFruits
      } else if (this.filter === 'nonselected') {
        return this.nonSelectedFruits
      }else if(this.filter === 'all'){
        return this.allFruits
      }
      // return this.allFruits
      return this.fruits
    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    addAmount(id,amount) {
      // you can directly mutate the state
      const fruit  = this.fruits.find(t => t.id === id)
      fruit.amount = amount
    },
  },
})