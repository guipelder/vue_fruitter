<template>
    <div>
        <!-- <img class="image" :src="`./src/assets/imgs/1.jpg`"/> -->
        <img class="image" :src="require(fruit.image)" draggable="false" />

        <!-- <button>{{ name }}</button> -->
        <plusminsfield :value=" fruit.amount " :id="fruit.id" />  
        <h4>{{ fruit.title }}</h4>

    </div>

    <!-- <div class="card">
  <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
    <img :src="require(img)" class="img-fluid"/>
    <a href="#!">
      <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
    </a>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{ name }}</h5>
    <button class="btn btn-primary">Button</button>
    <plusminusfield></plusminusfield>
  </div>
</div>
     -->
</template>

<script>
import PlusMinusField from '../components/PlusMinusField.vue'
// import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from "mdb-ui-kit";

export default {
    props: {
        img: {
            type: String,
            required: false
        },
        name: {
            type: String,
            required: false
        },
        fruit: {
            type: Object,
            required: false
            // TODO changin the required to true
        }
    },
    components: {
        'plusminsfield': PlusMinusField,
        //         MDBCol,
        //      MDBRow,
        //   MDBCardGroup,
        //   MDBCard,
        //   MDBCardBody,
        //   MDBCardTitle,
        //   MDBCardText,
        //   MDBCardImg
    }



}
</script>
<style scoped>
.image {
    display: flex;

    justify-content: space-between;
    align-items: center;
    max-height: 15rem;
    max-width: 15rem;
    border-radius: 1rem;

}

div {
    display: flex;
    flex-direction: column;
    border-radius: .1rem;
    padding: .5rem;
    padding-bottom: 1rem;
    align-items: center;
    margin-bottom: 1rem;
    border: solid;
    border-radius: 1rem;
    box-shadow: .1rem .1rem lightgray;
    


}
h4 {
    color: black;
}

</style>