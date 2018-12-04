<template>
    <router-view/>
</template>
<script>
// import './store'
    export default {
        data () {
            return {
                // platform
            }
        },
        computed: {
            test () {
                return this.$store.state.cartoon.test
            }
        },
        methods: {
            goDetail ({ params: { art_id } }) {
                this.$router.push({ name: 'cartoon/detail', params: { art_id } })
            }
        },
        components: {},
        mounted () {

            // alert('hello')
        }

    }
</script>
