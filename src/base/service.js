export class Service {
    /**
     *
     * @param {ServiceInstance} serviceInstance
     * @param {string | null} basePath
     */
    constructor(serviceInstance, basePath = null) {
        this.serviceInstance = serviceInstance
        this.basePath = basePath
    }

    service() {
        return this.serviceInstance.getInstance()
    }

    path(relativePath = null) {
        return this.basePath ? this.basePath + (relativePath ? '/' + relativePath : '') : relativePath
    }

    params(params) {
        return this.serviceInstance.getParams(params)
    }

    appendParam(params, name, value) {
        if (params instanceof FormData) {
            params.append(name, value)
        } else {
            params[name] = value
        }
        return params
    }

    appendParams(params, appendingParams) {
        if (params instanceof FormData) {
            for (const name in appendingParams) {
                params.append(name, appendingParams[name])
            }
        } else {
            for (const name in appendingParams) {
                params[name] = appendingParams[name]
            }
        }
        return params
    }

    done(response, doneCallback = null, errorCallback = null) {
        doneCallback && doneCallback(response, errorCallback)
    }

    error(error, errorCallback = null) {
        errorCallback && errorCallback(error)
    }

    always(alwaysCallback = null) {
        alwaysCallback && alwaysCallback()
    }

    request() {
        return null
    }

    get() {
        return null
    }

    post() {
        return null
    }

    put() {
        return null
    }

    delete() {
        return null
    }
}
