<template>
    <div class="wrap">
        <div class="content">
            <div class="l-full __canvas_wrap">
                <canvas
                    class="canvas"
                    id="canvas_01"
                    ref="(ele) => canvas = ele"/>
            </div>

        </div>
        <ul class="options">
            <li
                class="option"
                @click="opa&&opa.rewrite()"
                v-for="item in options"
                :key="item">{{ item }}</li>
        </ul>

    </div>

</template>

<script>
    export default {
        name: 'HandWrite',
        data () {
            return {
                options: [],
                opa: {}
            }
        },
        methods: {
            initHand () {
                const canvas = document.getElementById('canvas_01')
                const wrap = document.querySelector('.__canvas_wrap')
                canvas.height = wrap.offsetHeight
                canvas.width = wrap.offsetWidth
                const bbox = canvas.getBoundingClientRect()
                const getLocation = (x, y) => {
                    return {
                        x: (x - bbox.left) * (canvas.width / bbox.width),
                        y: (y - bbox.top) * (canvas.height / bbox.height)
                    }
                }

                canvas.addEventListener('touchstart', onTouchStart, false)
                canvas.addEventListener('touchmove', onTouchMove, false)
                canvas.addEventListener('touchend', onTouchEnd, false)

                // 上一次触摸坐标
                let lastX
                let lastY
                let bihua = ''
                let imagedataa = []
                let bihuaa = []
                const ctx = canvas.getContext('2d')
                ctx.lineWidth = 10 // 画笔粗细
                ctx.strokeStyle = '#fe20a1' // 画笔颜色
                // let drawing = false;
                let tout = null

                // 触摸开始事件
                function onTouchStart (event) {
                    if (tout) {
                        clearTimeout(tout)
                    }
                    event.preventDefault()
                    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                    imagedataa.push(imgData)
                    bihuaa.push(bihua)
                    // lga.push(lg);
                    let tmp = getLocation(event.touches[0].clientX, event.touches[0].clientY)
                    lastX = tmp.x
                    lastY = tmp.y
                    drawRound(lastX, lastY)
                }

                // 触摸结束
                function onTouchEnd () {
                    bihua = bihua + 's'
                    tout = setTimeout(() => {
                        tout = null
                        senddata()
                    }, 200)
                }

                // 触摸滑动事件

                function onTouchMove (event) {
                    event.preventDefault()
                    let tmp = getLocation(event.touches[0].clientX, event.touches[0].clientY)
                    drawLine(lastX, lastY, tmp.x, tmp.y)
                    lastX = tmp.x
                    lastY = tmp.y
                }

                // 画圆
                function drawRound (x, y) {
                    ctx.fillStyle = '#fe20a1'
                    ctx.beginPath()
                    ctx.arc(x, y, 6, 0, Math.PI * 2, true)
                    ctx.closePath()
                    ctx.fill()
                    bihua = bihua + Math.round(x) + 'a' + Math.round(y) + 'a'
                }

                // 画线
                let count = 0
                function drawLine (startX, startY, endX, endY) {
                    ctx.beginPath()
                    ctx.lineCap = 'round'
                    ctx.moveTo(startX, startY)
                    ctx.lineTo(endX, endY)
                    ctx.stroke()
                    if (count % 5 === 4) {
                        bihua = bihua + Math.round(endX) + 'a' + Math.round(endY) + 'a'
                    }
                    count++
                }

                function rewrite () {
                    bihuaa = []
                    imagedataa = []
                    ctx.clearRect(0, 0, canvas.width, canvas.height)
                    bihua = ''
                }

                let xhr = null

                let _this = this

                function senddata () {
                    if (xhr != null) {
                        xhr.abort()
                    }
                    xhr = new XMLHttpRequest()
                    // xhr.open('POST', '/html5/hd8.php');
                    xhr.open('GET', `http://m.sinwai.cn/api/tools/hw?bh=zh-cn${bihua}`)
                    // xhr.open('GET', `http://localhost:3005/tools/hw?bh=zh-cn${bihua}`);
                    // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            let result = JSON.parse(xhr.responseText)
                            if (result.status === 200) {
                                _this.options = result.data
                            }
                            xhr = null
                        }
                    }
                    xhr.send()
                }

                return {
                    rewrite
                }
            }
        },
        mounted () {
            this.opa = this.initHand()
        }
    }
</script>

<style scoped>
    .wrap {
        border: 1px solid gray;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
    }

    .content {
        flex: 1;
        position: relative;
    }
    .canvas {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;

        width: 100%;
        bottom: 0;
        right: 0;
    }

    .options {
        height: .3rem;
        overflow: hidden;
        background-color: white;

    }

    .option {
        float: left;
        width: .3rem;
        height: .3rem;
        box-sizing: border-box;
        border: 1px solid red;
    }
</style>
