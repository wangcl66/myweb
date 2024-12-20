onmessage = function (e) {
    console.log(11111111111, e.data)
    const Num = 100000
    const start = Date.now()
    for (let i = 0; i < Num; i++) {
        console.log(i)
    }
    console.log('耗时', Date.now() - start)
    this.postMessage('end')
}