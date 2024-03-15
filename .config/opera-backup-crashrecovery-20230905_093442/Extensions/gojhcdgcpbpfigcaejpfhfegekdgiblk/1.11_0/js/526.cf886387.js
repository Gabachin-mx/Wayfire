"use strict";(self["webpackChunkdesktop_wallet"]=self["webpackChunkdesktop_wallet"]||[]).push([[526],{63455:function(t,e,i){i.d(e,{Z:function(){return h}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.showing,expression:"showing"}],staticClass:"bg-black bg-opacity-40 bottom-0 fixed flex items-center justify-center left-0 right-0 top-0 z-10"},[s("div",{staticClass:"bg-modal flex flex-col items-center max-w-screen-sm mx-10 my-10 px-10 py-7 rounded-lg w-full"},["success"===t.icon?s("img",{staticClass:"h-14 mb-6 w-14",attrs:{src:i(54398)}}):t._e(),t.title?s("div",{staticClass:"break-words font-bold max-w-xs mb-4 text-xl"},[t._v(t._s(t.title))]):t._e(),t.message?s("div",{staticClass:"break-words leading-5 max-w-xs mb-6 opacity-60 text-base text-center text-dark-message"},[t._v(" "+t._s(t.message)+" ")]):t._e(),s("primary-button",{staticClass:"mt-2",attrs:{title:t.action},on:{click:t.runActionAndClose}})],1)])])},r=[],a=i(68461),o={name:"AlertDialog",components:{PrimaryButton:a.Z},props:{icon:{default:"",type:String}},data(){return{action:"",callback:null,message:"",showing:!1,title:""}},methods:{async runActionAndClose(){this.callback&&await this.callback(),this.showing=!1},show(t,e,i,s){this.title=t,this.message=e,this.showing=!0,this.action=i||this.$t("general.dismiss"),this.callback=s}}},n=o,l=i(1001),c=(0,l.Z)(n,s,r,!1,null,"6503e9d2",null),h=c.exports},50113:function(t,e,i){i.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("transition",{attrs:{name:"fade"}},[t.showing?i("div",{staticClass:"bg-black bottom-0 fade fixed left-0 opacity-60 px-4 right-0 top-0 z-50",on:{click:t.close}}):t._e()]),i("transition",{attrs:{name:"slide"}},[t.showing?i("div",{staticClass:"-translate-x-1/2 bg-modal bottom-0 fixed left-1/2 max-h-screen max-w-screen-sm overflow-y-scroll p-4 rounded-t-3xl w-screen z-50"},[t._t("default")],2):t._e()])],1)},r=[],a={name:"BottomSheet",data(){return{showing:!1}},methods:{close(){this.$emit("close"),this.showing=!1},show(){this.showing=!0}}},o=a,n=i(1001),l=(0,n.Z)(o,s,r,!1,null,"70f89c6e",null),c=l.exports},26526:function(t,e,i){i.r(e),i.d(e,{default:function(){return B}});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"flex flex-col"},[i("top-bar",{attrs:{title:t.$t("general.fioDomains")}}),i("div",{staticClass:"flex flex-col flex-grow items-center px-4"},[t.isLoading?[i("div",{attrs:{ckass:"flex-grow"}}),i("i",{staticClass:"animate-spin icon-spinner text-emphasis-low"}),i("div",{attrs:{ckass:"flex-grow"}})]:t._e(),t.isLoading||t.domains.length?t._e():i("div",{staticClass:"bg-n2 p-4 rounded-lg space-y-2 w-full"},[t._v(" "+t._s(t.$t("fio.noDomainsFound"))+" ")]),t._l(t.domains,(function(e){return i("div",{key:e.fio_domain,staticClass:"bg-n2 mb-2 p-4 rounded-lg space-y-1 w-full"},[i("div",{staticClass:"text-emphasis-high"},[t._v(t._s(e.fio_domain))]),i("div",{staticClass:"text-emphasis-medium text-xs"},[i("div",[t._v(t._s(t.$t("fio.expiration",{date:t.$d(new Date(e.expiration))})))]),i("div",[t._v(" "+t._s(t.$t("fio.public",{status:t.$t(e.public?"general.yes":"general.no")}))+" ")])])])})),i("fio-domain-register-sheet",{ref:"registrationSheet"}),i("alert-dialog",{ref:"errorDialog"}),i("div",{staticClass:"bottom-group"},[i("primary-button",{staticClass:"flex-1",attrs:{loading:t.isLoading,title:t.$t("fio.register.registerButton")},on:{click:t.showRegistrationSheet}})],1)],2)],1)},r=[],a=i(72294),o=i(63455),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("bottom-sheet",{ref:"sheet"},[i("div",{staticClass:"break-words font-bold max-w-xs mb-4 text-xl"},[t._v(t._s(t.$t("fio.register.registerDomain")))]),i("div",{staticClass:"font-bold mb-2"},[t._v(t._s(t.$t("fio.register.name")))]),i("opera-input",{attrs:{error:t.error,type:"test"},model:{value:t.domain,callback:function(e){t.domain=e},expression:"domain"}}),i("div",{staticClass:"bg-n3 p-4 rounded-lg"},[t._v(t._s(t.$t("general.transactionFee"))+": "+t._s(t.txFee))]),i("div",{staticClass:"flex mt-8 space-x-4"},[i("outlined-button",{staticClass:"flex-1",attrs:{title:t.$t("general.cancel")},on:{click:t.close}}),i("primary-button",{staticClass:"flex-1",attrs:{disabled:t.isLoading||t.error||!t.domain.length,loading:t.isLoading,title:t.$t("general.confirm")},on:{click:t.register}})],1)],1)},l=[],c=i(81732),h=i(70794),d=i(50113),m=i(17482),g=i(89504),u=i(68461),p=i(20144),f=i(17731),x=i(4634),w=i(98180),b=i(79818),v=i(25108),_=p.Z.extend({name:"FioDomainRegisterSheet",components:{BottomSheet:d.Z,OperaInput:m.Z,OutlinedButton:g.Z,PrimaryButton:u.Z},data(){return{callback:null,domain:"",error:null,loading:{fee:!1,preparingTx:!1,tx:!1},preparedTx:null,timers:{fee:null,preparingTx:null}}},computed:{balance(){return this.token?new h.Z(this.token.balance):new h.Z(0)},isLoading(){return Object.values(this.loading).some((t=>!!t))},publicKey(){const{accountsByCoinType:t}=this.$store.getters;return t[a.Dc.FIO]},token(){return this.$store.getters.getToken("",a.fr.FIO)},txFee(){if(!this.preparedTx)return"...";const t=x.Z.formatNumber(w.Z.withDecimals(this.preparedTx.token.amount,this.preparedTx.token.decimals));return`${t} FIO`}},watch:{domain(t){this.error=null,t.length<1||!(0,c.qL)(t)?this.error=this.$t("fio.errors.invalidDomainName"):this.tryPrepareTx(t)},preparedTx({token:{amount:t}}){new h.Z(t).isGreaterThan(this.balance)&&(this.error=this.$t("errors.generic.insufficientFunds"))}},methods:{close(){this.$refs.sheet.close()},async register(){if(!this.error&&!this.isLoading){this.loading.tx=!0;try{await b.Z.confirmTransaction(this.preparedTx.txId),await this.waitForRegisterToFinish(3e3)}catch(t){v.error(t),this.error=this.$t("errors.generic.somethingWentWrong"),this.$errorReporter.reportError(t)}finally{this.loading.tx=!1}}},show(t){this.domain="",this.$refs.sheet.show(),this.callback=t},tryPrepareTx(t){this.loading.preparingTx=!0,clearTimeout(this.timers.preparingTx),this.timers.preparingTx=setTimeout((async()=>{try{const e=await f.Z.checkAvailability(t);e.is_registered?(this.error=this.$t("fio.errors.domainNotAvailable"),this.loading.fee=!1,clearTimeout(this.timers.fee)):this.preparedTx=await b.Z.fioEstimateDomainRegistration(this.publicKey,t)}catch(e){v.error(e),this.$errorReporter.reportError(e)}finally{this.loading.preparingTx=!1}}),1e3)},async waitForRegisterToFinish(t){const e=Date.now();try{const t=await f.Z.getFioDomains(this.publicKey,0,0);if(!t.fio_domains.some((t=>t.fio_domain===this.domain)))throw new Error("FIO domain not found");this.callback&&this.callback(!0),this.close()}catch(i){"FIO domain not found"!==i.message&&this.$errorReporter.reportError(i),await new Promise((t=>setTimeout(t,2e3)));const s=Date.now()-e;s>=t?(this.callback&&this.callback(!1),this.close()):await this.waitForRegisterToFinish(t-s)}}}}),y=_,k=i(1001),$=(0,k.Z)(y,n,l,!1,null,null,null),C=$.exports,T=i(75619),F=i(25108),Z={name:"FioDomains",components:{AlertDialog:o.Z,FioDomainRegisterSheet:C,PrimaryButton:u.Z,TopBar:T.Z},data(){return{domains:[],loading:{domains:!1}}},computed:{isLoading(){return Object.values(this.loading).some((t=>!!t))},publicKey(){const{accountsByCoinType:t}=this.$store.getters;return t[a.Dc.FIO]}},mounted(){this.fetchFioDomains()},methods:{async fetchFioDomains(){this.loading.domains=!0;try{const t=await f.Z.getFioDomains(this.publicKey);this.domains=t.fio_domains}catch(t){404!==t.response.status&&(F.error(t),this.$errorReporter.reportError(t),this.$refs.errorDialog.show(this.$t("errors.generic.oops"),this.$t("errors.generic.somethingWentWrong")))}finally{this.loading.domains=!1}},showRegistrationSheet(){this.$refs.registrationSheet.show((()=>{this.fetchFioDomains()}))}}},D=Z,R=(0,k.Z)(D,s,r,!1,null,null,null),B=R.exports}}]);