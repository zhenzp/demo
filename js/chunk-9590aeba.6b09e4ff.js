(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9590aeba"],{"04b3":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-con"},[e("div",{staticClass:"card deatil"},[e("div",{staticClass:"deatil-card"},[e("p",[t._v(t._s(t.detail.name))])]),e("div",{staticClass:"detail-text"},[e("p",{staticClass:"detail-name"},[t._v(t._s(t.detail.name))]),e("p",{staticClass:"detail-price"},[t._v("\n        价格:\n        "),e("b",[t._v("￥"+t._s(t.detail.num))])]),e("p",[t._v("域名行业:"+t._s(t.detail.tags.join("、")))]),e("p",[t._v("域名后缀:"+t._s(t.detail.last))]),e("p",[t._v("域名长度:"+t._s(t.detail.len))]),e("p",[t._v("域名分类:"+t._s(t.detail.type))]),e("p",{staticClass:"btn-buy",on:{click:t.handleOpenModal}},[t._v("立即购买")]),e("p",{staticClass:"detail-last"},[e("span",[t._v(t._s(t.detail.date)+"注册")]),e("span",[t._v(t._s(t.detail.count)+"次浏览")])])]),t._m(0)]),e("div",{staticClass:"home-three"},[e("div",{staticClass:"three-l card"},[e("p",{staticClass:"card-title"},[t._v("\n        精品\n        "),e("span",{staticClass:"btn-more",on:{click:function(a){return t.turnTo("boutique")}}},[t._v("more")])]),e("div",{staticClass:"card-con"},[e("ul",{staticClass:"boutique-list"},t._l(t.aBoutique,function(a,s){return e("li",{key:s},[e("div",{staticClass:"boutique-list-card",on:{click:function(a){return t.turnTo("domain",s)}}},[e("p",[t._v(t._s(a.name))])]),e("div",{staticClass:"boutique-list-text"},[e("p",{staticClass:"item-name"},[t._v(t._s(a.name))]),e("p",{staticClass:"item-price"},[e("b",[t._v("￥"+t._s(a.num))])]),e("p",[t._v("域名行业："+t._s(a.tags.join("、")))])])])}),0)])]),e("div",{staticClass:"three-r card"},[e("div",{staticClass:"card-con article"},[e("p",{staticClass:"article-title"},[t._v(t._s(t.info.title))]),e("p",{staticClass:"article-con"},[t._v(t._s(t.info.con))])])])]),e("Modal",{attrs:{width:400},model:{value:t.bModal,callback:function(a){t.bModal=a},expression:"bModal"}},[e("div",{staticClass:"buy-con"},[e("h2",{staticStyle:{textAlign:"center"}},[t._v("填写购买信息")]),e("p",{staticClass:"buy-con-name"},[t._v(t._s(t.detail.name))]),e("p",{staticClass:"buy-con-price"},[t._v("\n        价格:\n        "),e("b",[t._v("￥"+t._s(t.detail.num))])]),e("Form",{ref:"formValidate",staticStyle:{width:"300px"},attrs:{model:t.objForm,rules:t.ruleValidate,"label-width":80}},[e("FormItem",{attrs:{label:"姓名",prop:"name"}},[e("Input",{attrs:{placeholder:"请输入姓名"},model:{value:t.objForm.name,callback:function(a){t.$set(t.objForm,"name",a)},expression:"objForm.name"}})],1),e("FormItem",{attrs:{label:"手机号",prop:"tel"}},[e("Input",{attrs:{placeholder:"请输入手机号"},model:{value:t.objForm.tel,callback:function(a){t.$set(t.objForm,"tel",a)},expression:"objForm.tel"}})],1),e("FormItem",{attrs:{label:"备注"}},[e("Input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:5},placeholder:"请输入备注"},model:{value:t.objForm.content,callback:function(a){t.$set(t.objForm,"content",a)},expression:"objForm.content"}})],1)],1),e("p",{staticClass:"btn-buy-modal",on:{click:t.handleSubmit}},[t._v("提交购买信息")])],1),e("p",{attrs:{slot:"footer"},slot:"footer"})])],1)},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",{staticClass:"detail-link"},[s("li",[s("img",{attrs:{src:e("f021"),alt:""}}),s("p",[t._v("发送到手机")])]),s("li",[s("img",{attrs:{src:e("4dc5"),alt:""}}),s("p",[t._v("收藏")])]),s("li",[s("img",{attrs:{src:e("493c"),alt:""}}),s("p",[t._v("分享")])])])}],n={name:"home",data:function(){return{objForm:{name:"",tel:"",content:""},ruleValidate:{name:[{required:!0,message:"不能为空",trigger:"blur"}],tel:[{required:!0,message:"不能为空",trigger:"blur"}]},bModal:!1,detail:{name:"sdf.com",num:234,tags:["金融投资","区块链","生活服务","体育用品","牌商标"],last:".com",len:6,type:"字母-纯字母",date:"2012-08-12",count:736},aBoutique:[{id:1,name:"glb1.com",num:"1250",tags:["金融投资","区块链","生活服务","体育用品","牌商标"]},{id:2,name:"glb2.com",num:"1350",tags:["金融投资","区块链","生活服务","体育用品","牌商标"]},{id:3,name:"glb3.com",num:"2250",tags:["金融投资","区块链","生活服务","体育用品","牌商标"]},{id:1,name:"glb1.com",num:"1250",tags:["金融投资","区块链","生活服务","体育用品","牌商标"]},{id:2,name:"glb2.com",num:"1350",tags:["金融投资","区块链","生活服务","体育用品","牌商标"]},{id:3,name:"glb3.com",num:"2250",tags:["金融投资","区块链","生活服务","体育用品","牌商标"]}],info:{title:"交易说明",con:"一口价域名卖家在发布的时候设置一个固定价格，即默认在出售周期内愿意以改价格转让域名。议价域名买家在发布的时候没有设置一个固定的价格，买家可以主动出价和卖家沟通，卖家同意后可以转让该域名。"}}},methods:{handleSubmit:function(){console.log("a",this.objForm)},handleOpenModal:function(){this.bModal=!0},turnTo:function(t,a){var e=null;a&&(e={id:a}),this.$router.push({name:t,params:e})}},mounted:function(){}},i=n,o=(e("074d"),e("2877")),c=Object(o["a"])(i,s,l,!1,null,null,null);a["default"]=c.exports},"074d":function(t,a,e){"use strict";var s=e("2573"),l=e.n(s);l.a},2573:function(t,a,e){},"493c":function(t,a,e){t.exports=e.p+"img/link.57002195.png"},"4dc5":function(t,a,e){t.exports=e.p+"img/star.9bd4b8e8.png"},f021:function(t,a,e){t.exports=e.p+"img/phone.f2b44814.png"}}]);
//# sourceMappingURL=chunk-9590aeba.6b09e4ff.js.map