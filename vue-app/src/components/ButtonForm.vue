<template>
    <button>{{ holder }}</button>
</template>

<script>
export default {
    name: "ButtonForm",
    props:['holder']
}
</script>

<style scoped>
    button{
        padding: 15px;
        border-radius: 10px;
        border: none;
        width: 125px;
        transition: 0.2s;
        font-size: 20px;
        letter-spacing: 2px;
    }
    button:hover{
        width: 150px;
        font-size: 30px;
        transition: 0.2s;
        background-color: rgb(136, 245, 114)
    }
</style>