export function makeInstance(callback) {
    return function instance() {
        return callback()
    }
}