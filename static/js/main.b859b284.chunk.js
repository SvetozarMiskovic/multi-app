(this["webpackJsonpmulti-app"]=this["webpackJsonpmulti-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),i=n(11),o=n.n(i),a=n(5),r=n(8),l=n(3),u=n(2),d=(n(16),n(9)),j=(n(17),n(0));var p=function(t){return Object(j.jsx)("option",{id:t.listDetails.id,value:t.listDetails.id,children:t.listDetails.title})};var m=function(t){return t.lists.sort("asc"===t.sort?t.compareAsc:t.compareDesc),Object(j.jsxs)("div",{className:"todo-select",children:[Object(j.jsx)("button",{onClick:function(){var e=prompt("Please name your list!","New List");if(e){var n=(new Date).getTime();t.setListInformation(n,e)}},type:"button",className:"newListBtn",children:"Create a list"}),Object(j.jsx)("select",{name:"select-list",id:"select-list",children:t.lists.map((function(t){return Object(j.jsx)(p,{listDetails:t},t.id)}))})]})};n(19);var b=function(t){return Object(j.jsxs)("div",{className:"todo-input",children:[Object(j.jsx)("label",{htmlFor:"todoInput",children:"Add a daily task!"}),Object(j.jsx)("input",{className:"input-field",autoComplete:"off",type:"text",name:"todoInput",id:"todoInput",placeholder:"Write something...",onChange:t.setInputText}),Object(j.jsx)("input",{onClick:function(){var e=(new Date).getTime();if(document.querySelectorAll(".list").length>0){if(t.inputText){var n=parseInt(document.getElementById("select-list").value);t.setTaskToList(n,e),document.querySelector("input[type=text]").value=""}}else if(t.inputText){var s=prompt("Please name your list!","New List");t.createTaskAndList(e,s),document.querySelector("input[type=text]").value=""}},type:"submit",id:"submitBtn",value:"Add a task",className:"input-submit"})]})};n(20);var f=function(t){return Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(b,{inputText:t.inputText,setTaskToList:t.setTaskToList,setInputText:t.setInputText,setListInformation:t.setListInformation,createTaskAndList:t.createTaskAndList}),Object(j.jsx)(m,{lists:t.lists,setListInformation:t.setListInformation,compareAsc:t.compareAsc,compareDesc:t.compareDesc,sort:t.sort})]})};n(21);var h=function(t){return Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsx)("label",{htmlFor:"sort",children:"Sort by:"}),Object(j.jsxs)("select",{onChange:function(){"asc"===t.sort?t.setSort("desc"):t.setSort("asc")},name:"sort",id:"sort",children:[Object(j.jsx)("option",{value:"Newest updates",children:"Newest updates"}),Object(j.jsx)("option",{value:"Oldest updates",children:"Oldest updates"})]})]})};n(22),n(23),n(24);var O=function(){return Object(j.jsx)("div",{className:"empty",children:Object(j.jsx)("h2",{className:"empty-text",children:"There are no lists created!"})})};n(25),n(26);var x=function(t){return Object(j.jsx)("h2",{className:"title",children:t.title})};n(27);var v=function(t){return Object(j.jsx)("i",{onClick:function(e){var n=e.target;t.removeList(parseInt(n.parentElement.id))},className:"fas fa-trash-alt deleteList"})};n(28);var T=function(t){return Object(j.jsxs)("li",{className:"single-item",id:t.todo.todoID,edit:"",children:[Object(j.jsx)("span",{children:t.todo.todoText}),Object(j.jsx)("i",{onClick:function(e){var n=e.target,s=parseInt(n.parentElement.id),c=n.parentElement.parentElement.parentElement,i=parseInt(c.id);t.removeTodo(i,s)},className:"fas fa-trash-alt deleteItem"})]})};var y=function(t){return Object(j.jsx)("ul",{className:"items-list",children:t.todos.map((function(e){return Object(j.jsx)(T,{removeTodo:t.removeTodo,todo:e},e.todoID)}))})};var g=function(t){return Object(j.jsxs)("div",{className:"list",id:t.listDetails.id,edit:t.listDetails.edit,children:[Object(j.jsx)(v,{removeList:t.removeList}),Object(j.jsx)(x,{title:t.listDetails.title}),Object(j.jsx)(y,{removeTodo:t.removeTodo,todos:t.listDetails.todos})]})};var N=function(t){return t.lists.length?(t.lists.sort("asc"===t.sort?t.compareAsc:t.compareDesc),Object(j.jsx)("div",{className:"task-holder",children:t.lists.map((function(e){return Object(j.jsx)(g,{removeTodo:t.removeTodo,removeList:t.removeList,listDetails:e},e.id)}))})):Object(j.jsx)(O,{})};n(29);var I=function(t){return t.lists.length?Object(j.jsx)("div",{className:"clear-btn-cont",children:Object(j.jsx)("button",{onClick:function(){t.clearAll()},className:"clear-all-btn",children:"Clear All"})}):null};var L=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(s.useState)((function(){var t=JSON.parse(localStorage.getItem("Lists"));return t||[]})),o=Object(l.a)(i,2),a=o[0],u=o[1],p=Object(s.useState)("asc"),m=Object(l.a)(p,2),b=m[0],O=m[1];function x(t,e){return e.edit-t.edit}function v(t,e){return t.edit-e.edit}return Object(s.useEffect)((function(){localStorage.setItem("Lists",JSON.stringify(a))})),Object(j.jsxs)("div",{className:"TodoApp",children:[Object(j.jsx)(f,{inputText:n,setListInformation:function(t,e){u(a.concat([{id:t,edit:t,title:e,todos:[]}]))},setInputText:function(t){var e=t.target.value;c(e)},setTaskToList:function(t,e){var s=(new Date).getTime();u(a.map((function(c){return c.id!==t?c:Object(d.a)(Object(d.a)({},c),{},{todos:[].concat(Object(r.a)(c.todos),[{todoID:e,todoText:n}]),edit:s})}))),c("")},createTaskAndList:function(t,e){u([{id:t,edit:t,title:e,todos:[{todoID:"".concat(t+1),todoText:n}]}]),c("")},lists:a,compareAsc:x,compareDesc:v,sort:b}),Object(j.jsx)(h,{lists:a,setLists:u,sort:b,setSort:O}),Object(j.jsx)(N,{removeTodo:function(t,e){var n=(new Date).getTime();u(a.map((function(s){return s.id!==t?s:Object(d.a)(Object(d.a)({},s),{},{todos:s.todos.filter((function(t){return parseInt(t.todoID)!==e})),edit:n})})))},removeList:function(t){u(a.filter((function(e){return e.id!==t})))},lists:a,sort:b,setLists:u,compareAsc:x,compareDesc:v}),Object(j.jsx)(I,{lists:a,clearAll:function(){u([])}})]})};n(30);var k=function(t){return Object(j.jsx)("div",{id:"input",children:Object(j.jsxs)("form",{autoComplete:"off",children:[Object(j.jsx)("label",{htmlFor:"country",children:"Please write the country you want stats for!"}),Object(j.jsx)("input",{className:"text-field",onInput:function(e){var n=e.target.value;t.searchText(n),t.setOpen(!0)},type:"text",id:"country",placeholder:"i.e. Serbia, India, Russia...",required:!0,onChange:function(e){var n=e.target.value;t.setInputText(n)},onClick:function(){t.getCountriesOnStart(),t.setOpen(!0)}}),t.open&&t.sugCountries.length>0?Object(j.jsx)("div",{className:"results",onMouseLeave:function(){t.setOpen(!1)},children:Object(j.jsx)("ul",{className:"result-list",children:t.sugCountries.map((function(e){return Object(j.jsx)("div",{onClick:function(e){var n=e.target.textContent;t.setInputText(n),document.querySelector('input[type="text"]').value=n,t.setOpen(!1)},children:e.Country},e.Country)}))})}):null,Object(j.jsx)("input",{type:"submit",value:"Get Data!",onClick:function(e){e.preventDefault(),t.getData(t.inputText),t.setInputText(""),document.querySelector('input[type="text"]').value="",t.setOpen(!1)},className:"submit-input"})]})})};var C=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsxs)("h2",{children:[Object(j.jsx)("span",{children:"Multi"}),"App"]}),Object(j.jsxs)("ul",{className:"home-list",children:[Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"/multi-app",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"multi-app/covid-tracker",children:"COVID Tracker"})}),Object(j.jsx)("li",{children:Object(j.jsx)(a.b,{to:"multi-app/todo-app",children:"Todo App"})})]})]})};n(31);var D=function(){return Object(j.jsx)("div",{className:"homepage",children:Object(j.jsx)(C,{})})};n(32);var S=function(t){return Object(j.jsxs)("div",{className:"holder",children:[Object(j.jsx)("h2",{className:"country-display",children:t.info.country}),Object(j.jsxs)("div",{className:"information-box",children:[Object(j.jsxs)("div",{className:"confirmed",children:[Object(j.jsx)("h2",{children:"Number of confirmed cases"}),Object(j.jsx)("h4",{className:"confirmed-cases",children:t.info.confirmed})]}),Object(j.jsxs)("div",{className:"active",children:[Object(j.jsx)("h2",{children:"Number of active cases"}),Object(j.jsx)("h4",{className:"active-cases",children:t.info.active})]}),Object(j.jsxs)("div",{className:"death",children:[Object(j.jsx)("h2",{children:"Number of death cases"}),Object(j.jsx)("h4",{className:"death-cases",children:t.info.deaths})]})]})]})};n(33);var w=function(){return Object(j.jsxs)("div",{className:"home-body",children:[Object(j.jsxs)("h2",{children:["Welcome to ",Object(j.jsx)("span",{children:"Multi"}),"App"]}),Object(j.jsx)("h4",{children:"MultiApp consists of COVID Tracker, which can be used to look up the current numbers of cases in any country you want, and of Todo App which allows you to write down your daily tasks to keep track of everything at one place!"})]})};var A=function(){var t=Object(s.useState)(""),e=Object(l.a)(t,2),n=e[0],c=e[1],i=Object(s.useState)({country:"Please specify a country!",confirmed:0,active:0,deaths:0}),o=Object(l.a)(i,2),a=o[0],d=o[1],p=Object(s.useState)([]),m=Object(l.a)(p,2),b=m[0],f=m[1],h=Object(s.useState)(!1),O=Object(l.a)(h,2),x=O[0],v=O[1],T=Object(s.useState)(!0),y=Object(l.a)(T,2);return y[0],y[1],Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(D,{}),Object(j.jsxs)(u.c,{children:[Object(j.jsx)(u.a,{path:"/multi-app",element:Object(j.jsx)(w,{})}),Object(j.jsx)(u.a,{path:"multi-app/covid-tracker",element:[Object(j.jsx)(k,{getData:function(t){var e;t&&fetch("https://api.covid19api.com/total/dayone/country/"+t).then((function(t){if(t.ok)return t.json();throw new Error("Something went wrong")})).then((function(t){(e=t[t.length-1])&&d({country:e.Country,confirmed:e.Confirmed.toLocaleString(),active:e.Active.toLocaleString(),deaths:e.Deaths.toLocaleString()})})).catch((function(t){console.log(t),alert("Please enter a valid country!")}))},inputText:n,setInputText:function(t){c(t.toLowerCase())},sugCountries:b,getCountriesOnStart:function(){fetch("https://api.covid19api.com/countries").then((function(t){return t.json()})).then((function(t){var e=t.slice(25,33);f(Object(r.a)(e))}))},open:x,setOpen:v,searchText:function(t){fetch("https://api.covid19api.com/countries").then((function(t){return t.json()})).then((function(e){var n=e.filter((function(e){if(t){var n=new RegExp("^".concat(t),"gi");return e.Country.match(n)}}));f(Object(r.a)(n))}))}},"covidTracker"),Object(j.jsx)(S,{setOpen:v,info:a},"covidTracker2")]}),Object(j.jsx)(u.a,{path:"multi-app/todo-app",element:Object(j.jsx)(L,{})})]})]})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,s=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),s(t),c(t),i(t),o(t)}))};o.a.render(Object(j.jsx)(a.a,{children:Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A,{})})}),document.getElementById("root")),E()}],[[34,1,2]]]);
//# sourceMappingURL=main.b859b284.chunk.js.map