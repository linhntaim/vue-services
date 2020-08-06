"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.AxiosService=void 0;var _base=require("../../base");var _axiosServiceRequest=require("./axios-service-request");function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}function _get(target,property,receiver){if(typeof Reflect!=="undefined"&&Reflect.get){_get=Reflect.get}else{_get=function _get(target,property,receiver){var base=_superPropBase(target,property);if(!base)return;var desc=Object.getOwnPropertyDescriptor(base,property);if(desc.get){return desc.get.call(receiver)}return desc.value}}return _get(target,property,receiver||target)}function _superPropBase(object,property){while(!Object.prototype.hasOwnProperty.call(object,property)){object=_getPrototypeOf(object);if(object===null)break}return object}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function")}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass)}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o};return _setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_getPrototypeOf(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else{result=Super.apply(this,arguments)}return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call}return _assertThisInitialized(self)}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return self}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true}catch(e){return false}}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)};return _getPrototypeOf(o)}var AxiosService=/*#__PURE__*/function(_Service){_inherits(AxiosService,_Service);var _super=_createSuper(AxiosService);function AxiosService(serviceInstance){var _this;var basePath=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var mapMethods=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};_classCallCheck(this,AxiosService);_this=_super.call(this,serviceInstance,basePath);_this.mapMethods=mapMethods;return _this}_createClass(AxiosService,[{key:"always",value:function always(){var alwaysCallback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;this.d();_get(_getPrototypeOf(AxiosService.prototype),"always",this).call(this,alwaysCallback)}},{key:"request",value:function request(method,path){var _this2=this;var params=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var doneCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var errorCallback=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;var alwaysCallback=arguments.length>5&&arguments[5]!==undefined?arguments[5]:null;return new _axiosServiceRequest.AxiosServiceRequest(this.service(),this.mapMethods).make(method,this.path(path),this.params(params),function(response){return _this2.done(response,doneCallback,errorCallback)},function(error){return _this2.error(error,errorCallback)},function(){return _this2.always(alwaysCallback)})}},{key:"get",value:function get(path){var _this3=this;var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var doneCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var errorCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var alwaysCallback=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;return new _axiosServiceRequest.AxiosServiceRequest(this.service(),this.mapMethods).get(this.path(path),this.params(params),function(response){return _this3.done(response,doneCallback,errorCallback)},function(error){return _this3.error(error,errorCallback)},function(){return _this3.always(alwaysCallback)})}},{key:"post",value:function post(path){var _this4=this;var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var doneCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var errorCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var alwaysCallback=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;return new _axiosServiceRequest.AxiosServiceRequest(this.service(),this.mapMethods).post(this.path(path),this.params(params),function(response){return _this4.done(response,doneCallback,errorCallback)},function(error){return _this4.error(error,errorCallback)},function(){return _this4.always(alwaysCallback)})}},{key:"put",value:function put(path){var _this5=this;var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var doneCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var errorCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var alwaysCallback=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;return new _axiosServiceRequest.AxiosServiceRequest(this.service(),this.mapMethods).put(this.path(path),this.params(params),function(response){return _this5.done(response,doneCallback,errorCallback)},function(error){return _this5.error(error,errorCallback)},function(){return _this5.always(alwaysCallback)})}},{key:"delete",value:function _delete(path){var _this6=this;var params=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var doneCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;var errorCallback=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var alwaysCallback=arguments.length>4&&arguments[4]!==undefined?arguments[4]:null;return new _axiosServiceRequest.AxiosServiceRequest(this.service(),this.mapMethods)["delete"](this.path(path),this.params(params),function(response){return _this6.done(response,doneCallback,errorCallback)},function(error){return _this6.error(error,errorCallback)},function(){return _this6.always(alwaysCallback)})}}]);return AxiosService}(_base.Service);exports.AxiosService=AxiosService;
//# sourceMappingURL=axios-service.js.map