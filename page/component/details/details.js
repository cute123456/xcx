// page/component/details/details.js
Page({
  data:{
    goods:{},
    goodsList: [
      {
        id: 2,
        image: '/image/s4.png',
        title: '瓜子',
        price: 0.01,
        stock: '有货',
        detail: '这里是瓜子详情。',
        parameter: '100g/个',
        service: '不支持退货'
      },
      {
        id: 3,
        image: '/image/s5.png',
        title: '芹菜',
        price: 0.01,
        stock: '有货',
        detail: '这里是芹菜详情。',
        parameter: '125g/个',
        service: '不支持退货'
      },
      {
        id: 4,
        image: '/image/s6.png',
        title: '素米',
        price: 0.03,
        stock: '有货',
        detail: '这里是素米详情。',
        parameter: '125g/个',
        service: '不支持退货'
      },
    ],
    num: 1,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: false
  },

  onLoad(e){
    let temp = this.data.goodsList.filter(item=>{
          return item.id == e.id
    });
    this.setData({
      goods: temp[0]
    })
  },
/**
 * 增加数量
 */
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num : num
    })
  },
  /**
   * 减少数量
   */
  reduceCount(){
    let num = this.data.num;
    num--;
    if(num<1){
      this.setData({
        num: 1
      });
      wx.showToast({
        title:'数量不能少于1',
        icon:'none'
      })
    }else {
      this.setData({
        num: num
      })
    }
  },
/**
 * 添加至购物车
 */
  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;

    self.setData({
      show: true
    })
    setTimeout( function() {
      self.setData({
        show: false,
        scaleCart : true
      })
      setTimeout( function() {
        self.setData({
          scaleCart: false,
          hasCarts : true,
          totalNum: num + total
        })
      }, 200)
    }, 300);
    // console.log(this.data.num)

    // 把商品加入本地缓存
    let goodsCart = wx.getStorageSync('goods');
    let temp = {};
    temp.id = this.data.goods.id;
    temp.title = this.data.goods.title;
    temp.price = this.data.goods.price;
    temp.num = this.data.num + self.data.totalNum;
    temp.image = this.data.goods.image;
    temp.selected = true;
    if (!goodsCart){
      let goodsCart = [];    
      goodsCart.push(temp);
      wx.setStorageSync('goods', goodsCart);      
          
    }else {
      let index = goodsCart.findIndex(item=>{
        return item.title == temp.title
      });
      console.log(index)
      console.log(temp)
      // 本地已经存在该商品
      if(index!==-1) {
        let count = goodsCart[index].num;
        goodsCart[index].num = this.data.num + self.data.totalNum + count;

      }else {
        goodsCart.push(temp);
      }

      wx.setStorageSync('goods', goodsCart)
    }
  // console.log(self.data.totalNum)
  },

  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  }
 
})