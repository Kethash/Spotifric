const Home = window.httpVueLoader('./components/Home.vue')
const MainApp = window.httpVueLoader('./components/MainApp.vue')
const Abonnement = window.httpVueLoader('./components/Abonnement.vue')
const Fonctionnement = window.httpVueLoader('./components/Fonctionnement.vue')
const Profil = window.httpVueLoader('./components/Profil.vue')
const Musique = window.httpVueLoader('./components/Musique.vue')
const Pay = window.httpVueLoader('./components/Pay.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/rejoindre', component: MainApp },
  { path: '/abonnement', component: Abonnement },
  { path: '/fonctionnement', component: Fonctionnement },
  { path: '/profil', component: Profil },
  { path: '/musique', component: Musique },
  { path: '/pay', component: Pay },
]

const router = new VueRouter({
  routes
})

Vue.component('pay-compo', Pay )


var app = new Vue({
  router,
  el: '#app',
  data: {
    islogged: false,
    user: {
      username: "",
      email: "",
      money: 0,
    },

    logged_out: false,

    playlists : {musiques: []},
    // Playlist par défaut pour tester
    exemple_playlist: 
      {
        musiques : [{ title: "Random", music: "http://soundbible.com/mp3/Air Plane Ding-SoundBible.com-496729130.mp3", image: ""},
      { title: "Random 2", music: "http://soundbible.com/grab.php?id=915&type=mp3", image: "" },
      { title: "Rest", music: './components/mp3/Pheeno_Rest.mp3', image: "https://www.pokepedia.fr/images/thumb/c/cd/Rondoudou-RFVF.png/250px-Rondoudou-RFVF.png" },
      { title: "Mirai Ticket", music: './components/mp3/MIRAI_TICKET.mp3', image: "" },
      { title: "Astronomia", music: 'https://youtu.be/--cxZbnmmoc', image: "" },
      { title: "Earth", music: 'https://youtu.be/w1cWzw_evtQ', image: "" },
      { title: "Geoplex Daybreak", music: 'https://youtu.be/yz9mqIbMSGA', image: "" },
      { title: "Evergreen", music: './components/mp3/Evergreen.mp3', image: "./ressources/images_playlist/emma.png" },
    ]
  },


    nowplaying : null,
    playing : false,
  },
  async mounted() {
  const res = await axios.get('/api/me');
  if(res) {
    this.user.username = res.data.username;
    this.user.email = res.data.email;
    this.user.money = res.data.money;
    this.islogged = true;
  }

  const res2 = await axios.get('/api/user/playlists');

  this.playlists = res2.data.data;
  console.log(this.playlists);

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
    if (res) { 
      this.islogged = true;
      const res2 = await axios.get('/api/user/playlists');
      this.playlists = res2.data.data;
      this.user.username = res.data.username;
      this.user.email = res.data.email;
      this.user.money = res.data.money;

    } else {
      this.logged_out = false;
      this.islogged = false;
    }
    

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

    //console.log(list);

    const title = add.title;
    const music = add.music;
    const image = add.image;

    try {
      await axios.post('/api/upload', {title, music, image});
      const res2 = await axios.get('/api/user/playlists');
      this.playlists = res2.data.data;

    } catch(err) {
      console.log(err);
    }
  },

  async removemusic(box) {
    this.playlists.musiques.splice(this.playlists.musiques.indexOf(box),1)
    await axios.delete('/api/user/playlists/' + box.title);
    const res2 = await axios.get('/api/user/playlists');
    this.playlists = res2.data.data;
  },

  async restore() {
    this.playlists = this.exemple_playlist;
    const playlist = this.playlists;
    await axios.put('/api/user/playlists', {playlist});
    const res2 = await axios.get('/api/user/playlists');
    this.playlists = res2.data.data;

  },

  async ipay(money){
    const res = await axios.put('/api/pay', {money});

  },

  async modifierMusique(box, past_box) {


    //console.log(box);

    const title = box.title;
    const music = box.music;
    const image = box.image;


    numero = this.playlists.musiques.findIndex(x => (x.title == past_box.title && x.music == past_box.music));


    await axios.put('/api/user/setbox/' + numero, {title, music, image});

  }
  

},
})

