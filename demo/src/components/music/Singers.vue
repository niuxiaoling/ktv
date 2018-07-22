<template>
    <div class="singer">
        <mheader></mheader>
        <singer-list></singer-list>
    </div>
</template>
<script>
    import  Mheader  from  './Mheader.vue'
    import  singerList  from './singerList.vue'
    export default{
        data(){
            return {

            }
        },
        components:{
            'mheader':Mheader,
            'singer-list':singerList
        }

    }
</script>
<style  scoped>
    .singer{
        width: 100%;
        height:100%;
        background: url("../../assets/img/bg_01.png") no-repeat;
        background-size:100%;
    }
</style>
