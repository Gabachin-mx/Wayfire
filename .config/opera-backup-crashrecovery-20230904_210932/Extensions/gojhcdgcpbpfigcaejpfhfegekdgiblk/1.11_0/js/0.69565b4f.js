"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[0],{1e4:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col p-4"},[n("div",{staticClass:"flex flex-col flex-grow items-center justify-center px-6"},[n("lottie-component",{staticClass:"h-20 my-4 w-20",attrs:{src:"pending_transaction.json"}}),n("div",{staticClass:"mb-4 text-xl"},[t._v(t._s(t.$t("general.transactionPending")))]),n("light-button",{staticClass:"t-transaction_complete-status",attrs:{loading:!!t.timer,title:t.$t("general.viewStatus")},on:{click:t.viewStatus}})],1),n("primary-button",{staticClass:"mt-8 t-transaction_complete-close w-full",attrs:{title:t.$t("general.done")},nativeOn:{click:function(e){return t.close.apply(null,arguments)}}})],1)},l=[],i=(n(57658),n(35210)),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"bg-opacity-10 flex font-bold items-center justify-between px-2 py-1 rounded t-light_button-click text-brand-primary text-sm",class:[{"bg-brand-primary":t.background,"opacity-40 cursor-not-allowed":t.disabled&&!t.loading,"opacity-60 cursor-wait":t.loading}],on:{click:function(e){!t.disabled&&!t.loading&&t.$emit("click")}}},[n("span",[t._v(t._s(t.title))]),t.loading?n("spinning-loader",{staticClass:"-mt-6 ml-1.5 w-4"}):t._e()],1)},o=[],r=n(25e3),c={name:"LightButton",components:{SpinningLoader:r.Z},props:{background:{default:!0,type:Boolean},disabled:{default:!1,type:Boolean},loading:{default:!1,type:Boolean},title:{default:"",type:String}}},u=c,d=n(1001),p=(0,d.Z)(u,s,o,!1,null,null,null),h=p.exports,m=n(39944),f=n(68461),g=n(20144),b=g.Z.extend({name:"TransactionComplete",components:{LightButton:h,LottieComponent:m.Z,PrimaryButton:f.Z},props:{token:{default:void 0,type:Object},txHash:{default:"",type:String}},data(){return{delay:{[(0,i.fh)(i.zG.BTC)]:5e3,[(0,i.fh)(i.zG.NEAR)]:0},timer:null}},computed:{chain(){return this.token.chain},txStatusUrl(){return this.$store.getters.transactionDetailsUrl(this.txHash,this.chain)}},mounted(){this.checkIfIsTxStatusUrlAvailable()},methods:{checkIfIsTxStatusUrlAvailable(){(0,i.cA)(this.chain)||(this.timer=window.setTimeout((()=>{this.timer=null}),this.delay[(0,i.fh)(this.chain)]??5e3))},close(){this.$router.push({name:"Overview"})},viewStatus(){this.$platform.openNewTab(this.txStatusUrl)}}}),x=b,y=(0,d.Z)(x,a,l,!1,null,null,null),w=y.exports}}]);