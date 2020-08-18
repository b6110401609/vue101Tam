<template>

</template>

<script>
import {mapActions} from 'vuex'
export default {
    created() {
        this.logout()
    },

    methods:{
        ...mapActions('account', ['logout'])
    }
}
</script>

<style>

</style>