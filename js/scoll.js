//js实现文字滚动
let roll = document.querySelector('.roll'); 
        let text = document.querySelector('.text'); 
        let boxWidth = roll.clientWidth // 盒子长度
        let textWidth = text.clientWidth // 文字长度
        let position = boxWidth - textWidth // 长度之差
        let step = 0
        let timer = null
        function fn() {
            if (step <= position) {
                clearInterval(timer)
                setTimeout(() => {
                    step = 0
                    timer = setInterval(fn, 30)
                }, 1000)
            }
            step -= 1
            text.style.left = step + 'px'
        }
        setTimeout(() => {
            if (position < 0) {
                timer = setInterval(fn, 30)
            }
        }, 1000)

