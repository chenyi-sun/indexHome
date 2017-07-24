<template>
    <div id="Login" v-if="show">
        <div class="box">
            <div class="close" v-on:click="close"></div>
            <div class="head">
                <div class="head-box" v-on:click="change(1)" :class="{'cur':flagSee==1}"> sign in </div>
                <div class="head-box" v-on:click="change(2)" :class="{'cur':flagSee==2}"> create account </div>
            </div>
            <div class="text-box" v-if="flagSee==1">
                <div class="head-name">username<p>*</p></div>
                <input type="text"/>
                <div class="head-name">password<p>*</p></div>
                <input type="password"/>
                <div class="submit">Sign In</div>
            </div>
             <div class="text-box" v-if="flagSee==2">
                <div class="head-name">username<p>*</p></div>
                <input type="text"/>
                <div class="head-name">email<p>*</p></div>
                <input type="text"/>
                <div class="head-name">password<p>*</p></div>
                <input type="password"/>
                <div class="head-name">confirm password<p>*</p></div>
                <input type="password"/>
                 <div class="head-name">mobile<p>*</p></div>
                <input type="text"/>
                <div class="submit">Create an Account</div>
            </div>
        </div>
    </div>
</template>

<script>
require('./../css/login.scss');
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