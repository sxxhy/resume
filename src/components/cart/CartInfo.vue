<template>
    <div class="app-cartinfo">
        <div class="cart-none">
            <div class="car">
                <img src="../../../public/img/detail/16.png">
            </div>
            <div class="tip">
                <div class="sign">购物车还没有商品哦~</div>
                <div class="around" @click="goClass">去逛逛</div>
            </div>
        </div>
        <div class="recom">
            <div class="recom-sign">为您推荐</div>
            <div class="recom-content">
                <div class="recom-item" v-for="(item,index) of list" :key="index">
                    <div class="item-img">
                        <img :src="item.p_img_url">
                    </div>
                    <div class="item-title">{{item.pname}}</div>
                    <div class="item-subtitle">{{item.p_title}}</div>
                    <div class="item-price">￥{{item.p_price}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                list:[],//推荐列表
                pcid:Math.ceil(Math.random()*6),
            }
        },
        methods:{
            goClass(){
                this.$router.push('class#content1');
            },
            productList(){
                this.$http.get('productlist?pcid='+this.pcid).then(res=>{
                    this.list=res.body.data;
                })
            }
        },
        created(){
            this.productList();
        }
    }
</script>

<style scoped>
    .app-cartinfo {
        position: relative;
        top: 44px;
    }
    .app-cartinfo .cart-none .car img{
        width: 91px;
        height: 85px;
        margin-top: 21px;
        margin-right: 10px;
    }
    .app-cartinfo .cart-none {
        display: flex;
        justify-content: center;
        background-color: rgb(250,250,250);
        height: 148px;
    }
    .app-cartinfo .cart-none .tip {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .app-cartinfo .cart-none .tip .sign {
        margin-bottom: 12px;
        line-height: 20px;
        color: rgb(152, 131, 120);
        font-size: 14px;
    }
    .app-cartinfo .cart-none .tip .around{
        width: 77px;
        height: 23px;
        background-color: rgb(226,115,104);
        cursor: pointer;
        color: #fff;
        border-radius: 3px;
        font-size: 13px;
        text-align: center;
        line-height: 23px;
    }
    .app-cartinfo .recom {
        padding: 10px;
    }
    .app-cartinfo .recom .recom-content {
        display: flex;
        flex-wrap: wrap;
    }
    .app-cartinfo .recom .recom-sign {
        height: 46px;
        line-height: 46px;
        text-align: center;
        font-size: 15px;
        color: rgb(51, 51, 51);
        margin-bottom: 20px;
    }
    .app-cartinfo .recom .recom-item {
        width: 50%;
        cursor: pointer;
    }
    .app-cartinfo .recom .recom-item .item-img img {
        width: 192px;
        height: 192px;
    }
    .app-cartinfo .recom .recom-item .item-title {
        font-size: 12px;
        color: rgb(159, 128, 82);
        white-space: nowrap;
        text-overflow: ellipsis;
        height: 32px;
        padding-left: 5px;
        background-color: #f5f0ef;
        line-height: 32px;
        margin-right: 10px;
        overflow: hidden;
    }
    .app-cartinfo .recom .recom-item .item-subtitle {
        font-size: 13px;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 3px;
        color: rgb(51, 51, 51);
        overflow: hidden;
    }
    .app-cartinfo .recom .recom-item .item-price {
        color: rgb(182, 9, 9);
        margin-bottom: 9px;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 5px;
    }
</style>