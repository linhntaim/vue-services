export class ServiceFactory {
    constructor(services = {}, defaultServiceName = null) {
        this.services = services
        this.setDefault(defaultServiceName)
    }

    setDefault(serviceName) {
        if (!(serviceName in this.services)) {
            throw 'No service was found'
        }
        this.defaultServiceName = serviceName
        return this
    }

    add(serviceName, serviceInstance, override = false) {
        if (serviceName in this.services && !override) {
            throw 'No service was found'
        }
        this.services[serviceName] = serviceInstance
        return this
    }

    get(serviceName) {
        return serviceName && serviceName in this.services ? this.services[serviceName] : null
    }

    factory(serviceName = null, serviceInstance = null, override = true) {
        if (serviceName) {
            if (serviceInstance) {
                this.add(serviceName, serviceInstance, override)
            }
        } else {
            serviceName = this.defaultServiceName
        }
        return this.get(serviceName)
    }

    modify(callback, serviceName = null) {
        callback(this.factory(serviceName))
    }
}