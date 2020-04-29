(this.webpackJsonproutredax=this.webpackJsonproutredax||[]).push([[0],{129:function(e,t){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(23),c=a.n(s),o=a(10),l=a(11),i=a(13),u=a(12),m=a(7),d=(a(70),function(e){return r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement(m.b,{to:"/"},"Home")),r.a.createElement("li",{onClick:function(){return e.getPosts()}}," ",r.a.createElement(m.b,{to:"/tweets"},"Tweets")),r.a.createElement("li",{onClick:function(){return e.getUsers()}},r.a.createElement(m.b,{to:"/users"},"Users")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/addUser"},"Add User")),r.a.createElement("li",null,r.a.createElement(m.b,{to:"/addPost"},"Add Post")))}),p=a(14),E=function(){return r.a.createElement("h1",null,"Welcome!")},h=(a(75),a(76),function(e){var t=e.userData,a=t.avatar,n=t.name,s=t.username,c=t.verified,o={display:void 0===c||c?"inline":"none"};return r.a.createElement("div",{className:"user"},r.a.createElement("img",{src:a,className:"user-photo",alt:"userPhoto"}),r.a.createElement("span",{className:"user-name"},n),r.a.createElement("i",{style:o,className:"fas fa-certificate verified-icon"}),r.a.createElement("span",{className:"user-nickname"},s))}),f=(a(77),function(e){var t=e.date;return r.a.createElement("span",{className:"post-date"},t)}),g=(a(78),function(e){var t=e.contentData,a=t.content,n=t.image;return r.a.createElement("div",{className:"post-content"},r.a.createElement("p",{className:"post-content-text"},a),r.a.createElement("img",{className:"post-content-img",src:n,alt:""}))}),S=(a(79),function(e){var t=e.postData,a=e.id,n=e.setLike,s=t.comments,c=t.sharing,o=t.likes;return r.a.createElement("div",{className:"post-options"},r.a.createElement("div",{className:"post-option-comments"},r.a.createElement("i",{className:"far fa-comment-alt icon",style:t.commented?{color:"white"}:null}),r.a.createElement("span",null,s)),r.a.createElement("div",{className:"post-option-sharing"},r.a.createElement("i",{className:"fas fa-retweet icon",style:t.shared?{color:"white"}:null}),r.a.createElement("span",null,c)),r.a.createElement("div",{className:"post-option-like"},r.a.createElement("i",{className:"far fa-heart icon",style:t.liked?{color:"red"}:null,onClick:function(){return n(a)}}),r.a.createElement("span",null,o)),r.a.createElement("div",{className:"post-option-upload"},r.a.createElement("i",{className:"fas fa-upload icon"})))}),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.data.data,t=this.props.data.userData;return r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"top-panel"},r.a.createElement(h,{userData:t}),r.a.createElement(f,{date:e.date})),r.a.createElement(g,{contentData:e}),r.a.createElement(S,{postData:{id:1,comments:482,sharing:146,likes:887},id:this.props.id,setLike:this.props.setLike}))}}]),a}(r.a.Component),y=function(e){var t=e.data.data.map((function(t){var a={data:t,userData:e.data.users[t.userId-1]};return r.a.createElement(v,{key:t.id,id:t.id,data:a,setLike:e.setLike})}));return r.a.createElement("div",null,t)},U=a(19),k=(a(80),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={name:"",nickname:"@",image:""},e.count=0,e.onChangeUserInput=function(t){var a=t.target.name,n=t.target.value;"nickname"!==a?e.setState(Object(U.a)({},a,n)):e.state.nickname.split("").includes("@")?e.setState({nickname:n}):e.setState({nickname:"@"+n})},e.onAddUser=function(){var t={name:e.state.name,username:e.state.nickname,avatar:e.state.image};e.setState({name:""}),e.setState({nickname:"@"}),e.setState({image:""}),e.props.addUser(t)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"add-user-form"},r.a.createElement("h1",null,"Add User"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:"name",onChange:function(t){return e.onChangeUserInput(t)}}),r.a.createElement("input",{type:"text",name:"nickname",value:this.state.nickname,placeholder:"nickname",onChange:function(t){return e.onChangeUserInput(t)}}),r.a.createElement("input",{type:"text",name:"image",value:this.state.image,placeholder:"image link",onChange:function(t){return e.onChangeUserInput(t)}}),r.a.createElement("button",{type:"button",className:"add-user-btn",onClick:function(){return e.onAddUser()}},"Add user"))}}]),a}(r.a.Component)),b=(a(81),function(e){var t=e.props;return r.a.createElement("div",{className:"user"},r.a.createElement("img",{className:"user-img",src:t.avatar,alt:"avatar"}),r.a.createElement("span",{className:"name"},t.name),r.a.createElement("span",{className:"username"},t.username))}),O=function(e){return e.map((function(e){return r.a.createElement(b,{key:e.id,props:e})}))},C=function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,"Users"),0!==e.users.length?O(e.users):null)},T=(a(82),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={author:"Anakin Skywalker",text:"",img:""},e.handleInputChange=function(t){var a=t.target.name,n=t.target.value;e.setState(Object(U.a)({},a,n)),e.setState({id:t.target.id})},e.sentData=function(){var t=e.props.users.filter((function(t){return t.name===e.state.author}))[0].id;console.log(t);var a={userId:t,content:e.state.text,image:e.state.img};e.props.addPost(a),e.setState({text:"",img:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"add-post",action:""},r.a.createElement("h1",null,"Add Post"),r.a.createElement("select",{name:"author",id:"",onChange:this.handleInputChange},_(this.props.users)),r.a.createElement("input",{name:"text",placeholder:"post text",value:this.state.text,onChange:this.handleInputChange,type:"text"}),r.a.createElement("input",{name:"img",placeholder:"image url",value:this.state.img,onChange:this.handleInputChange,type:"text"}),r.a.createElement("button",{type:"button",onClick:this.sentData}," Add Post"))}}]),a}(r.a.Component)),_=function(e){return e.map((function(e){return r.a.createElement("option",{name:"author",key:e.id,value:e.name},e.name)}))},P=function(e){return r.a.createElement("main",null,r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(p.a,{path:"/tweets"}," ",r.a.createElement(y,{data:e.data,setLike:e.setLike})),r.a.createElement(p.a,{path:"/users"},r.a.createElement(C,{users:e.users,getUsers:e.getUsers,isFetching:e.isFetching})),r.a.createElement(p.a,{path:"/addUser"},r.a.createElement(k,{addUser:e.addUser})),r.a.createElement(p.a,{path:"/addPost"},r.a.createElement(T,{users:e.users,addPost:e.addPost}))))},j=a(25),N=a(16),w=a.n(N);var I=function(){return{type:"GET_POSTS_REQUEST"}},x=function(e){return{type:"GET_POSTS_SUCCESS",payload:e}},R=function(){return{type:"POST_POST_REQUEST"}},A=function(e){return{type:"POST_POST_SUCCESS",payload:e}},L=a(8);var D=function(){return{type:"GET_USERS_REQUEST"}},F=function(e){return{type:"GET_USERS_SUCCESS",payload:e}},G=function(){return{type:"POST_USER_REQUEST"}},Q=function(e){return{type:"POST_USER_SUCCESS",payload:Object(L.a)({},e)}},J=a(63);a.n(J)()("https://tweets.globalofficiallottery.com/",{serveClient:!1,transports:["polling"],path:"/chat/",pingInterval:1e4,pingTimeout:5e3,cookie:!1}).on("new-tweet",(function(){new Audio("https://sound-pack.net/download/Sound_17211.mp3").play(),console.log("add-tweet")}));var K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,{getUsers:this.props.getUsers,getPosts:this.props.getPosts}),r.a.createElement(P,{data:this.props.post,users:this.props.users,setLike:this.props.setLike,isFetching:this.props.isFetching,addUser:this.props.addUser,addPost:this.props.postPost}))}}]),a}(r.a.Component),B=Object(j.b)((function(e){return{post:{data:e.post.data,users:e.user.data},isFetching:e.user.isFetching,users:e.user.data}}),(function(e){return{setLike:function(t){return e(function(e){return{type:"SET_LIKE",payload:e}}(t))},getUsers:function(){return e((function(e){e(D()),w()({method:"get",url:"https://tweets.globalofficiallottery.com/users/"}).then((function(t){e(F(t.data))}))}))},addUser:function(t){return e(function(e){var t=e.name,a=e.username,n=e.avatar;return function(e){e(G()),w()({method:"post",url:"https://tweets.globalofficiallottery.com/users/",data:{name:t,username:a,avatar:n}}).then((function(e){return Q(e.data)}))}}(t))},getPosts:function(){return e((function(e){e(I()),w()({method:"get",url:"https://tweets.globalofficiallottery.com/tweets/"}).then((function(t){return e(x(t.data.data))}))}))},postPost:function(t){return e(function(e){var t=e.userId,a=e.content,n=e.image;return function(e){e(R()),w()({method:"post",url:"https://tweets.globalofficiallottery.com/tweets/",data:{userId:parseInt(t),content:a,image:n}}).then(e(A()))}}(t))}}}))(K),H=a(15),M={isFetching:!1,data:[]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIKE":return console.log("you liked"+t.payload),e;case"GET_POSTS_REQUEST":return e;case"GET_POSTS_SUCCESS":return Object(L.a)({},e,{data:t.payload});case"POST_POST_REQUEST":case"POST_POST_SUCCESS":default:return e}},q={data:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USERS_REQUEST":return Object(L.a)({},e,{isFetching:!0});case"GET_USERS_SUCCESS":return Object(L.a)({},e,{data:t.payload.data,isFetching:!1});case"POST_USER_REQUEST":return Object(L.a)({},e);case"POST_USER_SUCCESS":return console.log("posted user"),Object(L.a)({},e);default:return e}},V=Object(H.c)({post:W,user:z}),X=a(64),Y=Object(H.d)(V,Object(H.a)(X.a));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{store:Y},r.a.createElement(m.a,null,r.a.createElement(B,null)))),document.getElementById("root"))},65:function(e,t,a){e.exports=a(132)},70:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.01c6ae4d.chunk.js.map