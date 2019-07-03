import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Forbidden from "./views/User/403.vue";
import NotFound from "./views/User/404.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      component: {
        render: h => h("router-view")
      },
      children: [
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login.vue")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Resgister.vue")
        }
      ]
    },
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./Layouts/BasicLayout.vue"),
      children: [
        // dashboard
        {
          path: "/",
          redirect: "/dashboard/analysis"
        },
        {
          path: "/dashboard",
          name: "dashboard",
          meta: {
            icon: "dashboard",
            title: "仪表盘"
          },
          component: {
            render: h => h("router-view")
          },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: {
                title: "分析页"
              },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */
                  "./views/Dashboard/Analysis"
                )
            }
          ]
        }
        // form
        // {
        //   path: "/form",
        //   name: "form",
        //   component: {
        //     render: h => h("router-view")
        //   },
        //   children: [
        //     {
        //       path: "/form/basic-form",
        //       name: "basicform",
        //       meta: {
        //         title: "基础表单"
        //       },
        //       component: () =>
        //         import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm")
        //     },
        //     {
        //       path: "/form/step-form",
        //       name: "stepform",
        //       hideChildrenInMenu: true,
        //       meta: {
        //         title: "分布表单"
        //       },
        //       component: () =>
        //         import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
        //       children: [
        //         {
        //           path: "/form/step-form",
        //           redirect: "/form/step-form/info"
        //         },
        //         {
        //           path: "/form/step-form/info",
        //           name: "info",
        //           component: () =>
        //             import(
        //               /* webpackChunkName: "form" */
        //               "./views/Forms/StepForm/Step1"
        //             )
        //         },
        //         {
        //           path: "/form/step-form/confirm",
        //           name: "confirm",
        //           component: () =>
        //             import(
        //               /* webpackChunkName: "form" */
        //               "./views/Forms/StepForm/Step2"
        //             )
        //         },
        //         {
        //           path: "/form/step-form/result",
        //           name: "result",
        //           component: () =>
        //             import(
        //               /* webpackChunkName: "form" */
        //               "./views/Forms/StepForm/Step3"
        //             )
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    },
    {
      path: "/403",
      name: "403",
      component: Forbidden
    },
    {
      path: "*",
      name: "404",
      component: NotFound
    },
    {
      path: "/",
      name: "home",
      component: Home
    }
  ]
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
  // to and from are both route objects. must call `next`.
});
router.afterEach(() => {
  // to and from are both route objects.
  NProgress.done();
});
export default router;
