const BASE_URL = 'http://localhost:3000/v1/'  //基础url前缀
// 推荐歌单
export function getRecommendPlaylist(){
   return new Promise((resolve,reject)=>{
     wx.request({
       url:`${BASE_URL}personalized`,
       data:{cookie:''},
       success:function(res){
          resolve(res)
       },
       error:function(err){
         reject(err)
       }
     })
   })
}

export function getRecommendNewsong(){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${BASE_URL}personalized/newsong`,
      data:{cookie:''},
       success:function(res){
          resolve(res)
       },
       error:function(err){
         reject(err)
       }
    })
  })
}