<template>
	<div>
		<ul class="nav-ul">
			<li>
				<router-link to='/news'>头条</router-link>
			</li>
			<li>
				<router-link to='/finance'>财经</router-link>
			</li>
			<li>
				<router-link to='/recreation'>娱乐</router-link>
			</li>
			<li>
				<router-link to='/fasion'>时尚</router-link>
			</li>
			<li>
				<router-link to='/sport'>体育</router-link>
			</li>
			<li>
				<router-link to='/health'>健康</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	$(window).scroll(function(event) {
		if($(window).scrollTop()>=50){
			$('.nav-ul').css({'position': 'fixed','left': '0','top': '0','right': '0','opacity': '0.9'});
			console.log(1)
		}else{
			$('.nav-ul').css('position', 'relative');
		}
	});
</script>

<style>
	.nav-ul{
		display: flex;
		position: relative;
		z-index: 100;
		background: #ff972e;
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	}
	.nav-ul li{
		flex-grow: 1;
		text-align: center;
		font-size: .17rem;
		padding: 5px 0;
		font-weight: 300;
		margin: 0 5px;
		padding-bottom: 0;
	}
	.nav-ul li a{
		color: #fff;
		display: block;
		padding-bottom: 10px;
	}
	/* .nav-ul li:nth-of-type(1){
		border-bottom: 2px solid #fff;
	} */
	.router-link-active{
		border-bottom: 2px solid #fff;
	}
</style>