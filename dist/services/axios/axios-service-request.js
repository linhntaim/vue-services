"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.AxiosServiceRequest=void 0;var _axios=_interopRequireDefault(require("axios"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var AxiosServiceRequest=/*#__PURE__*/function(){function AxiosServiceRequest(service){var mapMethods=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};_classCallCheck(this,AxiosServiceRequest);this.service=service;this.cancelTokenSource=null;this.promise=null;this.mapMethods=mapMethods}_createClass(AxiosServiceRequest,[{key:"promised",value:function promised(){return this.promise}},{key:"cancel",value:function cancel(message){if(this.cancelTokenSource){this.cancelTokenSource.cancel(message)}return this}},{key:"make",value:function make(method,path,params,doneCallback,errorCallback,alwaysCallback){switch(method.toLowerCase()){case"get":return this.get(path,params,doneCallback,errorCallback,alwaysCallback);case"post":return this.post(path,params,doneCallback,errorCallback,alwaysCallback);case"put":return this.put(path,params,doneCallback,errorCallback,alwaysCallback);case"delete":return this["delete"](path,params,doneCallback,errorCallback,alwaysCallback);}return this}},{key:"send",value:function send(request,doneCallback,errorCallback,alwaysCallback){this.promise=request.then(doneCallback)["catch"](errorCallback).then(alwaysCallback);return this}},{key:"createCancelToken",value:function createCancelToken(){this.cancelTokenSource=_axios["default"].CancelToken.source();return this.cancelTokenSource.token}},{key:"get",value:function get(path,params,doneCallback,errorCallback,alwaysCallback){if("get"in this.mapMethods){return this.make(this.mapMethods.get,path,params,doneCallback,errorCallback,alwaysCallback)}return this.send(this.service.get(path,{params:params,cancelToken:this.createCancelToken()}),doneCallback,errorCallback,alwaysCallback)}},{key:"post",value:function post(path,params,doneCallback,errorCallback,alwaysCallback){if("post"in this.mapMethods){return this.make(this.mapMethods.post,path,params,doneCallback,errorCallback,alwaysCallback)}return this.send(this.service.post(path,params,{cancelToken:this.createCancelToken()}),doneCallback,errorCallback,alwaysCallback)}},{key:"put",value:function put(path,params,doneCallback,errorCallback,alwaysCallback){if("put"in this.mapMethods){return this.make(this.mapMethods.put,path,params,doneCallback,errorCallback,alwaysCallback)}return this.send(this.service.put(path,params,{cancelToken:this.createCancelToken()}),doneCallback,errorCallback,alwaysCallback)}},{key:"delete",value:function _delete(path,params,doneCallback,errorCallback,alwaysCallback){if("delete"in this.mapMethods){return this.make(this.mapMethods["delete"],path,params,doneCallback,errorCallback,alwaysCallback)}return this.send(this.service["delete"](path,{params:params,cancelToken:this.createCancelToken()}),doneCallback,errorCallback,alwaysCallback)}}]);return AxiosServiceRequest}();exports.AxiosServiceRequest=AxiosServiceRequest;
//# sourceMappingURL=axios-service-request.js.map