import"/node_modules/core-js/modules/es.function.name.js";import"/node_modules/core-js/modules/es.object.to-string.js";import"/node_modules/core-js/modules/es.promise.js";import"/node_modules/regenerator-runtime/runtime.js";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise(function(resolve,reject){function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}var gen=fn.apply(self,args);_next(void 0)})}}import React,{useState,useEffect}from"c:\\node_modules\\react\\index.js";import AppBar from"c:\\node_modules\\@material-ui\\core\\esm\\AppBar\\index.js";import Toolbar from"c:\\node_modules\\@material-ui\\core\\esm\\Toolbar\\index.js";import Typography from"c:\\node_modules\\@material-ui\\core\\esm\\Typography\\index.js";import{ThemeProvider}from"c:\\node_modules\\@material-ui\\core\\esm\\styles\\index.js";import{theme}from"/components/NavBar/styles.js";import{useHistory,useLocation}from"c:\\node_modules\\react-router-dom\\esm\\react-router-dom.js";import{GoogleLogin}from"c:\\node_modules\\react-google-login\\dist\\google-login.js";import{useDispatch}from"c:\\node_modules\\react-redux\\es\\index.js";import{postToken}from"/actions/post.js";import{Link}from"c:\\node_modules\\react-router-dom\\esm\\react-router-dom.js";import useStyles from"/components/NavBar/styles.js";var logoImage="logo.png",NavBar=function NavBar(){var classes=useStyles(),history=useHistory(),dispatch=useDispatch(),location=useLocation(),_useState=useState(JSON.parse(localStorage.getItem("profile"))),user=_useState[0],setUser=_useState[1],googleSuccess=function(){var _ref=_asyncToGenerator(regeneratorRuntime.mark(function _callee(res){var result,token;return regeneratorRuntime.wrap(function _callee$(_context){for(;1;)switch(_context.prev=_context.next){case 0:result=null==res?void 0:res.profileObj,token=res.tokenId;try{dispatch({type:"AUTH",data:{result:result,token:token}}),history.push("/blogs")}catch(error){console.log(error)}console.log(res);case 4:case"end":return _context.stop();}},_callee)}));return function googleSuccess(_x){return _ref.apply(this,arguments)}}();return useEffect(function(){console.log(user);var token=null==user?void 0:user.token;console.log(token);var superUser=function(){var _ref2=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(_context3){for(;1;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,dispatch(postToken());case 2:case"end":return _context3.stop();}},_callee2)}));return function superUser(){return _ref2.apply(this,arguments)}}();console.log(superUser),setUser(JSON.parse(localStorage.getItem("profile")))},[location]),React.createElement("div",null,React.createElement("div",{className:classes.root},React.createElement(ThemeProvider,{theme:theme},React.createElement(AppBar,{position:"static"},React.createElement(Toolbar,null,React.createElement("img",{src:logoImage,alt:"",onClick:function onClick(){history.push("/blogs")},style:{cursor:"pointer",width:"200px"}}),React.createElement(Typography,{variant:"h6",className:classes.title,onClick:function onClick(){history.push("/blogs")},style:{cursor:"pointer"}}),React.createElement("h3",{style:{marginRight:"1em"}},"Hi!\xA0",null==user?void 0:user.result.name),user&&React.createElement("div",{className:classes.buttonContainer},React.createElement("h3",{className:classes.loginLink,onClick:function logOut(){dispatch({type:"LOGOUT"}),history.push("/blogs"),setUser(null)}},"Logout")),!user&&React.createElement(GoogleLogin,{clientId:"771470238529-sj11s31cdmlk419k7q8n9drc4q1thrfr.apps.googleusercontent.com",render:function render(renderProps){return React.createElement("div",{className:classes.buttonContainer,onClick:renderProps.onClick},React.createElement("h3",{className:classes.loginLink},"Login / SignUp"))},onSuccess:googleSuccess,onFailure:function googleFailure(){console.log("google sign in failed")},cookiePolicy:"single_host_origin"}))))))};export default NavBar;