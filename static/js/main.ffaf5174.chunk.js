(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(2),l=a(3),o=a(4),s=a(6),d=a(5),u=a(7),i=(a(13),function(e){function t(){var e,a;Object(l.a)(this,t);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={product:a.props.product.state},a.changeState=function(e){var t=e.type,c=a.state.product;if("disabled"!==c){var n={click:{default:"selected_hover",default_hover:"selected",selected:"default_hover",selected_hover:"default_hover"},mouseenter:{default:"default_hover",selected_hover:"selected"},mouseleave:{default_hover:"default",selected:"selected_hover"}}[t][c];a.setState({product:n})}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.product,a=this.state.product;return n.a.createElement("div",{className:"product product_"+a},n.a.createElement("div",{onMouseEnter:this.changeState,onMouseLeave:this.changeState,onClick:this.changeState,className:"product__item"},n.a.createElement("div",{className:"product__top-block"},n.a.createElement("div",{className:"product__cut-corner"},n.a.createElement("div",{className:"product__cut-corner-bgc"})),n.a.createElement("p",{className:"product__note"},t.note[a]||t.note.default)),n.a.createElement("div",{className:"product__bottom-block"},n.a.createElement("h2",{className:"product__name"},t.name),n.a.createElement("p",{className:"product__type"},t.type),n.a.createElement("p",{className:"product__portions"},t.portions),n.a.createElement("p",{className:"product__gift"},t.gift),n.a.createElement("div",{className:"product__weight"},n.a.createElement("span",{className:"product__weight-number"},t.weight),n.a.createElement("span",{className:"product__weight-units"},t.units)))),n.a.createElement("p",{className:"product__slogan"},t.slogan[a],function(){if("default"===a||"default_hover"===a)return n.a.createElement("span",{onClick:e.changeState,className:"product__buy-link"},t.buy_link)}()))}}]),t}(c.Component));a(15);var p=function(e){var t=e.products.map(function(e){return n.a.createElement("div",{className:"col-12 col-md-6 col-xl-4",key:e.id},n.a.createElement(i,{product:e}))});return n.a.createElement("div",{className:"product-list"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"product-list__title"},"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),n.a.createElement("div",{className:"row justify-content-center"},t)))},m={default:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",selected_hover:"\u041a\u043e\u0442\u044d \u043d\u0435 \u043e\u0434\u043e\u0431\u0440\u044f\u0435\u0442?"},_="\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",f=[{id:0,state:"default",note:m,name:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",type:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",portions:"10 \u043f\u043e\u0440\u0446\u0438\u0439",gift:"\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"0,5",units:"\u043a\u0433",slogan:{default:_,default_hover:_,selected:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",selected_hover:"\u041f\u0435\u0447\u0435\u043d\u044c \u0443\u0442\u043a\u0438 \u0440\u0430\u0437\u0432\u0430\u0440\u043d\u0430\u044f \u0441 \u0430\u0440\u0442\u0438\u0448\u043e\u043a\u0430\u043c\u0438.",disabled:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0444\u0443\u0430-\u0433\u0440\u0430 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."},buy_link:"\u043a\u0443\u043f\u0438."},{id:1,state:"default",note:m,name:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",type:"\u0441 \u0440\u044b\u0431\u043e\u0439",portions:"40 \u043f\u043e\u0440\u0446\u0438\u0439",gift:"2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a",weight:"2",units:"\u043a\u0433",slogan:{default:_,default_hover:_,selected:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",selected_hover:"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430.",disabled:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u0440\u044b\u0431\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."},buy_link:"\u043a\u0443\u043f\u0438."},{id:2,state:"disabled",note:m,name:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",type:"\u0441 \u043a\u0443\u0440\u043e\u0439",portions:"100 \u043f\u043e\u0440\u0446\u0438\u0439",gift:"5 \u043c\u044b\u0448\u0435\u0439 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a \u0434\u043e\u0432\u043e\u043b\u0435\u043d",weight:"5",units:"\u043a\u0433",slogan:{default:_,default_hover:_,selected:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",selected_hover:"\u0424\u0438\u043b\u0435 \u0438\u0437 \u0446\u044b\u043f\u043b\u044f\u0442 \u0441 \u0442\u0440\u044e\u0444\u0435\u043b\u044f\u043c\u0438 \u0432 \u0431\u0443\u043b\u044c\u043e\u043d\u0435.",disabled:"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."},buy_link:"\u043a\u0443\u043f\u0438."}];a(17);var h=function(){return n.a.createElement(p,{products:f})};Object(r.render)(n.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.ffaf5174.chunk.js.map