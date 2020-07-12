const data = [
  {
    path: "/",
    component: "Layout",
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: "index/index",
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
];
export default [
  {
    url: "/menu/navigate",
    type: "post",
    response: (config) => {
      return { code: 200, msg: "success", data: data };
    },
  },
];
