<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
    #app{
      width: 100%;
      height:100%;
    }
    *{
      margin:0;
      padding:0;
      list-style: none;
      text-decoration: none;
      box-sizing: border-box;
      -webkit-tap-highlight-color: transparent;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
    a {
      text-decoration: none;
      color: #000;
    }

    html, body {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      
    }
    @media screen and (min-width: 320px) {
      html {
        font-size: 42.66667px;
      }
    }

    @media screen and (min-width: 360px) {
      html {
        font-size: 48px;
      }
    }

    @media screen and (min-width: 375px) {
      html {
        font-size: 50px;
      }
    }

    @media screen and (min-width: 384px) {
      html {
        font-size: 51.2px;
      }
    }

    @media screen and (min-width: 412px) {
      html {
        font-size: 54.93333px;
      }
    }

    @media screen and (min-width: 414px) {
      html {
        font-size: 55.2px;
      }
    }

    @media screen and (min-width: 600px) {
      html {
        font-size: 80px;
      }
    }

    @media screen and (min-width: 750px) {
      html {
        font-size: 100px;
      }
    }

    @media screen and (min-width: 768px) {
      html {
        font-size: 102.4px;
      }
    }

    @media screen and (min-width: 1024px) {
      html {
        font-size: 136.53333px;
      }
    }

</style>
