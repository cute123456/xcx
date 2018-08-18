// pages/chat/chat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:[],
    tip:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    const message = [];
    wx.connectSocket({
      url: 'ws://cool1024.com:8000',
      header: {
        'content-type': 'application/json'
      },
      protocols: ['protocol1'],
      method: "GET"
    });
    wx.onSocketMessage(function (res) {
      message.push(res.data);
      that.setData({
        message
      })
      console.log('收到服务器内容：' + res.data)
    })

  },
  getValue:function(e){
    // return e;
    this.setData({
      tip: e.detail.value
    })
  },
  /***
   * 发送消息
   */
  sendMessage:function(e){
    wx.sendSocketMessage({
      data: this.data.tip
    });
    let array = [];
    array.push(this.data.tip);
   let temp =  this.data.message.concat(array);
    this.setData({
      message: temp
    });
    
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
  
  },

})