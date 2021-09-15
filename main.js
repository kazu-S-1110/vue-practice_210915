new Vue({
  el: '#app',
  data: {
    message: 'hello!',
    hoge: 'hogehoge',
  },
  methods: {
    sayHi: function () {
      return this.message;
    },
    sayHello: function () {
      return this.hoge;
    },
  },
});
