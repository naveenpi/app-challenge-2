const multiply = (x, y) => { return x * y }

const adder = new Vue({
  el: '#calculate',
  data: {
    stories: 5,
    sketches: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.stories)
      const j = parseInt(this.sketches)
      return `The total number of sketches are ${multiply(i, j)}.`
    }
  }
})