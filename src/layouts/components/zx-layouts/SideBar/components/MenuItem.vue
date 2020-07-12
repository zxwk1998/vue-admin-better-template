<template>
  <el-menu-item
    :index="handlePath(onlyOneChildren.path)"
    @click.native="handleLink"
  >
    <vab-icon
      v-if="onlyOneChildren.meta.icon"
      :icon="['fas', onlyOneChildren.meta.icon]"
      class="vab-fas-icon"
    />
    <vab-remix-icon
      v-if="onlyOneChildren.meta.remixIcon"
      :icon-class="onlyOneChildren.meta.remixIcon"
      class="vab-remix-icon"
    />
    <span>{{ onlyOneChildren.meta.title }} </span>
    <el-tag
      v-if="onlyOneChildren.meta && onlyOneChildren.meta.badge"
      type="danger"
      effect="dark"
      >{{ onlyOneChildren.meta.badge }}
    </el-tag>
  </el-menu-item>
</template>

<script>
import { isExternal } from "@/utils/validate";
import path from "path";

export default {
  name: "MenuItem",
  props: {
    onlyOneChildren: {
      type: Object,
      default() {
        return null;
      },
    },
    item: {
      type: Object,
      default() {
        return null;
      },
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  methods: {
    handlePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.basePath)) {
        return this.basePath;
      }
      return path.resolve(this.basePath, routePath);
    },
    handleLink() {
      const routePath = this.onlyOneChildren.path;
      const target = this.onlyOneChildren.meta.path;
      if (this.$route.path !== path.resolve(this.basePath, routePath)) {
        if (target === "_blank") {
          if (isExternal(routePath)) {
            window.open(routePath);
          }
          if (isExternal(this.basePath)) {
            window.open(routePath);
          }
          let routeData = this.$router.resolve(
            path.resolve(this.basePath, routePath)
          );
          window.open(routeData.href);
        } else {
          if (isExternal(routePath)) {
            window.location.href = routePath;
          }
          if (isExternal(this.basePath)) {
            window.location.href = routePath;
          }
          this.$router.push(path.resolve(this.basePath, routePath));
        }
      }
    },
  },
};
</script>
