# 功能说明

## 项目定位

面向宠物商品、品牌、规格、购物车、订单、物流和售后的商城演示系统。

## 功能树

| 模块 | 责任 | 数据归属 |
|---|---|---|
| 商品管理 | 宠物商品、品牌、类型、规格和库存 | `items.module_key = product` |
| 订单管理 | 订单、支付、物流和售后状态 | `items.module_key = order` |
| 购物车 | 加购、数量、价格和结算 | `items.module_key = cart` |
| 评价回复 | 商品评价、回复和评分 | `items.module_key = review` |
| 供应商管理 | 供应商、采购和供货记录 | `items.module_key = supplier` |
| 退货处理 | 退货原因、售后流程和处理状态 | `items.module_key = return` |

## 使用场景

1. 访客打开 `https://ot-animal-shop.pages.dev`，先浏览项目定位、核心模块和演示账号。
2. 使用公开账号登录，进入工作台查看统计数据。
3. 通过模块侧边栏进入业务表，进行列表浏览、关键词搜索、新增、编辑和删除。
4. 管理员可完整演示数据维护流程；普通用户和工作人员账号用于展示不同角色入口。

## 调用链和数据流

```text
浏览器
  -> site/app.js
  -> /api/login 或 /api/items/*
  -> site/_worker.js
  -> Supabase RPC public.ot_animal_shop_demo_rest
  -> ot_animal_shop.accounts / ot_animal_shop.items
```

## 推荐演示路径

```text
登录 -> 工作台统计 -> 商品管理 -> 订单管理 -> 购物车 -> 评价回复 -> 新增一条记录 -> 编辑状态 -> 删除测试记录
```

## 演示边界

- 已实现：登录、统计、业务模块列表、搜索、新增、编辑、删除。
- 部分实现：原项目的复杂权限、文件上传、第三方服务以作品集展示为主。
- 未接入：真实支付、短信、地图、邮件、生产级文件存储。
