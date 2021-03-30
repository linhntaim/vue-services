import {TypeArray, TypeObject} from '@linhntaim/vue-utils'

export class Service {
    /**
     *
     * @param {ServiceInstance} serviceInstance
     * @param {string | null} basePath
     */
    constructor(serviceInstance, basePath = null) {
        this.serviceInstance = serviceInstance
        this.basePath = basePath
        this.formDataUsed = false
    }

    service() {
        return this.serviceInstance.getInstance()
    }

    path(relativePath = null) {
        return this.basePath ? this.basePath + (relativePath ? '/' + relativePath : '') : relativePath
    }

    useFormData(used = true) {
        this.formDataUsed = used
        return this
    }

    /**
     *
     * @param {FormData|Object} params
     * @returns {FormData|Object}
     */
    params(params) {
        params = this.serviceInstance.getParams(params)
        if (this.formDataUsed && !(params instanceof FormData)) {
            params = this.appendParams(new FormData, params)
        }
        this.formDataUsed = false
        return params
    }

    /**
     *
     * @param {FormData|Object} params
     * @param {String} name
     * @param {*} value
     * @returns {FormData}
     */
    appendParam(params, name, value) {
        if (params instanceof FormData) {
            this.appendFormData(params, name, value)
        } else {
            params[name] = value
        }
        return params
    }

    /**
     *
     * @param {FormData|Object} params
     * @param {FormData|Object} appendingParams
     * @returns {FormData|Object}
     */
    appendParams(params, appendingParams) {
        if (params instanceof FormData) {
            if (appendingParams instanceof FormData) {
                appendingParams.forEach((value, name) => {
                    this.appendFormData(params, name, value)
                })
                return params
            }
            Object.keys(appendingParams).forEach(name => {
                this.appendFormData(params, name, appendingParams[name])
            })
            return params
        }

        if (appendingParams instanceof FormData) {
            const combinedParams = new FormData
            Object.keys(params).forEach(name => {
                this.appendFormData(combinedParams, name, params[name])
            })
            appendingParams.forEach((value, name) => {
                this.appendFormData(combinedParams, name, value)
            })
            return combinedParams
        }

        Object.keys(appendingParams).forEach(name => {
            params[name] = appendingParams[name]
        })
        return params
    }

    /**
     *
     * @param {FormData} formData
     * @param {String} name
     * @param {*} value
     * @returns {FormData}
     */
    appendFormData(formData, name, value) {
        if (!(value instanceof File || value instanceof Blob)) {
            if (TypeArray.is(value)) {
                value.forEach(v => {
                    this.appendFormData(formData, name + '[]', v)
                })
                return formData
            }
            if (TypeObject.is(value)) {
                Object.keys(value).forEach(key => {
                    this.appendFormData(formData, name + '[' + key + ']', value[key])
                })
                return formData
            }
        }
        formData.append(name, value)
        return formData
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
