new Vue({
  el: '#app',
  data: {
    message: 'hello!',
    hoge: 'hogehoge',
    el: '<h1>h1ですよ</h1>',
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
