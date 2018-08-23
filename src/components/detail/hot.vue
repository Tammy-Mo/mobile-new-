<template>
	<div class="hot">
		<ul class="hot-ul">
			<li v-for='v in hot' v-if="v.picInfo[0]">
				<img :src="v.picInfo[0].url" alt="">
				<h3><i class="iconfont icon-remen"></i>{{v.title}} <span>[今日热门]</span></h3>
				<div class="ul-span">
					<span>点击率：{{v.tcount}}</span>
					<span>时间：{{v.ptime}}</span>
					<span>类型：{{v.category}}</span>
				</div>
			</li>
		</ul>
		<div class="news-bottom">
			<h2>已经到底了！(>^ω^<)</h2>
		</div>
	</div>
	
</template>

<script>
	var jsonp=require('jsonp');
	export default{
		data(){
			return{
				hot:[]
			}
		},
		mounted(){
			var url='http://3g.163.com/touch/jsonp/sy/recommend/10-20.html';
      		jsonp(url,null,(err,data)=>{
      			if(err){
      				console.log(err.message)
      			}else{
      				console.log(data.list)
      				this.hot=data.list;
      			}
      		})
		}
		
	}
</script>

<style>
	.hot{
		margin-bottom: 50px;
	}
	.hot-ul{
		width: 100%;
	}
	.hot-ul li{
		max-width: 700px;
		display: block;
		margin: 0 auto;
		padding: 10px;
		border-bottom: 1px solid #999;
	}
	.hot-ul li img{
		display: block;
		margin: 0 auto;
		width: 80%;
	}
	.hot-ul li h3{
		font-size: .14rem;
		margin-bottom: 10px;
		margin-top: 10px;
		margin-left: .15rem;
	}
	.hot-ul li h3 span{
		color: #ff4241;
	}
	.hot-ul .icon-remen{
		font-size: .25rem;
		color: red;
		font-weight: normal;
	}
	.ul-span{
		display: flex;
	}
	.ul-span span{
		font-size: .12rem;
		color: #666;
	}
	.ul-span span:nth-of-type(1){
		margin-left: 30px;
		margin-right: 5px;
	}
	.ul-span span:nth-of-type(2){
		flex-grow: 1;
	}
	.ul-span span:nth-of-type(3){
		margin-right: 10%;
	}
	.news-bottom{
		text-align: center;
	}
</style>