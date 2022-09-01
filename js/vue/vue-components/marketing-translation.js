Vue.component('marketing-translation', {
	data() {
		return {
			marketingTranslationLenght: 0,
			marketingTranslationAll: [],
			marketingTranslation: [],
			marketingTranslationFilter: [],
			marketingTranslationFilterAll: true,
			marketingTranslationFilterCurrent: [],
			merketingLimitView: 9,
			merketingCurrentView: 9,
			merketingOneLimit: 100,
		}
	},

	template: `
	<section
					class="marketing-translation references__marketing-translation"
				>
					<div class="container container_small">
						<div class="marketing-translation__top">
							<h2
								class="title title_red title_red_big marketing-translation__title"
							>
								A convincing marketing translation
							</h2>
							<p class="marketing-translation__descr">
								By specializing in various areas of expertise and languages, we
								can take care of virtually every kind of translation, including
								medical information, complex legal texts, technical reports and
								marketing texts. Below you will find an overview of our
								references, sorted by industry.
							</p>
							<ul class="filter">
								<li class="filter__item">
									<button
										class="filter__btn"
										:class='{"filter__btn_active":marketingTranslationFilterAll}'
										@click="setmarketingTranslationFilterAll()"
									>
										All
									</button>
								</li>
								<li class="filter__item">Or</li>

								<li
									v-for="(item,index) in marketingTranslationFilter"
									class="filter__item"
								>
									<button
										class="filter__btn"
										:class='{"filter__btn_active":item.active}'
										@click="setmarketingTranslationFilter(index)"
									>
										{{item.title}}
									</button>
								</li>
							</ul>
						</div>
						<div class="marketing-translation__bottom">
							<ul class="marketing-translation__list">
								<li
									v-for="item in marketingTranslationRender"
									class="marketing-translation__item"
								>
									<a
										class="marketing-translation__link"
										:href="item.link"
									>
										<img
											:src="'img/' + item.img"
											alt=""
										/>
									</a>
								</li>
							</ul>
						</div>

						<button
							class="btn btn_tomato discover-blog__btn"
							v-if="isMarketingShowMore"
							@click="marketingShowMore()"
						>
							Show me more!
						</button>
					</div>
				</section>
  `,
	created() {
		setTimeout(() => {
			this.marketingTranslationLenght = 30
			this.marketingTranslationAll = [
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
			]
			this.marketingTranslationFilter = [
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

			this.marketingTranslation = this.marketingTranslationAll
		}, 1000)
	},
	computed: {
		marketingTranslationRender() {
			return this.marketingTranslation.slice(0, this.merketingCurrentView)
		},
		isMarketingShowMore() {
			return this.marketingTranslationAll.length <= this.merketingCurrentView
				? false
				: true
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
		marketingShowMore() {
			if (
				this.merketingCurrentView + this.merketingLimitView * 2 >
				this.marketingTranslationAll.length
			) {
				if (
					this.marketingTranslationAll.length <= this.marketingTranslationLenght
				) {
					// запрос на получение большего количества постов
					setTimeout(() => {
						this.marketingTranslationAll.push(
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

			if (this.marketingTranslationFilterCurrent.length > 0) {
				this.marketingTranslation = this.marketingTranslationAll.filter(el =>
					this.serchTagInTags(this.marketingTranslationFilterCurrent, el.tags),
				)
			}

			this.merketingCurrentView += this.merketingLimitView
		},
		setmarketingTranslationFilterAll() {
			this.marketingTranslationFilterAll = true
			this.marketingTranslation = this.marketingTranslationAll
			this.marketingTranslationFilterCurrent = []
			this.marketingTranslationFilter.forEach(element => {
				element.active = false
			})
		},
		setmarketingTranslationFilter(index) {
			if (this.marketingTranslationFilter[index].active === true) {
				this.marketingTranslationFilter[index].active = false
				this.marketingTranslationFilterCurrent.splice(
					this.marketingTranslationFilterCurrent.indexOf(
						this.marketingTranslationFilter[index].title,
					),
					1,
				)

				if (this.marketingTranslationFilterCurrent.length == 0) {
					this.marketingTranslationFilterAll = true
					this.marketingTranslation = this.marketingTranslationAll
				} else {
					this.marketingTranslation = this.marketingTranslationAll.filter(el =>
						this.serchTagInTags(
							this.marketingTranslationFilterCurrent,
							el.tags,
						),
					)
				}
			} else {
				this.marketingTranslationFilterAll = false
				this.marketingTranslationFilter[index].active = true
				this.marketingTranslationFilterCurrent.push(
					this.marketingTranslationFilter[index].title,
				)
				this.marketingTranslation = this.marketingTranslationAll.filter(el =>
					this.serchTagInTags(this.marketingTranslationFilterCurrent, el.tags),
				)
			}
		},
	},
})
