<template>
    <div class="hello">
        <h1>{{ counter }}</h1>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },

    computed: {
        counter() {
            return this.$store.state.counter;
        },
    },

    created() {
        console.log(this.$store.state.counter);
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
