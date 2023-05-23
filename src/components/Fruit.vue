<template>
    <div>
        <img class="image" :src="require(fruit.image)" draggable="false" />
        <h4>{{ fruit.title }}</h4>
        <!-- TODO fixing the dynamic url for ... -->
        <button @click="link(fruit.id)">Go to Description</button>


    </div>

</template>

<script>
import { useFruitsDescription } from '../stores/fruitDescriptionStore';

export default {
    props: {
        fruit: {
            type: Object,
            required: false
        }
    },
    components: {
    },
    setup(){
        const fruits = useFruitsDescription()
        // fruits.getFruit(fruit.id)
        // const temp = fruits.selectedFruit    
        // temp = temp[0]
        return {fruits}
    },
    methods: {
    link: function (id) {
    this.fruits.getFruit(id)
    this.$router.push({ name: 'description', params: { id: id } })
    

    // this.$router.push({ name: 'mycarts'})
    
    
    
    }
}
    



}

function link(id){
 
    console.log(fruit.id)
//  this.$router.push('catagory/description')
}
</script>
<style scoped>
.image {
    display: flex;

    justify-content: space-between;
    align-items: center;
    max-height: 20rem;
    max-width: 20rem;
    border-radius: 1rem;

}

div {
    display: flex;
    flex-direction: column;
    border-radius: .1rem;
    padding: .5rem;
    padding-bottom: 1rem;
    /* padding-left: 20rem; */
    align-items: center;
    margin-bottom: 1rem;
    border: solid;
    border-radius: 1rem;
    box-shadow: .1rem .1rem .1rem .1rem  lightgray;
    


}
h4 {
    color: black;
}
button {
    background-color: rgb(66, 145, 66);
    color: white;
    border-radius: .5rem;
    height: 2rem;
    cursor: pointer;
    box-shadow: 0rem .1rem;
    border-style: none;
}
button:hover{
    background-color:rgb(81, 186, 81) ;
    transition: all ease-in-out .3s;
}
</style>