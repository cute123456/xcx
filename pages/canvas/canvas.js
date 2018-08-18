// pages/canvas/canvas.js
let ctx = null;
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showBt: false,
    prurl: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'user',
      success: (res)=> {
        console.log(res.data.avatarUrl);
        this.checkInfo(res.data);
      }
    });

  },
  /**
   * 判断是否有个人信息
  */
  checkInfo: function (user) {
    if (user) {
      this.myCanvas(user.avatarUrl);
      this.setData({
        showBt: false
      })
    } else {
      this.setData({
        showBt: true
      })
    }
  },
  myCanvas: (url) => {
    ctx = wx.createCanvasContext('firstCanvas');
    ctx.setStrokeStyle("#fdfdfd")
    ctx.setLineWidth(180)
    ctx.rect(0, 0, 300, 300)
    ctx.stroke();
    ctx.setFontSize(20);
    ctx.fillText('扫描二维码', 100, 270);
    ctx.drawImage('../../images/code.png', 50, 46, 200, 200);
    ctx.drawImage(url, 128, 124, 46, 46);
    ctx.draw()

  },
  /**
* 生成分享图
*/
  share: function () {
    // wx.showLoading({
    //   title: '努力生成中...'
    // })
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 300,
      height: 300,
      destWidth: 180,
      destHeight: 180,
      canvasId: 'firstCanvas',
      success: (res)=> {
        this.setData({
          prurl: res.tempFilePath,
          hidden: false
        });
        this.savePic(res.tempFilePath);
        // wx.hideLoading()
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 下载图片
   */
  savePic:function(url){
    wx.saveFile({
      tempFilePath: url,
      success: (res)=> {
        var savedFilePath = res.savedFilePath;
        // console.log(savedFilePath)
        this.saveImg(savedFilePath);        
      }
    })
  },
  /**
   * 保存图片
  */
  saveImg: function (imgUrl) {
    console.log(imgUrl);
    wx.saveImageToPhotosAlbum({
      filePath: imgUrl,
      success(res) {
        wx.showModal({
          content: '图片已保存到相册，赶紧晒一下吧~',
          showCancel: false,
          confirmText: '好哒',
          confirmColor: '#72B9C3',
          success: (res) => {
            if (res.confirm) {
              console.log('用户点击确定');
              this.setData({
                hidden: true
              })
            }
          }
        })
      }
    })
  },
  getUserInfo: function (e) {
    let url = e.detail.userInfo.avatarUrl;
    app.globalData.userInfo = e.detail.userInfo;
    // this.myCanvas(url)
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  toChat: function () {
    wx.navigateTo({
      url: '/pages/chat/chat',
    })
  }
})