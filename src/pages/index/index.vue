<template>
<div class="container">
    {{ motto }}
</div>
</template>

<script>

export default {
    data() {
        return {
            motto: 'Hello World',
            userInfo: {}
        }
    },
    mounted () {
        console.log( 456 );
    }
}
</script>

<style>

</style>
