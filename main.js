function z (n) {
    return (n < 10? '0' : '') + n
}

setInterval(() => {
    let time = Math.floor(new Date().getTime() / 1000) % 86400
    if (time > 43200) time = 129600 - time
    else time = 43200 - time

    let h = Math.floor(time / 3600),
        m = Math.floor(time / 60) % 60,
        s = time % 60

    document.getElementById('timer').innerText = z(h) + ':' + z(m) + ':' + z(s)
}, 1000)

setInterval(() => {
    fetch('https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x54266a8318767011e94d564B3Efad17A59E829C8&address=0x5ef61aCce256224F8FEB36e601c01A647625CA6C&tag=latest')
    .then(r => r.json())
    .then(r => {
        if (r.status == '1') {
            let jackpot = r.result.slice(0, -16)
            if (jackpot == '') jackpot = '0.00'
            else jackpot = jackpot.slice(0, -2) + '.' + jackpot.slice(-2)
            document.getElementById('jackpot').innerText = jackpot
        }
    })
}, 1000)
