<template>
    <header>
        <h1>Messenger</h1>
    </header>
    <main>
        <div class="regblock">
            <h3>Login</h3>
            <InputForm v-model="login" holder = 'login'></InputForm>
            <h3>Password</h3>
            <InputForm v-model="password" holder = 'password'></InputForm>
            <ButtonForm @click=sendData class="buttonform" holder="Submit"></ButtonForm>
        </div>
    </main>
</template>

<script>
import InputForm from './InputForm.vue'
import ButtonForm from './ButtonForm.vue'
export default {
    name: 'RegistationPage',
    components: {
        InputForm: InputForm,
        ButtonForm: ButtonForm
    },
    data() {
        return {
            login: '',
            password: ''
        }
    },
    methods: {
        sendData() {
            let user = {
                login: this.login,
                password: this.password
            }
            fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(body =>  {
                console.log(body)
            })
            localStorage.setItem("auth_key","123214")
            this.$router.push("/")
            console.log(user.login, user.password)
        }
    }
}
</script>

<style scoped>
.buttonform {
    margin-top: 50px;
}
h3{
    letter-spacing: 2px;
    font-size: 25px;
    font-weight: 500;
}
main{
    margin-top: 300px;
}
.regblock{
    width: 700px;
    height: 400px;
    margin: 0 auto;
    background-color: #DB2B39;
    padding: 15px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1{
    font-size:50px;
    letter-spacing: 2px;
    font-weight: 500;
}

header{
    width: 300px;
    margin: 0 auto
}
.logo {
    width: 300px;
    height: 300px;
}
</style>