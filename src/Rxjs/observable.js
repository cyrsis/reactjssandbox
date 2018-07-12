import { Subject } from 'rxjs';
// create a Subject instance
const subject$ = new Subject();
// subscribe to it just like an Observable
subject$.subscribe(x => console.log(x));
// emit values like an Observer
subject$.next('foo');
subject$.next('bar');
subject$.next('baz');