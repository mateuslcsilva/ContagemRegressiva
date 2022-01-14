const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

var mesa = document.querySelector('.mesa')
var btn = document.querySelector('#btn')
var data = document.querySelector('#data')
var txt1 = document.querySelector('#txt1')
btn.addEventListener('click', clicar)

function clicar(){

        let count_down = new Date(data.value).getTime();
        let x = setInterval(() => countDown(), second);

        function countDown() {
            document.querySelector('.inf').innerHTML = txt1.value
            let now = new Date(Date.now()).getTime();
            let diff = count_down - now;
            let dia = Number(Math.floor(diff / day))
            let hora = Number(Math.floor(diff % day / hour))
            let minuto = Number(Math.floor(diff % hour / minute))
            let segundo = Number(Math.floor(diff % minute / second))
            if (segundo < 10){
                    segundo = '0' + segundo
            }
            if (minuto < 10){
                    minuto = '0' + minuto
            }
            if (hora < 10){
                    hora = '0' + hora
            }
            if (dia < 10 && dia > 0){
                    dia = '0' + dia
            }
            document.querySelector('#cont').innerHTML = `${dia}:${hora}:${minuto}:${segundo}`
        }
        mesa.removeChild(btn)
        mesa.removeChild(txt1)
        mesa.removeChild(data)
}
