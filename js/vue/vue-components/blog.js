Vue.component('blog', {
	data() {
		return {
			blogLenght: 0,
			blogNews: [],
			blogAll: [],
			blog: [],
			blogFilter: [],
			blogFilterAll: true,
			isblogShowMore: false,
			blogFilterCurrent: [],
			blogLimitView: 3,
			blogCurrentView: 3,
			blogOneLimit: 100,

			blogShare: {
				title: '',
				descr: '',
				img: '',
				link: '',
				linkedIn: '',
				facebook: '',
			},

			isShare: false,
		}
	},

	template: `
	<div>
		<section class="blog main__blog">
					<div class="main__bg main__bg_blog"></div>
					<div class="container">
						<ul class="filter blog__filter">
							<li class="filter__item">
								<button
									class="filter__btn"
									:class='{"filter__btn_active":blogFilterAll}'
									@click="setblogFilterAll()"
								>
									All
								</button>
							</li>
							<li class="filter__item">
								<svg
									width="2"
									height="48"
									viewBox="0 0 2 48"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<line
										x1="1.23828"
										y1="2.14003e-08"
										x2="1.23828"
										y2="48"
										stroke="#ECEDF1"
									/>
								</svg>
							</li>

							<li
								v-for="(item,index) in blogFilter"
								class="filter__item"
							>
								<button
									class="filter__btn"
									:class='{"filter__btn_active":item.active}'
									@click="setblogFilter(index)"
								>
									{{item.title}}
								</button>
							</li>
						</ul>
						<div class="blog__content">
							<div
								v-show="blogFilterAll && isblogShowMore == false"
								class="blog__left"
							>
								<ul class="blog__news">
									<h3 class="blog__news-title">News</h3>
									<li
										v-for="item in blogNews"
										class="blog__news-item"
									>
										<a
											:href="item.link"
											class="blog__news-link"
										>
											<img
												class="blog__news-img"
												:src="'img/' + item.img"
												alt=""
											/>

											<div class="blog__news-content">
												<h4 class="blog__news-name">{{item.title}}</h4>
												<p class="blog__news-learn">
													Learn More<svg
														width="19"
														height="20"
														viewBox="0 0 19 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M0 10H16.5M16.5 10L8 18.5M16.5 10L8 1.5"
															stroke="black"
															stroke-width="2.5"
														/>
													</svg>
												</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
							<ul
								class="blog__list"
								:class="blogClass"
							>
								<li
									v-for="elem in blogRender"
									class="blog__item"
								>
									<a
										:href="elem.link"
										class="blog__link"
									>
										<img
											class="blog__img"
											:src="'img/' + elem.img"
											alt=""
										/>
									</a>
									<div class="blog__content-inner">
										<a
											:href="elem.link"
											class="blog__body"
										>
											<p class="blog__author">{{elem.author}}</p>
											<h3 class="title blog__name">{{elem.title}}</h3>
											<p class="blog__text">{{elem.descr}}</p>
										</a>
										<div class="blog__info">
											<p class="blog__date">
												<span>31 December</span>
												<span>3 Weeks ago</span>
											</p>
											<p class="blog__btns">
												<span
													class="blog__btns_like"
													:class="{active: elem.like}"
													@click="liked(elem)"
													><svg
														width="26"
														height="25"
														viewBox="0 0 26 25"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															id="like1"
															d="M3 10H23V19C23 20.6569 21.6569 22 20 22H3V10Z"
															fill="transparent"
														/>
														<path
															id="like2"
															d="M12.4297 1L16.8882 3.26308L12.8147 11.2884C12.0647 12.7659 10.2591 13.3556 8.7817 12.6057L6.99829 11.7005L12.4297 1Z"
															fill="transparent"
														/>
														<path
															d="M23 8H15.985L17.3887 3.79125C17.6412 3.03125 17.5137 2.18875 17.045 1.53875C16.5762 0.88875 15.8162 0.5 15.015 0.5H13C12.6287 0.5 12.2775 0.665 12.0387 0.95L6.16375 8H3C1.62125 8 0.5 9.12125 0.5 10.5V21.75C0.5 23.1288 1.62125 24.25 3 24.25H19.6337C20.1424 24.2483 20.6385 24.0923 21.0565 23.8026C21.4746 23.5129 21.7948 23.1031 21.975 22.6275L25.4212 13.4387C25.4736 13.2984 25.5002 13.1498 25.5 13V10.5C25.5 9.12125 24.3787 8 23 8ZM3 10.5H5.5V21.75H3V10.5ZM23 12.7738L19.6337 21.75H8V9.7025L13.585 3H15.0175L13.065 8.85375C13.0016 9.04164 12.9839 9.24194 13.0134 9.43803C13.0429 9.63413 13.1187 9.82036 13.2346 9.9813C13.3504 10.1422 13.503 10.2732 13.6796 10.3635C13.8562 10.4537 14.0517 10.5005 14.25 10.5H23V12.7738Z"
															fill="black"
														/>
													</svg>
												</span>
												<a
													href="./about-us.html"
													class="blog__btns_comment"
													:class="{active: elem.comment}"
												>
													<svg
														width="30"
														height="30"
														viewBox="0 0 30 30"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															id="comment1"
															d="M17.5 23.75C22.2137 23.75 24.5712 23.75 26.035 22.285C27.5 20.8212 27.5 18.4637 27.5 13.75C27.5 9.03625 27.5 6.67875 26.035 5.215C24.5712 3.75 22.2137 3.75 17.5 3.75H12.5C7.78625 3.75 5.42875 3.75 3.965 5.215C2.5 6.67875 2.5 9.03625 2.5 13.75C2.5 18.4637 2.5 20.8212 3.965 22.285C4.78125 23.1025 5.875 23.4638 7.5 23.6225"
															fill="transparent"
														/>
														<path
															d="M17.5 23.75C22.2137 23.75 24.5712 23.75 26.035 22.285C27.5 20.8212 27.5 18.4637 27.5 13.75C27.5 9.03625 27.5 6.67875 26.035 5.215C24.5712 3.75 22.2137 3.75 17.5 3.75H12.5C7.78625 3.75 5.42875 3.75 3.965 5.215C2.5 6.67875 2.5 9.03625 2.5 13.75C2.5 18.4637 2.5 20.8212 3.965 22.285C4.78125 23.1025 5.875 23.4638 7.5 23.6225"
															stroke="black"
															stroke-width="2.5"
															stroke-linecap="round"
															stroke-linejoin="round"
														/>
														<path
															id="comment2"
															d="M17.4986 23.75C15.9536 23.75 14.2511 24.375 12.6973 25.1813C10.1998 26.4775 8.95109 27.1263 8.33609 26.7125C7.72109 26.3 7.83734 25.0187 8.07109 22.4575L8.12359 21.875"
															fill="transparent"
														/>
														<path
															d="M17.4986 23.75C15.9536 23.75 14.2511 24.375 12.6973 25.1813C10.1998 26.4775 8.95109 27.1263 8.33609 26.7125C7.72109 26.3 7.83734 25.0187 8.07109 22.4575L8.12359 21.875"
															stroke="black"
															stroke-width="2.5"
															stroke-linecap="round"
														/>
													</svg>
												</a>

												<span @click="showShare(elem)">
													<svg
														class="blog__btns_share"
														width="30"
														height="30"
														viewBox="0 0 30 30"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M22.0312 19.4531C21.1963 19.4531 20.4258 19.7461 19.8223 20.2354L13.752 15.8438C13.8536 15.2858 13.8536 14.7142 13.752 14.1562L19.8223 9.76465C20.4258 10.2539 21.1963 10.5469 22.0312 10.5469C23.9707 10.5469 25.5469 8.9707 25.5469 7.03125C25.5469 5.0918 23.9707 3.51562 22.0312 3.51562C20.0918 3.51562 18.5156 5.0918 18.5156 7.03125C18.5156 7.37109 18.5625 7.69629 18.6533 8.00684L12.8877 12.1816C12.0322 11.0479 10.6729 10.3125 9.14062 10.3125C6.55078 10.3125 4.45312 12.4102 4.45312 15C4.45312 17.5898 6.55078 19.6875 9.14062 19.6875C10.6729 19.6875 12.0322 18.9521 12.8877 17.8184L18.6533 21.9932C18.5625 22.3037 18.5156 22.6318 18.5156 22.9688C18.5156 24.9082 20.0918 26.4844 22.0312 26.4844C23.9707 26.4844 25.5469 24.9082 25.5469 22.9688C25.5469 21.0293 23.9707 19.4531 22.0312 19.4531ZM22.0312 5.50781C22.8721 5.50781 23.5547 6.19043 23.5547 7.03125C23.5547 7.87207 22.8721 8.55469 22.0312 8.55469C21.1904 8.55469 20.5078 7.87207 20.5078 7.03125C20.5078 6.19043 21.1904 5.50781 22.0312 5.50781ZM9.14062 17.5781C7.71973 17.5781 6.5625 16.4209 6.5625 15C6.5625 13.5791 7.71973 12.4219 9.14062 12.4219C10.5615 12.4219 11.7188 13.5791 11.7188 15C11.7188 16.4209 10.5615 17.5781 9.14062 17.5781ZM22.0312 24.4922C21.1904 24.4922 20.5078 23.8096 20.5078 22.9688C20.5078 22.1279 21.1904 21.4453 22.0312 21.4453C22.8721 21.4453 23.5547 22.1279 23.5547 22.9688C23.5547 23.8096 22.8721 24.4922 22.0312 24.4922Z"
															fill="black"
														/>
													</svg>
												</span>
											</p>
										</div>
									</div>
								</li>
							</ul>
						</div>

						<a href="" v-if="isMain == true" class="btn btn_tomato discover-blog__btn">
							Show me more!
						</a>
						<button
							v-if="isBlogShowMore && isMain == false"
							@click="blogShowMore(); isblogShowMore = true"
							class="btn btn_tomato discover-blog__btn"
						>
							Show me more!
						</button>
					</div>
				</section>
					
	<div
					v-if="isShare"
					class="share-popup"
				>
					<div class="container">
						<div class="share-popup__content">
							<button
								@click="isShare = !isShare"
								class="close-popup share-popup__close"
							></button>
							<div class="share-popup__links">
								<p class="share-popup__title">Share this blog:</p>
								<ul class="share-popup__list">
									<li class="share-popup__item">
										<a
											:href="blogShare.linkedIn"
											target="_blank"
										>
											<svg
												width="55"
												height="55"
												viewBox="0 0 55 55"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M11.4204 16.4932C14.1897 16.4932 16.4346 14.2483 16.4346 11.479C16.4346 8.70976 14.1897 6.46484 11.4204 6.46484C8.65117 6.46484 6.40625 8.70976 6.40625 11.479C6.40625 14.2483 8.65117 16.4932 11.4204 16.4932Z"
													fill="#0A66C2"
												/>
												<path
													d="M21.1692 20.293V48.1115H29.8065V34.3546C29.8065 30.7246 30.4894 27.2092 34.9902 27.2092C39.4292 27.2092 39.4842 31.3594 39.4842 34.5838V48.1138H48.126V32.8582C48.126 25.3644 46.5127 19.6055 37.754 19.6055C33.5487 19.6055 30.73 21.9132 29.5773 24.0971H29.4604V20.293H21.1692ZM7.09375 20.293H15.7448V48.1115H7.09375V20.293Z"
													fill="#0A66C2"
												/>
											</svg>
										</a>
									</li>
									<li class="share-popup__item">
										<a
											:href="blogShare.facebook "
											target="_blank"
											><svg
												width="26"
												height="50"
												viewBox="0 0 26 50"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M17.6875 9.375H25.5V0H17.6875C11.6562 0 6.75 4.90625 6.75 10.9375V15.625H0.5V25H6.75V50H16.125V25H23.9375L25.5 15.625H16.125V10.9375C16.125 10.0906 16.8406 9.375 17.6875 9.375Z"
													fill="#3B5998"
												/>
											</svg>
										</a>
									</li>
								</ul>
							</div>
							<div class="share-popup__link">
								<p class="share-popup__link-title">Copy the link:</p>
								<div class="share-popup__link-inner">
									<input
										class="share-popup__link-input"
										type="text"
										name="share-link"
										id="share-link"
										:value="blogShare.link"
									/>
									<button
										class="share-popup__link-btn"
										@click="copyLink()"
									>
										<svg
											width="31"
											height="31"
											viewBox="0 0 31 31"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												d="M13.3184 17.9547C13.9916 18.5951 13.9916 19.646 13.3184 20.2864C12.678 20.9268 11.6271 20.9268 10.9867 20.2864C9.4488 18.7461 8.58499 16.6585 8.58499 14.4819C8.58499 12.3053 9.4488 10.2176 10.9867 8.67737L16.7995 2.86465C18.3397 1.3267 20.4274 0.462891 22.604 0.462891C24.7806 0.462891 26.8682 1.3267 28.4085 2.86465C29.9464 4.4049 30.8102 6.49255 30.8102 8.66916C30.8102 10.8458 29.9464 12.9334 28.4085 14.4737L25.9619 16.9203C25.9783 15.5738 25.7649 14.2274 25.3051 12.9466L26.0768 12.1584C26.5372 11.7031 26.9026 11.161 27.152 10.5634C27.4014 9.96591 27.5298 9.32485 27.5298 8.67737C27.5298 8.02988 27.4014 7.38883 27.152 6.7913C26.9026 6.19378 26.5372 5.65165 26.0768 5.1963C25.6215 4.73599 25.0794 4.37055 24.4818 4.12115C23.8843 3.87174 23.2433 3.74333 22.5958 3.74333C21.9483 3.74333 21.3072 3.87174 20.7097 4.12115C20.1122 4.37055 19.5701 4.73599 19.1147 5.1963L13.3184 10.9926C12.8581 11.448 12.4927 11.9901 12.2432 12.5876C11.9938 13.1851 11.8654 13.8262 11.8654 14.4737C11.8654 15.1212 11.9938 15.7622 12.2432 16.3597C12.4927 16.9573 12.8581 17.4994 13.3184 17.9547ZM17.9489 10.9926C18.5893 10.3522 19.6401 10.3522 20.2805 10.9926C21.8185 12.5329 22.6823 14.6205 22.6823 16.7971C22.6823 18.9737 21.8185 21.0614 20.2805 22.6016L14.4678 28.4144C12.9276 29.9523 10.8399 30.8161 8.6633 30.8161C6.48669 30.8161 4.39904 29.9523 2.85879 28.4144C1.32084 26.8741 0.457031 24.7865 0.457031 22.6098C0.457031 20.4332 1.32084 18.3456 2.85879 16.8053L5.30539 14.3587C5.28897 15.7052 5.50243 17.0516 5.96219 18.3488L5.19044 19.1206C4.73013 19.5759 4.36469 20.118 4.11529 20.7156C3.86588 21.3131 3.73747 21.9541 3.73747 22.6016C3.73747 23.2491 3.86588 23.8902 4.11529 24.4877C4.36469 25.0852 4.73013 25.6273 5.19044 26.0827C5.6458 26.543 6.18792 26.9084 6.78545 27.1579C7.38297 27.4073 8.02403 27.5357 8.67151 27.5357C9.319 27.5357 9.96005 27.4073 10.5576 27.1579C11.1551 26.9084 11.6972 26.543 12.1526 26.0827L17.9489 20.2864C18.4092 19.831 18.7746 19.2889 19.024 18.6914C19.2734 18.0939 19.4019 17.4528 19.4019 16.8053C19.4019 16.1578 19.2734 15.5168 19.024 14.9193C18.7746 14.3217 18.4092 13.7796 17.9489 13.3243C17.7894 13.1748 17.6623 12.9943 17.5754 12.7937C17.4885 12.5932 17.4436 12.377 17.4436 12.1584C17.4436 11.9399 17.4885 11.7237 17.5754 11.5231C17.6623 11.3226 17.7894 11.142 17.9489 10.9926Z"
												fill="#4C70F0"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
	</div>

  `,
	created() {
		if (isMainPage) {
			this.isMain = isMainPage
		}
		setTimeout(() => {
			this.blogLenght = 30
			this.blogAll = [
				{
					id: 1,
					title: '25 unbelievable situations that happened in Japan!',
					descr:
						'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
					author: 'Richard Docking',
					img: 'blog-big.jpg',
					link: '#',
					tags: ['Tag Number 1'],
					like: false,
					comment: true,
				},
				{
					id: 2,
					title: '25 unbelievable situations that happened in Japan!',
					descr:
						'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
					author: 'Richard Docking',
					img: 'blog-big.jpg',
					link: '#',
					tags: ['Tag Number 1'],
					like: false,
					comment: false,
				},
				{
					id: 3,
					title: '25 unbelievable situations that happened in Japan!',
					descr:
						'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
					author: 'Richard Docking',
					img: 'blog-big.jpg',
					link: '#',
					tags: ['Tag Number 1'],
					like: true,
					comment: true,
				},
				{
					id: 4,
					title: '25 unbelievable situations that happened in Japan!',
					descr:
						'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
					author: 'Richard Docking',
					img: 'blog-big.jpg',
					link: '#',
					tags: ['Tag Number 1'],
					like: true,
					comment: true,
				},
			]
			this.blogFilter = [
				{
					title: 'Tag Number 1',
					active: false,
				},
				{
					title: 'Tag Number Two',
					active: false,
				},
				{
					title: 'Tag Number Three',
					active: false,
				},
				{
					title: 'Tag Number 4',
					active: false,
				},
				{
					title: 'Tag Number O',
					active: false,
				},
				{
					title: 'Tag Number 5',
					active: false,
				},
				{
					title: 'Tag Number Z',
					active: false,
				},
				{
					title: 'Tag Number M',
					active: false,
				},
				{
					title: 'Tag Number N',
					active: false,
				},
			]
			this.blogNews = [
				{
					id: 1,
					title: '25 unbelievable situations that happened in Japan!',
					img: 'blog-big.jpg',
					link: '#',
				},
				{
					id: 2,
					title: '25 unbelievable situations that happened in Japan!',
					img: 'blog-big.jpg',
					link: '#',
				},
				{
					id: 3,
					title: '25 unbelievable situations that happened in Japan!',
					img: 'blog-big.jpg',
					link: '#',
				},
			]
			this.blog = this.blogAll
		}, 1000)
	},
	mounted() {
		window.addEventListener('unload', () => {
			// отправка лайков
		})
	},
	computed: {
		blogClass() {
			if (this.isMain) {
				if (!this.blogFilterAll || this.isblogShowMore) {
					this.blogCurrentView = 3
					return 'blog__list_v3'
				}
				this.blogCurrentView = 2
				return 'blog__list_v1'
			}
			return this.blogFilterAll
				? this.isblogShowMore
					? 'blog__list_v3'
					: 'blog__list_v2'
				: 'blog__list_v3'
		},
		blogRender() {
			return this.blog.slice(0, this.blogCurrentView)
		},
		isBlogShowMore() {
			return this.blogAll.length <= this.blogCurrentView ? false : true
		},
	},
	methods: {
		serchTagInTags(where, what) {
			if (what) {
				for (let i = 0; i < what.length; i++) {
					if (where.indexOf(what[i]) >= 0) return true
				}
				return false
			}
			return false
		},
		blogShowMore() {
			if (this.blogCurrentView + this.blogLimitView * 2 > this.blogAll.length) {
				if (this.blogAll.length <= this.blogLenght) {
					// запрос на получение большего количества постов
					setTimeout(() => {
						this.blogAll.push(
							...[
								{
									id: 1,
									title: '25 unbelievable situations that happened in Japan!',
									descr:
										'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
									author: 'Richard Docking',
									img: 'blog-big.jpg',
									link: '#',
									tags: ['Tag Number 1'],
								},
								{
									id: 2,
									title: '25 unbelievable situations that happened in Japan!',
									descr:
										'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
									author: 'Richard Docking',
									img: 'blog-big.jpg',
									link: '#',
									tags: ['Tag Number 1'],
								},
								{
									id: 3,
									title: '25 unbelievable situations that happened in Japan!',
									descr:
										'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
									author: 'Richard Docking',
									img: 'blog-big.jpg',
									link: '#',
									tags: ['Tag Number 1'],
								},
								{
									id: 4,
									title: '25 unbelievable situations that happened in Japan!',
									descr:
										'Schneiders-Sprach-Service (SSS) is an international translation agency founded in Berlin that can.',
									author: 'Richard Docking',
									img: 'blog-big.jpg',
									link: '#',
									tags: ['Tag Number 1'],
								},
							],
						)
					}, 1000)
				}
			}

			if (this.blogFilterCurrent.length > 0) {
				this.blog = this.blogAll.filter(el =>
					this.serchTagInTags(this.blogFilterCurrent, el.tags),
				)
			}

			this.blogCurrentView += this.blogLimitView
		},
		setblogFilterAll() {
			this.blogFilterAll = true
			this.blog = this.blogAll
			this.blogFilterCurrent = []
			this.blogFilter.forEach(element => {
				element.active = false
			})
		},
		setblogFilter(index) {
			if (this.blogFilter[index].active === true) {
				this.blogFilter[index].active = false
				this.blogFilterCurrent.splice(
					this.blogFilterCurrent.indexOf(this.blogFilter[index].title),
					1,
				)

				if (this.blogFilterCurrent.length == 0) {
					this.blogFilterAll = true
					this.blog = this.blogAll
				} else {
					this.blog = this.blogAll.filter(el =>
						this.serchTagInTags(this.blogFilterCurrent, el.tags),
					)
				}
			} else {
				this.blogFilterAll = false
				this.blogFilter[index].active = true
				this.blogFilterCurrent.push(this.blogFilter[index].title)
				this.blog = this.blogAll.filter(el =>
					this.serchTagInTags(this.blogFilterCurrent, el.tags),
				)
			}
		},

		showShare(elem) {
			this.isShare = true
			this.blogShare = elem

			let url = document.location.href

			document
				.querySelector('[property="og:title"]')
				.setAttribute('content', this.blogShare.title)

			document
				.querySelector('[property="og:image"]')
				.setAttribute('content', this.blogShare.img)

			document
				.querySelector('[property="og:description"]')
				.setAttribute('content', this.blogShare.descr)

			document
				.querySelector('[property="og:url"]')
				.setAttribute('content', this.blogShare.link)

			this.blogShare.linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`

			this.blogShare.facebook = `https://www.facebook.com/sharer/sharer.php?u=${url}`
		},
		liked(elem) {
			elem.like = !elem.like
			const filesData = new FormData()
			filesData.append('ip', '192.168.0.45')
			filesData.append('like', elem.like)
			filesData.append('id', elem.id)
		},

		copyLink() {
			navigator.clipboard.writeText(this.blogShare.link)
		},
	},
})
