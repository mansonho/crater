var ge=Object.defineProperty,ye=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var W=(d,s,c)=>s in d?ge(d,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):d[s]=c,G=(d,s)=>{for(var c in s||(s={}))be.call(s,c)&&W(d,c,s[c]);if(O)for(var c of O(s))xe.call(s,c)&&W(d,c,s[c]);return d},q=(d,s)=>ye(d,ve(s));import{o as u,c as Ce,R as Ee,g as J,u as Be,C as ke,am as we,r as o,s as _,w as t,y as a,b as l,v,x as g,A as D,i as M,j as Se,k as I,aS as De,aT as $e,M as Ie,Z as U,al as X,z as A,a5 as K,t as b,a0 as Z}from"./vendor.e9042f2c.js";import{_ as Ae,i as Q,u as Ve,z as Y,d as ee,e as x,c as Pe,s as Le}from"./main.50c1f863.js";const Ne={},Fe={width:"110",height:"110",viewBox:"0 0 110 110",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Te=Ee('<path fill-rule="evenodd" clip-rule="evenodd" d="M55 13.75C24.6245 13.75 0 22.9848 0 34.375C0 45.7652 24.6245 55 55 55C85.3755 55 110 45.7652 110 34.375C110 22.9848 85.3755 13.75 55 13.75ZM55 15.4688C86.8708 15.4688 108.281 25.245 108.281 34.375C108.281 43.505 86.8708 53.2812 55 53.2812C23.1292 53.2812 1.71875 43.505 1.71875 34.375C1.71875 25.245 23.1292 15.4688 55 15.4688Z" fill="#55547A"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M54.9999 1.71875C66.0842 1.71875 75.7452 7.92172 80.697 17.038L82.732 17.2081C77.6737 7.01078 67.1549 0 54.9999 0C42.7985 0 32.2454 7.06406 27.2095 17.3267L29.2479 17.1411C34.1824 7.96812 43.8745 1.71875 54.9999 1.71875Z" fill="#817AE3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M55 96.25C40.7619 96.25 25.7812 99.3283 25.7812 103.125C25.7812 106.922 40.7619 110 55 110C69.2381 110 84.2188 106.922 84.2188 103.125C84.2188 99.3283 69.2381 96.25 55 96.25ZM55 97.9688C70.4602 97.9688 81.5959 101.317 82.4811 103.125C81.5959 104.933 70.4602 108.281 55 108.281C39.5398 108.281 28.4041 104.933 27.5189 103.125C28.4041 101.317 39.5398 97.9688 55 97.9688Z" fill="#817AE3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M27.4756 103.328L25.8049 102.922L41.2737 39.3286L42.9443 39.7342L27.4756 103.328Z" fill="#817AE3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M82.5247 103.328L67.0559 39.7342L68.7265 39.3286L84.1953 102.922L82.5247 103.328Z" fill="#817AE3"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M68.75 39.5312C68.75 42.3792 62.5934 44.6875 55 44.6875C47.4066 44.6875 41.25 42.3792 41.25 39.5312C41.25 36.6833 47.4066 34.375 55 34.375C62.5934 34.375 68.75 36.6833 68.75 39.5312Z" fill="#55547A"></path>',6),Me=[Te];function Ue(d,s){return u(),Ce("svg",Fe,Me)}var Xe=Ae(Ne,[["render",Ue]]);const Ze={props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(d){const s=d,c=Q();Ve();const{t:C}=J(),E=Y(),k=Be();ke();const y=ee();we("utils");function i(f){c.openDialog({title:C("general.are_you_sure"),message:C("expenses.confirm_delete",1),yesLabel:C("general.ok"),noLabel:C("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(m=>{m&&E.deleteExpense({ids:[f]}).then(h=>{h&&s.loadData&&s.loadData()})})}return(f,m)=>{const h=o("BaseIcon"),w=o("BaseButton"),B=o("BaseDropdownItem"),V=o("router-link"),P=o("BaseDropdown");return u(),_(P,null,{activator:t(()=>[a(k).name==="expenses.view"?(u(),_(w,{key:0,variant:"primary"},{default:t(()=>[l(h,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(u(),_(h,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[a(y).hasAbilities(a(x).EDIT_EXPENSE)?(u(),_(V,{key:0,to:`/admin/expenses/${d.row.id}/edit`},{default:t(()=>[l(B,null,{default:t(()=>[l(h,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),v(" "+g(f.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):D("",!0),a(y).hasAbilities(a(x).DELETE_EXPENSE)?(u(),_(B,{key:1,onClick:m[0]||(m[0]=j=>i(d.row.id))},{default:t(()=>[l(h,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),v(" "+g(f.$t("general.delete")),1)]),_:1})):D("",!0)]),_:1})}}},je=b("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),ze={class:"relative table-container"},Re={class:"relative flex items-center justify-end h-5"},He={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Oe={class:"absolute items-center left-6 top-2.5 select-none"},We={class:"relative block"},Ge={class:"notes"},qe={class:"truncate note w-60"},Ye={setup(d){Pe();const s=Y(),c=Q(),C=Le(),E=ee();let k=M(!0),y=M(null);const i=Se({expense_category_id:"",from_date:"",to_date:"",customer_id:""}),{t:f}=J();let m=M(null);const h=I(()=>!s.totalExpenses&&!k.value),w=I({get:()=>s.selectedExpenses,set:n=>s.selectExpense(n)}),B=I({get:()=>s.selectAllField,set:n=>s.setSelectAllState(n)}),V=I(()=>[{key:"status",thClass:"extra w-10",tdClass:"font-medium text-gray-900",placeholderClass:"w-10",sortable:!1},{key:"expense_date",label:"Date",thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"name",label:"Category",thClass:"extra",tdClass:"cursor-pointer font-medium text-primary-500"},{key:"user_name",label:"Customer"},{key:"notes",label:"Note"},{key:"amount",label:"Amount"},{key:"actions",sortable:!1,tdClass:"text-right text-sm font-medium"}]);De(i,()=>{te()},{debounce:500}),$e(()=>{s.selectAllField&&s.selectAllExpenses()}),Ie(()=>{C.fetchCategories({limit:"all"})});async function P(n){return(await C.fetchCategories({search:n})).data.data}async function j({page:n,filter:r,sort:S}){let N=q(G({},i),{orderByField:S.fieldName||"created_at",orderBy:S.order||"desc",page:n});k.value=!0;let p=await s.fetchExpenses(N);return k.value=!1,{data:p.data.data,pagination:{data:p.data.data,totalPages:p.data.meta.last_page,currentPage:n,totalCount:p.data.meta.total,limit:10}}}function L(){m.value&&m.value.refresh()}function te(){L()}function z(){i.expense_category_id="",i.from_date="",i.to_date="",i.customer_id=""}function ae(){y.value&&z(),y.value=!y.value}function le(){return E.hasAbilities([x.DELETE_EXPENSE,x.EDIT_EXPENSE])}function se(){c.openDialog({title:f("general.are_you_sure"),message:f("expenses.confirm_delete",2),yesLabel:f("general.ok"),noLabel:f("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(n=>{n&&s.deleteMultipleExpenses().then(r=>{r.data&&L()})})}return(n,r)=>{const S=o("BaseBreadcrumbItem"),N=o("BaseBreadcrumb"),p=o("BaseIcon"),F=o("BaseButton"),ne=o("BasePageHeader"),oe=o("BaseCustomerSelectInput"),$=o("BaseInputGroup"),re=o("BaseMultiselect"),R=o("BaseDatePicker"),ie=o("BaseFilterWrapper"),de=o("BaseEmptyPlaceholder"),ce=o("BaseDropdownItem"),ue=o("BaseDropdown"),H=o("BaseCheckbox"),me=o("router-link"),pe=o("BaseFormatMoney"),_e=o("BaseText"),fe=o("BaseTable"),he=o("BasePage");return u(),_(he,null,{default:t(()=>[l(ne,{title:n.$t("expenses.title")},{actions:t(()=>[U(l(F,{variant:"primary-outline",onClick:ae},{right:t(e=>[a(y)?(u(),_(p,{key:1,name:"XIcon",class:A(e.class)},null,8,["class"])):(u(),_(p,{key:0,name:"FilterIcon",class:A(e.class)},null,8,["class"]))]),default:t(()=>[v(g(n.$t("general.filter"))+" ",1)]),_:1},512),[[X,a(s).totalExpenses]]),a(E).hasAbilities(a(x).CREATE_EXPENSE)?(u(),_(F,{key:0,class:"ml-4",variant:"primary",onClick:r[0]||(r[0]=e=>n.$router.push("expenses/create"))},{left:t(e=>[l(p,{name:"PlusIcon",class:A(e.class)},null,8,["class"])]),default:t(()=>[v(" "+g(n.$t("expenses.add_expense")),1)]),_:1})):D("",!0)]),default:t(()=>[l(N,null,{default:t(()=>[l(S,{title:n.$t("general.home"),to:"dashboard"},null,8,["title"]),l(S,{title:n.$tc("expenses.expense",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),l(ie,{show:a(y),class:"mt-5",onClear:z},{default:t(()=>[l($,{label:n.$t("expenses.customer")},{default:t(()=>[l(oe,{modelValue:a(i).customer_id,"onUpdate:modelValue":r[1]||(r[1]=e=>a(i).customer_id=e),placeholder:n.$t("customers.type_or_click"),"value-prop":"id",label:"name"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l($,{label:n.$t("expenses.category")},{default:t(()=>[l(re,{modelValue:a(i).expense_category_id,"onUpdate:modelValue":r[2]||(r[2]=e=>a(i).expense_category_id=e),"value-prop":"id",label:"name","track-by":"name","filter-results":!1,"resolve-on-load":"",delay:500,options:P,searchable:"",placeholder:n.$t("expenses.categories.select_a_category")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l($,{label:n.$t("expenses.from_date")},{default:t(()=>[l(R,{modelValue:a(i).from_date,"onUpdate:modelValue":r[3]||(r[3]=e=>a(i).from_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),je,l($,{label:n.$t("expenses.to_date")},{default:t(()=>[l(R,{modelValue:a(i).to_date,"onUpdate:modelValue":r[4]||(r[4]=e=>a(i).to_date=e),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),U(l(de,{title:n.$t("expenses.no_expenses"),description:n.$t("expenses.list_of_expenses")},K({default:t(()=>[l(Xe,{class:"mt-5 mb-4"})]),_:2},[a(E).hasAbilities(a(x).CREATE_EXPENSE)?{name:"actions",fn:t(()=>[l(F,{variant:"primary-outline",onClick:r[5]||(r[5]=e=>n.$router.push("/admin/expenses/create"))},{left:t(e=>[l(p,{name:"PlusIcon",class:A(e.class)},null,8,["class"])]),default:t(()=>[v(" "+g(n.$t("expenses.add_new_expense")),1)]),_:1})])}:void 0]),1032,["title","description"]),[[X,a(h)]]),U(b("div",ze,[b("div",Re,[a(s).selectedExpenses.length&&a(E).hasAbilities(a(x).DELETE_EXPENSE)?(u(),_(ue,{key:0},{activator:t(()=>[b("span",He,[v(g(n.$t("general.actions"))+" ",1),l(p,{name:"ChevronDownIcon"})])]),default:t(()=>[a(E).hasAbilities(a(x).DELETE_EXPENSE)?(u(),_(ce,{key:0,onClick:se},{default:t(()=>[l(p,{name:"TrashIcon",class:"h-5 mr-3 text-gray-600"}),v(" "+g(n.$t("general.delete")),1)]),_:1})):D("",!0)]),_:1})):D("",!0)]),l(fe,{ref:(e,T)=>{T.tableComponent=e,Z(m)?m.value=e:m=e},data:j,columns:a(V),class:"mt-3"},K({header:t(()=>[b("div",Oe,[l(H,{modelValue:a(B),"onUpdate:modelValue":r[6]||(r[6]=e=>Z(B)?B.value=e:null),variant:"primary",onChange:a(s).selectAllExpenses},null,8,["modelValue","onChange"])])]),"cell-status":t(({row:e})=>[b("div",We,[l(H,{id:e.id,modelValue:a(w),"onUpdate:modelValue":r[7]||(r[7]=T=>Z(w)?w.value=T:null),value:e.data.id,variant:"primary"},null,8,["id","modelValue","value"])])]),"cell-name":t(({row:e})=>[l(me,{to:{path:`expenses/${e.data.id}/edit`},class:"font-medium text-primary-500"},{default:t(()=>[v(g(e.data.expense_category.name),1)]),_:2},1032,["to"])]),"cell-amount":t(({row:e})=>[l(pe,{amount:e.data.amount,currency:e.data.currency},null,8,["amount","currency"])]),"cell-user_name":t(({row:e})=>[l(_e,{text:e.data.customer?e.data.customer.name:"-",length:30},null,8,["text"])]),"cell-notes":t(({row:e})=>[b("div",Ge,[b("div",qe,g(e.data.notes?e.data.notes:"-"),1)])]),_:2},[le()?{name:"cell-actions",fn:t(({row:e})=>[l(Ze,{row:e.data,table:a(m),"load-data":L},null,8,["row","table"])])}:void 0]),1032,["columns"])],512),[[X,!a(h)]])]),_:1})}}};export{Ye as default};