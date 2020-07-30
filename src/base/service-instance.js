export class ServiceInstance {
    constructor(instance) {
        this.instance = instance
        this.paramsCallbacks = {}
        this.instanceCallbacks = {}
    }

    getInstance() {
        let instance = typeof this.instance === 'function' ?
            this.instance() : this.instance
        Object.keys(this.instanceCallbacks).forEach(name => instance = this.instanceCallbacks[name](instance))
        return instance
    }

    getParams(params) {
        Object.keys(this.paramsCallbacks).forEach(name => params = this.instanceCallbacks[name](params))
        return params
    }

    addInstanceCallback(name, callback) {
        if (typeof this.instance === 'function') {
            this.instanceCallbacks[name] = callback
        } else {
            this.instance = callback(this.instance)
        }
        return this
    }

    removeInstanceCallback(name) {
        if (name in this.instanceCallbacks) {
            delete this.instanceCallbacks[name]
        }
        return this
    }

    addParamsCallback(name, callback) {
        this.paramsCallbacks[name] = callback
        return this
    }

    removeParamsCallback(name) {
        if (name in this.paramsCallbacks) {
            delete this.paramsCallbacks[name]
        }
        return this
    }
}