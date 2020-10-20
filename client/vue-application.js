const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')

Vue.component('hello-world', {
  data: function () {
    return {
      message: ', World'
    }
  },
  template: `<p>Hello{{ message }}!</p>`
})

var app = new Vue({
  el: '#app',
  data: { },
  components: { HelloOtherWorld }
})
