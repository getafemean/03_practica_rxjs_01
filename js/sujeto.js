const { BehaviorSubject } = rxjs;

const sujetoObservable = new BehaviorSubject(10);

function sendData(value) {
    if(typeof value !== 'number') {
        throw new Error('El valor debe ser numérico');
    }
    sujetoObservable.next(value);
}

setTimeout(()=> {
    sendData(40);
}, 3000)

sendData(20);

sujetoObservable.subscribe(data =>{
                                console.log(data)
                            },error=>{
                                console.log(error)
                            },()=>{
                                console.log('Finalizado')
                            })

sendData('Hola');

sujetoObservable.subscribe(data =>{
                                console.log(data)
                            },error=>{
                                console.log(error)
                            },()=>{
                                console.log('Finalizado')
                            })