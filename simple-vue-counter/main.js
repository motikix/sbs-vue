// data 関数で返した値をテンプレート (html) 側で利用できる
const Counter = {
  // テンプレート側で参照する変数を定義する (data は関数であること)
  data() {
    return {
      counter: 0,
      ccounter: 0,
    }
  },
  // コンポーネントがマウントされたら呼び出されるライフサイクルフック
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  },
  // イベントハンドラ
  methods: {
    increment() {
      this.ccounter++
    },
  },
}

// Vue アプリケーションに `id=counter` で定義したタグをマウントする
Vue.createApp(Counter).mount('#counter')
