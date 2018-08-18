
import tempObj from '../../components/template/template';

// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists:[
      { id:1,
        pic: '../../images/timg(11).jpg',
      },
      {
        id: 2,
        pic: '../../images/timg(12).jpg',
      },
      {
        id: 3,
        pic: '../../images/timg(13).jpg',
      },
      {
        id: 4,
        pic: '../../images/timg(14).jpg',
      },
      {
        id: 5,
        pic: '../../images/timg(19).jpg',
      },
      {
        id: 6,
        pic: '../../images/timg(15).jpg',
      },
      {
        id: 7,
        pic: '../../images/timg(18).jpg',
      },
      {
        id: 8,
        pic: '../../images/timg(22).jpg',
      },
    ],
    links:[
      {
        name:'李易峰',
        tel:'14269536852'
      },
      {
        name: '鹿晗',
        tel: '17854623586'
      },
      {
        name: '张艺兴',
        tel: '15236547963'
      },
      {
        name: '吴亦凡',
        tel: '13245963264'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  clickView:function(e){
    wx.showActionSheet({
      itemList: ['呼叫', '添加联系人'],
      success: function (res) {
        if (res.tapIndex == 0) {
          wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.item.tel//仅为示例，并非真实的电话号码
          })
        } else {
          wx.addPhoneContact({
            firstName: e.currentTarget.dataset.item.name, //联系人姓名  
            mobilePhoneNumber: e.currentTarget.dataset.item.tel, //联系人手机号  
          })
        }
      }
    })
  },
  itemclick(event) {
    // console.log(1)
    tempObj.clickView(event)
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