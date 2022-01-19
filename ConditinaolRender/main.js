new Vue({
  el: '#app',
  data: {
    ok: false,
    maybeOk: true,
    fruits: [
      'apple',
      'banana',
      'grape',
      'strawberry',
      'pineapple',
      'chocolate',
    ],
  },
  // dataの値に応じて動的に表現するとき、computedプロパティを使用する
  computed: {},
  // methodsは画面がレンダリングされる度に実行される(めっちゃ不便やんけ)、computedは参照している値が変更された時のみ実行される
  methods: {},
  watch: {
    // watchは非同期処理に最適、computedは同期的に動作する
  },
});
