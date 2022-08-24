const app = new Vue({
	el: '#app',
	data: {
		team: [],
		meetTeamIsLoad: true,
		contact: {
			data: {
				name: '',
				phone: '',
				email: '',
				message: '',
			},
			options: [
				{
					name: 'name',
					pattern: /^[a-zA-Z ]{2,30}$/,
					isValid: null,
					isImportant: true,
				},
				{
					name: 'phone',
					pattern: /^[0-9]{7,14}$/,
					isValid: null,
					isImportant: false,
				},
				{
					name: 'email',
					pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					isValid: null,
					isImportant: true,
				},
				{
					name: 'message',
					isImportant: false,
				},
			],
		},
		pageBgImg: [
			'img/chinese-bg-1.png',
			'img/chinese-bg-2.png',
			'img/chinese-bg-3.png',
			'img/chinese-bg-4.png',
			'img/chinese-bg-5.png',
		],
		featuredCases: [
			{
				img: 'daas.png',
				title: 'DEUTSCHE AFRIKA STIFTUNG E.V.',
				link: '#',
			},
			{
				img: 'bezirksamt-pankow.png',
				title: 'DEUTSCHE AFRIKA STIFTUNG E.V.',
				link: '#',
			},
			{
				img: 'bdd.png',
				title: 'DEUTSCHE AFRIKA STIFTUNG E.V.',
				link: '#',
			},
			{
				img: 'bild.png',
				title: 'DEUTSCHE AFRIKA STIFTUNG E.V.',
				link: '#',
			},
			{
				img: 'bjr.png',
				title: 'DEUTSCHE AFRIKA STIFTUNG E.V.',
				link: '#',
			},
			{
				img: 'bburg.png',
				title: 'DEUTSCHE AFRIKA STIFTUNG E.V.',
				link: '#',
			},
		],
		marketingTranslationAll: [
			{
				img: 'bjr.png',
				link: '#',
				tags: 'Tag Number 1',
			},
			{
				img: 'bdd.png',
				link: '#',
			},
			{
				img: 'djr.png',
				link: '#',
				tags: 'Tag Number 1',
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
		this.marketingTranslation = this.marketingTranslationAll
	},

	methods: {
		// getIsValid(name) {
		// 	const elem = this.contact.options.find(patt => patt.name === name)
		// 	if (elem.isValid != null) {
		// 		return 'error'
		// 	}
		// 	return ''
		// },
		// submiteContact() {
		// 	const error = []

		// 	this.contact.options.forEach(element => {
		// 		if (element.isImportant) {
		// 			if (!element.pattern.test(this.contact.data[element.name])) {
		// 				error.push(element.name)
		// 				element.isValid = false
		// 			} else {
		// 				element.isValid = null
		// 			}
		// 		}
		// 	})

		// 	if (error.length === 0) {
		// 		const data = JSON.stringify(this.contact.data)
		// 		const params = new URLSearchParams()
		// 		params.append('action', 'contact_as')
		// 		params.append('data', data)
		// 		axios
		// 			.post(ajax_url, params)
		// 			.then(res => {
		// 				console.log(res)
		// 			})
		// 			.catch(() => {
		// 				console.log('BAD')
		// 			})
		// 	}
		// },

		setmarketingTranslationFilterAll() {
			this.marketingTranslationFilterAll = true
			this.marketingTranslation = this.marketingTranslationAll
			this.marketingTranslationFilterCurrent = []
			this.marketingTranslationFilter.forEach(element => {
				element.active = false
			})
		},
		setmarketingTranslationFilter(index) {
			this.marketingTranslationFilterAll = false
			this.marketingTranslationFilter[index].active = true
			this.marketingTranslationFilterCurrent.push(
				this.marketingTranslationFilter[index].title,
			)
			// Запрос на получение карточек по выбранным категориям
			// Присвоение ответа переменной this.marketingTranslation
		},
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
