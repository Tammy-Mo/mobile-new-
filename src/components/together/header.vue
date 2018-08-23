<template>
	<div>
		<header>
	    	<div class="header-left"><i class="iconfont icon-xinwen"></i>新闻早报</div>
	    	<div class="header-center">
	    		<i class="iconfont icon-icon-"></i>
	    		<input type="text" placeholder="搜索你想要的新闻">
	    	</div>
	    	<div class="header-right">
	    		<i class="iconfont icon-denglu"></i>
	    		<p>登录</p>
	    	</div>
	    </header>
	    <!-- <router-view></router-view> -->
	</div>
</template>


<style scoped>
header{
	padding: 0;
	margin: 0;
}
header{
	display: flex;
	background: #ff972e;
	width: 100%;
	box-sizing: border-box;
	height: 0.51rem;
	line-height: 0.51rem;
	color: #fff;
	font-family: "仿宋";
	font-size: .17rem;
	position: relative;
	z-index: 100;
	box-shadow: 0 0 10px #999;
}
.header-left{
	/* flex-grow: 1; */
	width: 28%;
	text-align: center;
	margin-right: 1%;
}
header .header-left i{
	margin-right: 5px;
	font-size: .23rem;
	position: relative;
	top: 3px;
	color: #dd5044;
}
.header-right{
	/* flex-grow: 1; */
	text-align: right;
	width: 25%;
	text-align: center;
}
.header-right p{
	display: inline-block;
	margin: 0;
	position: relative;
	bottom: 3px;
	right: 5px;
}
.header-right .iconfont{
	font-size: .25rem;
}
.header-center{
	width: 45%;
}
.header-center input{
	line-height: 0.32rem;
	width: 100%;
	outline: none;
	border: 0;
	border-radius: 5px;
	padding-left: 30px;
	box-sizing: border-box;
	/* background: #ff7587; */
	font-size: 13px;
	border: 1px solid #ff8307;
}
/* -----------header----------- */
.header-center{
	position: relative;
}
.header-center .icon-icon-{
	position: absolute;
    left: 7px;
    top: 1px;
	color: #666;
	font-size: .2rem;
}
</style>