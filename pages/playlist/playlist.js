const service = require('../service/index');
const LIMIT = 10;
// pages/playlist/playlist.js
Component({

  /**
   * 页面的初始数据
   */
  data: {
    hasMore: true,
    playlists: [],
    offset: 0,
    selectedCategory: '全部歌单',
    loading: true
  },

  // 组件方法列表
  methods: {
    async getData() {
      try {
        this.setData({loading:true})
        const {
          selectedCategory,
          offset,
          playlists
        } = this.data;
        const res = await service.getPlaylistByCategory(selectedCategory, offset, LIMIT);
        if (res.data && res.data.playlists) {
          res.data.playlists = playlists.concat(res.data.playlists);
        }
        this.setData({
          playlists: res.data.playlists,
          offset: offset + LIMIT,
          loading: false
        });
      } catch (error) {
        this.setData({
          loading: false
        });
        console.log('数据加载失败')
      }
    },
    onReachBtn() {
      this.getData();
    }
  },
  lifetimes: {
    attached: function () {
      this.getData();
    },
  },
})