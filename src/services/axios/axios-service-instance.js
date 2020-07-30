import {ServiceInstance} from '../../base'
import axios from 'axios'

export class AxiosServiceInstance extends ServiceInstance {
    constructor(options = {}) {
        super(axios.create(options))
    }
}