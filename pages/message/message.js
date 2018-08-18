// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: 0,
    datas: [
      {
        icon: 'https://png.icons8.com/dusk/30/000000/restaurant.png',
        text: '早餐',
        name: 'breakfast',
        price: 0
      },
      {
        icon: 'https://png.icons8.com/clouds/30/000000/restaurant.png',
        text: '午餐',
        name: 'lunch',
        price: 0
      },
      {
        icon: 'https://png.icons8.com/office/40/000000/sandwich.png',
        text: '晚餐',
        name: 'dinner',
        price: 0
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 提交表单
   */
  formSubmit: function (e) {
    console.log(e.detail.value);
    let datas = e.detail.value;
    for (let i in datas) {
      if (!datas[i]) {
        wx.showToast({
          title: '请输入' + this.showName(i) + '金额',
          icon: 'none',
          duration: 2000
        })
      }
    }

  },
  /**
   * 重置表单
   */
  formReset: function () {
    this.setData({
      total: 0
    });
    this.data.datas.forEach(item=>{
        item.price=0;
    });
  },
  /**
   * 计算总价
   */
  inputText: function (e) {
    let price = parseFloat(e.detail.value);
    let index = e.currentTarget.dataset.index;
    if(!price){
      price=0;
    }
    let strs = "datas[" + index + "].price";
    this.setData({
      [strs]: price,
    });
    let sum = 0;
      for (let i of this.data.datas) {
        sum = sum + i.price;
    }
    this.setData({
      total: sum      
    })
    // console.log('sum'+price)
  },
  /**
   * 获取名称
   */
  showName: function (name) {
    let index = this.data.datas.findIndex(item => {
      return item.name == name
    });
    return this.data.datas[index].text;
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})