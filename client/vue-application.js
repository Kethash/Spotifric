const Home = window.httpVueLoader('./components/Home.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const Register = window.httpVueLoader('./components/Register.vue')

const routes = [
  { path : '/', component : Home },
  { path : '/login', component : Login },
  { path : '/register', component : Register },
]

const router = new VueRouter({
  routes
})


var app = new Vue({
  router,
  el: '#app',
  data: {},

  methods: {
    async register(newUser) {
      await axios.post('/api/register', newUser);
    },

    async login(logs) {
      await axios.post('/api/login', logs);
    },
  }
})
