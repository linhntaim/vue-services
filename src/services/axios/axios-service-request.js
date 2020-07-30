import axios from 'axios'

export class AxiosServiceRequest {
    constructor(service, mapMethods = {}) {
        this.service = service
        this.cancelTokenSource = null
        this.promise = null
        this.mapMethods = mapMethods
    }

    promised() {
        return this.promise
    }

    cancel(message) {
        if (this.cancelTokenSource) {
            this.cancelTokenSource.cancel(message)
        }
        return this
    }

    make(method, path, params, doneCallback, errorCallback, alwaysCallback) {
        switch (method.toLowerCase()) {
            case 'get':
                return this.get(path, params, doneCallback, errorCallback, alwaysCallback)
            case 'post':
                return this.post(path, params, doneCallback, errorCallback, alwaysCallback)
            case 'put':
                return this.put(path, params, doneCallback, errorCallback, alwaysCallback)
            case 'delete':
                return this.delete(path, params, doneCallback, errorCallback, alwaysCallback)
        }
        return this
    }

    send(request, doneCallback, errorCallback, alwaysCallback) {
        this.promise = request.then(doneCallback)
            .catch(errorCallback)
            .then(alwaysCallback)
        return this
    }

    createCancelToken() {
        this.cancelTokenSource = axios.CancelToken.source()
        return this.cancelTokenSource.token
    }

    get(path, params, doneCallback, errorCallback, alwaysCallback) {
        if ('get' in this.mapMethods) {
            return this.make(this.mapMethods.get, path, params, doneCallback, errorCallback, alwaysCallback)
        }
        return this.send(
            this.service.get(path, {
                params: params,
                cancelToken: this.createCancelToken(),
            }),
            doneCallback,
            errorCallback,
            alwaysCallback,
        )
    }

    post(path, params, doneCallback, errorCallback, alwaysCallback) {
        if ('post' in this.mapMethods) {
            return this.make(this.mapMethods.post, path, params, doneCallback, errorCallback, alwaysCallback)
        }
        return this.send(
            this.service.post(path, params, {
                cancelToken: this.createCancelToken(),
            }),
            doneCallback,
            errorCallback,
            alwaysCallback,
        )
    }

    put(path, params, doneCallback, errorCallback, alwaysCallback) {
        if ('put' in this.mapMethods) {
            return this.make(this.mapMethods.put, path, params, doneCallback, errorCallback, alwaysCallback)
        }
        return this.send(
            this.service.put(path, params, {
                cancelToken: this.createCancelToken(),
            }),
            doneCallback,
            errorCallback,
            alwaysCallback,
        )
    }

    delete(path, params, doneCallback, errorCallback, alwaysCallback) {
        if ('delete' in this.mapMethods) {
            return this.make(this.mapMethods.delete, path, params, doneCallback, errorCallback, alwaysCallback)
        }
        return this.send(
            this.service.delete(path, {
                params: params,
                cancelToken: this.createCancelToken(),
            }),
            doneCallback,
            errorCallback,
            alwaysCallback,
        )
    }
}