const MainApp = window.httpVueLoader('./components/MainApp.vue')

var app = new Vue({
  el: '#app',
  data: { },
  components: { MainApp }
})
