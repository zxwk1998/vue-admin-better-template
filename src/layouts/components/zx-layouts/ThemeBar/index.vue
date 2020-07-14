<template>
  <span v-if="themeBar">
    <vab-icon
      title="主题配置"
      :icon="['fas', 'palette']"
      @click="handleChangeTheme"
    />
    <div class="theme-bar-setting">
      <div @click="handleChangeTheme">
        <vab-icon :icon="['fas', 'palette']" />
        <p>主题配置</p>
      </div>
      <div @click="handleGetCode">
        <vab-icon :icon="['fas', 'laptop-code']"></vab-icon>
        <p>拷贝代码</p>
      </div>
    </div>

    <el-drawer
      title="主题配置"
      :visible.sync="drawerVisible"
      direction="rtl"
      append-to-body
      size="300px"
    >
      <el-scrollbar style="height: 94vh; overflow: hidden;">
        <div class="el-drawer__body">
          <el-form ref="form" :model="theme">
            <el-form-item label="布局">
              <el-radio-group v-model="theme.layout">
                <el-radio-button label="vertical">纵向布局</el-radio-button>
                <el-radio-button label="horizontal">横向布局</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="头部">
              <el-radio-group v-model="theme.header">
                <el-radio-button label="fixed">固定头部</el-radio-button>
                <el-radio-button label="noFixed">不固定头部</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="多标签">
              <el-radio-group v-model="theme.tagsBar">
                <el-radio-button label="true">开启</el-radio-button>
                <el-radio-button label="false">不开启</el-radio-button>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="菜单背景色">
              <el-color-picker
                v-model="theme.menuBackground"
                popper-class="vab-color-picker"
                :predefine="[
                  '#2a58ad',
                  '#001529',
                  '#f56c6c',
                  '#0fd59d',
                  '#3fb884',
                  '#ff7a47',
                  '#a80505',
                ]"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="菜单选中色">
              <el-color-picker
                v-model="theme.menuBackgroundActive"
                popper-class="vab-color-picker"
                :predefine="['#22468a', '#1890ff', '#21e6af', '#f57e6c']"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="菜单文字色">
              <el-color-picker
                v-model="theme.menuColor"
                popper-class="vab-color-picker"
                :predefine="['#000', '#fff']"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="标签主题色">
              <el-color-picker
                v-model="theme.tagBackgroundActive"
                popper-class="vab-color-picker"
                :predefine="['#1890ff', '#0fd59d', '#f56c6c']"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="默认按钮主题色">
              <el-color-picker
                v-model="theme.buttonBackground"
                popper-class="vab-color-picker"
                :predefine="['#1890ff', '#0fd59d', '#f56c6c']"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item label="分页选中色">
              <el-color-picker
                v-model="theme.paginationBackgroundActive"
                popper-class="vab-color-picker"
                :predefine="['#1890ff', '#0fd59d', '#f56c6c']"
                show-alpha
              ></el-color-picker>
            </el-form-item>
            <el-form-item>
              <el-button @click="handleSetDfaultTheme">恢复默认</el-button>
              <el-button type="primary" @click="handleSaveTheme">
                保存
              </el-button>
            </el-form-item>
          </el-form>
        </div></el-scrollbar
      >
    </el-drawer>
  </span>
</template>

