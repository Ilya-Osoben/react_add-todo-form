(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(6),s=a(2),c=a(9),o=(a(14),a(1)),l=a(8),d=a.n(l),u=a(0),m=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo;return Object(u.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(u.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(j,{todo:e},e.id)}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function f(e){return h.find((function(t){return t.id===e}))||null}var O=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)({user:f(e.userId)},e)})),p=function(){var e=Object(o.useState)(O),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),l=c[0],d=c[1],m=Object(o.useState)(!1),j=Object(s.a)(m,2),p=j[0],x=j[1],v=Object(o.useState)(0),y=Object(s.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),g=Object(s.a)(I,2),C=g[0],_=g[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Add todo form"}),Object(u.jsxs)("form",{action:"/api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),x(!l.trim()),_(0===S),S&&l&&(!function(){var e=a.map((function(e){return e.id})),t={id:Math.max.apply(Math,Object(r.a)(e))+1,title:l,userId:S,completed:!1,user:f(S)};n((function(e){return[].concat(Object(r.a)(e),[t])}))}(),d(""),N(0))},children:[Object(u.jsxs)("div",{className:"field",children:[Object(u.jsx)("input",{type:"text","data-cy":"titleInput",value:l,onChange:function(e){d(e.target.value),x(!1)}}),p&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("select",{"data-cy":"userSelect",value:S,onChange:function(e){N(+e.target.value),_(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(u.jsx)(b,{todos:a})]})};i.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.81309fa3.chunk.js.map