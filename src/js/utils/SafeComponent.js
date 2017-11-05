import {Component} from 'react';
import Cancelable from './Cancelable';
import filter from 'lodash/filter';

class SafeComponent extends Component {
    constructor(props) {
        super(props);
        this.cancelables = [];
    }
    addCancelable(promise) {
        let cancelable = new Cancelable(promise, (cancelable) => {
            this.cancelables = filter(this.cancelables,
                (item) => item.getId() !== cancelable.getId());
        });
        this.cancelables.push(cancelable);
        return cancelable.promise;
    }
    componentWillUnmount() {
        for (let i=0; i<this.cancelables.length; i++) {
            this.cancelables[i].cancel();
        }
    }
}

export default SafeComponent;
