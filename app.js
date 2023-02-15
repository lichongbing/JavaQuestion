import updateManager from './common/updateManager';

App({
  onLaunch: function () {
    wx.cloud.init()
  },
  onShow: function () {
    updateManager();
  },
});
