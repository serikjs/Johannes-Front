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
			langPair: {
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
	},

	computed: {},

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
		// selectFile(box) {
		// 	box.value = this.$refs.file.files
		// },
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
	},
})
