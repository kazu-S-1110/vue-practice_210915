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
    e: 'click',
    x: 0,
    y: 0,
    // dataから別dataにアクセスすることはできない
  },
  // dataの値に応じて動的に表現するとき、computedプロパティを使用する
  computed: {
    lessThanThree: function () {
      return this.clickNum > 3
        ? 'you clicked over than 3'
        : 'you clicked less than 3';
    },
    countUpComputed: function () {
      return (this.clickNum += 1);
    },
  },
  // methodsは画面がレンダリングされる度に実行される(めっちゃ不便やんけ)、computedは参照している値が変更された時のみ実行される
  methods: {
    sayHi: function () {
      this.message = 'hello, vue';
      return this.message;
    },
    sayHello: function () {
      return this.hoge;
    },
    countUpMethod: function () {
      this.clickNum += 1;
    },
    // $をつける際にはeventとしないと動作しなかった、、、
    changeMousePosition: function ($event, divNum) {
      this.x = event.clientX / divNum;
      this.y = event.clientY / divNum;
    },
    lessThanThreeMethod: function () {
      // console.log('run method!');
      return this.clickNum > 3
        ? 'you clicked over than 3'
        : 'you clicked less than 3';
    },
    // 下のがイベント修飾子、これを簡単に実装できる機能がvueにある
    // イベントが発火させないところに.stopって入れるだけ
    // noEvent: function (event) {
    //   event.stopPropagation() => .stop
    //   event.preventDefault() => .prevent
    // },
    myAlert() {
      alert('Alert!!!');
    },
  },
  watch: {
    // watchは非同期処理に最適、computedは同期的に動作する
    counter: function () {
      // dataへのアクセスは特殊。thisの直接はだめ
      var vm = this;
      setTimeout(function () {
        vm.clickNum = 0;
      }, 3000);
    },
  },
});
