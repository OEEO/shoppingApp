# shoppingapp

这是一个手机端生鲜app



### 技术栈

Webpack + Vue2.x + vue-cli +  vue-router + vuex + axios + element-ui 



### 实现功能如下

- 首页，和商品详情页都可以添加商品到购物车。
- 首页中点击商品中购物按钮外的地方，进入商品详情页。
- 首页，和购物车中都可对商品进行数量增减操作，当商品数量为0时，从购物车中删除
- 当在购物车中删除商品时，会弹出确认对话框。
- 添加到购物车的商品，会自动计算总价，判断是否可使用红包，以及是否包邮。
- 在购物车中点击支付时，会判断用户是否已登录，没有登录则跳转至登录页面，已登录，则进入订单页面。
- 用户页面中，可以对送货地址进行增删操作。
- 路由切换动画效果。



### 手机微信，或浏览器扫码查看

![](./static/url.png)



电脑端查看

https://oeeo.github.io/shoppingApp/dist/index.html

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).



