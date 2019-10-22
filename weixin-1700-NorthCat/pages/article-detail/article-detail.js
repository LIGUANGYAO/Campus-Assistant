const app = getApp();
var util = require('../../utils/util.js');
const api = require('../../api.js');

Page({

  data: {
    userInfo: {},
    title: '',
    content: '',
    userOpenid: '',
    wordnum: 0,
    time: '',
    hiddenit: true,
    option: [
      { 'text': '微信', 'imageurl': 'http://www.xztywss.top/img/luntan/wechat.png', 'placeholder': '请输入您的微信', 'bindinput':'bindinput3'},
      { 'text': 'QQ', 'imageurl': 'http://www.xztywss.top/img/luntan/qq.png', 'placeholder': '请输入您的QQ', 'bindinput': 'bindinput4' },
      { 'text': '标签', 'imageurl': 'http://www.xztywss.top/img/luntan/signicon.png', 'placeholder': '为文章添加标签', 'bindinput': 'bindinput5' },
      { 'text': '风格', 'imageurl': 'http://www.xztywss.top/img/luntan/style.png', 'placeholder': '文章风格', 'bindinput': 'bindinput6'},
      { 'text': '学校', 'imageurl': 'http://www.xztywss.top/img/luntan/school.png', 'placeholder': '请输入您的学校', 'bindinput': 'bindinput7' },
      { 'text': '爱好', 'imageurl': 'http://www.xztywss.top/img/luntan/hobby.png', 'placeholder': '请输入您的爱好', 'bindinput': 'bindinput8'},
    ],
    inputlist:[
      { tip: '作者', placeholder: '请输入您的姓名',bindinput: 'bindinput1'},
      { tip: '文章简介', placeholder: '请输入文章简介', bindinput: 'bindinput2' },
    ],
    ensure: false, 
    imageurl: [
      
    ],
    author: '',
    described: '',
    wechat: '',
    qq: '',
    sign: '',
    style: '',
    school: '',
    hobby: ''
  },

  bindinput1: function(e) {
    this.data.author = e.detail.value;
  },

  bindinput2: function (e) {
    this.data.described = e.detail.value;
  },

  bindinput3: function (e) {
    this.data.wechat= e.detail.value;
  },

  bindinput4: function (e) {
    this.data.qq= e.detail.value;
  },

  bindinput5: function (e) {
    this.data.sign = e.detail.value;
  },

  bindinput6: function (e) {
    this.data.style = e.detail.value;
  },

  bindinput7: function (e) {
    this.data.school = e.detail.value;
  },

  bindinput8: function (e) {
    this.data.hobby = e.detail.value;
  },

  showelement: function() {
    this.setData({
      hiddenit: false
    })
  },
  deleteelement:function(e) {
    var tip = e.currentTarget.dataset.tip;
    var length = this.data.inputlist.length;
    for (var i = 0; i < length; i++) {
      if (this.data.inputlist[i].tip == tip) {
        if (tip == '作者' || tip == '文章简介') {
          wx.showToast({
            title: '此栏不可删除',
            icon: 'none'
          })
        }else{
          this.data.inputlist.splice(i, 1)
          this.setData({
            'inputlist': this.data.inputlist,
          });
        }
      }
    }
  },

  addelement: function(e) {
    var tip = e.currentTarget.dataset.text;
    var placeholder = e.currentTarget.dataset.placeholder;
    var bindinput = e.currentTarget.dataset.bindinput;
    var inputlist = this.data.inputlist;
    var length = inputlist.length;
    var judge = "no";
    for(var i=0; i<length; i++){
      if (inputlist[i].tip == tip){
        judge = "yes";
        wx.showToast({
          title: '重复添加',
          icon: 'none'
        })
        break;
      }
    }
    if(judge == "no"){
      var newarray = [{
        tip: tip,
        placeholder: placeholder,
        bindinput: bindinput
      }];
      this.data.inputlist = this.data.inputlist.concat(newarray);
      this.setData({
        'inputlist': this.data.inputlist,
         hiddenit: true,
      });
    }
  },

  hide: function() {
    this.setData({
      hiddenit: true
    })
  },

  next:function(e) {
    var userOpenid = this.data.userOpenid;
    var nickName = this.data.userInfo.nickName;
    var avatarUrl = this.data.userInfo.avatarUrl;
    var title = e.currentTarget.dataset.title;
    var content = e.currentTarget.dataset.content;
    var author = this.data.author; 
    var described = this.data.described; 
    var wechat = this.data.wechat; 
    var qq = this.data.qq; 
    var sign = this.data.sign;
    var style = this.data.style; 
    var school = this.data.school; 
    var hobby = this.data.hobby; 
    var that = this;
    if(author == ''){
      wx.showToast({
        title: '作者栏为必填内容',
        icon: 'none'
      })
    }else if(described == ''){
      wx.showToast({
        title: '文章简介栏为必填内容',
        icon: 'none'
      })
    }else{
      wx.showActionSheet({
        itemList: ['发表文章', '预览图片'],
        success(res) {
          wx.getStorage({
            key: 'userOpenid',
            success: function (resin) {
              var userOpenid = resin.data;
              if (res.tapIndex === 0) {
                nickName = encodeURIComponent(nickName); nickName = encodeURIComponent(nickName);//二次编码
                title = encodeURIComponent(title); title = encodeURIComponent(title);//二次编码
                content = encodeURIComponent(content);content = encodeURIComponent(content);//二次编码
                author = encodeURIComponent(author);author = encodeURIComponent(author);//二次编码
                described = encodeURIComponent(described); described = encodeURIComponent(described);//二次编码
                wechat = encodeURIComponent(wechat); wechat = encodeURIComponent(wechat);//二次编码
                qq = encodeURIComponent(qq); qq = encodeURIComponent(qq);//二次编码
                sign = encodeURIComponent(sign); sign = encodeURIComponent(sign);//二次编码
                style = encodeURIComponent(style); style = encodeURIComponent(style);//二次编码
                school = encodeURIComponent(school); school = encodeURIComponent(school);//二次编码
                hobby = encodeURIComponent(hobby); hobby = encodeURIComponent(hobby);//二次编码
                wx.showLoading({
                  title: '正在上传',
                })
                wx.request({
                  url: api.ip + 'forarticle/insertarticlebyid?title=' + title + '&content=' + content + '&author=' + author +
                    '&openid=' + userOpenid + '&nickName=' + nickName + '&avatarUrl=' + avatarUrl + '&described=' +
                    described + '&wechat=' + wechat + '&qq=' + qq + '&sign=' + sign + '&style=' + style + '&school=' + school + '&hobby=' + hobby,
                  method: 'POST',
                  data: {},
                  success: function () {
                    wx.showToast({
                      title: '上传成功',
                    })
                  }
                })
              } else if (res.tapIndex === 1) {
                userOpenid = that.data.userOpenid;
                nickName = that.data.userInfo.nickName;
                avatarUrl = that.data.userInfo.avatarUrl;
                title = e.currentTarget.dataset.title;
                content = e.currentTarget.dataset.content;
                author = that.data.author;
                described = that.data.described;
                wechat = that.data.wechat;
                qq = that.data.qq;
                sign = that.data.sign;
                style = that.data.style;
                school = that.data.school;
                hobby = that.data.hobby; 
                wx.navigateTo({
                  url: '../article-share/article-share?title=' + title + '&content=' + content + '&author=' + author + '&describe=' +
                    described + '&wechat=' + wechat + '&qq=' + qq + '&sign=' + sign + '&style=' + style + '&school=' + school + '&hobby=' + hobby +
                    '&userOpenid=' + userOpenid + '&nickName=' + nickName + '&avatarUrl=' + avatarUrl,
                })
              }
            },
          })
        }
      })
    
    }
  },

  onLoad: function (options) {
    var TIME = util.formatData(new Date());
    this.setData({
      title: options.title,
      content: options.content,
      wordnum: options.wordnum,
      userInfo: app.globalData.userInfo,
      time: TIME,
    })
  },

  onReady: function () {
    var that = this;
    wx.getStorage({
      key: 'userOpenid',
      success: function (res) {
        that.setData({
          userOpenid: res.data
        })
      },
    })
  },

  onShow: function () {
    var that = this;
    wx.request({
      url: api.ip + 'ensure/ensurenumber',
      method: 'GET',
      data: {},
      success: function (res) {
        var ensure = res.data.ensure;
        if (ensure == null) {
          var toastText = '获取数据失败' + res.data.errMsg;
          wx.showToast({
            title: toastText,
            icon: '',
            duration: 2000 //弹出时间
          })
        } else {
          that.setData({
            ensure: ensure,
          });
        }
      }
    })
  },

  onHide: function () {
    
  },

  onUnload: function () {
    
  },

  onPullDownRefresh: function () {
    
  },

  onReachBottom: function () {
    
  },

  onShareAppMessage: function () {
    
  }
})