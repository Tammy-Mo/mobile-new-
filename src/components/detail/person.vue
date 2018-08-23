<template>
	<div class="person">
		<div class="person-head">
			<span>个人中心</span>
		</div>
		<div class="person-detail">
			<ul>
				<li>我的收藏</li>
				<li>邀请好友</li>
			</ul>
			<ul>
				<li>意见反馈</li>
				<li>隐私策略</li>
				<li>关于我们</li>
			</ul>
			<ul>
				<li>清除缓存</li>
				<li>重置应用</li>
			</ul>
			<span>退出</span>
		</div>
	</div>
</template>

<style>
	.person{
		margin-top: 15px;
		border-top: 1px solid #e6e6e6;
	}
	.person-head{
		font-size: .25rem;
		font-weight: bold;
		padding: 10px 20px;
		border-bottom: 1px solid #e6e6e6;
		background: #fff;
	}
	.person-detail{
		margin-top: 15px;
	}
	.person-detail ul{
		background: #fff;
		margin: 10px 0;
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
	}
	.person-detail ul li{
		padding: 10px;
		border-bottom: 1px solid #f0efed;
	}
	.person-detail span{
		background: #fff;
		padding: 20px;
		font-size: .2rem;
		display: block;
		font-weight: bold;
		text-align: center;
		border-top: 1px solid #e6e6e6;
		border-bottom: 1px solid #e6e6e6;
	}
</style>