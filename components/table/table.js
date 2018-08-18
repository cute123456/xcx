Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    // 这里定义了属性，属性值可以在组件使用时指定
    goods: {
      type: Object, // 因此处的thead是json格式，故将数据类型设置为object
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    toDetaill:function(e){
      wx.navigateTo({
        url: '/pages/detail/detail?id=' + e.currentTarget.dataset.id,
      })
    },
    // 这里是一个自定义方法
    customMethod: function () { }
  }
})