<template>
    
</template>

<script>

export default {
    data () {
        return {
            flagSee: 1,
            show: false,
        }
    },
    props: ['showif'],
    watch:{
        showif(){
            this.show = !this.show;
            this.flagSee = 1;
        }
    },
    methods:{
        change(param){
            console.log(this.showif);
            this.flagSee = param;
        },
        close(){
            this.show = false;
        }
    }
}
</script>

<style type="scss" scoped>

</style>