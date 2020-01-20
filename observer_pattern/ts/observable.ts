

class Observable {

    constructor(private subscriptionFn: Function) {
        this.subscriptionFn = subscriptionFn;
    }

    subscribe(observer: Observer) {
        return this.subscriptionFn(observer);
    }
}

export { Observable };