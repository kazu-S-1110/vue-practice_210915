new Vue({
  el: '#app',
  data: {
    message: 'hello!',
    hoge: 'hogehoge',
  },
  methods: {
    sayHi: function () {
      this.message = 'hello, vue';
      return this.message;
    },
    sayHello: function () {
      return this.hoge;
    },
  },
});
