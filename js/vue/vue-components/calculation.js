Vue.component('calculation', {
	data() {
		return {
			languages: [],
			target_languages: [],
			area_expertise: [],
			quality: [],
			isOpenSourseLang: false,
			serchSourseLang: '',

			isOpenTargetLang: false,
			serchTargetLang: '',

			isOpenArea: false,

			formData: {
				sourse: '',
				target: '',
				area: ['General'],
				quality: 0,
				words: null,
				total: 0,
			},
		}
	},

	template: `
	<section class="calculation">
	<div class="container calculation__wrapper">
		<h2 class="calculation__title">Calculation module</h2>
		<form
			action=""
			class="calculation__form"
		>
			<div class="calculation__form-grup calculation__form-grup--calc">
				<h3 class="calculation__form-title">Calculation module</h3>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Language Pair</p>
					<div class="calculation__form-dropdawn dropdawn" :class="{'active':isOpenSourseLang}">
						<div class="calculation__dropdawn-btn dropdawn__select-btn" @click="isOpenSourseLang = !isOpenSourseLang">
							<span v-if="formData.sourse != ''">{{formData.sourse}}</span>
							<span v-else>Sourse language</span>
							<i class="dropdawn__arrow"></i>
						</div>
						<div class="dropdawn__content">
							<div class="dropdawn__search">
								<i class="uil uil-search"></i>
								<input
									spellcheck="false"
									type="text"
									placeholder="Search"
									v-model="serchSourseLang"
								/>
							</div>
							<ul class="dropdawn__options">
								<li
									v-for="lan in getSourseLang"
									@click="updateSourseLang(lan.title,lan.id)"
								>
									{{lan.title}}
								</li>
							</ul>
						</div>
					</div>
					<div class="calculation__form-dropdawn dropdawn" :class="{'active':isOpenTargetLang}">
						<div class="calculation__dropdawn-btn dropdawn__select-btn" @click="isOpenTargetLang = !isOpenTargetLang">
						<span v-if="formData.target != ''">{{formData.target}}</span>
							<span v-else>Target language</span>
							<i class="dropdawn__arrow"></i>
						</div>
						<div class="dropdawn__content">
							<div class="dropdawn__search">
								<i class="uil uil-search"></i>
								<input
									spellcheck="false"
									type="text"
									placeholder="Search"
									v-model="serchTargetLang"
								/>
							</div>
							<ul class="dropdawn__options">
							<li
									v-for="(val,key,index) in getTargetLang"
									@click="updateTargetLang(key,val)"
								>
									{{key}}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Area of expertise</p>
					<div
						class="calculation__form-dropdawn calculation__form-dropdawn--large dropdawn"
						:class="{'active':isOpenArea}"
					>
						<div class="dropdawn__select-btn dropdawn--multiple__select-btn" @click.self="isOpenArea = !isOpenArea">
							<span
								v-for="(val,index) in formData.area"
								@click="delArea(index)"
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
								{{val}}
							</span>
						</div>
						<div class="dropdawn__content">
							<ul class="dropdawn__options">
							<li
									v-for="(val,key,index) in area_expertise"
									@click="updateArea(key,val)"
								>
									{{key}}
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Amount of words</p>
					<input
						type="number"
						name="amountWords"
						id="amountWords"
						class="calculation__form-input"
						v-model.number="formData.words"
					/>
				</div>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Quality Check</p>
					<div class="calculation__radio-wrapper">
						<label class="calculation__form-label">
							Full check
							<input
								type="radio"
								name="qualitycheck"
								:value="quality.fullCheck"
								id="fullCheck"
								class="calculation__form-radio"
								v-model="formData.quality"
							/>
							<span class="calculation__radio-box"></span>
						</label>
						<label class="calculation__form-label">
							Sample check
							<input
								type="radio"
								name="qualitycheck"
								:value="quality.sampleCheck"
								id="sampleCheck"
								class="calculation__form-radio"
								v-model="formData.quality"
							/>
							<span class="calculation__radio-box"></span>
						</label>
					</div>
				</div>
			</div>
			<div class="calculation__form-grup calculation__form-grup--estimation">
				<h3 class="calculation__form-title">Estimation</h3>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Estimated time of delivery</p>
					<p class="calculation__form-meaning">In consultation</p>
				</div>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Rate per word</p>
					<p class="calculation__form-meaning">€ {{formData.quality}}</p>
				</div>
				<div class="calculation__form-pair">
					<p class="calculation__form-subtitle">Total amount</p>
					<p class="calculation__form-meaning">€ {{getTotal}}</p>
				</div>
				<p class="calculation__form-sign">
					All prices are exclusive of VAT. The price quoted is only an estimate.
				</p>
				<button
					type="submit"
					class="btn btn--large btn--tomato calculation__form-submite"
				>
					Request a quote
				</button>
			</div>
		</form>
	</div>
</section>
  `,
	// created() {
	// 	const params = new URLSearchParams()
	// 	params.append('action', 'get_languages')
	// 	axios.post(ajax_url, params).then(res => {
	// 		this.languages = res.data
	// 	})
	// },
	// computed: {
	// 	getSourseLang() {
	// 		let arr = []
	// 		if (this.serchSourseLang.length > 0) {
	// 			arr = this.languages.filter(data =>
	// 				data.title.toLowerCase().startsWith(this.serchSourseLang),
	// 			)
	// 			return arr
	// 		}
	// 		return this.languages
	// 	},
	// 	getTargetLang() {
	// 		let arr = []
	// 		if (this.serchTargetLang.length > 0) {
	// 			arr = this.target_languages.filter(data =>
	// 				data.title.toLowerCase().startsWith(this.serchTargetLang),
	// 			)
	// 			return arr
	// 		}
	// 		return this.target_languages
	// 	},
	// 	getTotal() {
	// 		if (
	// 			this.formData.sourse != '' &&
	// 			this.formData.target != '' &&
	// 			this.formData.area.length > 0 &&
	// 			this.formData.words > 0
	// 		) {
	// 			const tot = this.formData.quality * this.formData.words
	// 			this.formData.total = tot.toFixed(2)
	// 		} else {
	// 			this.formData.total = 0
	// 		}
	// 		return this.formData.total
	// 	},
	// },
	// methods: {
	// 	updateSourseLang(val, id) {
	// 		if (val != this.formData.sourse) {
	// 			this.formData.sourse = val
	// 			this.isOpenSourseLang = false

	// 			const params = new URLSearchParams()
	// 			params.append('action', 'get_languages_by_source_lang')
	// 			params.append('id', id)
	// 			axios.post(ajax_url, params).then(res => {
	// 				this.target_languages = res.data.data
	// 			})
	// 		}
	// 	},
	// 	updateTargetLang(val, data) {
	// 		if (val != this.formData.target) {
	// 			this.formData.target = val
	// 			this.isOpenTargetLang = false

	// 			this.area_expertise = data

	// 			this.formData.area = ['General']
	// 			this.quality = data.General
	// 			this.formData.quality = data.General.fullCheck
	// 		}
	// 	},

	// 	updateLangTo(val) {
	// 		if (!this.formData.translate_to.find(el => el === val)) {
	// 			this.formData.translate_to.push(val)
	// 		}
	// 	},
	// 	updateArea(val) {
	// 		if (!this.formData.area.find(el => el === val)) {
	// 			this.formData.area.push(val)
	// 			this.isOpenArea = false
	// 		}
	// 		this.calcQuality()
	// 	},
	// 	delArea(index) {
	// 		this.formData.area.splice(index, 1)
	// 		this.calcQuality()
	// 	},
	// 	calcQuality() {
	// 		let sampleCheck = 0
	// 		let fullCheck = 0

	// 		if (this.formData.area.length > 0) {
	// 			this.formData.area.forEach(element => {
	// 				fullCheck += this.area_expertise[element].fullCheck
	// 				sampleCheck += this.area_expertise[element].sampleCheck
	// 			})

	// 			fullCheck = (fullCheck / this.formData.area.length).toFixed(2)
	// 			sampleCheck = (sampleCheck / this.formData.area.length).toFixed(2)
	// 		}

	// 		this.quality = {
	// 			fullCheck,
	// 			sampleCheck,
	// 		}

	// 		this.formData.quality = fullCheck
	// 	},
	// },
})
