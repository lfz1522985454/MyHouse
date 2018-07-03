(function () {
  (function (factory) {
    var glob;
    try {
      glob = window;
    } catch (e) {
      glob = self;
    }

    glob.AICSH5Client = factory();
  }(function (undefined) {
    var config = {
      aicsWinPopup: false,
      aicsClientWinId: '_aics_client_win_',
      aicsTriggerId: '_aics_trigger_wrapper_',
    };

    var AICSH5Client = function () {
      // call reset to init the instance
      this.reset();
    };
    AICSH5Client.prototype.createTrigger = function (clientSettings, triggerPos) {
      if (!clientSettings ||
        (!clientSettings.productId && clientSettings.productId !== 0) ||
        (!clientSettings.staffService && clientSettings.staffService !== 0)) {
        alert('缺少productId 或者 staffService')
        return false;
      }
      var _this = this;
      var wrapper = document.createElement('div');
      wrapper.setAttribute("id", config.aicsTriggerId);
      wrapper.setAttribute('style', 'position: fixed; bottom: 115px; right: 20px; z-index: 99999;box-sizing: border-box;');
      wrapper.setAttribute('title', '智能客服');
      var h5clientTrigger = document.createElement('div')
      var img = document.createElement('img');
      img.setAttribute("style", "position: absolute; left: 0px; right: 0px; top: 0px; bottom: 0px; margin: auto; width: 2em; height: 2em;");
      img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMA7vjDEfzkBXYN8mf1697ObygjEwO5qpkbAda0r6ORhH1fWVRJPzAeFwrawL2KUEU9NnGLpzs/AAABaklEQVRYw+2Vx46DMBRFbwqmdwiQ3nub4f//bZANYyKFSNibaCZndxbvCGHrGe9BOu+RTkuOsXkAI9OsXAhyBSXJRVFMFHi5OModCI1cAjeClkuxwUkucAGRC4zRlQv0PoFP4G8GOqORUXd7FFt1J+Nz91VgegD0CfeZCoRj7lrh+7g5EGcoUN3KB3j0hLpOGgNbUNaVB8yXpSohc7MxEIGyL9UAwy/dKf2rMaCDEpTaVR8H7Iz5rTGwAEWr/Mp8xjcoJWkM2Cn9YqtyEqJg++tD+okbpfkYibkLPJu7s9j5msF9uEz9ufXeV/kT+K8BQy5wxlEuMMFALvCNpVwggOrIzA/oChWnE7ANJkp3DYopeJTOHSXppf2PUFztgBpqv8ZKeTZy2vdrRHjFs0JPRwsWisw8f/84ro6WeHmdYYjWzHMO2UGAGX/yfAgxrS7sFmJkCbuwN4gSTYp5ZQVxomLdeJBBnXp4d34As308DxgpjYsAAAAASUVORK5CYII=";
      document.body.appendChild(wrapper)
      wrapper.appendChild(h5clientTrigger)
      h5clientTrigger.appendChild(img);

      // h5clientTrigger.setAttribute("style", "color: blue;width: 50px;height:50px;position:fixed;right: 100px;bottom: 50px;background-color: orange;");
      h5clientTrigger.setAttribute("style", "box-sizing: border-box;width: 56px; cursor: pointer; height: 56px; padding: 4px 0px; border-radius: 50%; background-color: rgba(0,0,0,.4); border: 3px solid rgba(205,215,222,.6); text-align: center; opacity: .5;");
      h5clientTrigger.onclick = window.closeChatWin = function () {
        if (!document.getElementById(config.aicsClientWinId)) {
          config.aicsWinPopup = true;
          _this.popUpChatWin(clientSettings, triggerPos);
          img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMACgUDBr3lFwGjk3n64M641rQSsKyonItnHNvTyJclIQ7Dc3JuX1c5KoSC8k0F5wAAATxJREFUWMPt1NlOwzAQheFx9ibO0jZ0pQtdgXn/90OYKJ0MFrbJDUj+rhpL/5GqLOB53t8iAtciEOR3UaKM7y75PZZYFkHX1/hJXu37q1RJ/bVwws7Ktl9h56QuGyQLTj1u1bXE3sWmv2BPqoMEH87m/owPiTrJkShMfYFEro7ShC1Y90kKyn6wsLTvXwEcF95Z3zuUVgtvSJR7INYbJHaZLs+Wg/4AFF8INX3OeiZtkFiEP/ebNXyTbpGYsIVwgUTDet3CUzDoJ4M+Ba20YgvGnps9I9EG+r6aAdgtTCNQotbQE8fhglD93NRTIkaiFrx/OQK4LMRC1Lx3XGB7YCGa0ob/I6uF+YieLbB7Yi1oNX1k7vizy59L1wX+ZrgusN5ZtmPfF/eFnPZjFvIMfutWIVY3GCOKwPO8/+ED+gB4mlKltr8AAAAASUVORK5CYII=";
        } else {
          if (config.aicsWinPopup) {
            document.getElementById(config.aicsClientWinId).style.display = 'none'
            img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAnFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+TINBkAAAAM3RSTlMA7vjDEfzkBXYN8mf1697ObygjEwO5qpkbAda0r6ORhH1fWVRJPzAeFwrawL2KUEU9NnGLpzs/AAABaklEQVRYw+2Vx46DMBRFbwqmdwiQ3nub4f//bZANYyKFSNibaCZndxbvCGHrGe9BOu+RTkuOsXkAI9OsXAhyBSXJRVFMFHi5OModCI1cAjeClkuxwUkucAGRC4zRlQv0PoFP4G8GOqORUXd7FFt1J+Nz91VgegD0CfeZCoRj7lrh+7g5EGcoUN3KB3j0hLpOGgNbUNaVB8yXpSohc7MxEIGyL9UAwy/dKf2rMaCDEpTaVR8H7Iz5rTGwAEWr/Mp8xjcoJWkM2Cn9YqtyEqJg++tD+okbpfkYibkLPJu7s9j5msF9uEz9ufXeV/kT+K8BQy5wxlEuMMFALvCNpVwggOrIzA/oChWnE7ANJkp3DYopeJTOHSXppf2PUFztgBpqv8ZKeTZy2vdrRHjFs0JPRwsWisw8f/84ro6WeHmdYYjWzHMO2UGAGX/yfAgxrS7sFmJkCbuwN4gSTYp5ZQVxomLdeJBBnXp4d34As308DxgpjYsAAAAASUVORK5CYII=";
          } else {
            document.getElementById(config.aicsClientWinId).style.display = '';
            img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAhFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8g2+bRAAAAK3RSTlMACgUDBr3lFwGjk3n64M641rQSsKyonItnHNvTyJclIQ7Dc3JuX1c5KoSC8k0F5wAAATxJREFUWMPt1NlOwzAQheFx9ibO0jZ0pQtdgXn/90OYKJ0MFrbJDUj+rhpL/5GqLOB53t8iAtciEOR3UaKM7y75PZZYFkHX1/hJXu37q1RJ/bVwws7Ktl9h56QuGyQLTj1u1bXE3sWmv2BPqoMEH87m/owPiTrJkShMfYFEro7ShC1Y90kKyn6wsLTvXwEcF95Z3zuUVgtvSJR7INYbJHaZLs+Wg/4AFF8INX3OeiZtkFiEP/ebNXyTbpGYsIVwgUTDet3CUzDoJ4M+Ba20YgvGnps9I9EG+r6aAdgtTCNQotbQE8fhglD93NRTIkaiFrx/OQK4LMRC1Lx3XGB7YCGa0ob/I6uF+YieLbB7Yi1oNX1k7vizy59L1wX+ZrgusN5ZtmPfF/eFnPZjFvIMfutWIVY3GCOKwPO8/+ED+gB4mlKltr8AAAAASUVORK5CYII=";
          }
          config.aicsWinPopup = !config.aicsWinPopup;
        }
      }
    }

    AICSH5Client.prototype.popUpChatWin = function (clientSettings, posSettings = {}) {
      var posSettingsCopy = posSettings && typeof posSettings === 'object' ? posSettings : {};
      var clientSettingsCopy = clientSettings ? clientSettings : {};

      var width = posSettingsCopy.width || 580;
      var height = posSettingsCopy.height || 500;
      var posX = posSettingsCopy.posX || 25;
      var posY = posSettingsCopy.posY || 135;

      var clientWinSearch = '';
      if (!clientSettingsCopy.productId && clientSettingsCopy.productId !== 0 ||
        !clientSettingsCopy.staffService && clientSettingsCopy.staffService !== 0) {
        alert('缺少productId 或者 staffService')
        return false;
      } else {
        clientWinSearch += '?productId=' + clientSettingsCopy.productId;
        clientWinSearch += '&staffService=' + clientSettingsCopy.staffService;
        if (clientSettingsCopy.uuid || clientSettingsCopy.uuid === 0) {
          clientWinSearch += '&uuid=' + clientSettingsCopy.uuid;
        }
      }

      var clientWp = document.createElement('div');
      clientWp.setAttribute("id", config.aicsClientWinId);
      clientWp.setAttribute("style", "background-color: #fff;box-shadow: 5px 5px 10px rgba(0,0,0,0.2), -5px -1px 10px rgba(0,0,0,0.2);border-radius: 10px;z-index: 99998;position:fixed;right: " + (posX || 100) + "px;bottom: " + (posY || 50) + "px;" + "width:" + width + "px;height:" + height + "px;");

      var clientClose =  document.createElement('i');
      clientClose.innerHTML = '×';
      clientClose.setAttribute("style", "position: absolute; right: 0; top: 0; cursor: pointer; width: 34px; height: 44px; text-align: center; font: 26px/32px arial;color: #8fa1b5;");
      clientClose.onclick = window.closeChatWin;
      var clientLoading = document.createElement('img');
      clientLoading.setAttribute("style", "position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto; width: 50px;");
      clientLoading.src = "data:image/gif;base64,R0lGODlhjACMAPcAAP///zeU/z+Z/0me/y+Q/0ed/zmV/0Ga/1im/9Po/zGR/z6Y/7/d/5vK/7jZ/2iu/0ac/2at/1Wk/9Xp//X6/1al//P5/53L/wF4/8He/8vj/3m4//n8/wR5/1Ci/6LN/yeM/y2P/2Ss/9bp/1uo/ySK/1Kj/zaU/8Dd//b6/wB3/xeD/4K8/wN5/57L/7PW/0Wc/+Tx/+jz/5zK/+Du/366/7vb/+fy/7DV/4/D/wd7/9To/xWC/zKS/+r0/0Ka/77c/1el/7fZ/ziV//7+/+Xx/+nz/0qe/zWT/xaD/4C7/22x/7XY/+by/5LF/xqF/26y//f7/+Hv/wx9/3K0/w5+/5HE/3Gz//T5/4O9/w9//wh7/w1+/1mm/93t/wl8/7TX/4G8/6DM/6zT/9fq/2Cq/83k/63T/+Lw/3+7/4vB/4S9//H4/yWL//j7/2+y/2Os/wJ4/+z1/67U/2qw/2Gr//v9/1Gi/5DE/7zb/12p/0+h/5nJ/yaL/4jA/5jI/xKB/9vs/2uw/4nA/6TO/wV6/7bY/6/U/xiE/73c/0CZ/4W+/5/M/2yx/0uf/8Tg/xOB/7ra/yOK/9jq/4rB/+Pw/xCA/5PF/zqW/02g/xuF//3+/6rS/8Le/5rJ/0id/2mv/8rj/06h/7na/3Cz//r8/yuO//D3/zyX/8/l/7HV/9nr/9/u//L4/1yo/3O0/+/2/8ji/3a2/9Dm/+31/z2Y/4a+/3W1/6vS/y6Q/8fh/7LW/9zs/ymN/9Ln/zST/9Hm/wp8/97t/+72/yGJ/wZ6/8Xg/16p/1+q/1qn/1Oj/3e2/0Ob/xGA/6XP/1Sk/87l/xSC/x6H/xmE/yyO/8zk/2Kr/5TG/x+I/2Wt/8Pf/4zC/6fQ/yqN/zCR/3S1/6jR/xyG/8bh/wt9/47D/+v0/2eu/yiM/4e//zuW/6PO/3y5/9rr/5XG/0yg/6nR/3q4/x2G/5fI/43C/5bH//z9/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wt4bXAgZGF0YXhtcP8/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG10YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPjxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53Lm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZjphYm91dD0iIiD/eG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1uczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjRBQzkxRTFCQUIxRTExRTc5RkZFOEMzOEE5N0I3/zQ0NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QUM5MUUxQ0FCMUUxMUU5RkZFOEMzOEE5N0I3NDQ1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9eG1wLmlpZDo0QUM5MUUxOUFCMUUxMUU3OUZGRThDMzhBOUI3NDQ1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRBQzkxRTFBQUIxRTExRTc5RkZFOEM4QTk3Qjc0NDUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG10YT4gPD94cGFja2V0IP9lbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEw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";
      var clientWin = document.createElement('iframe')
      clientWin.setAttribute("width", "100%");
      clientWin.setAttribute("height", "100%");
      clientWin.setAttribute("frameborder", "0");
      clientWin.setAttribute("title", "智能客服");
      clientWin.src = 'http://iask.qq.com/#/h5client' + clientWinSearch;
      if(window.location.host.indexOf('localhost') !== -1) {
        clientWin.src = 'http://localhost:8000/#/h5client' + clientWinSearch;
      } else if(window.location.host.indexOf('d.gri.qq.com') !== -1) {
        clientWin.src = 'http://d.gri.qq.com/#/h5client' + clientWinSearch;
      }
      // clientWin.src = 'http://localhost:8000/#/h5client' + clientWinSearch;
      clientWin.setAttribute("style", "position: relative;");

      clientWp.appendChild(clientLoading);
      clientWp.appendChild(clientWin);
      clientWp.appendChild(clientClose);
      document.body.appendChild(clientWp);
      return clientWp;
    }

    AICSH5Client.prototype.reset = function () {
      var parent = document.body;
      var chatWin = document.getElementById(config.aicsClientWinId);
      var trigger = document.getElementById(config.aicsTriggerId);
      if (chatWin) {
        parent.removeChild(chatWin);
      }
      if (trigger) {
        parent.removeChild(trigger);
      }
    }

    AICSH5Client.prototype.init = function (clientSettings, triggerPos) {
      AICSH5Client.prototype.reset();
      AICSH5Client.prototype.createTrigger(clientSettings, triggerPos)
    }

    return new AICSH5Client
  }))

  AICSH5Client.init({productId: '6ff67d56138280cfbfea5c101734552a', staffService: 1, uuid: ''});
})()
