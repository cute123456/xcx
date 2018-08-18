// pages/report/report.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      // thumb:图标，text:描述内容,name:提交字段,status:是否验证必填,type:是否显示,price:前端手动添加用于计算总价
      { price: 0, thumb: '../../images/turnover/kj.png', text: '卡机刷卡', name: 'card_machine', id: 1, status: 0, type: 1 },
      { price: 0, thumb: '../../images/turnover/cj.png', text: '餐卷支付', name: 'voucher', id: 2, status: 1, type: 0 },
      { price: 0, thumb: '../../images/turnover/xj.png', text: '现金支付', name: 'cash', id: 3, status: 1, type: 1 },
      { price: 0, thumb: '../../images/turnover/wx.png', text: '微信支付', name: 'wechat_balance', id: 4, status: 1, type: 1 },
      { price: 0, thumb: '../../images/turnover/zfb.png', text: '支付宝', name: 'alipay_balance', id: 5, status: 1, type: 1 },
      { price: 0, thumb: '../../images/turnover/qt.png', text: '其他', name: 'other', id: 6, status: 1, type: 1 },
    ],
    toal: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 上报及验证表单
   */
  formSubmit: function (e) {
    let status = true,
      datas = e.detail.value;
    for (let key in datas) {
      let getDatas = this.getNameStatus(key);
      if (getDatas.status && !datas[key]) { // 是否校验非空
        status = false;
        app.toast(getDatas.text + '不能为空');
        break;
      }
    }
    if (status) {
      datas.total_amount = this.data.toal;
      app.toast('提交成功');
    }
  },
  /**
  * 计算总额 并判断输入的是否是数字
  */
  getToal: function (e) {
    let toal = 0, // 总价
      index = e.currentTarget.dataset.index, // 当前下标
      price = e.detail.value, // 输入的值（直接获取到的值是string不能作为判断是否是数字）
      data = `list[${index}].price`; // 赋值
    this.setData({
      [data]: price || 0
    });
    this.data.list.forEach(res => { // 计算总值
      toal += parseFloat(res.price);
    });
    this.setData({
      toal: toal
    });
  },
  /**
   * 通过key :
   * 1、获取name用于弹窗提示 
   * 2、获取status用于判断是否需要验证
   */
  getNameStatus: function (key) {
    let data = this.data.list.findIndex(res => {
      return res.name == key;
    });
    let getDatas = {};
    getDatas.text = this.data.list[data].text;
    getDatas.status = this.data.list[data].status;
    return getDatas;
  },
  /**
   * 补报
   */
  toRepay: function () {
    wx.navigateTo({
      url: '/pages/repay/repay'
    })
  },
  /**
   * 上报记录
   */
  toList: function () {
    wx.navigateTo({
      url: '/pages/report-list/report-list'
    })
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