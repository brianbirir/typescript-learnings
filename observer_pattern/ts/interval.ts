import { Observable } from './observable';

const interval = (milliseconds = 0) => {
    return new Observable(observer => {
        let count = 0;

        setInterval(() => {
            observer.next(count++);
        }, milliseconds);

    });
}

interval(1000).subscribe({
    next(v) {
        console.log(v);
    }
});