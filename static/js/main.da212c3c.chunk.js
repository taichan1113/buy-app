(this["webpackJsonpbuy-app"]=this["webpackJsonpbuy-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(33)},25:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),c=(a(25),a(7)),i=a(2),l=a(3),p=a(5),u=a(4),d=a(6),m=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("ul",{className:"tabs"},this.props.tabs.map((function(t){return s.a.createElement("li",{onClick:function(){return e.props.activeTab(t.id)},className:[t.active?"active":"inactive"],key:t.id},t.name)}))),s.a.createElement("div",{className:"contents"},this.props.tabs.map((function(t){return s.a.createElement("section",{className:[t.active?"active":"inactive"],key:t.id},s.a.createElement(d.a,{onDragEnd:e.props.onDragEnd},s.a.createElement(t.comp,{lists:e.props.lists,stocks:e.props.stocks,toggleSelect:e.props.toggleSelect,addItem:e.props.addItem,item:e.props.item,handleChange:e.props.handleChange,deleteItem:e.props.deleteItem,deleteAll:e.props.deleteAll,toFridge:e.props.toFridge,addStock:e.props.addStock,eatStocks:e.props.eatStocks})))}))))}}]),a}(n.Component),g=a(8),f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(d.b,{draggableId:this.props.item.id,index:this.props.index},(function(t){return s.a.createElement("li",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef,className:"buylist"}),s.a.createElement("div",null,s.a.createElement("p",{onClick:function(){return e.props.toggleSelect(e.props.item.id)},className:e.props.item.selected?"selected":""},e.props.item.name),s.a.createElement("span",null,s.a.createElement(g.a,{icon:["fas","trash"],onClick:function(){return e.props.deleteItem(e.props.item)}}))))}))}}]),a}(n.Component),h=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"list-input",onSubmit:function(t){return e.props.addItem(t)}},s.a.createElement("input",{type:"text",placeholder:"input buy list",value:this.props.item,autoFocus:!this.props.item,onChange:function(t){return e.props.handleChange(t)}}),s.a.createElement("button",{type:"submit"},s.a.createElement(g.a,{icon:["fas","cart-arrow-down"]}))),s.a.createElement(d.c,{droppableId:"BuyLists",type:"BuyLists"},(function(t){return s.a.createElement("ul",Object.assign({},t.droppableProps,{ref:t.innerRef}),e.props.lists.map((function(t,a){return s.a.createElement(f,{key:t.id,index:a,item:t,toggleSelect:e.props.toggleSelect,deleteItem:e.props.deleteItem})})),t.placeholder)})),s.a.createElement("div",{className:"btn",onClick:function(){return e.props.toFridge()}},"To Stocks"),s.a.createElement("div",{className:"btn",onClick:function(){return e.props.deleteAll()}},"Clear All"))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).dangerLevel=function(e){var t=new Date(Date.parse(e)),a=new Date;return t.setDate(t.getDate()+14)<=a?"warning":t.setDate(t.getDate()+7)<=a?"caution":"notice"},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(d.b,{draggableId:this.props.stock.id,index:this.props.index},(function(t){return s.a.createElement("tr",Object.assign({},t.draggableProps,t.dragHandleProps,{ref:t.innerRef}),s.a.createElement("td",{className:e.dangerLevel(e.props.stock.date)+" column1"},e.props.stock.name),s.a.createElement("td",{className:e.dangerLevel(e.props.stock.date)+" column2"},e.props.stock.date),s.a.createElement("td",{className:e.dangerLevel(e.props.stock.date)+" column3"},s.a.createElement(g.a,{icon:["fas","utensils"],onClick:function(){return e.props.eatStocks(e.props.stock)}})))}))}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement("form",{className:"list-input",onSubmit:function(t){return e.props.addStock(t)}},s.a.createElement("input",{type:"text",placeholder:"input stock",value:this.props.item,autoFocus:!this.props.item,onChange:function(t){return e.props.handleChange(t)}}),s.a.createElement("button",{type:"submit"},s.a.createElement(g.a,{icon:["fas","cart-arrow-down"]}))),s.a.createElement("div",{id:"table-container"},s.a.createElement(d.c,{droppableId:"Fridge",type:"Fridge"},(function(t){return s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"column1"},"name"),s.a.createElement("th",{className:"column2"},"purchased at"),s.a.createElement("th",{className:"column3"},"eat"))),s.a.createElement("tbody",Object.assign({},t.droppableProps,{ref:t.innerRef}),e.props.stocks.map((function(t,a){return s.a.createElement(b,{key:t.id,index:a,stock:t,eatStocks:e.props.eatStocks})})),t.placeholder))}))))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).activeTab=function(t){var a=Object(c.a)(e.state.tabs);a.map((function(e){e.active=e.id===t})),e.setState({tabs:a})},e.toggleSelect=function(t){var a=Object(c.a)(e.state.lists);a.map((function(e){e.selected=e.id===t?!e.selected:e.selected})),e.setState({lists:a})},e.addItem=function(t){if(t.preventDefault(),""!==e.state.item.trim()){var a={id:e.getUniqueId(),name:e.state.item,selected:!1},n=Object(c.a)(e.state.lists);n.push(a),e.setState({lists:n,item:""})}},e.handleChange=function(t){e.setState({item:t.target.value})},e.deleteItem=function(t){var a=Object(c.a)(e.state.lists);a.splice(a.indexOf(t),1),e.setState({lists:a})},e.deleteAll=function(){if(window.confirm("Clear all unselected lists?")){var t=Object(c.a)(e.state.lists).filter((function(e){return e.selected}));e.setState({lists:t})}},e.toFridge=function(){var t=Object(c.a)(e.state.lists),a=Object(c.a)(e.state.stocks),n=t.filter((function(e){return!e.selected}));t.filter((function(e){return e.selected})).map((function(t){a.push({id:e.getUniqueId(),name:t.name,date:e.myDate()})})),e.setState({lists:n,stocks:a})},e.addStock=function(t){if(t.preventDefault(),""!==e.state.item.trim()){var a={id:e.getUniqueId(),name:e.state.item,date:e.myDate()},n=Object(c.a)(e.state.stocks);n.push(a),e.setState({stocks:n,item:""})}},e.eatStocks=function(t){var a=Object(c.a)(e.state.stocks);a.splice(a.indexOf(t),1),e.setState({stocks:a})},e.onDragEnd=function(t){var a=t.draggableId,n=t.type,s=t.source,r=t.destination;if(console.log("---------------"),console.log("draggableId is ".concat(a)),console.log("type is ".concat(n)),console.log("source is"),console.log(s),console.log("destination is"),console.log(r),r&&(s.droppableId!==r.droppableId||s.index!==r.index)){var o="BuyLists"===n?Array.from(e.state.lists):Array.from(e.state.stocks),c=Array.from(o);c.splice(s.index,1),c.splice(r.index,0,o[s.index]),console.log(o),console.log(c),"BuyLists"===n?e.setState({lists:c}):e.setState({stocks:c})}},e.state={tabs:[{id:1,name:"Lists",active:!0,comp:h},{id:2,name:"Stocks",active:!1,comp:v}],item:"",lists:[],stocks:[]},e}return Object(l.a)(a,[{key:"getUniqueId",value:function(){return(new Date).getTime().toString(36)+"-"+Math.random().toString(36)}},{key:"myDate",value:function(){var e=new Date;return"".concat(e.getFullYear(),"/").concat(e.getMonth()+1,"/").concat(e.getDate())}},{key:"componentDidUpdate",value:function(){localStorage.setItem("lists",JSON.stringify(this.state.lists)),localStorage.setItem("stocks",JSON.stringify(this.state.stocks))}},{key:"componentDidMount",value:function(){this.setState({lists:JSON.parse(localStorage.getItem("lists"))||[],stocks:JSON.parse(localStorage.getItem("stocks"))||[]})}},{key:"render",value:function(){return s.a.createElement("div",{className:"container"},s.a.createElement(m,{tabs:this.state.tabs,activeTab:this.activeTab,lists:this.state.lists,stocks:this.state.stocks,toggleSelect:this.toggleSelect,addItem:this.addItem,item:this.state.item,handleChange:this.handleChange,deleteItem:this.deleteItem,deleteAll:this.deleteAll,toFridge:this.toFridge,addStock:this.addStock,eatStocks:this.eatStocks,onDragEnd:this.onDragEnd}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(10),S=a(17),y=a(18),O=a(19);E.b.add(S.a,y.a,O.a),o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.da212c3c.chunk.js.map