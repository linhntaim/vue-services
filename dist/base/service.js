"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.Service=void 0;var _vueUtils=require("@linhntaim/vue-utils");function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var Service=/*#__PURE__*/function(){/**
     *
     * @param {ServiceInstance} serviceInstance
     * @param {string | null} basePath
     */function Service(serviceInstance){var basePath=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,Service);this.serviceInstance=serviceInstance;this.basePath=basePath;this.formDataUsed=false}_createClass(Service,[{key:"service",value:function service(){return this.serviceInstance.getInstance()}},{key:"path",value:function path(){var relativePath=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;return this.basePath?this.basePath+(relativePath?"/"+relativePath:""):relativePath}},{key:"useFormData",value:function useFormData(){var used=arguments.length>0&&arguments[0]!==undefined?arguments[0]:true;this.formDataUsed=used;return this}/**
     *
     * @param {FormData|Object} params
     * @returns {FormData|Object}
     */},{key:"params",value:function params(_params){_params=this.serviceInstance.getParams(_params);if(this.formDataUsed&&!(_params instanceof FormData)){_params=this.appendParams(new FormData,_params)}this.formDataUsed=false;return _params}/**
     *
     * @param {FormData|Object} params
     * @param {String} name
     * @param {*} value
     * @returns {FormData}
     */},{key:"appendParam",value:function appendParam(params,name,value){if(params instanceof FormData){this.appendFormData(params,name,value)}else{params[name]=value}return params}/**
     *
     * @param {FormData|Object} params
     * @param {FormData|Object} appendingParams
     * @returns {FormData|Object}
     */},{key:"appendParams",value:function appendParams(params,appendingParams){var _this=this;if(params instanceof FormData){if(appendingParams instanceof FormData){appendingParams.forEach(function(value,name){_this.appendFormData(params,name,value)});return params}Object.keys(appendingParams).forEach(function(name){_this.appendFormData(params,name,appendingParams[name])});return params}if(appendingParams instanceof FormData){var combinedParams=new FormData;Object.keys(params).forEach(function(name){_this.appendFormData(combinedParams,name,params[name])});appendingParams.forEach(function(value,name){_this.appendFormData(combinedParams,name,value)});return combinedParams}Object.keys(appendingParams).forEach(function(name){params[name]=appendingParams[name]});return params}/**
     *
     * @param {FormData} formData
     * @param {String} name
     * @param {*} value
     * @returns {FormData}
     */},{key:"appendFormData",value:function appendFormData(formData,name,value){var _this2=this;if(!(value instanceof File||value instanceof Blob)){if(_vueUtils.TypeArray.is(value)){value.forEach(function(v){_this2.appendFormData(formData,name+"[]",v)});return formData}if(_vueUtils.TypeObject.is(value)){Object.keys(value).forEach(function(key){_this2.appendFormData(formData,name+"["+key+"]",value[key])});return formData}}formData.append(name,value);return formData}},{key:"done",value:function done(response){var doneCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var errorCallback=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;doneCallback&&doneCallback(response,errorCallback)}},{key:"error",value:function error(_error){var errorCallback=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;errorCallback&&errorCallback(_error)}},{key:"always",value:function always(){var alwaysCallback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;alwaysCallback&&alwaysCallback()}},{key:"request",value:function request(){return null}},{key:"get",value:function get(){return null}},{key:"post",value:function post(){return null}},{key:"put",value:function put(){return null}},{key:"delete",value:function _delete(){return null}}]);return Service}();exports.Service=Service;
//# sourceMappingURL=service.js.map