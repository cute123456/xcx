// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avialHeight:'',
   images : [
      { pic: "../../images/1.png", height: 0 },
      { pic: "../../images/2.png", height: 0 },
      { pic: "../../images/3.png", height: 0 },
      { pic: "../../images/4.png", height: 0 },
      { pic: "../../images/5.png", height: 0 },
      { pic: "../../images/6.png", height: 0 },
      { pic: "../../images/7.png", height: 0 },
      { pic: "../../images/8.png", height: 0 },
      { pic: "../../images/9.png", height: 0 },
      { pic: "../../images/10.png", height: 0 },
      { pic: "../../images/11.png", height: 0 },
      { pic: "../../images/12.png", height: 0 },
      { pic: "../../images/13.png", height: 0 },
      { pic: "../../images/14.png", height: 0 }
    ]
  },
  getInfo: function(){

  },
  lower:function(e){
    let temp = this.data.images;
    if (temp.length < 100) {
      temp = this.data.images.concat(this.data.images)
      this.setData({
        images: temp
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        // console.log(res.windowHeight)
        that.setData({
          avialHeight: res.windowHeight
        });
      }
    })
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