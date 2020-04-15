// pages/about.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    name:'小程序',
    students:[
      {name:"jobe",id:1},
      {name:"kobe",id:2},
      {name:"lone",id:31}
    ],
    counter:1
  },
  //添加监听事件
  handButtonClick(){
//this.data.counter+=1  这是错误的做法，界面不会刷新
this.setData({
  counter:this.data.counter+1
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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