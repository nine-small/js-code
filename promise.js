// 延迟一段时间
function delay(duration){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        },duration)
    })
}
// 根据指定的图片路径，创建一个img元素
// 该函数需要返回一个promise，当图片加载完成后，任务完成，若图片加载失败，任务失败
// 任务完成后，需要提供的数据是图片DOM元素；任务失败时，需要提供失败的原因
// 提示： img元素有两个事件，load事件会在图像加载完成是触发，error事件会在图像加载失败时触发
function createImg(url){
    return new Promise((resolve,reject)=>{
        let img = new Image();
        img.src = url;
        img.onload = ()=>{
            resolve(img)
        }
        img.onerror = (e)=>{
            reject(e)
        }
    })
}


