const Home = window.httpVueLoader('./components/Home.vue')
const MainApp = window.httpVueLoader('./components/MainApp.vue')
const Abonnement = window.httpVueLoader('./components/Abonnement.vue')
const Session = window.httpVueLoader('./components/Session.vue')
const Newcomer = window.httpVueLoader('./components/Newcomer.vue')


const routes = [
  { path : '/', component : Home },
  { path : '/rejoindre', component : MainApp },
  { path : '/abonnement', component : Abonnement },
  { path : '/session', component : Session },
  { path: '/newcomer', component : Newcomer},
]

const router = new VueRouter({
  routes
})


var app = new Vue({
  router,
  el: '#app',
  data: {
    isLogged: false,
  },

  methods: {
    async register(newUser) {
      await axios.post('/api/register', newUser);
      console.log('registered');
    },

    async login(logs) {
      await axios.post('/api/login', logs);
      const res = await axios.get('/api/me');
      if(res) { this.isLogged = true; }
      

    },
  }
})
