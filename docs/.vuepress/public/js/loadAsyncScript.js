
/**
 * 异步加载依赖的javascript文件
 * src：script的路径
 * callback：当外部的javascript文件被load的时候，执行的回调
 */
const loadAsyncScript =  (src, callback) => {
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", src);
  script.setAttribute("async", true);
  script.setAttribute("defer", true);
  document.body.appendChild(script);

  if (script.readyState) {//ie
    script.onreadystatechange = function() {
      var state = this.readyState;
      if (state === 'loaded' || state === 'complete') {
        callback();
      }
    }
  } else {//Others: Firefox, Safari, Chrome, and Opera
    script.onload = function() {
      callback();
    }
  }
}
export default loadAsyncScript
