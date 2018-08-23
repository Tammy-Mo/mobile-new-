<template>
	<div class="comment">
		<ul class="com-ul">
			<li v-for="v in com">
				<div class="comul-span">
					<span>
						{{v.title}}
					</span>
					<span>
						{{v.category}}
					</span>
				</div>
				<img :src="v.picInfo[0].url" alt="">
				
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
				com:[]
			}
		},
		mounted(){
			var url='http://3g.163.com/touch/jsonp/sy/recommend/0-20.html';
      		jsonp(url,null,(err,data)=>{
      			if(err){
      				console.log(err.message)
      			}else{
      				console.log(data.live)
      				this.com=data.live;
      			}
      		})
		}
		
	}
</script>

<style>
.comment{
	margin-bottom: 50px;
}
	.com-ul{
		width: 100%;
		margin-top: 10px;
	}
	.com-ul li{
		max-width: 700px;
		display: block;
		margin: 0 auto;
		border: 1px solid #ddd8ce;
		margin: 5px auto;
		background: #fff;
		border-radius: 5px;
		box-shadow: 0 0 5px #ddd8ce;
		padding-bottom: 10px;
	}
	.com-ul li img{
		display: block;
		margin: 0 auto;
		width: 80%;
	}
	.comul-span{
		border-bottom: 1px solid #ddd8ce;
		margin-bottom: 10px;
		padding: 10px;
		font-size: .16rem;
		font-weight: bold;
	}
	.comul-span span:nth-of-type(2){
		font-size: .12rem;
		float: right;
		color: #999;
		position: relative;
		top: 5px;
		font-weight: normal;
	}
	.news-bottom{
		text-align: center;
	}
</style>