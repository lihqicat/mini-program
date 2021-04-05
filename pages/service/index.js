const BASE_URL = 'http://localhost:3000/v1/' //基础url前缀
// 推荐歌单
export function getRecommendPlaylist() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}personalized`,
      data: {
        cookie: ''
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

//最新音乐
export function getRecommendNewsong() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}personalized/newsong`,
      data: {
        cookie: ''
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

//歌单
export function getPlaylistByCategory(category, offset, limit) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}top/playlist`,
      data: {
        type: category, //歌单分类
        offset, //列表偏移量
        limit //一次拉取树木
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

//歌单分类
export function getPlaylistBcatList() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}personalized/newsong`,
      data: {},
      success(res) {
        resolve(res.data)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

//电台
export function getRecommendProgram() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}program/recommend`,
      data: {},
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}

export function getRankingList() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${BASE_URL}toplist/detail`,
      data: {},
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}