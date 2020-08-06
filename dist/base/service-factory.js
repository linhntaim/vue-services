"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.ServiceFactory=void 0;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor}var ServiceFactory=/*#__PURE__*/function(){function ServiceFactory(){var services=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var defaultServiceName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;_classCallCheck(this,ServiceFactory);this.services=services;this.setDefault(defaultServiceName)}_createClass(ServiceFactory,[{key:"setDefault",value:function setDefault(serviceName){if(!(serviceName in this.services)){throw"No service was found"}this.defaultServiceName=serviceName;return this}},{key:"add",value:function add(serviceName,serviceInstance){var override=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;if(serviceName in this.services&&!override){throw"No service was found"}this.services[serviceName]=serviceInstance;return this}},{key:"get",value:function get(serviceName){return serviceName&&serviceName in this.services?this.services[serviceName]:null}},{key:"factory",value:function factory(){var serviceName=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;var serviceInstance=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var override=arguments.length>2&&arguments[2]!==undefined?arguments[2]:true;if(serviceName){if(serviceInstance){this.add(serviceName,serviceInstance,override)}}else{serviceName=this.defaultServiceName}return this.get(serviceName)}},{key:"modify",value:function modify(callback){var serviceName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;callback(this.factory(serviceName))}}]);return ServiceFactory}();exports.ServiceFactory=ServiceFactory;
//# sourceMappingURL=service-factory.js.map