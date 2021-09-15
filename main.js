new Vue({
  el: '#app',
  data: {
    message: 'hello!',
    hoge: 'hogehoge',
    el: '<h1>h1ですよ</h1>',
    url: 'http://google.com',
    attribute: 'href',
    idNum: 12,
    urlObject: {
      href: 'https://twitter.com',
      id: 12,
    },
    clickNum: 0,
    x: 0,
    y: 0,
  },
  methods: {
    sayHi: function () {
      this.message = 'hello, vue';
      return this.message;
    },
    sayHello: function () {
      return this.hoge;
    },
    countUp: function () {
      this.clickNum += 1;
    },
    // $をつける際にはeventとしないと動作しなかった、、、
    changeMousePosition: function ($event, divNum) {
      this.x = event.clientX / divNum;
      this.y = event.clientY / divNum;
    },
    // 下のがイベント修飾子、これを簡単に実装できる機能がvueにある
    // イベントが発火させないところに.stopって入れるだけ
    // noEvent: function (event) {
    //   event.stopPropagation() => .stop
    //   event.preventDefault() => .prevent
    // },
  },
});
