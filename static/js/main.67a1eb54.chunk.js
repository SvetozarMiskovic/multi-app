(this["webpackJsonpmulti-app"]=this["webpackJsonpmulti-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(12),a=n.n(o),i=n(5),r=n(8),u=n(3),l=n(2),d=n(10),j=(n(17),n(0));var p=function(e){return Object(j.jsxs)("div",{className:"compare-inputs",children:[Object(j.jsx)("h4",{className:"compare-input-title",children:"Please choose two countries to compare!"}),Object(j.jsxs)("div",{className:"compare-box-1",children:[Object(j.jsx)("input",{autoComplete:"off",id:"compare-input-1",type:"text",placeholder:"Enter first country",onInput:function(t){var n=t.target.value;e.searchText(n),e.setCompareOne(!0)},onClick:function(){e.getCountriesOnStart(),e.setCompareOne(!0)},onChange:function(t){var n=t.target.value;e.setInput1(n)}}),e.showCompareOne&&e.sugCountries.length>0?Object(j.jsx)("div",{onMouseLeave:function(){e.setCompareOne(!1)},className:"suggestion-box-1",children:Object(j.jsx)("ul",{className:"compare-search-result-1",children:e.sugCountries.map((function(t){return Object(j.jsx)("div",{onClick:function(t){var n=t.target.textContent;e.setInput1(n),document.querySelector("#compare-input-1").value=n,e.setCompareOne(!1)},children:t.Country},t.Country)}))})}):null]}),Object(j.jsxs)("div",{className:"compare-box-2",children:[Object(j.jsx)("input",Object(d.a)({autoComplete:"off",id:"compare-input-2",type:"text",placeholder:"Enter second country",onInput:function(t){var n=t.target.value;e.searchText(n),e.setCompareTwo(!0)},onClick:function(){e.setCompareTwo(!0)},onChange:function(t){var n=t.target.value;e.setInput2(n)}},"onClick",(function(){e.getCountriesOnStart(),e.setCompareTwo(!0)}))),e.showCompareTwo&&e.sugCountries.length>0?Object(j.jsx)("div",{onMouseLeave:function(){e.setCompareTwo(!1)},className:"suggestion-box-2",children:Object(j.jsx)("ul",{className:"compare-search-result-2",children:e.sugCountries.map((function(t){return Object(j.jsx)("div",{onClick:function(t){var n=t.target.textContent;e.setInput2(n),document.querySelector("#compare-input-2").value=n,e.setCompareTwo(!1)},children:t.Country},t.Country)}))})}):null]}),Object(j.jsx)("button",{className:"compare-btn",type:"click",onClick:function(){e.getData1(e.input1),e.getData2(e.input2),e.setInput1(""),e.setInput2(""),document.querySelector("#compare-input-1").value="",document.querySelector("#compare-input-2").value="",e.setCompareOne(!1),e.setCompareTwo(!1)},children:Object(j.jsx)("i",{className:"fas fa-check"})})]})};n(19),n(20);var m=function(e){return Object(j.jsxs)("div",{className:"compare-results",children:[Object(j.jsxs)("div",{className:"compare-country-summary",children:[Object(j.jsxs)("div",{className:"first-country",children:[Object(j.jsxs)("h4",{className:"first-country-name",children:["Name: ",e.info1.country]}),Object(j.jsxs)("p",{className:"first-country-confirmed",children:["Confirmed: ",e.info1.confirmed]}),Object(j.jsxs)("p",{className:"first-country-active",children:["Active: ",e.info1.active]}),Object(j.jsxs)("p",{className:"first-country-deaths",children:["Deaths: ",e.info1.deaths]})]}),Object(j.jsxs)("div",{className:"second-country",children:[Object(j.jsxs)("h4",{className:"second-country-name",children:["Name: ",e.info2.country]}),Object(j.jsxs)("p",{className:"second-country-confirmed",children:["Confirmed: ",e.info2.confirmed]}),Object(j.jsxs)("p",{className:"second-country-active",children:["Active: ",e.info2.active]}),Object(j.jsxs)("p",{className:"second-country-deaths",children:["Deaths: ",e.info2.deaths]})]})]}),Object(j.jsx)("div",{className:"compare-conclusion",children:function(e,t){var n=parseInt(e.confirmed.replace(/\D/g,"")),c=parseInt(e.active.replace(/\D/g,"")),s=parseInt(e.deaths.replace(/\D/g,"")),o=parseInt(t.confirmed.replace(/\D/g,"")),a=parseInt(t.active.replace(/\D/g,"")),i=parseInt(t.deaths.replace(/\D/g,""));return"\n    \n      Currently, ".concat(n>o?e.country:t.country," has worse statistics as it has ").concat(n>o?n-o:o-n," more confirmed cases, ").concat(c>a?c-a:a-c," more active cases and ").concat(s>i?s-i:i-s," more deaths!\n    \n    ")}(e.info1,e.info2)})]})};var f=function(e){var t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],o=n[1],a=Object(c.useState)(!1),i=Object(u.a)(a,2),r=i[0],l=i[1],d=Object(c.useState)({}),f=Object(u.a)(d,2),h=f[0],b=f[1],O=Object(c.useState)({}),x=Object(u.a)(O,2),v=x[0],g=x[1],y=Object(c.useState)(""),C=Object(u.a)(y,2),N=C[0],T=C[1],I=Object(c.useState)(""),S=Object(u.a)(I,2),w=S[0],D=S[1];return Object(j.jsxs)("div",{className:"compare-holder",children:[Object(j.jsx)(p,{showCompareOne:s,showCompareTwo:r,setCompareOne:o,setCompareTwo:l,setInput1:function(e){T(e.toLowerCase())},setInput2:function(e){D(e.toLowerCase())},getCountriesOnStart:e.getCountriesOnStart,sugCountries:e.sugCountries,searchText:e.searchText,getData1:function(e){var t;e&&fetch("https://api.covid19api.com/total/dayone/country/"+e).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){(t=e[e.length-1])&&b({country:t.Country,confirmed:t.Confirmed.toLocaleString(),active:t.Active.toLocaleString(),deaths:t.Deaths.toLocaleString()})})).catch((function(e){console.log(e),alert("Please enter a valid country!")}))},getData2:function(e){var t;e&&fetch("https://api.covid19api.com/total/dayone/country/"+e).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){(t=e[e.length-1])&&g({country:t.Country,confirmed:t.Confirmed.toLocaleString(),active:t.Active.toLocaleString(),deaths:t.Deaths.toLocaleString()})})).catch((function(e){console.log(e),alert("Please enter a valid country!")}))},input1:N,input2:w,info1:h,info2:v}),Object(j.jsx)(m,{info1:h,info2:v,setInfo1:b,setInfo2:g})]})},h=(n(21),n(9));n(22);var b=function(e){return Object(j.jsx)("option",{id:e.listDetails.id,value:e.listDetails.id,children:e.listDetails.title})};var O=function(e){return e.lists.sort("asc"===e.sort?e.compareAsc:e.compareDesc),Object(j.jsxs)("div",{className:"todo-select",children:[Object(j.jsx)("button",{onClick:function(){var t=prompt("Please name your list!","New List");if(t){var n=(new Date).getTime();e.setListInformation(n,t)}},type:"button",className:"newListBtn",children:"Create a list"}),Object(j.jsx)("select",{name:"select-list",id:"select-list",children:e.lists.map((function(e){return Object(j.jsx)(b,{listDetails:e},e.id)}))})]})};n(23);var x=function(e){return Object(j.jsxs)("div",{className:"todo-input",children:[Object(j.jsx)("label",{htmlFor:"todoInput",children:"Add a daily task!"}),Object(j.jsx)("input",{className:"input-field",autoComplete:"off",type:"text",name:"todoInput",id:"todoInput",placeholder:"Write something...",onChange:e.setInputText}),Object(j.jsx)("input",{onClick:function(){var t=(new Date).getTime();if(document.querySelectorAll(".list").length>0){if(e.inputText){var n=parseInt(document.getElementById("select-list").value);e.setTaskToList(n,t),document.querySelector("input[type=text]").value=""}}else if(e.inputText){var c=prompt("Please name your list!","New List");e.createTaskAndList(t,c),document.querySelector("input[type=text]").value=""}},type:"submit",id:"submitBtn",value:"Add a task",className:"input-submit"})]})};n(24);var v=function(e){return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(x,{inputText:e.inputText,setTaskToList:e.setTaskToList,setInputText:e.setInputText,setListInformation:e.setListInformation,createTaskAndList:e.createTaskAndList}),Object(j.jsx)(O,{lists:e.lists,setListInformation:e.setListInformation,compareAsc:e.compareAsc,compareDesc:e.compareDesc,sort:e.sort})]})};n(25);var g=function(e){return Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsx)("label",{htmlFor:"sort",children:"Sort by:"}),Object(j.jsxs)("select",{onChange:function(){"asc"===e.sort?e.setSort("desc"):e.setSort("asc")},name:"sort",id:"sort",children:[Object(j.jsx)("option",{value:"Newest updates",children:"Newest updates"}),Object(j.jsx)("option",{value:"Oldest updates",children:"Oldest updates"})]})]})};n(26),n(27),n(28);var y=function(){return Object(j.jsx)("div",{className:"empty",children:Object(j.jsx)("h2",{className:"empty-text",children:"There are no lists created!"})})};n(29),n(30);var C=function(e){return Object(j.jsx)("h2",{className:"title",children:e.title})};n(31);var N=function(e){return Object(j.jsx)("i",{onClick:function(t){var n=t.target;e.removeList(parseInt(n.parentElement.id))},className:"fas fa-trash-alt deleteList"})};n(32);var T=function(e){return Object(j.jsxs)("li",{className:"single-item",id:e.todo.todoID,edit:"",children:[Object(j.jsx)("span",{children:e.todo.todoText}),Object(j.jsx)("i",{onClick:function(t){var n=t.target,c=parseInt(n.parentElement.id),s=n.parentElement.parentElement.parentElement,o=parseInt(s.id);e.removeTodo(o,c)},className:"fas fa-trash-alt deleteItem"})]})};var I=function(e){return Object(j.jsx)("ul",{className:"items-list",children:e.todos.map((function(t){return Object(j.jsx)(T,{removeTodo:e.removeTodo,todo:t},t.todoID)}))})};var S=function(e){return Object(j.jsxs)("div",{className:"list",id:e.listDetails.id,edit:e.listDetails.edit,children:[Object(j.jsx)(N,{removeList:e.removeList}),Object(j.jsx)(C,{title:e.listDetails.title}),Object(j.jsx)(I,{removeTodo:e.removeTodo,todos:e.listDetails.todos})]})};var w=function(e){return e.lists.length?(e.lists.sort("asc"===e.sort?e.compareAsc:e.compareDesc),Object(j.jsx)("div",{className:"task-holder",children:e.lists.map((function(t){return Object(j.jsx)(S,{removeTodo:e.removeTodo,removeList:e.removeList,listDetails:t},t.id)}))})):Object(j.jsx)(y,{})};n(33);var D=function(e){return e.lists.length?Object(j.jsx)("div",{className:"clear-btn-cont",children:Object(j.jsx)("button",{onClick:function(){e.clearAll()},className:"clear-all-btn",children:"Clear All"})}):null};var L=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)((function(){var e=JSON.parse(localStorage.getItem("Lists"));return e||[]})),a=Object(u.a)(o,2),i=a[0],l=a[1],d=Object(c.useState)("asc"),p=Object(u.a)(d,2),m=p[0],f=p[1];function b(e,t){return t.edit-e.edit}function O(e,t){return e.edit-t.edit}return Object(c.useEffect)((function(){localStorage.setItem("Lists",JSON.stringify(i))})),Object(j.jsxs)("div",{className:"TodoApp",children:[Object(j.jsx)(v,{inputText:n,setListInformation:function(e,t){l(i.concat([{id:e,edit:e,title:t,todos:[]}]))},setInputText:function(e){var t=e.target.value;s(t)},setTaskToList:function(e,t){var c=(new Date).getTime();l(i.map((function(s){return s.id!==e?s:Object(h.a)(Object(h.a)({},s),{},{todos:[].concat(Object(r.a)(s.todos),[{todoID:t,todoText:n}]),edit:c})}))),s("")},createTaskAndList:function(e,t){l([{id:e,edit:e,title:t,todos:[{todoID:"".concat(e+1),todoText:n}]}]),s("")},lists:i,compareAsc:b,compareDesc:O,sort:m}),Object(j.jsx)(g,{lists:i,setLists:l,sort:m,setSort:f}),Object(j.jsx)(w,{removeTodo:function(e,t){var n=(new Date).getTime();l(i.map((function(c){return c.id!==e?c:Object(h.a)(Object(h.a)({},c),{},{todos:c.todos.filter((function(e){return parseInt(e.todoID)!==t})),edit:n})})))},removeList:function(e){l(i.filter((function(t){return t.id!==e})))},lists:i,sort:m,setLists:l,compareAsc:b,compareDesc:O}),Object(j.jsx)(D,{lists:i,clearAll:function(){l([])}})]})};n(34);var k=function(e){return Object(j.jsx)("div",{id:"input",children:Object(j.jsxs)("form",{autoComplete:"off",children:[Object(j.jsx)("label",{htmlFor:"country",children:"Please write the country you want stats for!"}),Object(j.jsx)("input",{className:"text-field",onInput:function(t){var n=t.target.value;e.searchText(n),e.setOpen(!0)},type:"text",id:"country",placeholder:"i.e. Serbia, India, Russia...",required:!0,onChange:function(t){var n=t.target.value;e.setInputText(n)},onClick:function(){e.getCountriesOnStart(),e.setOpen(!0)}}),e.open&&e.sugCountries.length>0?Object(j.jsx)("div",{className:"results",onMouseLeave:function(){e.setOpen(!1)},children:Object(j.jsx)("ul",{className:"result-list",children:e.sugCountries.map((function(t){return Object(j.jsx)("div",{onClick:function(t){var n=t.target.textContent;e.setInputText(n),document.querySelector('input[type="text"]').value=n,e.setOpen(!1)},children:t.Country},t.Country)}))})}):null,Object(j.jsx)("input",{type:"submit",value:"Get Data!",onClick:function(t){t.preventDefault(),e.getData(e.inputText),e.setInputText(""),document.querySelector('input[type="text"]').value="",e.setOpen(!1)},className:"submit-input"})]})})};var A=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("span",{children:"Multi"}),"App"]}),Object(j.jsxs)("ul",{className:"home-list",children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"multi-app/covid-tracker",children:"COVID Tracker"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"multi-app/todo-app",children:"Todo App"})})]})]})};n(35);var E=function(){return Object(j.jsx)("div",{className:"homepage",children:Object(j.jsx)(A,{})})};n(36);var q=function(e){return Object(j.jsxs)("div",{className:"holder",children:[Object(j.jsx)("h2",{className:"country-display",children:e.info.country}),Object(j.jsxs)("div",{className:"information-box",children:[Object(j.jsxs)("div",{className:"confirmed",children:[Object(j.jsx)("h2",{children:"Number of confirmed cases"}),Object(j.jsx)("h4",{className:"confirmed-cases",children:e.info.confirmed})]}),Object(j.jsxs)("div",{className:"active",children:[Object(j.jsx)("h2",{children:"Number of active cases"}),Object(j.jsx)("h4",{className:"active-cases",children:e.info.active})]}),Object(j.jsxs)("div",{className:"death",children:[Object(j.jsx)("h2",{children:"Number of death cases"}),Object(j.jsx)("h4",{className:"death-cases",children:e.info.deaths})]})]})]})};n(37);var P=function(){return Object(j.jsxs)("div",{className:"home-body",children:[Object(j.jsxs)("h2",{children:["Welcome to ",Object(j.jsx)("span",{children:"Multi"}),"App"]}),Object(j.jsx)("h4",{children:"MultiApp consists of COVID Tracker, which can be used to look up the current numbers of cases in any country you want, and of Todo App which allows you to write down your daily tasks to keep track of everything at one place!"})]})};var F=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)({country:"Please specify a country!",confirmed:0,active:0,deaths:0}),a=Object(u.a)(o,2),i=a[0],d=a[1],p=Object(c.useState)([]),m=Object(u.a)(p,2),h=m[0],b=m[1],O=Object(c.useState)(!1),x=Object(u.a)(O,2),v=x[0],g=x[1];function y(){fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(e){var t=e.slice(25,33);b(Object(r.a)(t))}))}function C(e){fetch("https://api.covid19api.com/countries").then((function(e){return e.json()})).then((function(t){var n=t.filter((function(t){if(e){var n=new RegExp("^".concat(e),"gi");return t.Country.match(n)}}));b(Object(r.a)(n))}))}return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(E,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",element:Object(j.jsx)(P,{})}),Object(j.jsx)(l.a,{path:"multi-app/covid-tracker",element:[Object(j.jsx)(k,{getData:function(e){var t;e&&fetch("https://api.covid19api.com/total/dayone/country/"+e).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){(t=e[e.length-1])&&d({country:t.Country,confirmed:t.Confirmed.toLocaleString(),active:t.Active.toLocaleString(),deaths:t.Deaths.toLocaleString()})})).catch((function(e){console.log(e),alert("Please enter a valid country!")}))},inputText:n,setInputText:function(e){s(e.toLowerCase())},sugCountries:h,getCountriesOnStart:y,open:v,setOpen:g,searchText:C},"covidTracker"),Object(j.jsx)(q,{setOpen:g,info:i},"covidTracker2"),Object(j.jsx)(f,{getCountriesOnStart:y,sugCountries:h,searchText:C},"compare")]}),Object(j.jsx)(l.a,{path:"multi-app/todo-app",element:Object(j.jsx)(L,{})})]})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),o(e),a(e)}))};a.a.render(Object(j.jsx)(i.a,{children:Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(F,{})})}),document.getElementById("root")),M()}],[[38,1,2]]]);
//# sourceMappingURL=main.67a1eb54.chunk.js.map