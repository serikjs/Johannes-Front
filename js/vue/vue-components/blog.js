Vue.component('blog', {
	data() {
		return {
			blogLenght: 0,
			blogAll: [],
			blog: [],
			blogFilter: [],
			blogFilterAll: true,
			blogFilterCurrent: [],
			blogLimitView: 3,
			blogCurrentView: 3,
			blogOneLimit: 100,
		}
	},

	template: `
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
								v-show="blogFilterAll"
								class="blog__left"
							>
								<ul class="blog__news">
									<h3 class="blog__news-title">News</h3>
									<li class="blog__news-item">
										<a
											href=""
											class="blog__news-link"
										>
											<div class="blog__news-img ibg">
												<img
													src="'img' + blog.jpg"
													alt=""
												/>
											</div>
											<div class="blog__news-content">
												<h4 class="blog__news-name">
													25 unbelievable situations that happened in Japan!
												</h4>
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
									<li class="blog__news-item">
										<a
											href=""
											class="blog__news-link"
										>
											<div class="blog__news-img ibg">
												<img
													src="@img/blog.jpg"
													alt=""
												/>
											</div>
											<div class="blog__news-content">
												<h4 class="blog__news-name">
													25 unbelievable situations that happened in Japan!
												</h4>
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
								:class="blogFilterAll ? 'blog__list_v2' : 'blog__list_v3'"
							>
								<li class="blog__item">
									<a
										href=""
										class="blog__link"
									>
										<img
											class="blog__img"
											src="@img/blog-big.jpg"
											alt=""
										/>
									</a>
									<div class="blog__content-inner">
										<a
											href=""
											class="blog__body"
										>
											<p class="blog__author">Richard Docking</p>
											<h3 class="title blog__name">
												25 unbelievable situations that happened in Japan!
											</h3>
											<p class="blog__text">
												Schneiders-Sprach-Service (SSS) is an international
												translation agency founded in Berlin that can.
											</p>
										</a>
										<div class="blog__info">
											<p class="blog__date">
												<span>31 December</span>
												<span>3 Weeks ago</span>
											</p>
											<p class="blog__btns">
												<span
													><svg
														class="blog__btns_like active"
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
												<a href="./about-us.html">
													<svg
														class="blog__btns_comment"
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

												<span @click="isShare = true">
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
								<li class="blog__item">
									<a
										href=""
										class="blog__link"
									>
										<img
											class="blog__img"
											src="@img/blog-big.jpg"
											alt=""
										/>
									</a>
									<div class="blog__content-inner">
										<a
											href=""
											class="blog__body"
										>
											<p class="blog__author">Richard Docking</p>
											<h3 class="title blog__name">
												25 unbelievable situations that happened in Japan!
											</h3>
											<p class="blog__text">
												Schneiders-Sprach-Service (SSS) is an international
												translation agency founded in Berlin that can.
											</p>
										</a>
										<div class="blog__info">
											<p class="blog__date">
												<span>31 December</span>
												<span>3 Weeks ago</span>
											</p>
											<p class="blog__btns">
												<span
													><svg
														class="blog__btns_like active"
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
												<a href="./about-us.html">
													<svg
														class="blog__btns_comment"
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

												<span @click="isShare = true">
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
								<li class="blog__item">
									<a
										href=""
										class="blog__link"
									>
										<img
											class="blog__img"
											src="@img/blog-big.jpg"
											alt=""
										/>
									</a>
									<div class="blog__content-inner">
										<a
											href=""
											class="blog__body"
										>
											<p class="blog__author">Richard Docking</p>
											<h3 class="title blog__name">
												25 unbelievable situations that happened in Japan!
											</h3>
											<p class="blog__text">
												Schneiders-Sprach-Service (SSS) is an international
												translation agency founded in Berlin that can.
											</p>
										</a>
										<div class="blog__info">
											<p class="blog__date">
												<span>31 December</span>
												<span>3 Weeks ago</span>
											</p>
											<p class="blog__btns">
												<span
													><svg
														class="blog__btns_like active"
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
												<a href="./about-us.html">
													<svg
														class="blog__btns_comment"
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

												<span @click="isShare = true">
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
						<button class="btn btn_tomato discover-blog__btn">
							Show me more!
						</button>
					</div>
				</section>
  `,
	created() {
		setTimeout(() => {
			this.blogLenght = 30
			this.blogAll = [
				{
          title:'25 unbelievable situations that happened in Japan!',
          descr:""
					img: 'bjr.png',
					link: '#',
					tags: ['Tag Number 1'],
				},
				{
					img: 'bdd.png',
					link: '#',
				},
				{
					img: 'djr.png',
					link: '#',
					tags: ['Tag Number 1'],
				},
				{
					img: 'daas.png',
					link: '#',
					tags: ['Tag Number O', 'Tag Number M'],
				},
				{
					img: 'ti.png',
					link: '#',
					tags: ['Tag Number O'],
				},
				{
					img: 'dh.png',
					link: '#',
					tags: ['Tag Number Z', 'Tag Number N'],
				},
				{
					img: 'vhw.png',
					link: '#',
					tags: ['Tag Number 1', 'Tag Number Z', 'Tag Number N'],
				},
				{
					img: 'lib.png',
					link: '#',
					tags: ['Tag Number Two'],
				},
				{
					img: 'mev.png',
					link: '#',
					tags: ['Tag Number Two'],
				},
				{
					img: 'bjr.png',
					link: '#',
					tags: ['Tag Number 1'],
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

			this.blog = this.blogAll
		}, 1000)
	},
	computed: {
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
									img: 'bjr.png',
									link: '#',
									tags: ['Tag Number 1'],
								},
								{
									img: 'bdd.png',
									link: '#',
								},
								{
									img: 'djr.png',
									link: '#',
									tags: ['Tag Number 1'],
								},
								{
									img: 'daas.png',
									link: '#',
									tags: ['Tag Number O', 'Tag Number M'],
								},
								{
									img: 'ti.png',
									link: '#',
									tags: ['Tag Number O'],
								},
								{
									img: 'dh.png',
									link: '#',
									tags: ['Tag Number Z', 'Tag Number N'],
								},
								{
									img: 'vhw.png',
									link: '#',
									tags: ['Tag Number 1', 'Tag Number Z', 'Tag Number N'],
								},
								{
									img: 'lib.png',
									link: '#',
									tags: ['Tag Number Two'],
								},
								{
									img: 'mev.png',
									link: '#',
									tags: ['Tag Number Two'],
								},
								{
									img: 'bjr.png',
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
	},
})
