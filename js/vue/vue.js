const app = new Vue({
	el: '#app',
	data: {
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

		// blog
		blogLenght: 0,
		blogNews: [],
		blogAll: [],
		blog: [],
		blogFilter: [],
		blogFilterAll: true,
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
	},
	created() {
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
			console.log('sadfsadf')
		})
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

		// blog
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

		copyLink() {
			navigator.clipboard.writeText(this.blogShare.link)
		},
	},
})
