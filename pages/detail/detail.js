// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:'',
    id:1,   
     detail:[
      {
        id: 1,
        pic: '../../images/timg(11).jpg',
        content: '哈哈哈我是张大大'
      },
      {
        id: 2,
        pic: '../../images/timg(12).jpg',
        content: '广东省广泛'        
      },
      {
        id: 3,
        pic: '../../images/timg(13).jpg',
        content: '消愁'        
      },
      {
        id: 4,
        pic: '../../images/timg(14).jpg',
        content: '哈哈哈我是张大大'        
      },
      {
        id: 5,
        pic: '../../images/timg(19).jpg',
        content: '不会的搜返回'        
      },
      {
        id: 6,
        pic: '../../images/timg(15).jpg',
        content: '我是李易峰'        
      },
      {
        id: 7,
        pic: '../../images/timg(18).jpg',
        content: '哈哈哈我是张大大'        
      },
      {
        id: 8,
        pic: '../../images/timg(22).jpg',
        content: '有点发挥示范户'        
      },
    ]
  },
  getDtail:function(){
      // console.log(this.data.detail[(this.data.id-1)]);
      this.setData({
        info: this.data.detail[(this.data.id - 1)]
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
    this.getDtail();    
    // console.log(this.data.id)
    
    // console.log(options.id)
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