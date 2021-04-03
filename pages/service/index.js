const BASE_URL = 'http://localhost:3000/v1/' //基础url前缀
// 推荐歌单
export function getRecommendPlaylist() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}personalized`,
      data: {
        cookie: ''
      },
      success: function (res) {
        resolve(res)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

export function getRecommendNewsong() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}top/playlist`,
      data: {
        cookie: ''
      },
      success: function (res) {
        resolve(res)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

export function getPlaylistByCategory(category, offset, limit) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}personalized/newsong`,
      data: {
        type: category,//歌单分类
        offset, //列表偏移量
        limit //一次拉取树木
      },
      success: function (res) {
        resolve(res)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}