const Home = window.httpVueLoader('./components/Home.vue')
const MainApp = window.httpVueLoader('./components/MainApp.vue')
const Abonnement = window.httpVueLoader('./components/Abonnement.vue')
const Session = window.httpVueLoader('./components/Session.vue')
const Newcomer = window.httpVueLoader('./components/Newcomer.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')


const routes = [
  { path : '/', component : Home },
  { path : '/rejoindre', component : MainApp },
  { path : '/abonnement', component : Abonnement },
  { path : '/session', component : Session },
  { path : '/newcomer', component : Newcomer },
  { path : '/profil', component : Profil },
]

const router = new VueRouter({
  routes
})


var app = new Vue({
  router,
  el: '#app',
  data: {
    islogged: false,
    user : {
      username: "",
      email: "",
    }
  },

  async mounted() {
    const res = await axios.get('/api/me');
    if(res) {
      this.user.username = res.data.username;
      this.user.email = res.data.email;
    }
  },

  methods: {
    async register(newUser) {
      await axios.post('/api/register', newUser);
      console.log('registered');
    },

    async login(logs) {
      await axios.post('/api/login', logs);
      const res = await axios.get('/api/me');
      console.log(res);
      if(res) { this.islogged = true; } else {
        this.islogged = false;
      }

      this.user.username = res.data.username;
      this.user.email = res.data.email;
      

    },

    async logout() {
      try {
        await axios.delete('/api/logout');
      } catch(err) {
        console.log(err);
      }
      
    },
  }
})
