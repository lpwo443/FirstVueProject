<template>
  <footer class="app_footer">
    <!-- 联系我们 -->
    <div class="contact">
      <div class="container">
        <dl>
          <dt>客户服务</dt>
          <dd><i class="iconfont icon-kefu"></i> 客服</dd>
          <dd><i class="iconfont icon-question"></i> 反馈</dd>
        </dl>
        <dl>
          <dt>关注我们</dt>
          <dd><i class="iconfont icon-icon-weixin"></i> 公众号</dd>
          <dd><i class="iconfont icon-weibo"></i> 微博</dd>
        </dl>
        <dl>
          <dt>下载APP</dt>
          <dd class="qrcode"><img src="@/assets/images/qrcode.jpg" /></dd>
          <dd class="download">
            <span>扫描二维码</span>
            <span>立马下载APP</span>
            <a href="javascript:;">下载页面</a>
          </dd>
        </dl>
        <dl>
          <dt>服务热线</dt>
          <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
        </dl>
      </div>
    </div>
    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer-21"></i>
            <span>价格亲民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer-20"></i>
            <span>物流快捷</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer-07"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped lang='scss'>
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;
  padding-top: 20px;
  .contact {
    background: #fff;
    .container {
      padding: 0px 60px 40px 25px;
      display: flex;
    }
    dl {
      height: 190px;
      text-align: center;
      padding: 0 72px;
      border-right: 1px solid #f2f2f2;
      color: #999;
      &:first-child {
        padding-left: 0;
      }
      &:last-child {
        border-right: none;
        padding-right: 0;
      }
    }
    dt {
      line-height: 1;
      font-size: 18px;
      margin-bottom: 20px;
    }
    dd {
      margin: 10px 0;
      .iconfont {
        font-size: 20px;
        vertical-align: middle;
        margin-right: 5px;
      }
    }
    .qrcode {
      width: 100px;
      height: 100px;
      margin: 0 auto;
    }
    .download {
      padding-top: 10px;
      a {
        color: $xtxColor;
      }
    }
    .hotline {
      font-size: 22px;
      small {
        display: block;
        font-size: 12px;
      }
    }
  }
  .extra {
    background-color: #333;
    .container {
      padding: 30px 0;
    }
    .slogan {
      display: flex;
      justify-content: center;
      a {
        padding: 0 40px;
        color: #fff;
        border-right: 1px solid #fff;
        &:last-child {
          border-right: none;
        }
        .iconfont {
          font-size: 40px;
          vertical-align: middle;
          margin-right: 10px;
        }
        span {
          vertical-align: middle;
        }
      }
    }
    .copyright {
      text-align: center;
      color: #999;
      padding-top: 20px;
      p {
        line-height: 1.8;
        a {
          color: #999;
          padding: 0 10px;
          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }
}
</style>
