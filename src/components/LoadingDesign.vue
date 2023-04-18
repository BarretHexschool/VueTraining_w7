<template>
    <Loading :active="loaded" :opacity="0.8" :z-index="1000" :background-color="'#ffdba4'">

  <div class="load">
    <div class="hamburger">
      <div class="top-bun"></div>
      <div class="pickle"></div>
      <div class="pickle"></div>
      <div class="tomato">
        <div></div>
      </div>
      <div class="tomato">
        <div></div>
      </div>
      <div class="cheese"></div>
      <div class="cheese"></div>
      <div class="beef"></div>
      <div class="bottom-bun"></div>
    </div>
    <h2 class="dynamic-text">美味製作中...</h2>

    </div>
  </Loading>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      loaded: this.isLoading
    }
  },
  mounted () {
    window.addEventListener('load', () => {
      setTimeout(() => {
        this.loaded = false
      }, 2000)
    })
  },
  watch: {
    isLoading (newVal) {
      setTimeout(() => {
        this.loaded = newVal
      }, 2000)
    }
  }

}
</script>

<style>
.load {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

/* Hamburger */

.hamburger {
  width: 220px;
  height: 165px;
}

.hamburger div:nth-child(1) {
  z-index: 9;
}

.hamburger div:nth-child(2) {
  z-index: 8;
  animation: animate-pickle-1 3s infinite;
}

.hamburger div:nth-child(3) {
  z-index: 7;
  animation: animate-pickle-2 3s infinite;
}

.hamburger div:nth-child(4) {
  z-index: 5;
  animation: animate-tomato-1 3s infinite;
}

.hamburger div:nth-child(5) {
  z-index: 6;
  animation: animate-tomato-2 3s infinite;
}

.hamburger div:nth-child(6) {
  z-index: 4;
  animation: animate-cheese-1 3s infinite;
}

.hamburger div:nth-child(7) {
  z-index: 3;
  animation: animate-cheese-2 3s infinite;
}

.hamburger div:nth-child(8) {
  z-index: 2;
  animation: animate-beef 3s infinite;
}

.hamburger div:nth-child(9) {
  z-index: 1;
  animation: animate-bottom-bun 3s infinite;
}

/* Top Bun*/

.hamburger .top-bun {
  position: absolute;
  width: 200px;
  height: 90px;
  border: 5px solid #a6593b;
  background-color: #f4a42b;
  border-top-left-radius: 70%;
  border-top-right-radius: 70%;
  border-bottom-left-radius: 45%;
  border-bottom-right-radius: 45%;
  transform: translate(0px, -80px);
  animation: animate-top-bun 3s infinite;
}

.hamburger .top-bun:before,
.hamburger .top-bun:after {
  position: absolute;
  content: '';
  height: 10px;
  width: 5px;
  background-color: #f9cc92;
  border-radius: 5px;
}

.hamburger .top-bun:before {
  transform: translate(60px, 10px) rotate(60deg);
  box-shadow: 15px -35px #f9cc92;
}

.hamburger .top-bun:after {
  transform: translate(85px, 15px) rotate(-30deg);
  box-shadow: 35px 15px #f9cc92;
}

.hamburger .pickle,
.hamburger .pickle:before {
  position: absolute;
  width: 60px;
  height: 30px;
  background-color: #608349;
  border: 5px solid #3f592a;
  border-radius: 50%;
}

.hamburger .pickle {
  overflow: hidden;
}

.hamburger .pickle:before {
  content: '';
  transform: translate(-5px, -14px);
}

.hamburger .pickle:after {
  position: absolute;
  content: '';
  width: 3px;
  height: 40px;
  background-color: #3f592a;
  transform: translate(20px, -18px) rotate(40deg);
  box-shadow: 15px -5px #3f592a;
}

.hamburger .tomato,
.hamburger .tomato:before {
  position: absolute;
  width: 100px;
  height: 50px;
  border: 5px solid #9f3928;
  border-radius: 50%;
}

.hamburger .tomato {
  background-color: #be4335;
  overflow: hidden;
}

.hamburger .tomato:before {
  content: '';
  background-color: #d75f44;
  transform: translate(-5px, -15px);
}

.hamburger .tomato div,
.hamburger .tomato div:before {
  position: absolute;
  width: 0px;
  height: 0px;
  border-radius: 40%;
}

.hamburger .tomato div {
  border-left: 41px solid #9f3928;
  border-right: 41px solid #9f3928;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  transform: translate(9px, 9px);
}

.hamburger .tomato div:before {
  content: '';
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  border-top: 13px solid #9f3928;
  border-bottom: 18px solid #9f3928;
  transform: translate(-25px, -15px);
}

.hamburger .tomato div:after {
  position: absolute;
  content: '';
  width: 15px;
  height: 13px;
  border-radius: 50%;
  background-color: #d75f44;
  transform: translate(-8px, -7px);
}
.hamburger .cheese {
  position: absolute;
  width: 125px;
  height: 50px;
  background-color: #eebd42;
  border: 5px solid #eebd42;
  box-shadow: 0 2px 2px 0 #cf8516;
}

.hamburger .beef,
.hamburger .beef:before {
  position: absolute;
  width: 210px;
  background-color: #834b34;
  border-radius: 50%;
  border: 5px solid #6d3c27;
}

.hamburger .beef {
  height: 85px;
  overflow: hidden;
}

.hamburger .beef:before {
  content: '';
  height: 70px;
  transform: translate(-5px, -10px);
}
.hamburger .bottom-bun,
.hamburger .bottom-bun:before {
  position: absolute;
  width: 200px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid #a6593b;
}

.hamburger .bottom-bun {
  background-color: #f4a42b;
  overflow: hidden;
}

.hamburger .bottom-bun:before {
  content: '';
  background-color: #f3c68b;
  transform: translate(-5px, -20px);
}

.dynamic-text {
  width: 7rem;
    border-right: 0.05em solid;
    overflow: hidden;
    white-space: nowrap;
    animation: typing 3s steps(7) infinite, caret 1s steps(1) infinite;
    text-align: center;
    font-size: 16px !important;
    margin: 0 auto;
    margin-top: 10px;
}

@keyframes animate-top-bun {
  0% {
    transform: scale(0) translate(5px, 0px);
  }
  53% {
    transform: scale(0) translate(5px, 0px);
  }
  58% {
    transform: scale(1.05) translate(5px, 0px);
  }
  59% {
    transform: scale(1) translate(5px, 0px);
  }
  100% {
    transform: scale(1) translate(5px, 0px);
  }
}

@keyframes animate-pickle-2 {
  0% {
    transform: scale(0) translate(100px, 50px) rotate(15deg);
  }
  42% {
    transform: scale(0) translate(100px, 50px) rotate(15deg);
  }
  47% {
    transform: scale(1.05) translate(100px, 50px) rotate(15deg);
  }
  48% {
    transform: scale(1) translate(100px, 50px) rotate(15deg);
  }
  100% {
    transform: scale(1) translate(100px, 50px) rotate(15deg);
  }
}

@keyframes animate-pickle-1 {
  0% {
    transform: scale(0) translate(30px, 50px) rotate(-10deg);
  }
  36% {
    transform: scale(0) translate(30px, 50px) rotate(-10deg);
  }
  41% {
    transform: scale(1.05) translate(30px, 50px) rotate(-10deg);
  }
  42% {
    transform: scale(1) translate(30px, 50px) rotate(-10deg);
  }
  100% {
    transform: scale(1) translate(30px, 50px) rotate(-10deg);
  }
}

@keyframes animate-tomato-2 {
  0% {
    transform: scale(0) translate(20px, 50px) rotate(-10deg);
  }
  30% {
    transform: scale(0) translate(20px, 50px) rotate(-10deg);
  }
  35% {
    transform: scale(1.05) translate(20px, 50px) rotate(-10deg);
  }
  36% {
    transform: scale(1) translate(20px, 50px) rotate(-10deg);
  }
  100% {
    transform: scale(1) translate(20px, 50px) rotate(-10deg);
  }
}

@keyframes animate-tomato-1 {
  0% {
    transform: scale(0) translate(90px, 55px);
  }
  24% {
    transform: scale(0) translate(90px, 55px);
  }
  29% {
    transform: scale(1.05) translate(90px, 55px);
  }
  30% {
    transform: scale(1) translate(90px, 55px);
  }
  100% {
    transform: scale(1) translate(90px, 55px);
  }
}

@keyframes animate-cheese-1 {
  0% {
    transform: scale(0) skewx(-20deg) translate(50px, 55px);
  }
  18% {
    transform: scale(0) skewx(-20deg) translate(50px, 55px);
  }
  23% {
    transform: scale(1.05) skewx(-20deg) translate(50px, 55px);
  }
  24% {
    transform: scale(1) skewx(-20deg) translate(50px, 55px);
  }
  100% {
    transform: scale(1) skewx(-20deg) translate(50px, 55px);
  }
}

@keyframes animate-cheese-2 {
  0% {
    transform: scale(0) skewx(20deg) translate(40px, 65px) rotate(-10deg);
  }
  12% {
    transform: scale(0) skewx(20deg) translate(40px, 65px) rotate(-10deg);
  }
  17% {
    transform: scale(1.05) skewx(20deg) translate(40px, 65px) rotate(-10deg);
  }
  18% {
    transform: scale(1) skewx(20deg) translate(40px, 65px) rotate(-10deg);
  }
  100% {
    transform: scale(1) skewx(20deg) translate(40px, 65px) rotate(-10deg);
  }
}

@keyframes animate-beef {
  0% {
    transform: scale(0) translate(0px, 55px);
  }
  6% {
    transform: scale(0) translate(0px, 55px);
  }
  11% {
    transform: scale(1.05) translate(0px, 55px);
  }
  12% {
    transform: scale(1) translate(0px, 55px);
  }
  100% {
    transform: scale(1) translate(0px, 55px);
  }
}

@keyframes animate-bottom-bun {
  0% {
    transform: scale(0) translate(5px, 85px);
  }
  5% {
    transform: scale(1.05) translate(5px, 85px);
  }
  6% {
    transform: scale(1) translate(5px, 85px);
  }
  100% {
    transform: scale(1) translate(5px, 85px);
  }
}

@keyframes caret {
  50% { border-color: transparent; }
}
@keyframes typing {
from {
 width: 0;
 }
}
</style>
