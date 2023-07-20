# 5610-project-test

## 文件结构

### 前端

App.js: 主程序入口

components: 组件

- NavBar: 导航栏（公有）
- SideBar: 侧边栏（最基础样式）
- Home: 主页
- Buyer page: 买家页面
  - Buyer SideBar: 买家侧边栏
  - ProductList: 产品列表
    - ProductItem: 产品项
- Product page: 产品页面
  - Product SideBar: 产品侧边栏
  - Product Detail: 产品详情
- Seller page: 卖家页面
  - Seller SideBar: 卖家侧边栏
  - upload Product: 上传产品
- User page: 用户页面
  - User SideBar: 用户侧边栏
  - User Info: 用户信息
  - User Order: 用户订单
  - User Favorite: 用户收藏
  - User Setting: 用户设置
- Message page: 消息页面
  - Message SideBar: 消息侧边栏
  - Message List: 消息列表
    - Message Item: 消息项

#### 第三方库

- react bootstrap
- ANT DESIGN
- redux

### 后端

- api
- dao

### 数据库

- 用户表

  - id : int
  - username : string
  - email : string
  - orders : Array(order)
  - description : string
  - location: [float, float]

- 产品表

  - id : int
  - category : string
  - description : string
  - image : Array(string)

- 订单表

  - id : int
  - product : product
  - buyer : user
  - seller : user
  - status : string
  - date : date
