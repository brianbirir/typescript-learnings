import { Observable } from './observable';

interface Observer {
    next: Function;
    error: Function;
    complete: Function;
}

const subscriptionFunction = (observer: Observer) => {
    observer.next('dummy data');
    observer.complete();
}

const dummy$ = new Observable(subscriptionFunction);