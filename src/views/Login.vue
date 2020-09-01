<template>
    <div class="login-page">
        <vue-element-loading :active="status.loggingIn" :text="'Logging In ...'" 
            spinner="bar-fade-scale" :is-full-screen='true'/>
        <h1>Login</h1>
        <div class="form">
            <input type="text" v-model="username" name="username" placeholder="username"
                class="form__input" :class="{ 'is-invalid': submitted && !username }"/>
            <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
        </div>
        <div class="form">
            <input type="password" v-model="password" name="password" placeholder="password"
                class="form__input" :class="{'is-invalid': submitted && !password}"/>
            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
        </div>
        <div class="form">
            <button class="form__button" :disabled="status.logginIn || !username || !password" 
                @click.prevent="login">Login</button>
        </div>
        <p class="form__message">{{message}}</p>

    </div>
</template>

<script>
import VueElementLoading from 'vue-element-loading'
import config from '../config.js'
import axios from 'axios'
export default {
    data() {
        return {
            username: '',
            password: '',
            submitted: false,
            message: '',
            status: {
                loggingIn: false
            }
        }
    },
    // updated() {
    //     console.log(this.$route)
    // },
    mounted() {
        this.$store.commit('visitLoginPage')
    },
    components: {
        VueElementLoading
    },
    methods: {
        login() {
            this.status.logginIn = true
            this.message = ''
            let formData = new FormData()
            console.log(this.navbarOptions)
            formData.append('username', this.username)
            formData.append('password', this.password)
            axios.post(config.APP_URL+'api/login', formData)
                .then(resp => {
                    this.$store.commit('updateUser', resp.data)
                    this.$store.commit('loggedIn')
                    // console.log(this.$store.state.user)
                    this.status.logginIn = false
                    this.$router.push({ name: 'Blog' })
                })
                .catch(error => {this.message = error.response.data.error})
        }
    }
}
</script>

<style scoped>
.login-page {
    width: 360px;
    margin: auto;
}
.form__input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}
.form__button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4CAF50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}
.form__button:hover, .form__button:active, .form__button:focus{
    background: #43A047;
}
.form__button:disabled {
    background-color: #cccccc;
}
.form__message{
    color: red;
    font-family: "Roboto", sans-serif;
    text-align: left;
    font-size: 12px;
}


</style>