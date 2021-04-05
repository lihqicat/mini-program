// pages/recommend/recommend-tab.js.js
const req= require('../service/index')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    loading:false,
    playlist:[],//推荐歌单
    newSonglist:[],//最新音乐
    mvlist:[],//推荐mv
    djlist:[],//主播电台
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initData(){
      try{
        const res = await req.getRecommendPlaylist();
        const newSong = await req.getRecommendNewsong();
        this.setData({
          loading:false,
          playlist:res.data.result,
          newSonglist:newSong.data.result.slice(0,6)
        })
      } catch(err){
        console.log(err)
        wx.showToast({
          title: '获取数据失败，请稍后再试！',
          icon:'none',
          duration:1500
        })
      }
    }
  },
  lifetimes:{
    //组件实例之后
    attached:function(){
      this.initData();
    }
  }
})
