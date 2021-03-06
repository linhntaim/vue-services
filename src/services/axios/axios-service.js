import {Service} from '../../base'
import {AxiosServiceRequest} from './axios-service-request'

export class AxiosService extends Service {
    constructor(serviceInstance, basePath = null, mapMethods = {}) {
        super(serviceInstance, basePath)

        this.mapMethods = mapMethods
    }

    always(alwaysCallback = null) {
        this.d()
        super.always(alwaysCallback)
    }

    request(method, path, params = {}, doneCallback = null, errorCallback = null, alwaysCallback = null) {
        return new AxiosServiceRequest(this.service(), this.mapMethods).make(
            method,
            this.path(path),
            this.params(params),
            response => this.done(response, doneCallback, errorCallback),
            error => this.error(error, errorCallback),
            () => this.always(alwaysCallback),
        )
    }

    get(path, params = {}, doneCallback = null, errorCallback = null, alwaysCallback = null) {
        return new AxiosServiceRequest(this.service(), this.mapMethods).get(
            this.path(path),
            this.params(params),
            response => this.done(response, doneCallback, errorCallback),
            error => this.error(error, errorCallback),
            () => this.always(alwaysCallback),
        )
    }

    post(path, params = {}, doneCallback = null, errorCallback = null, alwaysCallback = null) {
        return new AxiosServiceRequest(this.service(), this.mapMethods).post(
            this.path(path),
            this.params(params),
            response => this.done(response, doneCallback, errorCallback),
            error => this.error(error, errorCallback),
            () => this.always(alwaysCallback),
        )
    }

    put(path, params = {}, doneCallback = null, errorCallback = null, alwaysCallback = null) {
        return new AxiosServiceRequest(this.service(), this.mapMethods).put(
            this.path(path),
            this.params(params),
            response => this.done(response, doneCallback, errorCallback),
            error => this.error(error, errorCallback),
            () => this.always(alwaysCallback),
        )
    }

    delete(path, params = {}, doneCallback = null, errorCallback = null, alwaysCallback = null) {
        return new AxiosServiceRequest(this.service(), this.mapMethods).delete(
            this.path(path),
            this.params(params),
            response => this.done(response, doneCallback, errorCallback),
            error => this.error(error, errorCallback),
            () => this.always(alwaysCallback),
        )
    }
}
