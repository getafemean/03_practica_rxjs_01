const { Observable } = rxjs;
const { filter, map } = rxjs.operators;

const observable = new Observable(subscriptor => {
    subscriptor.next(10);
    subscriptor.next(20);
    setTimeout(()=> {
        subscriptor.next(30);
    }, 3000)
    subscriptor.next(40);
    subscriptor.complete();
})






observable.pipe(
             filter(data => data > 10),
             map(data => data * 4)
          )
          .subscribe(data =>{
                console.log(data)
            },error=>{
                console.log(error)
            },()=>{
                console.log('Finalizado')
            })