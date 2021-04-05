// pages/radio-tab/radio-tab.js.js
const service = require('../service/index');
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
    programs: [], //精彩节目推荐列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async initData() {
      try {
        const data = await service.getRecommendProgram();
        if(data.data && data.data.programs){
          this.setData({programs:data.data.programs})
        }
      } catch (err) {
        console.log(err)
      }
    },
    onClickProgram(e){
      console.log(11)
    }
  },
  lifetimes: {
    attached: function () {
      this.initData();
    }
  }
})