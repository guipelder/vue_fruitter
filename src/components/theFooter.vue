<template >
    <section  >
        <!-- :style="{'background-image': `url(${require('../assets/images/footer_orange.png')})`}" -->
    
        
        <div class="socials" >
            <img class="soc" v-for="(item,idx) in socialImgs" :key="idx"
            :src="require(item)" alt="social">
        </div>
        <div class="logo" >
            <h3>Fruiter</h3>
            <p>All rights reserved 2023.</p>
        </div>
      
    </section>

</template>

<script>

export default{

    data(){
        return{
            socialImgs:[
                // require('../src/assets/images/soc1.png'),
                // require('../src/assets/images/soc2.png'),
                // require('../src/assets/images/soc3.png'),
                // require('../src/assets/images/soc4.png')
                '../src/assets/images/soc1.png',
                '../src/assets/images/soc2.png',
                '../src/assets/images/soc3.png',
                '../src/assets/images/soc4.png',
                

            
            
            ],
            // background: '../src/assets/images/footer_orange.png',
        }
    }
}
// console.log("this is from footer.vue")
</script>

<style scoped>

section  {
    /* background-image: '../src/assets/images/footer_orange.png'; */
    background-image: url('../assets/images/footer_orange.png');
    /* background: url($require({{background}})); */
    /* mask-image: url('../src/assets/images/footer_orange.png'); */
    background-repeat: no-repeat;
    /* background-size: 50%; */
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* min-height: 40vh; */
    /* height: 40vh; */
    max-height: 40vh;
    max-width: 59vw;
    /* min-width: 59vw; */
    /* max-width: 59vw; */
    /* width: 59vw; */

}
section div{
    /* background-image: url(`require('../src/assets/images/footer_orange.png')`); */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /* min-height: 1vh; */
    /* max-height: 10vh ;  */
    /* min-width: 10vw; */
}
section div img{
    width: 4rem;
    /* height: 4rem; */
}
.socials > *{
    margin: 1rem;
    transition: all ease-in-out .05s;
}
.soc{
    padding: .7rem;
    border-color: rgba(0, 0, 0, 0);
}
.socials > *:hover{
    border: .2rem solid blue;
    border-style: dotted;
    border-radius: 1.7rem;

    cursor: pointer;
}
.logo > *{
    color: black;
    margin: 1rem;
}
</style>