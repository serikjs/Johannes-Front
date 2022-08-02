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
	},
	// created() {
	// 	const params = new URLSearchParams()
	// 	params.append('action', 'get_users')
	// 	axios.post(ajax_url, params).then(res => {
	// 		this.team = res.data
	// 	})
	// },
	// computed: {},
	// methods: {
	// 	getIsValid(name) {
	// 		const elem = this.contact.options.find(patt => patt.name === name)
	// 		if (elem.isValid != null) {
	// 			return 'error'
	// 		}
	// 		return ''
	// 	},
	// 	submiteContact() {
	// 		const error = []

	// 		this.contact.options.forEach(element => {
	// 			if (element.isImportant) {
	// 				if (!element.pattern.test(this.contact.data[element.name])) {
	// 					error.push(element.name)
	// 					element.isValid = false
	// 				} else {
	// 					element.isValid = null
	// 				}
	// 			}
	// 		})

	// 		if (error.length === 0) {
	// 			const data = JSON.stringify(this.contact.data)
	// 			const params = new URLSearchParams()
	// 			params.append('action', 'contact_as')
	// 			params.append('data', data)
	// 			axios
	// 				.post(ajax_url, params)
	// 				.then(res => {
	// 					console.log(res)
	// 				})
	// 				.catch(() => {
	// 					console.log('BAD')
	// 				})
	// 		}
	// 	},
	// },
})
