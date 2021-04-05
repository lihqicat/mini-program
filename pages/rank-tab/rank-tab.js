// pages/rank-tab/rank-tab.js
const service = require('../service/index')
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
    netmusicList: [],
    rankingList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initData() {
      let netmusicList =[];
      let rankingList = [];
      const ranks = await service.getRankingList();
      console.log(ranks)
      if(ranks.data && ranks.data.list){
        ranks.data.list.map(item=>{
          if(item.ToplistType){
            netmusicList.push(item);
          }else{
            rankingList.push(item);
          }
        })
        this.setData({netmusicList,rankingList})
      }
    }

  },
  lifetimes: {
    attached: function () {
      this.initData();
    }
  }
})