<style lang="less">
@gradient-color: #43495b;
.login-vue {
	text-align: center;
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: @gradient-color;
	.login-container {
		width: 400px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.login-content {
			letter-spacing: 2px;
			background: #fff;
			padding: 120px 40px 60px;
			box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.18);
			border-radius: 3px;
			box-sizing: border-box;
			> div {
				margin: 30px 0;
				label {
					margin-right: 10px;
					line-height: 35px;
					font-size: 18px;
					color: @gray-color;
				}
				input {
					font-size: 16px;
					padding: 8px 0 8px 8px;
					height: 40px;
					width: 100%;
					border: none;
					border-radius: 0;
					border-bottom: 1px solid #d3d3d3;
					box-shadow: inset 0 0 0 1000px #fff;
					outline: none;
					box-sizing: border-box;
					transition: 0.3s;
					font-weight: 200;
					&:focus {
						border-bottom-color: @gradient-color;
						box-shadow: inset 0 0 0 1000px #fff;
					}
				}
				&.login-title {
					font-size: 30px;
					color: #1d1d1d;
					line-height: 1;
					margin: -16px 0px 40px;
					font-weight: 200;
				}
			}
			> .buttonDiv {
				margin-top: 45px;
				.h-btn {
					padding: 12px 0;
					font-size: 18px;
					opacity: 0.8;
					background: @gradient-color;
					border-color: @gradient-color;
					&:hover {
						opacity: 1;
						background: @gradient-color;
						border-color: @gradient-color;
					}
				}
			}
		}
		.copyright {
			letter-spacing: 1px;
			margin-top: 10px;
			color: #fff;
			a {
				color: #fff;
			}
		}
	}
}
</style>

<template>
	<div class="login-vue">
		<div class="login-container">
			<div class="login-content">
				<div class="login-title">Woody Admin</div>
				<div class="login-name"><input type="text" v-model="login.gist" placeholder="Gist" /></div>
				<div class="login-password"><input type="password" v-model="login.token" placeholder="Token" @keyup.enter="submit" /></div>
				<div class="buttonDiv"><Button :loading="loading" block color="primary" size="l" @click="submit">Sign in</Button></div>
			</div>
			<p class="copyright">
				Copyright © 2019 Woody. -
				<a href="https://github.com/Pluckypan/Woody">Woody</a>
			</p>
		</div>
	</div>
</template>
<script>
import Login from 'model/login/Login';

export default {
	data() {
		return {
			login: {},
			loading: false
		};
	},
	mounted() {
		this.init();
	},
	methods: {
		init() {
			this.login.gist = Utils.getLocal('gist');
			this.login.token = Utils.getLocal('token');
		},
		submit() {
			var gist = this.login.gist;
			var token = this.login.token;
			if (!gist || gist.length == 0) {
				this.$Message(`Gist require.`);
				return;
			}
			if (!token || token.length == 0) {
				this.$Message(`Token require.`);
				return;
			}
			this.loading = true;
			let that = this;
			Utils.saveLocal('gist', gist);
			Utils.saveLocal('token', token);
			Runner.sync(function(err, data) {
				that.loading = false;
				if (err) {
					that.$Message(`Login Failed.` + err + ' ' + data);
				} else {
					DB.User.push(data.owner);
					DB.Category.push(data.category);
					DB.Bookmark.push(data.bookmark);
					that.$router.replace('/');
				}
			});
		}
	}
};
</script>
