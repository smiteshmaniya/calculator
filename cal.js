console.log('hello this is my calculator')

let display = document.getElementById('display')
let btn = document.querySelectorAll('button')
for (item of btn) {

    item.addEventListener('click', (e) => {

        let val = e.target.innerHTML
        if (val == 'C') {
            display.value = ""
            return;
        }
        else if (val == 'X') {
            display.value += '*'
            return
        }
        else if (val == '/') {
            display.value += '/'
            return;
        }
        else if (val == '+') {
            display.value += '+'
            return;
        }
        else if (val == '-') {
            display.value += '-'
            return;
        }
        else if (val == '%') {
            display.value += '%'
            return;
        }
        else if (val == '=') {
            try {
                display.value = eval(display.value)
                return;
            }
            catch {
                display.value = 'Error'
                return;
            }
        }
        display.value += val
    })
}
