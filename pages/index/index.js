Page({
  data: {
    inputVal:'',
    msgData:[]
  },
  //添加留言
  changeInputVal(ev){
    this.setData({
      inputVal:ev.detail.value
    });
  },
  addMsg(){
    var list=this.data.msgData;
    list.push({
      msg:this.data.inputVal
    });
    //更新
    this.setData({
      msgData:list,
      inputVal:""
    });
  },
  //删除留言
  delMsg(ev){
    var n = ev.target.dataset.index;
    var list = this.data.msgData;
    list.splice(n,1);
    this.setData({
      msgData:list
    })
  }
})
