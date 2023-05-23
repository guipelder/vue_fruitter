<template>
    <div class="container">

        <div class="row">
            <div class="column" v-for="item in fruits">
                <cart :fruit="item" />
            </div>
        </div>
    </div>
</template>

<script>
import { useFruits } from '../stores/fruitsStore'
import cart from './cart.vue'
export default {
    components: { cart },
    data() {
        return {
            list: [
                // friutsStore.
            ]
        }
    },
    setup() {
        const friutsStore = useFruits()
        return { friutsStore }
    },
    props: {
        fruits: Object,
        required: false
    }

}
</script>
<style scoped>
div {
    padding: 1rem;
    padding-top: 1rem;

    border-radius: 1rem;
    border-width: .1rem;
    background-color: rgb(251, 243, 243);
}

.container {
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

    flex-wrap: wrap;
}

.column {
    flex-basis: 100%;
}

@media screen and (min-width: 10rem) {
    .column {
        flex: 1;

    }
}
</style>



