const Home = window.httpVueLoader('./components/Home.vue')
const MainApp = window.httpVueLoader('./components/MainApp.vue')
const Abonnement = window.httpVueLoader('./components/Abonnement.vue')
const Session = window.httpVueLoader('./components/Session.vue')
const Newcomer = window.httpVueLoader('./components/Newcomer.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Ket = window.httpVueLoader('./components/ket.vue')
const Pay = window.httpVueLoader('./components/Pay.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/rejoindre', component: MainApp },
  { path: '/abonnement', component: Abonnement },
  { path: '/session', component: Session },
  { path: '/newcomer', component: Newcomer },
  { path: '/profil', component: Profil },
  { path: '/ket', component: Ket },
  { path: '/pay', component: Pay },
]

const router = new VueRouter({
  routes
})


var app = new Vue({
  router,
  el: '#app',
  data: {
    islogged: false,
    user: {
      username: "",
      email: "",
    },

    logged_out: false,

    //playlists : [{titre: "TitreTest", contenu: []}]
    // Playlist par défaut pour tester
    playlists: [{ titre: "TitreTest" , 
      contenu : 
      [
      { title: "Random", music: "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3", image: ""},
      { title: "Random 2", music: "http://soundbible.com/grab.php?id=915&type=mp3", image: "" },
      { title: "Rest", music: './components/mp3/Pheeno_Rest.mp3', image: "https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/250px-Rondoudou-RFVF.png" },
      { title: "Mirai Ticket", music: './components/mp3/MIRAI_TICKET.mp3', image: "" },
      { title: "Astronomia", music: 'https://youtu.be/--cxZbnmmoc', image: "" },
      { title: "Earth", music: 'https://youtu.be/w1cWzw_evtQ', image: "" },
      { title: "Geoplex Daybreak", music: 'https://youtu.be/yz9mqIbMSGA', image: "" },
      ],
    
    }],

    nowplaying : null,
    playing : false,
  },
  async mounted() {
  const res = await axios.get('/api/me');
  if(res) {
    this.user.username = res.data.username;
    this.user.email = res.data.email;
    this.islogged = true;
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
    if (res) { this.islogged = true; } else {
      this.logged_out = false;
      this.islogged = false;
    }
    this.user.username = res.data.username;
    this.user.email = res.data.email;

  },

  async logout() {
    try {
      await axios.delete('/api/logout');
      this.user.username = null;
      this.user.email = null;
      this.islogged = false;
      this.logged_out = true;

      setTimeout(() => {
        this.logged_out = false;
      }, 1000)

    } catch (err) {
      console.log(err);
    }
  },

  // Fonctions qui permettent de jouer de la musique


  async play(audio) {

    if (audio.music.includes("youtube") || audio.music.includes("youtu.be")) {
      console.log('heyy')
      //await axios.delete('/api/deletemp3');
      const res = axios.post('/api/ytdownload', {audio}).then( () => {
        var single = new Audio('./components/mp3/'+ audio.title +'.mp3')
        single.play();
        this.nowPlaying = single;
        this.playing = true;
        return
      });
    } else {
      var single = new Audio(audio.music);
      console.log(single);
      single.play();
    }

    if (this.nowPlaying) {
      this.nowPlaying.pause();
    }

    

    this.nowPlaying = single;
    this.playing = true;
  },

  async pause() {
    this.nowPlaying.pause();
    this.playing = false;
  },

  async resume() {
    this.nowPlaying.play();
    this.playing = true;
  },

  async addmusique(add) {

    const newMusic = {
      title: add.title,
      music: add.link,
      image: add.image,
    };

    this.playlists[0].contenu.push(add);

    const list = this.playlists[0]

    console.log(list);

    await axios.post('/api/upload', {list});
  }

},
})
