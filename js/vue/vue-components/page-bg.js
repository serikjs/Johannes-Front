Vue.component('page-bg', {
	props: ['img'],
	data() {
		return {
			cof: 20,
			newImg: [],
			currentImg: 1,
		}
	},

	template: `
			<div class="page-bg">
				<div v-for='(item,index) in newImg' :class="'page-bg__img ' + getClass(index)"><img :src="getImg(index)" alt=""></div>
			</div>
  `,
	created() {
		this.newImg = this.img

		let g = Math.floor(this.cof / this.img.length)

		for (let index = 0; index < g; index++) {
			this.newImg = this.newImg.concat(this.img)
		}
	},
	computed: {},
	methods: {
		getClass(index) {
			if (index === 0) {
				return 'page-bg__img_0'
			}
			this.currentImg++
			if (this.currentImg > 4) {
				this.currentImg = 0
			}
			return `page-bg__img_${this.currentImg}`
		},
		getImg(index) {
			return this.newImg[index]
		},
	},
})
