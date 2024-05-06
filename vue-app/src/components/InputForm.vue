<template>
 <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" :placeholder=holder>
</template>

<script>
export default {
    name: "InputForm",
    props:['holder', 'modelValue'],
}
</script>

<style scoped>
input{
    padding: 15px;
    border-radius: 20px;
    border-style: none;
    width: 300px;
    letter-spacing: 2px;
    outline: none;
    transition: 0.3s;
}
input:hover{
    width: 320px;
    transition: 0.3s;
}
</style>