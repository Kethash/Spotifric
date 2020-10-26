const MainApp = window.httpVueLoader('./components/MainApp.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Register = window.httpVueLoader('./components/Register.vue')

const Routes = [
  { path : '/', component : MainApp },
  { path : '/login', component : Login },
  { path : '/register', component : Register },
]


var app = new Vue({
  el: '#app',
  data: {},
  components: { MainApp, Login }
})
