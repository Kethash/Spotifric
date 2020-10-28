const Home = window.httpVueLoader('./components/Home.vue')
const Register = window.httpVueLoader('./components/Register.vue')
const MainApp = window.httpVueLoader('./components/MainApp.vue')


const routes = [
  { path : '/', component : Home },
  { path : '/register', component : Register },
  { path : '/rejoindre', component : MainApp }
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
