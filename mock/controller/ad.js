const data = [
  {
    title: 'vue-admin-better-pro 1.7版本已发布，点我提前体验',
    url: 'https://chu1204505056.gitee.io/vue-admin-better-pro/#/index',
  },
  {
    title: 'vue-admin-better（antdv） vue3.0版本已发布，点我提前体验',
    url: 'https://chu1204505056.gitee.io/vue-admin-better-mini/#/index',
  },
]
module.exports = [
  {
    url: '/ad/getList',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
