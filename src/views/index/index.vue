<template>
  <div class="more-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            开源版本
            <el-button style="float: right; padding: 3px 0" type="text">
              永久免费 个人/商业使用
            </el-button>
          </div>
          <div>
            <ul>
              <li>永久开源免费，支持横纵布局切换</li>
              <li>
                保留浏览器控制台打印即可免费商用，页面中的作者信息可全部去除，无需保留
              </li>
              <li>
                开源地址
                <a
                  target="_blank"
                  href="https://github.com/chuzhixin/vue-admin-beautiful"
                >
                  如果有幸帮到了你，麻烦给个star
                </a>
              </li>
              <li>提供讨论群专属文档，QQ群 972435319</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            VIP群（自愿原则）
            <el-button style="float: right; padding: 3px 0" type="text">
              ￥100（不再提供）
            </el-button>
          </div>
          <div>
            <ul>
              <li>为防止不必要的误解，开源版不再提供vip群</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            开源版不保留MIT协议，变更作者（自愿原则）
            <el-button style="float: right; padding: 3px 0" type="text">
              ￥299
            </el-button>
          </div>
          <div>
            <ul>
              <li>支持以上所有特权，不包含VIP群</li>
              <li>包含开源基础版授权与开源集成版授权</li>
              <li>永久更新</li>
              <li>提供低价外包合作机会</li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            PRO版
            <el-button style="float: right; padding: 3px 0" type="text">
              ￥699
            </el-button>
          </div>
          <div>
            <ul>
              <li>
                演示地址：
                <a
                  target="_blank"
                  href="https://chu1204505056.gitee.io/admin-pro"
                >
                  点我
                </a>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <el-card>
          <div slot="header">
            Plus版
            <el-button style="float: right; padding: 3px 0" type="text">
              ￥799
            </el-button>
          </div>
          <div>
            <ul>
              <li>
                演示地址：
                <a
                  target="_blank"
                  href="https://chu1204505056.gitee.io/admin-plus"
                >
                  点我
                </a>
              </li>
            </ul>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'More',
    components: {},
    data() {
      return { nodeEnv: process.env.NODE_ENV }
    },
    created() {},
    mounted() {},
    methods: {},
  }
</script>
<style lang="scss" scoped>
  .more-container {
    ::v-deep {
      .el-card__body {
        > div {
          min-height: 220px;
          padding: 20px;

          > ul {
            > li {
              line-height: 30px;
            }
          }

          > img {
            display: block;
            margin: 40px auto;
            border: 1px solid #dedede;
          }
        }
      }
    }
  }
</style>
