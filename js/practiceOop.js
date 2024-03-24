class Counter {
    constructor(buttonId, displayId) {
        this.count = 0

        this.button = document.getElementById(buttonId)
        this.display = document.getElementById(displayId)


        this.button.addEventListener('click', () => this.increment())
    }

    increment() {
        this.count++
        this.updateDisplay()
    }

    updateDisplay() {
        this.display.innerHTML = `Count : ${this.count}`
    }
}

const jumlah = new Counter('button1', 'display1')
const jumlah1 = new Counter('button2', 'display2')