<script>
import variables from "@/styles/variables.scss";
import { mapGetters } from "vuex";
import { layout as defaultLayout } from "@/config/settings";
export default {
  name: "ThemeBar",
  data() {
    return {
      drawerVisible: false,
      theme: {
        layout: "",
        header: "",
        tagsBar: "",
        menuBackground: variables["menu-background"],
        menuBackgroundActive: variables["menu-background-active"],
        menuColor: variables["menu-color"],
        tagBackgroundActive: variables["tag-background-active"],
        buttonBackground: variables["button-background"],
        paginationBackgroundActive: variables["pagination-background-active"],
      },
    };
  },
  computed: {
    ...mapGetters({
      layout: "settings/layout",
      header: "settings/header",
      tagsBar: "settings/tagsBar",
      themeBar: "settings/themeBar",
    }),
  },
  mounted() {},
  created() {
    this.$baseEventBus.$on("theme", () => {
      this.handleChangeTheme();
    });
    const theme = localStorage.getItem("vue-admin-beautiful-theme");
    if (null !== theme) {
      this.theme = JSON.parse(theme);
      this.handleSetTheme();
    }
    this.theme.layout = this.layout;
    this.theme.header = this.header;
    this.theme.tagsBar = this.tagsBar;
  },
  methods: {
    handleIsMobile() {
      return document.body.getBoundingClientRect().width - 1 < 992;
    },
    handleChangeTheme() {
      this.drawerVisible = true;
    },
    handleSetTheme() {
      let {
        layout,
        header,
        tagsBar,
        menuBackground,
        menuBackgroundActive,
        menuColor,
        tagBackgroundActive,
        buttonBackground,
        paginationBackgroundActive,
      } = this.theme;

      let style = document.createElement("style");
      style.innerHTML = `
        .top-bar-container,
        .top-bar-container .vab-main,
        .side-bar-container,
        .logo-container-vertical,
        .logo-container-horizontal,
        .el-menu,
        .el-menu-item,
        .el-submenu.is-active.is-opened,
        .el-submenu__title,
        .el-menu-item.is-active,
        .el-menu-item .is-active {
          background-color:${menuBackground}!important;
        }

        body .el-menu--horizontal .top-bar-item-container .el-menu-item:hover,
        body .el-menu--horizontal .top-bar-item-container .el-menu-item.is-active,
        body .vue-admin-beautiful-wrapper .side-bar-container .el-submenu .el-menu-item.is-active,
        body .vue-admin-beautiful-wrapper .side-bar-container .el-menu-item:hover,
        body .side-bar-container .el-menu .el-menu-item.is-active {
          background-color:${menuBackgroundActive}!important;
        }

        .vab-main .tags-bar-container .tags-content .el-tabs__header .el-tabs__item.is-active {
          background:  ${tagBackgroundActive}!important;
          border: 1px solid ${tagBackgroundActive}!important;
        }

        .el-button.el-button--primary {
          background-color: ${buttonBackground}!important;
          border-color: ${buttonBackground}!important;
        }

        .el-pagination.is-background .el-pager li:not(.disabled).active {
          background-color: ${paginationBackgroundActive}!important;
          border-color: ${paginationBackgroundActive}!important;
        }

        body .vue-admin-beautiful-wrapper .side-bar-container .el-menu .nest-menu [class*=menu].is-active {
          background-color:${menuBackgroundActive}!important
        }
        body .vue-admin-beautiful-wrapper .side-bar-container .el-menu [class*=menu] span,
        body .vue-admin-beautiful-wrapper .side-bar-container .el-menu [class*=menu] svg,
        body .vue-admin-beautiful-wrapper .side-bar-container .el-menu [class*=menu] i
        {
          color:${menuColor}!important
        }

      `;
      document.getElementsByTagName("head").item(0).appendChild(style);
      localStorage.setItem(
        "vue-admin-beautiful-theme",
        `{
            "menuBackground":"${menuBackground}",
            "menuBackgroundActive":"${menuBackgroundActive}",
            "menuColor":"${menuColor}",
            "tagBackgroundActive":"${tagBackgroundActive}",
            "layout":"${layout}",
            "header":"${header}",
            "tagsBar":"${tagsBar}",
            "buttonBackground":"${buttonBackground}",
            "paginationBackgroundActive":"${paginationBackgroundActive}"
          }`
      );
      if (!this.handleIsMobile()) {
        this.$store.dispatch("settings/changeLayout", layout);
      }
      this.$store.dispatch("settings/changeHeader", header);
      this.$store.dispatch("settings/changeTagsBar", tagsBar);
      this.drawerVisible = false;
    },
    handleSaveTheme() {
      this.handleSetTheme();
    },
    handleSetDfaultTheme() {
      localStorage.removeItem("vue-admin-beautiful-theme");
      this.$refs["form"].resetFields();
      Object.assign(this.$data, this.$options.data());
      this.$store.dispatch("settings/changeLayout", defaultLayout);
      this.theme.layout = this.layout;
      this.theme.header = this.header;
      this.theme.tagsBar = this.tagsBar;
      this.drawerVisible = false;
    },
    handleGetCode() {
      const url =
        "https://github.com/chuzhixin/vue-admin-beautiful/tree/master/src/views";
      let path = this.$route.path + "/index.vue";
      if (path === "/vab/menu1/menu1-1/menu1-1-1/index.vue") {
        path = "/vab/nested/menu1/menu1-1/menu1-1-1/index.vue";
      }
      if (path === "/vab/icon/awesomeIcon/index.vue") {
        path = "/vab/icon/index.vue";
      }
      if (path === "/vab/icon/remixIcon/index.vue") {
        path = "/vab/icon/remixIcon.vue";
      }
      if (path === "/vab/icon/colorfulIcon/index.vue") {
        path = "/vab/icon/colorfulIcon.vue";
      }
      if (path === "/vab/table/comprehensiveTable/index.vue") {
        path = "/vab/table/index.vue";
      }
      if (path === "/vab/table/inlineEditTable/index.vue") {
        path = "/vab/table/inlineEditTable.vue";
      }
      if (path === "/vab/excel/exportExcel/index.vue") {
        path = "/vab/excel/exportExcel.vue";
      }
      if (path === "/vab/excel/exportSelectedExcel/index.vue") {
        path = "/vab/excel/exportSelectedExcel.vue";
      }
      if (path === "/vab/excel/exportMergeHeader/index.vue") {
        path = "/vab/excel/exportMergeHeaderExcel.vue";
      }
      if (path === "/vab/excel/uploadExcel/index.vue") {
        path = "/vab/excel/uploadExcel.vue";
      }
      window.open(url + path);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin right-bar {
  position: fixed;
  right: 0;
  z-index: $base-z-index;
  width: 60px;
  min-height: 60px;
  text-align: center;
  cursor: pointer;
  background: $base-color-blue;
  border-radius: $base-border-radius;

  > div {
    padding-top: 10px;
    border-bottom: 0 !important;

    &:hover {
      opacity: 0.9;
    }

    & + div {
      border-top: 1px solid $base-color-white;
    }

    p {
      padding: 0;
      margin: 0;
      font-size: $base-font-size-small;
      line-height: 30px;
      color: $base-color-white;
    }
  }
}

.theme-bar-setting {
  @include right-bar;

  top: calc((100vh - 110px) / 2);

  ::v-deep {
    svg:not(:root).svg-inline--fa {
      display: block;
      margin-right: auto;
      margin-left: auto;
      color: $base-color-white;
    }

    .svg-icon {
      display: block;
      margin-right: auto;
      margin-left: auto;
      font-size: 20px;
      color: $base-color-white;
      fill: $base-color-white;
    }
  }
}

.el-drawer__body {
  padding: 20px;
}
</style>
<style lang="scss">
.vab-color-picker {
  .el-color-dropdown__link-btn {
    display: none;
  }
}
</style>
