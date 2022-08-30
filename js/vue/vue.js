const app = new Vue({
	el: '#app',
	data: {
		// meet team
		team: [],
		meetTeamIsLoad: true,

		// forms patterns
		pattern: {
			phone: {
				pattern: /^[0-9]{7,14}$/,
				message: '7-14 digits',
			},
			name: {
				pattern: /^[a-zA-Z ]{2,30}$/,
				message: 'Only Latin, no more than 30 characters',
			},
			fullName: {
				pattern: /^[a-zA-Z ]{2,60}$/,
				message: 'Only Latin, no more than 60 characters',
			},
			email: {
				pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
				massage: 'test.only@gmail.com',
			},
		},

		// contact us
		contactUs: {
			name: {
				value: '',
				pattern: 'name',
				class: '',
				isImportant: true,
			},
			phone: {
				value: '',
				pattern: 'phone',
				class: '',
				isImportant: false,
			},
			email: {
				value: '',
				pattern: 'email',
				class: '',
				isImportant: true,
			},
			message: {
				value: '',
				isImportant: false,
			},
		},

		// initiative
		initiative: {
			name: {
				value: '',
				pattern: 'fullName',
				class: '',
				isImportant: true,
			},
			role: {
				value: '',
				class: '',
				isImportant: true,
			},
			email: {
				value: '',
				pattern: 'email',
				class: '',
				isImportant: true,
			},
			message: {
				value: '',
				isImportant: false,
			},
			files: {
				value: '',
				isImportant: false,
			},
			hear: {
				value: '',
				isImportant: false,
			},
		},

		// lang page
		pageBgImg: [
			'img/chinese-bg-1.png',
			'img/chinese-bg-2.png',
			'img/chinese-bg-3.png',
			'img/chinese-bg-4.png',
			'img/chinese-bg-5.png',
		],

		// marketing translation

		marketingTranslationAll: [
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
		],
		marketingTranslation: [],
		marketingTranslationFilter: [
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
		],
		marketingTranslationFilterAll: true,
		marketingTranslationFilterCurrent: [],
		merketingOneLimit: 100,


		
		// blog
		blogFilterAll: true,
		blogFilter: [
			{
				title: 'Tag 1',
				active: false,
			},
			{
				title: 'Tag 2',
				active: false,
			},
			{
				title: 'Tag 3',
				active: false,
			},
			{
				title: 'Tag 4',
				active: false,
			},
			{
				title: 'Tag 5',
				active: false,
			},
			{
				title: 'Tag 6',
				active: false,
			},
			{
				title: 'Tag 7',
				active: false,
			},
			{
				title: 'Tag 8',
				active: false,
			},
		],
		blogFilterCurrent: [],

		isShare: false,
	},
	created() {
		// const params = new URLSearchParams()
		// params.append('action', 'get_users')
		// axios.post(ajax_url, params).then(res => {
		// 	this.team = res.data
		// })

		// marketing translation
		this.marketingTranslation = this.marketingTranslationAll
	},

	methods: {
		// contact us

		onInput(value, box) {
			box.value = value
			if (box.pattern)
				box.isValid = this.isValidCheck(
					value,
					this.pattern[box.pattern].pattern,
				)
			else box.isValid = true

			box.class = box.isValid ? 'valid' : 'error'
		},
		isValidCheck(val, pat) {
			return pat.test(val)
		},
		selectFile(box) {
			box.value = this.$refs.file.files
		},
		submiteForm(box) {
			const filesData = new FormData()
			let flag = true

			for (const key in box) {
				if (box[key].pattern) {
					box[key].isValid = this.isValidCheck(
						box[key].value,
						this.pattern[box[key].pattern].pattern,
					)
				}

				if (box[key].isImportant == true && box[key].isValid == false) {
					flag = false
					box[key].class = 'error'
				} else if (box[key].isImportant == true && box[key].value == '') {
					flag = false
					box[key].class = 'error'
				}
			}
			if (flag) {
				for (const key in box) {
					if (key == 'files') {
						for (let i = 0; i < box[key].value.length; i++) {
							filesData.append(`${key}${i}`, box[key].value[i])
						}
					} else {
						filesData.append(key, box[key].value)
					}
				}

				for (var pair of filesData.entries()) {
					console.log(pair[0] + ', ' + pair[1])
				}
			}
		},

		// filtered function

		serchTagInTags(where, what) {
			if (what) {
				for (let i = 0; i < what.length; i++) {
					if (where.indexOf(what[i]) >= 0) return true
				}
				return false
			}
			return false
		},

		filtered(all, render, filters) {
			let filteresMass = []
			this[all].forEach(element => {
				if (this.serchTagInTags(this[filters], element.tags)) {
					filteresMass.push(element)
				}
			})

			this[render] = filteresMass
		},
		setFilter(index, all, render, currentFilters, filters, flag) {
			this[flag] = false

			if (this[filters][index].active === true) {
				this[filters][index].active = false
				this[currentFilters].splice(
					this[currentFilters].indexOf(this[filters][index].title),
					1,
				)

				if (this[currentFilters].length == 0) {
					this[flag] = true
					this[render] = this[all]
				} else {
					this.filtered(all, render, currentFilters)
				}
			} else {
				this[filters][index].active = true
				this[currentFilters].push(this[filters][index].title)

				// Запрос на получение карточек с текущего последнего по лимиту
				// Присвоение ответа переменной this.marketingTranslationAll

				this.filtered(all, render, currentFilters)
			}
		},
		setAll(all, render, currentFilters, filters, flag) {
			this[flag] = true
			this[render] = this[all]
			this[currentFilters] = []
			this[filters].forEach(element => {
				element.active = false
			})
		},
		// marketing translation

		setmarketingTranslationFilterAll() {
			this.setAll(
				'marketingTranslationAll',
				'marketingTranslation',
				'marketingTranslationFilterCurrent',
				'marketingTranslationFilter',
				'marketingTranslationFilterAll',
			)
		},
		setmarketingTranslationFilter(index) {
			this.setFilter(
				index,
				'marketingTranslationAll',
				'marketingTranslation',
				'marketingTranslationFilterCurrent',
				'marketingTranslationFilter',
				'marketingTranslationFilterAll',
			)
		},

		// blog
		setblogFilterAll() {
			this.blogFilterAll = true
			this.blogFilterCurrent = []
			this.blogFilter.forEach(element => {
				element.active = false
			})
		},
		setblogFilter(index) {
			this.blogFilterAll = false
			this.blogFilter[index].active = true
			this.blogFilterCurrent.push(this.blogFilter[index].title)
		},
	},
})
