import uniqueId from 'lodash/uniqueId';

class Cancelable {
    constructor(promise, onSettled) {
        let hasCanceled_ = false;
        let id_ = uniqueId();
        this.getId = () => id_;
        this.cancel = () => hasCanceled_ = true;
        this.promise = new Promise((resolve, reject) => {
            promise.then(
                (val) => {
                    onSettled(this);
                    hasCanceled_ ? reject({isCanceled: true}) : resolve(val);
                },
                (error) => {
                    onSettled(this);
                    hasCanceled_ ? reject({isCanceled: true}) : reject(error);
                }
            );
        });
    }
}
export default Cancelable;
