// index.js
var benjin,lilv,sum;
Page({
  benjinNum:function(e){
    benjin=parseInt(e.detail.value);
  },
  lilvNum:function(e){
    lilv=parseInt(e.detail.value);
  },
  calc:function(){
    sum=benjin;
    for(var i=1;i<=5;i++){
      sum=sum*(1+0.01*lilv);
    }
    this.setData({
      S:sum
    })
  }
});
