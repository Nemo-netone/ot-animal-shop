window.PROJECT_CONFIG = {
  "title": "宠物用品商城",
  "positioning": "面向宠物商品、品牌、规格、购物车、订单、物流和售后的商城演示系统。",
  "repo": "ot-animal-shop",
  "demoUrl": "https://ot-animal-shop.pages.dev",
  "githubUrl": "https://github.com/Nemo-netone/ot-animal-shop",
  "schema": "ot_animal_shop",
  "colors": {
    "primary": "#15803d",
    "secondary": "#2563eb",
    "accent": "#db2777"
  },
  "accounts": [
    {
      "role": "admin",
      "username": "admin@qq.com",
      "password": "123",
      "label": "平台管理员"
    },
    {
      "role": "user",
      "username": "demo@qq.com",
      "password": "123456",
      "label": "商城用户"
    },
    {
      "role": "staff",
      "username": "supplier01",
      "password": "123456",
      "label": "供应商"
    }
  ],
  "modules": [
    {
      "key": "product",
      "name": "商品管理",
      "summary": "宠物商品、品牌、类型、规格和库存"
    },
    {
      "key": "order",
      "name": "订单管理",
      "summary": "订单、支付、物流和售后状态"
    },
    {
      "key": "cart",
      "name": "购物车",
      "summary": "加购、数量、价格和结算"
    },
    {
      "key": "review",
      "name": "评价回复",
      "summary": "商品评价、回复和评分"
    },
    {
      "key": "supplier",
      "name": "供应商管理",
      "summary": "供应商、采购和供货记录"
    },
    {
      "key": "return",
      "name": "退货处理",
      "summary": "退货原因、售后流程和处理状态"
    }
  ]
};
