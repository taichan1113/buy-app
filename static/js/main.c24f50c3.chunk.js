(this["webpackJsonpbuy-app"]=this["webpackJsonpbuy-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(11),r=a.n(c),i=(a(20),a(6)),l=a(2),o=a(3),u=a(5),m=a(4),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"tabs"},this.props.tabs.map((function(t){return s.a.createElement("li",{onClick:function(){return e.props.activeTab(t.id)},className:[t.active?"active":"inactive"],key:t.id},t.name)}))),s.a.createElement("div",{className:"contents"},this.props.tabs.map((function(t){return s.a.createElement("section",{className:[t.active?"active":"inactive"],key:t.id},s.a.createElement(t.comp,{lists:e.props.lists,stocks:e.props.stocks,toggleSelect:e.props.toggleSelect,addItem:e.props.addItem,item:e.props.item,handleChange:e.props.handleChange,deleteItem:e.props.deleteItem,deleteAll:e.props.deleteAll,toFridge:e.props.toFridge,eatStocks:e.props.eatStocks}))}))))}}]),a}(n.Component),d=a(7),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("li",{className:"buylist"},s.a.createElement("div",null,s.a.createElement("p",{onClick:function(){return e.props.toggleSelect(e.props.item.id)},className:this.props.item.selected?"selected":""},this.props.item.name),s.a.createElement("span",null,s.a.createElement(d.a,{icon:["fas","trash"],onClick:function(){return e.props.deleteItem(e.props.item)}}))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(n.Fragment,null,s.a.createElement("form",{className:"list-input",onSubmit:function(t){return e.props.addItem(t)}},s.a.createElement("input",{type:"text",placeholder:"input buy list",value:this.props.item,autoFocus:!this.props.item,onChange:function(t){return e.props.handleChange(t)}}),s.a.createElement("button",{type:"submit"},s.a.createElement(d.a,{icon:["fas","cart-arrow-down"]}))),s.a.createElement("ul",null,this.props.lists.map((function(t){return s.a.createElement(h,{key:t.id,item:t,toggleSelect:e.props.toggleSelect,deleteItem:e.props.deleteItem})}))),s.a.createElement("div",{className:"btn",onClick:function(){return e.props.toFridge()}},"To Stocks"),s.a.createElement("div",{className:"btn",onClick:function(){return e.props.deleteAll()}},"Clear All"))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).dangerLevel=function(e){var t=new Date(Date.parse(e)),a=new Date;return t.setDate(t.getDate()+14)<=a?"warning":t.setDate(t.getDate()+7)<=a?"caution":"notice"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",{className:this.dangerLevel(this.props.stock.date)},this.props.stock.name),s.a.createElement("td",{className:this.dangerLevel(this.props.stock.date)},this.props.stock.date),s.a.createElement("td",{className:this.dangerLevel(this.props.stock.date)},s.a.createElement(d.a,{icon:["fas","utensils"],onClick:function(){return e.props.eatStocks(e.props.stock)}}))))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{id:"table-container"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"name"),s.a.createElement("th",null,"purchased at"),s.a.createElement("th",null,"eat"))),this.props.stocks.map((function(t){return s.a.createElement(v,{key:t.id,stock:t,eatStocks:e.props.eatStocks})}))))}}]),a}(n.Component),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).activeTab=function(t){var a=Object(i.a)(e.state.tabs);a.map((function(e){e.active=e.id===t})),e.setState({tabs:a})},e.toggleSelect=function(t){var a=Object(i.a)(e.state.lists);a.map((function(e){e.selected=e.id===t?!e.selected:e.selected})),e.setState({lists:a})},e.addItem=function(t){if(t.preventDefault(),""!==e.state.item.trim()){var a={id:e.getUniqueId(),name:e.state.item,selected:!1},n=Object(i.a)(e.state.lists);n.push(a),e.setState({lists:n,item:""})}},e.handleChange=function(t){e.setState({item:t.target.value})},e.deleteItem=function(t){var a=Object(i.a)(e.state.lists);a.splice(a.indexOf(t),1),e.setState({lists:a})},e.deleteAll=function(){if(window.confirm("Clear all unselected lists?")){var t=Object(i.a)(e.state.lists).filter((function(e){return e.selected}));e.setState({lists:t})}},e.toFridge=function(){var t=Object(i.a)(e.state.lists),a=Object(i.a)(e.state.stocks),n=t.filter((function(e){return!e.selected}));t.filter((function(e){return e.selected})).map((function(t){a.push({id:e.getUniqueId(),name:t.name,date:e.myDate()})})),e.setState({lists:n,stocks:a})},e.eatStocks=function(t){var a=Object(i.a)(e.state.stocks);a.splice(a.indexOf(t),1),e.setState({stocks:a})},e.state={tabs:[{id:1,name:"Lists",active:!0,comp:f},{id:2,name:"Stocks",active:!1,comp:g}],item:"",lists:[],stocks:[]},e}return Object(o.a)(a,[{key:"getUniqueId",value:function(){return(new Date).getTime().toString(36)+"-"+Math.random().toString(36)}},{key:"myDate",value:function(){var e=new Date;return"".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())}},{key:"componentDidUpdate",value:function(){localStorage.setItem("lists",JSON.stringify(this.state.lists)),localStorage.setItem("stocks",JSON.stringify(this.state.stocks))}},{key:"componentDidMount",value:function(){this.setState({lists:JSON.parse(localStorage.getItem("lists"))||[],stocks:JSON.parse(localStorage.getItem("stocks"))||[]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(p,{tabs:this.state.tabs,activeTab:this.activeTab,lists:this.state.lists,stocks:this.state.stocks,toggleSelect:this.toggleSelect,addItem:this.addItem,item:this.state.item,handleChange:this.handleChange,deleteItem:this.deleteItem,deleteAll:this.deleteAll,toFridge:this.toFridge,eatStocks:this.eatStocks}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=a(8),E=a(12),S=a(13),O=a(14);k.b.add(E.a,S.a,O.a),r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.c24f50c3.chunk.js.map