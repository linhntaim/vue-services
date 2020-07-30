export class Service{/**
     *
     * @param {ServiceInstance} serviceInstance
     * @param {string | null} basePath
     */constructor(serviceInstance,basePath=null){this.serviceInstance=serviceInstance;this.basePath=basePath}done(response,doneCallback=null,errorCallback=null){doneCallback&&doneCallback(response,errorCallback)}error(error,errorCallback=null){errorCallback&&errorCallback(error)}always(alwaysCallback=null){alwaysCallback&&alwaysCallback()}path(relativePath=null){return(this.basePath?this.basePath+"/":"")+relativePath}service(){return this.serviceInstance.getInstance()}params(params){return this.serviceInstance.getParams(params)}appendParam(params,name,value){if(params instanceof FormData){params.append(name,value)}else{params[name]=value}return params}request(){return null}get(){return null}post(){return null}put(){return null}delete(){return null}}
//# sourceMappingURL=service.js.map