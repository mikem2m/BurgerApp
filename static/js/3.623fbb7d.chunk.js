(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,a){e.exports={ContactData:"ContactData_ContactData__3DnR_"}},104:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),l=a(5),i=a(4),o=a(6),c=a(0),u=a.n(c),d=a(18),s=a(54),p=a(34),m=a(99),h=a.n(m),v=function(e){return u.a.createElement("div",{className:h.a.CheckoutSummary},u.a.createElement("h1",null,"We hope it tastes well!"),u.a.createElement("div",{style:{width:"100%",margin:"auto"}},u.a.createElement(s.a,{ingredients:e.ingredients})),u.a.createElement(p.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),u.a.createElement(p.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},g=a(22),f=a(100),C=a.n(f),y=a(19),b=a(43),E=a(97),k=a(14),I=a(44),j=a(15),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipcode:{elementType:"input",elementConfig:{type:"text",placeholder:"Zip Code"},value:"",validation:{required:!0,minLength:5,maxLength:5},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your email"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"regular",displayValue:"Regular"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForm)t[n]=a.state.orderForm[n].value;var r={ingredients:a.props.ings,price:a.props.tp,orderData:t,userId:a.props.userId};a.props.onOrderBurger(r,a.props.token)},a.checkValidity=function(e,t){var a=!0;return t.required&&(a=""!==e.trim()&&a),t.minLength&&(a=e.length>=t.minLength&&a),t.maxLength&&(a=e.length<=t.maxLength&&a),a},a.inputChangedHandler=function(e,t){var n=Object(g.a)({},a.state.orderForm),r=Object(g.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0,n[t]=r;var l=!0;for(var i in n)l=n[i].valid&&l;a.setState({orderForm:n,formIsValid:l})},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(E.a,{touched:t.config.touched,shouldValidate:t.config.validation,invalid:!t.config.valid,change:function(a){return e.inputChangedHandler(a,t.id)},key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value})}),u.a.createElement(p.a,{btnType:"Success",disable:!this.state.formIsValid},"ORDER!"));return this.props.loading&&(n=u.a.createElement(b.a,null)),u.a.createElement("div",{className:C.a.ContactData},u.a.createElement("h4",null,"Enter your Contact Data"),n)}}]),t}(c.Component),_=Object(k.b)(function(e){return{ings:e.burgerBuilder.ingredients,tp:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}})(Object(I.a)(O,y.a)),V=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).checkoutCancelledHandler=function(){a.props.history.goBack()},a.checkoutContinuedHandler=function(){a.props.history.replace("/checkout/contact-data")},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(d.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(d.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(v,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),u.a.createElement(d.b,{path:this.props.match.path+"/contact-data",component:_}))}return e}}]),t}(c.Component);t.default=Object(k.b)(function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}})(V)},97:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(98),i=a.n(l);t.a=function(e){var t=null,a=[i.a.InputElement],n=null;switch(e.invalid&&e.shouldValidate&&e.touched&&(a.push(i.a.Invalid),n=r.a.createElement("p",{className:i.a.ValidationError},"Please enter a valid ",e.elementConfig.placeholder,"!")),e.elementType){case"input":t=r.a.createElement("input",Object.assign({onChange:e.change,className:a.join(" ")},e.elementConfig,{value:e.value}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({onChange:e.change,className:a.join(" ")},e.elementConfig,{value:e.value}));break;case"select":t=r.a.createElement("select",{onChange:e.change,className:a.join(" "),value:e.value},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({onChange:e.change,className:a.join(" ")},e.elementConfig,{value:e.value}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",null,e.label),t,n)}},98:function(e,t,a){e.exports={Input:"Input_Input__3arYa",Label:"Input_Label__26E0I",InputElement:"Input_InputElement__2Oa03",Invalid:"Input_Invalid__m4amh",ValidationError:"Input_ValidationError__2jIhg"}},99:function(e,t,a){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__37s4W"}}}]);
//# sourceMappingURL=3.623fbb7d.chunk.js.map