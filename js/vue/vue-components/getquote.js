Vue.component('getquote', {
	props: ['pageclass'],
	data() {
		return {
			lang: [
				'Afghanistan',
				'Algeria',
				'Argentina',
				'Australia',
				'Azerbaijani',
				'Bangladesh',
				'Belgium',
				'Bhutan',
				'Brazil',
				'Canada',
				'China',
				'Denmark',
				'Ethiopia',
				'Finland',
				'France',
				'Germany',
				'Hungary',
				'Iceland',
				'India',
				'Indonesia',
				'Iran',
				'Italy',
				'Japan',
				'Malaysia',
				'Maldives',
				'Mexico',
				'Morocco',
				'Nepal',
				'Netherlands',
				'Nigeria',
				'Norway',
				'Pakistan',
				'Peru',
				'Russia',
				'Romania',
				'South Africa',
				'Spain',
				'Sri Lanka',
				'Sweden',
				'Switzerland',
				'Thailand',
				'Turkey',
				'Uganda',
				'Ukraine',
				'United States',
				'United Kingdom',
				'Vietnam',
			],
			meetTeamIsLoad: true,

			serchLangFrom: '',
			isOpenLangFrom: false,

			serchLangTo: '',
			isOpenLangTo: false,

			isOpenFile: false,

			patterns: [
				{
					name: 'Name of organisation',
					pattern: /^[a-zA-Z ]{2,30}$/,
					value: '',
					isValid: false,
					isVisit: false,
					isImportant: false,
				},
				{
					name: 'First Name',
					pattern: /^[a-zA-Z ]{2,30}$/,
					value: '',
					isValid: false,
					isVisit: false,
					isImportant: true,
				},
				{
					name: 'Last Name',
					pattern: /^[a-zA-Z ]{2,30}$/,
					value: '',
					isValid: false,
					isVisit: false,
					isImportant: true,
				},
				{
					name: 'Email',
					pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					value: '',
					isValid: false,
					isVisit: false,
					isImportant: true,
				},
				{
					name: 'Phone',
					pattern: /^[0-9]{7,14}$/,
					value: '',
					isValid: false,
					isVisit: false,
					isImportant: false,
				},
				{
					name: 'Translate from',
					value: 'Azerbaijani',
					isImportant: false,
				},
				{
					name: 'Translate to',
					value: ['German'],
					isImportant: false,
				},
				{
					name: 'Translatable source file available',
					value: 'Yes',
					isImportant: false,
				},
				{
					name: 'Drag',
					value: null,
					isImportant: false,
				},
				{
					name: 'Message',
					value: '',
					isImportant: false,
				},
			],
		}
	},

	template: `
  <section
	id="getquote"
	:class="this.pageclass + '__get-quote'"
	class="get-quote"
>
	<div class="container">
		<h2 class="get-quote__title">Get a Quote</h2>
		<form
			@submit.prevent
			class="get-quote__form"
		>
			<div class="get-quote__form-section">
				<h3 class="get-quote__form-title">Your contact data</h3>
				<label class="get-quote__form-label">
					Name of organisation
					<input
						type="text"
						name=""
						id=""
						:value="findValue('Name of organisation')"
						@input="onInput($event.target.value,'Name of organisation')"
						class="get-quote__form-input"
						:class="getClases('Name of organisation')"
					/> </label
				><label class="get-quote__form-label">
					First Name
					<input
						type="text"
						name="firstName"
						id="firstName"
						:value="findValue('First Name')"
						@input="onInput($event.target.value,'First Name')"
						class="get-quote__form-input"
						:class="getClases('First Name')" /></label
				><label class="get-quote__form-label">
					Last Name<input
						type="text"
						name="lastName"
						id="lastName"
						:value="findValue('Last Name')"
						@input="onInput($event.target.value,'Last Name')"
						class="get-quote__form-input"
						:class="getClases('Last Name')" /></label
				><label class="get-quote__form-label">
					Email Address
					<input
						type="text"
						name="email"
						id="email"
						:value="findValue('Email')"
						@input="onInput($event.target.value,'Email')"
						class="get-quote__form-input"
						:class="getClases('Email')" /></label
				><label class="get-quote__form-label">
					Phone Number
					<input
						type="text"
						name="phone"
						id="phone"
						:value="findValue('Phone')"
						@input="onInput($event.target.value,'Phone')"
						class="get-quote__form-input"
						:class="getClases('Phone')"
				/></label>
			</div>
			<div class="get-quote__form-section">
				<h3 class="get-quote__form-title">The translation</h3>
				<label class="get-quote__form-label">
					Translate from:
					<div
						class="get-quote__form-dropdawn dropdawn dropdawn-langfrom"
						:class="{'active':isOpenLangFrom}"
					>
						<div
							class="dropdawn__select-btn"
							@click="isOpenLangFrom = !isOpenLangFrom"
						>
							<span>{{findValue('Translate from')}}</span>
							<i class="dropdawn__arrow"></i>
						</div>
						<div class="dropdawn__content">
							<div class="dropdawn__search">
								<i class="uil uil-search"></i>
								<input
									spellcheck="false"
									type="text"
									placeholder="Search"
									v-model="serchLangFrom"
								/>
							</div>
							<ul class="dropdawn__options">
								<li
									v-for="lan in getLangFrom"
									@click="updateLangFrom(lan)"
								>
									{{lan}}
								</li>
							</ul>
						</div>
					</div>
				</label>
				<label class="get-quote__form-label">
					Translate to:
					<div
						class="get-quote__form-dropdawn dropdawn dropdawn--multiple"
						:class="{'active':isOpenLangTo}"
					>
						<div
							class="dropdawn__select-btn dropdawn--multiple__select-btn"
							@click.self="isOpenLangTo = !isOpenLangTo"
						>
							<template v-if="findValue('Translate to')[0]">
								<span
									v-for="(lan,index) in findValue('Translate to')"
									@click="delLangTo(index)"
								>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M5 5L8 8L5 11"
											stroke="white"
											stroke-linecap="round"
										/>
										<path
											d="M11.375 11L8.375 8L11.375 5"
											stroke="white"
											stroke-linecap="round"
										/>
										<circle
											cx="8"
											cy="8"
											r="7.5"
											stroke="white"
										/>
									</svg>
									{{lan}}
								</span>
							</template>
							<template v-else>Select Languages</template>
						</div>
						<div class="dropdawn__content">
							<div class="dropdawn__search">
								<i class="uil uil-search"></i>
								<input
									spellcheck="false"
									type="text"
									placeholder="Search"
									v-model="serchLangTo"
								/>
							</div>
							<ul class="dropdawn__options">
								<li
									v-for="lan in getLangTo"
									@click="updateLangTo(lan)"
								>
									{{lan}}
								</li>
							</ul>
						</div>
					</div>
				</label>
				<label class="get-quote__form-label">
					Translatable source file available?

					<div
						class="get-quote__form-dropdawn dropdawn dropdawn-file"
						:class="{'active':isOpenFile}"
					>
						<div
							class="dropdawn__select-btn"
							@click.self="isOpenFile = !isOpenFile"
						>
							<span>{{findValue('Translatable source file available')}}</span>
							<i class="dropdawn__arrow"></i>
						</div>
						<div class="dropdawn__content">
							<ul class="dropdawn__options">
								<li @click="updateFile('Yes')">Yes</li>
								<li @click="updateFile('No')">No</li>
							</ul>
						</div>
					</div>
				</label>
				<div class="get-quote__form-drag">
					<input
						type="file"
						multiple
						name=""
						id=""
						ref="file"
						@change="selectFile()"
					/>
					<p>
						<svg
							width="30"
							height="28"
							viewBox="0 0 30 28"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1.66699 20.6667L2.49499 23.98C2.6392 24.5569 2.97209 25.0691 3.44077 25.4351C3.90944 25.8011 4.487 25.9999 5.08166 26H24.919C25.5136 25.9999 26.0912 25.8011 26.5599 25.4351C27.0286 25.0691 27.3615 24.5569 27.5057 23.98L28.3337 20.6667M15.0003 18V2V18ZM15.0003 18L9.66699 12.6667L15.0003 18ZM15.0003 18L20.3337 12.6667L15.0003 18Z"
								stroke="#101F42"
								stroke-width="3.33333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>

						<template v-if="findValue('Drag') != null">
							<span v-for="item in findValue('Drag')">{{item.name}}</span>
						</template>
						<template v-else> Drag file(s) here or click to upload </template>
					</p>
				</div>
			</div>
			<div class="get-quote__form-section">
				<h3 class="get-quote__form-title">Extra information</h3>
				<label class="get-quote__form-label">
					Comments:
					<textarea
						class="get-quote__form-textarea"
						name=""
						id=""
            :value="findValue('Message')""
						@input="onInputTextarea($event.target.value,'Message')"
					></textarea>
					<button
						type="submit"
						class="get-quote__form-submite btn btn_tomato"
            @click="submite()"
					>
						Submit
					</button>
					<div class="get-quote__form-info">
						<b>Safe and Secure</b>
						<p>
							All data contained and uploaded by this website is sent over a
							secure SSL connection.
						</p>
						<b>Privacy Policy</b>
						<p>
							All files and information are processed in regard to our
							<a href="">privacy statement</a> .
						</p>
					</div>
				</label>
			</div>
		</form>
	</div>
</section>

  `,
	computed: {
		getLangFrom() {
			let arr = []
			if (this.serchLangFrom.length > 0) {
				arr = this.lang.filter(data =>
					data.toLowerCase().startsWith(this.serchLangFrom),
				)
				return arr
			}
			return this.lang
		},
		getLangTo() {
			let arr = []
			if (this.serchLangTo.length > 0) {
				arr = this.lang.filter(data =>
					data.toLowerCase().startsWith(this.serchLangTo),
				)
				return arr
			}
			return this.lang
		},
	},
	methods: {
		selectFile() {
			const elem = this.patterns.find(patt => patt.name === 'Drag')
			elem.value = this.$refs.file.files
		},
		updateFile(val) {
			const elem = this.patterns.find(
				patt => patt.name === 'Translatable source file available',
			)
			elem.value = val
			this.isOpenFile = false
		},
		delLangTo(index) {
			const elem = this.patterns.find(patt => patt.name === 'Translate to')
			elem.value.splice(index, 1)
		},
		updateLangFrom(val) {
			const elem = this.patterns.find(patt => patt.name === 'Translate from')
			elem.value = val
			this.isOpenLangFrom = false
		},
		updateLangTo(val) {
			const elem = this.patterns.find(patt => patt.name === 'Translate to')
			if (!elem.value.find(el => el === val)) {
				elem.value.push(val)
			}
		},
		onInputTextarea(e, name) {
			const elem = this.patterns.find(patt => patt.name === name)
			elem.value = e
		},
		onInput(e, name) {
			const elem = this.patterns.find(patt => patt.name === name)
			elem.value = e
			elem.isVisit = true
			elem.isValid = this.isValidCheck(e, this.getPatt(name))
		},
		findValue(name) {
			return this.patterns.find(patt => patt.name === name).value
		},
		isValidCheck(val, pat) {
			return pat.test(val)
		},
		getClases(name) {
			const elem = this.patterns.find(patt => patt.name === name)
			if (elem.isVisit) {
				return elem.isValid ? 'valid' : 'error'
			}
			return ''
		},
		getPatt(name) {
			return this.patterns.find(patt => patt.name === name).pattern
		},

		submite() {
			const filesData = new FormData()
			let flag = true

			this.patterns.every(element => {
				if (Array.isArray(element.value)) {
					if (element.value.length > 0) {
						for (let i = 0; i < element.value.length; i++) {
							filesData.append(element.name, element.value[i])
						}
					} else if (element.isImportant) {
						flag = false
						return false
					}
				} else if (element.name === 'Drag') {
					if (element.value) {
						for (let i = 0; i < element.value.length; i++) {
							filesData.append(element.name, element.value[i])
						}
					}
				} else {
					// eslint-disable-next-line no-lonely-if
					if (element.value != '') {
						if ('isValid' in element) {
							if (element.isValid) {
								filesData.append(element.name, element.value)
							} else {
								flag = false
								element.isVisit = true
								return false
							}
						} else {
							filesData.append(element.name, element.value)
						}
					} else {
						// eslint-disable-next-line no-lonely-if
						if (element.isImportant) {
							flag = false
							element.isVisit = true
							return false
						}
					}
				}

				return true
			})

			if (flag) {
				// axios.post('/multiple-files', filesData, {
				// 	headers: {
				// 		'Content-Type': 'multipart/form-data',
				// 	},
				// })
			}
			// else {
			// }
		},
	},
})
