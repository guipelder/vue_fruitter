import { defineStore } from 'pinia'

export const useFruitsDescription = defineStore('fruitsDescription', {
  state: () => ({
    /** @type {{  id: number,title: string, image:string ,alt:string, description:string, selected:boolean }[]} */
    fruitsDescription: [
      {
        id: 1,
        title: 'cherry',
        image: './src/assets/images/catagory/cherry.jpeg',
        alt: '../../src/assets/images/catagory/cherry.jpeg',
        description: `CHERRY IS GOOD Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`,
        selected: false
      },
      {
        id: 2,
        title: 'orange',
        image: './src/assets/images/catagory/orange.jpg',
        alt: '../../src/assets/images/catagory/orange.jpg',
        description: `ORANGE IS GOOD Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`,
        selected: false
      },
      {
        id: 3,
        title: 'strawberry',
        image: './src/assets/images/catagory/strawberry.jpeg',
        alt: '../../src/assets/images/catagory/strawberry.jpeg',
        description: `STRAWBERRY IS GOOD Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.`,
        selected: false
      },



    ],
    /** @type {'all'| 'selected'|'unselected' } */
    filter: 'all',
    // type will be automatically inferred to number
    nextId: 0,
  }),
  getters: {
    selectedFruit(state) {
      return state.fruitsDescription.filter((fruit) => fruit.selected)
    },
    unselectedFruit(state) {
      return state.fruitsDescription.filter((fruit) => !fruit.selected)
    },
    allFruit(state) {
      return state.fruitsDescription
    },
    /**
     * @returns {{ id: number,title: string, image:string , description:string, selected:boolean }[]}
     */
    filteredFruits(state) {
      if (this.filter === 'selected') {
        // call other getters with autocompletion ✨
        return this.selectedFruit
      } else if (this.filter === 'unselected') {

        return this.unselectedFruit
      }

      return this.allFruit

      // return this.allFruits

    },
  },
  actions: {
    // any amount of arguments, return a promise or not
    getFruit(id) {
      // you can directly mutate the state
      const fruit = this.fruitsDescription.find(t => t.id === id)
      const temp = this.fruitsDescription.allFruit
      //  var item
      for (var i = 1; i < 4; i++) {
        this.fruitsDescription.find(fruit => fruit.id === i).selected = false
      }
      fruit.selected = true
      return fruit
    },
  },
})