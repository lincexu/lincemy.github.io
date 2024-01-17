//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '别草可堪游子去——bye,lince';
    clearTimeout();
  } else {
    //返回当前页面时标签显示内容
    document.title = '寄梅应为故人来——hello,lince';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});