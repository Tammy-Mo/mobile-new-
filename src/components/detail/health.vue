<template>
	<div class="hea">
		<ul class="news-ul">
			<li v-for="v in hea">
				<div class="news-left">
					<h3>{{v.title}}</h3>
					<span>点击率：{{v.daynum}}</span>
					<span>来源：{{v.source}}</span><br>
					<span>发布时间：{{v.ptime}}</span>
				</div>
				<div class="news-right">
					<img :src="v.imgsrc">
				</div>
			</li>
		</ul>
		<div class="news-bottom">
			<h2>已经到底了！(>^ω^<)</h2>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				hea:[]
			}
		},
		mounted(){
			var url='data/health.json';
			this.$axios.get(url).then(res=>{
				// console.log(res.data)
				this.hea=res.data.T1414389941036;
			}).catch(err=>{
				console.log(err)
			})
		}
	}
</script>

<style scoped>
	.news-ul{
		padding: 0 15px;
		list-style: none;
		border-top: 1px solid #ddd8ce;
		background: #fefefe;
		box-shadow: 0 0 15px #ddd8ce;
	}
	.news-ul li{
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
	.hea{
		margin-bottom: 50px;
	}
</style>