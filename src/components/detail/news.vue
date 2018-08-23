<template>
	<div class="news">
		<div class="auto-news">
			<mt-swipe :auto="4000">
			  	<!-- <mt-swipe-item >
			  		<img src="../../assets/auto1.jpg" alt="">
			  		<span><i class="iconfont icon-remen"></i>列车上的情人节 90后高铁夫妻聚少离多忙暑运</span>
			  	</mt-swipe-item>
			  	<mt-swipe-item>
			  		<img src="../../assets/auto2.jpg" alt="">
			  		<span><i class="iconfont icon-xinwen"></i>治沙不止 在“人进沙退”中捍卫“美丽中国”</span>
			  	</mt-swipe-item>
			  	<mt-swipe-item>
			  		<img src="../../assets/auto3.jpg" alt="">
			  		<span><i class="iconfont icon-remen"></i>菲律宾公司首创竹壳电动摩托车 颜值让人惊喜</span>
			  	</mt-swipe-item>
			  	<mt-swipe-item>
			  		<img src="../../assets/auto4.jpg" alt="">
			  		<span><i class="iconfont icon-xinwen"></i>惬意！孩子在大王莲上玩耍</span>
			  	</mt-swipe-item> -->
			  	<mt-swipe-item v-for="v in big">
			  		<img :src="v.imgsrc" alt="">
			  		<span><i class="iconfont icon-remen"></i>{{v.title}}</span>
			  	</mt-swipe-item>
			</mt-swipe>
		</div>
		
		<ul class="news-ul">
			<li v-for="v in list">
				<a :href="v.link">
					<div class="news-left">
						<h3>{{v.title}}</h3>
						<span>点击率：{{v.tcount}}</span>
						<span>来源：{{v.source}}</span><br>
						<span>发布时间：{{v.ptime}}</span>
						
					</div>
					<div class="news-right">
						<img :src="v.picInfo[0].url">
					</div>
				</a>
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
		// name:'news',
		data(){
			return{
				msg:`新闻首页`,
				list:[],
				big:[]
			}
		},
		mounted(){
			this.$axios.get('data/big.json').then(res=>{
				// console.log(res.data.T1348647853363)
				this.big=res.data.T1348647853363;
			}).catch(err=>{
				console.log(err)
			});

			var url='http://3g.163.com/touch/jsonp/sy/recommend/0-20.html';
      		jsonp(url,null,(err,data)=>{
      			if(err){
      				console.log(err.message)
      			}else{
      				// console.log(data.news)
      				this.list=data.news;
      			}
      		})
		}
	}
</script>

<style scoped=''>
	.news{
		margin-bottom: 50px;
	}
	.news-ul{
		padding: 0 15px;
		list-style: none;
		border-top: 1px solid #ddd8ce;
		margin-top: 15px;
		background: #fefefe;
		box-shadow: 0 0 15px #ddd8ce;
	}
	.news-ul li a{
		border-bottom: 1px solid #999;
		padding: 5px;
		display: flex;
		justify-content:center;
    	align-items:center;
    	/* flex垂直居中 */
	}
	.news-right{
		width: 30%;
		display: table-cell;
		vertical-align: middle;
	}
	.news-right img{
		width: 100%;
	}
	.news-left{
		width: 70%;
	}
	.news-left h3{
		font-weight: normal;
	}
	.news-left span{
		font-size: 0.12rem;
		color: #999;
	}
	.news-bottom{
		text-align: center;
	}
</style>