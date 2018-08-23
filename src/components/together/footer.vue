<template>
	<div>
		<footer>
			<ul class="footer-ul">
				<li>
					<router-link to='/' :class="{col:$route.path=='/news'||$route.path=='/finance'||$route.path=='/recreation'||$route.path=='/fasion'||$route.path=='/sport'||$route.path=='/health'}">
					<i class="iconfont icon-xinwen"></i>
						新闻
					</router-link>
				</li>
				<li>
					<router-link to='/hot' :class="{col:$route.path=='/hot'}">
					<i class="iconfont icon-remen"></i>
						热门
					</router-link>
				</li>
				<li>
					<router-link to='/comment' :class="{col:$route.path=='/comment'}">
					<i class="iconfont icon-liuyan"></i>
						推荐
					</router-link>
				</li>
				<li>
					<router-link to='/person' :class="{col:$route.path=='/person'}">
					<i class="iconfont icon-wode2"></i>
						我的
					</router-link>
				</li>
			</ul>
		</footer>
	</div>
</template>

<script>
	export default{
		mounted(){
			// $('.footer-ul li a').click(function(event) {
			// 	$(this).css('color', '#ff8307');
			// 	$(this).parent().siblings('li').children('a').css('color', '#000');
			// });
			
		}
	}
</script>
<style>
	a{
		text-decoration: none;
		font-family: "幼圆";
		color: #000;
	}
	.footer-ul{
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		/* border-top: 1px solid #999; */
		background: #fff;
		box-shadow: 0 0 15px #999;
	}
	.footer-ul li{
		flex-grow: 1;
		text-align: center;
		font-size: .16rem;
		font-weight: bold;
		padding: 10px;
	}
	.footer-ul .iconfont{
		font-size: .18rem;
	}
	/* .footer-ul li:nth-of-type(1) a{
		color: #ff8307;
	} */
	.col{
		color: #ff8307;
	}
</style>