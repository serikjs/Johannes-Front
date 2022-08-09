const tl = gsap.timeline({
	defaults: { duration: 0.75, ease: 'Power3.easeOut' },
})
const tl2 = gsap.timeline({
	defaults: { duration: 0.75, ease: 'Power3.easeOut' },
})
const tl3 = gsap.timeline({
	defaults: { duration: 0.75, ease: 'Power3.easeOut' },
})

Vue.component('meetTeam', {
	data() {
		return {
			nextBtn: {},
			showNextBtn: true,
			currenPersonId: 0,
			sliderIsOpen: false,
			team: [],
		}
	},

	template: `
	<section class="meet-team container">
				<h2 class="title title_large meet-team__title">Meet our team</h2>

				<div class="meet-team__wrapper" :class="{'open':sliderIsOpen}">
					<div class="meet-team__content">
						<template v-for="(item, index) in team">
							<div
								v-if="item.personPosition == 'main'"
								class="meet-team__person meet-team__person_big"
								:class="{'meet-team__person_up':index===0}"
								:style="{order:[index == 0 ? 2 : index]}"
								@click="openSlider(item.personId)"
							>
								<p class="meet-team__photo" :class="{'meet-team__photo_elips ':index===0}">
									<img :src="'img/'+item.personImageUrl" alt="" />
								</p>

								<p class="meet-team__name">{{item.personName}}</p>
								<p class="meet-team__position">{{item.personSubtitle}}</p>
							</div>
							<div
								v-if="item.personPosition == 'other' "
								class="meet-team__person meet-team__person_small"
								:style="{order:index}"
								@click="openSlider(item.personId)"
							>
								<p class="meet-team__photo meet-team__photo_small">
									<img :src="'img/'+item.personImageUrl" alt="" />
								</p>

								<p class="meet-team__name meet-team__name_small">{{item.personName}}</p>
								<p class="meet-team__position meet-team__position_small">
									{{item.personSubtitle}}
								</p>
							</div>
						</template>
					</div>
					<div class="meet-team__slider">
						<button class="meet-team__close-btn" @click="closeSlider()">
							<svg
								width="154"
								height="24"
								viewBox="0 0 154 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.939346 10.9393C0.353546 11.5251 0.353546 12.4749 0.939346 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939346 10.9393ZM154 10.5L2 10.5V13.5L154 13.5V10.5Z"
									fill="#F24C4C"
								/>
							</svg>
						</button>
						<div class="meet-team__slide">
							<a :href="getCurrenPerson.personMoreInfo.link" class="meet-team__slide-left">
								<p
									class="meet-team__slide-photo"
									:class="{'meet-team__slide-photo_elips':getCurrenPerson.personSubtitle==='CEO'}"
								>
									<img :src="'img/'+getCurrenPerson.personMoreInfo.bigImageUrl" alt="" />
								</p>

								<p class="meet-team__slide-name">{{getCurrenPerson.personName}}</p>
								<p class="meet-team__slide-position">{{getCurrenPerson.personSubtitle}}</p>
							</a>
							<div class="meet-team__slide-right">
								<p class="meet-team__text reviews__text">
									<!-- <span class="reviews__text--red"
										>is the best i’ve ever cooperate with!</span
									> -->
									{{getCurrenPerson.personMoreInfo.description}}
								</p>
							</div>
						</div>
						<div v-if="showNextBtn" class="meet-team__next-slide" @click="nextSlide()">
							<p class="meet-team__photo">
								<img :src="'img/'+nextBtn.imgUrl" alt="" />
							</p>

							<p class="meet-team__name">{{nextBtn.name}}</p>
							<p class="meet-team__position">{{nextBtn.position}}</p>
						</div>
					</div>
				</div>
			</section>
  `,
	created() {
		this.team = [
			{
				personId: 0,
				personName: 'John Crimson',
				personImageUrl: 'meet-team-2.jpg',
				personSubtitle: 'CEO',
				personPosition: 'main',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},
			{
				personId: 1,
				personName: 'Melissa Becker',
				personImageUrl: 'meet-team-1.jpg',
				personSubtitle: 'Co-founder',
				personPosition: 'main',
				isHaveMoreInfo: false,
				personMoreInfo: {},
			},

			{
				personId: 2,
				personName: 'Jack Billigan',
				personImageUrl: 'meet-team-3.jpg',
				personSubtitle: 'Co-founder',
				isHaveMoreInfo: false,
				personPosition: 'main',
				personMoreInfo: {},
			},

			{
				personId: 3,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-4.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personPosition: 'other',
				personMoreInfo: {},
			},
			{
				personId: 4,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-5.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personPosition: 'other',
				personMoreInfo: {},
			},
			{
				personId: 5,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-6.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personPosition: 'other',
				personMoreInfo: {},
			},
			{
				personId: 6,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-7.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personPosition: 'other',
				personMoreInfo: {},
			},
			{
				personId: 7,
				personName: 'Steve Coulberg',
				personImageUrl: 'meet-team-8.jpg',
				personSubtitle: 'SMM manager',
				isHaveMoreInfo: false,
				personPosition: 'other',
				personMoreInfo: {},
			},
		]
		this.nextBtn = {
			imgUrl: this.team[1].personImageUrl,
			name: this.team[1].personName,
			position: this.team[1].personSubtitle,
		}
	},
	computed: {
		getCurrenPerson() {
			const obj = this.team[this.currenPersonId]
			if (!obj.isHaveMoreInfo) {
				obj.personMoreInfo = {
					bigImageUrl: obj.personImageUrl,
					description: 'lasdfklasjdflkjas;ldfjlsajdflkafjl',
					link: '#',
				}
				this.team[this.currenPersonId].isHaveMoreInfo = true
			}
			return obj
		},
	},
	methods: {
		nextBtnUpdate() {
			if (this.team[this.currenPersonId + 1]) {
				this.showNextBtn = true
				this.nextBtn.imgUrl = this.team[this.currenPersonId + 1].personImageUrl
				this.nextBtn.name = this.team[this.currenPersonId + 1].personName
				this.nextBtn.position =
					this.team[this.currenPersonId + 1].personSubtitle
			} else {
				this.showNextBtn = false
			}
		},
		nextSlide() {
			const nextSlide = document.querySelector('.meet-team__next-slide')
			const content = document.querySelector('.meet-team__slide')

			tl2
				.to(nextSlide, {
					right: '-300px',
				})
				.to(
					content,
					{
						x: '-1000px',

						duration: 0.4,
					},
					'<',
				)
				.call(
					() => {
						this.currenPersonId++
						this.nextBtnUpdate()
					},
					'',
					'>',
				)
				.to(nextSlide, {
					right: '90px',
					duration: 0.4,
				})
				.to(
					content,
					{
						x: '0',
						duration: 0.4,
					},
					'<',
				)
		},
		openSlider(id) {
			const persons = document.querySelectorAll('.meet-team__person'),
				nextSlide = document.querySelector('.meet-team__next-slide'),
				wrapper = document.querySelector('.meet-team__wrapper')

			console.log(id)
			this.currenPersonId = id
			this.nextBtnUpdate()

			tl.staggerTo(
				[...persons],
				0.2,
				{ y: 20, opacity: 0, pointerEvents: 'none' },
				0.2,
			).call(
				() => {
					wrapper.classList.add('open')
				},
				'',
				'>',
			)
			tl2.to(nextSlide, {
				right: '90px',
				duration: 0.4,
			})
		},
		closeSlider() {
			const persons = document.querySelectorAll('.meet-team__person'),
				wrapper = document.querySelector('.meet-team__wrapper')
			tl3
				.call(
					() => {
						wrapper.classList.remove('open')
					},
					'',
					'>',
				)
				.staggerTo(
					[...persons],
					0.2,
					{ y: 0, opacity: 1, pointerEvents: 'auto' },
					0.2,
					'>+1',
				)
		},
	},
})
