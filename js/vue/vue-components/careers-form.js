Vue.component('careers-form', {
	data() {
		return {
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
				email: {
					pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
					massage: 'test.only@gmail.com',
				},
			},
			careers: {
				main: {
					name: {
						value: '',
						pattern: 'name',
						class: '',
						isImportant: true,
					},
					lastname: {
						value: '',
						pattern: 'name',
						class: '',
						isImportant: true,
					},
					email: {
						value: '',
						pattern: 'email',
						class: '',
						isImportant: true,
					},
					phone: {
						value: '',
						pattern: 'phone',
						class: '',
						isImportant: false,
					},
					tongue: {
						value: '',
						isImportant: false,
					},
				},

				block1: {
					availability: {
						value: '',
						isImportant: false,
					},
					translationExperience: {
						value: '<1',
						isImportant: true,
					},
					translationUsed: {
						value: [],
						class: '',
						isImportant: true,
					},
					langPair: {
						value: [
							{
								first: {
									value: '',
								},
								second: {
									value: '',
								},
							},
						],
						isImportant: false,
					},
					areasExpertise: {
						value: [],
						class: '',
						isImportant: true,
					},
					toolsTranslate: {
						value: [],
						class: '',
						isImportant: false,
					},
					proofreading: {
						value: undefined,
					},
					years: {
						value: null,
					},
					pricing: {
						value: null,
					},
				},
				block2: {
					technicalSkills: {
						value: [],
						class: '',
						isImportant: false,
					},
					creationExperience: {
						value: undefined,
					},
					specify: {
						value: '',
						isImportant: false,
					},
					qualifications: {
						value: [],
						class: '',
						isImportant: true,
					},
					file: {
						value: '',
					},
				},
			},
			careersData: {
				translationExperience: ['<1', '1-3', '3-5', '5-10', '10+'],
				translationUsed: [
					'Internal use',
					'Certified/ Sworn Translations',
					'Publishable',
				],
				areasExpertise: [
					'General',
					'Marketing / PR',
					'Economics',
					'Finance',
					'Legal',
					'Medical/ Pharma',
					'Engineering/ Technical',
					'Architecture',
					'Construction',
					'Science',
					'Trade',
					'IT / Software / Gaming',
					'Media / Communication',
					'Tourism',
					' E-Commerce / Product Descriptions',
				],
				// toolsTranslate: {
				// 	'CAT Tools': [
				// 		'SDL Trados Studio',
				// 		'SDL Trados Business Manager',
				// 		'SDL Trados Teams',
				// 		'Memo Q Freelancer',
				// 		'Memo Q Project Manager',
				// 		'Memsource',
				// 		'SmartCAT',
				// 	],
				// },
				technicalSkills: [
					'PHD',
					'Master / German Diploma',
					'Bachelor',
					'College/ Degrees',
					'High School Diploma',
				],
				specify: [
					'Content Creation (e.g. Blogs, Websites)',
					'SEO Writing',
					'Transcreation',
					'Creative Writing ',
				],
				qualifications: [
					'PHD',
					'Master / German Diploma',
					'Bachelor',
					'College/ Degrees',
					'High School Diploma',
				],
			},
			isTranslationExperience: false,
			isTranslationUsed: false,
			isAreasExpertise: false,
			isToolsTranslate: false,
			isTechnicalSkills: false,
			isSpecify: false,
			isQualifications: false,

			careersSteps: null,
			careersStep: 0,
		}
	},

	template: `
  <section class="careers-calc">
					<div class="block-bg">
						<div class="block-bg__elem">
							<img
								src="img/line-bg.png"
								alt=""
							/>
						</div>
					</div>
					<div class="container container_small">
						<h2 class="title title_large careers-calc__title">
							Become a Part of our Network
						</h2>
						<form
							@submit.prevent
							class="careers-calc__form"
						>
							<div class="careers-calc__form-section">
								<div class="careers-calc__form-block">
									<div class="careers-calc__section-header">
										<h3
											class="title title_red title_red_medium careers-calc__form-title"
										>
											Your contact data
										</h3>
									</div>

									<label class="careers-calc__form-label">
										<p>First Name</p>
										<input
											type="text"
											name="firstName"
											id="firstName"
											:value="careers.main.name.value"
											@input="onInput($event.target.value,careers.main.name)"
											:class="careers.main.name.class"
											class="careers-calc__form-input" /></label
									><label class="careers-calc__form-label">
										<p>Last Name</p>
										<input
											type="text"
											name="lastName"
											id="lastName"
											:value="careers.main.lastname.value"
											@input="onInput($event.target.value,careers.main.lastname)"
											:class="careers.main.lastname.class"
											class="careers-calc__form-input" /></label
									><label class="careers-calc__form-label">
										<p>Email Address</p>
										<input
											type="text"
											name="email"
											id="email"
											:value="careers.main.email.value"
											@input="onInput($event.target.value,careers.main.email)"
											:class="careers.main.email.class"
											class="careers-calc__form-input" /></label
									><label class="careers-calc__form-label">
										<p>Phone Number</p>
										<input
											type="text"
											name="phone"
											id="phone"
											:value="careers.main.phone.value"
											@input="onInput($event.target.value,careers.main.phone)"
											:class="careers.main.phone.class"
											class="careers-calc__form-input"
									/></label>
									<label class="careers-calc__form-label">
										<p>Mother tongue</p>
										<input
											type="text"
											name=""
											id=""
											:value="careers.main.tongue.value"
											@input="onInput($event.target.value,careers.main.tongue)"
											:class="careers.main.tongue.class"
											class="careers-calc__form-input"
										/>
									</label>
								</div>
							</div>

							<div class="careers-calc__form-section">
								<div class="careers-calc__section-header">
									<h3
										class="title title_red title_red_medium careers-calc__form-title careers-calc__form-title_left"
									>
										Your translition experience
									</h3>
									<ul class="careers-calc__pos">
										<li
											v-for="(item,index) in careersSteps"
											:class="{'active':index<=careersStep}"
										>
											{{index+1}}
										</li>
									</ul>
								</div>

								<div
									v-show="careersStep === 0"
									class="careers-calc__form-block careers-calc__form-block_left"
								>
									<div class="careers-calc__block-wrapper">
										<div class="careers-calc__block-left">
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													What is your general availability?
												</p>
												<input
													type="text"
													name="firstName"
													id="firstName"
													:value="careers.block1.availability.value"
													@input="onInput($event.target.value,careers.block1.availability)"
													:class="careers.block1.availability.class"
													class="careers-calc__form-input"
											/></label>
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													State your translation experience in years?
													<span>*</span>
												</p>
												<div
													class="get-quote__form-dropdawn dropdawn dropdawn-langfrom"
													:class="{'active':isTranslationExperience}"
												>
													<div
														class="dropdawn__select-btn"
														@click="isTranslationExperience = !isTranslationExperience"
													>
														<span>
															{{careers.block1.translationExperience.value}}
														</span>
														<i class="dropdawn__arrow"></i>
													</div>
													<div class="dropdawn__content">
														<ul class="dropdawn__options">
															<li
																v-for="item in careersData.translationExperience"
																@click="updateTranslationExperience(item)"
															>
																{{item}}
															</li>
														</ul>
													</div>
												</div>
											</label>
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													What can your translation be used for? <span>*</span>
												</p>
												<div
													class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
													:class="{'active':isTranslationUsed}"
													
												>
													<div
														class="dropdawn__select-btn dropdawn--multiple__select-btn"
														@click.self="isTranslationUsed = !isTranslationUsed"
														:class="careers.block1.translationUsed.class"
													>
														<template
															v-if="careers.block1.translationUsed.value[0]"
														>
															<span
																v-for="(item,index) in careers.block1.translationUsed.value"
																@click="delTranslationUsed(index)"
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
																{{item}}
															</span>
														</template>

														<template v-else>Select anything</template>
													</div>
													<div class="dropdawn__content">
														<ul class="dropdawn__options">
															<li
																v-for="el in careersData.translationUsed"
																@click="updateTranslationUsed(el)"
															>
																{{el}}
															</li>
														</ul>
													</div>
												</div>
											</label>
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													What are your language pairs?
												</p>

												<template
													v-for="(pair,index) in careers.block1.langPair.value"
												>
													<p class="careers-calc__input-wrapper">
														<input
															type="text"
															name="firstName"
															id="firstName"
															v-model="pair.first.value"
															class="careers-calc__form-input careers-calc__form-input_medium"
														/>
														<span> > </span>
														<input
															type="text"
															name="firstName"
															id="firstName"
															v-model="pair.second.value"
															class="careers-calc__form-input careers-calc__form-input_medium"
														/>
													</p>
												</template>
											</label>

											<button
												class="btn btn_tomato btn_tomato_outline careers-calc__btn"
												@click="addMorePair()"
											>
												Add More Pair
											</button>
										</div>
										<div class="careers-calc__block-right">
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													Please state your areas of expertise <span>*</span>
												</p>
												<div
													class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
													:class="{'active':isAreasExpertise}"
													
												>
													<div
														class="dropdawn__select-btn dropdawn--multiple__select-btn"
														@click.self="isAreasExpertise = !isAreasExpertise"
														:class="careers.block1.areasExpertise.class"
													>
														<template
															v-if="careers.block1.areasExpertise.value[0]"
														>
															<span
																v-for="(item,index) in careers.block1.areasExpertise.value"
																@click="delAreasExpertise(index)"
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
																{{item}}
															</span>
														</template>

														<template v-else>Select anything</template>
													</div>
													<div class="dropdawn__content">
														<ul class="dropdawn__options">
															<li
																v-for="el in careersData.areasExpertise"
																@click="updateAreasExpertise(el)"
															>
																{{el}}
															</li>
														</ul>
													</div>
												</div>
											</label>
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													Which tools do you use to translate?
												</p>

												<div
													class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
													:class="{'active':isToolsTranslate}"
												>
													<div
														class="dropdawn__select-btn dropdawn--multiple__select-btn"
														@click.self="isToolsTranslate = !isToolsTranslate"
														
													>
														<template
															v-if="careers.block1.toolsTranslate.value[0]"
														>
															<span
																v-for="(item,index) in careers.block1.toolsTranslate.value"
																@click="delToolsTranslate(index)"
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
																{{item}}
															</span>
														</template>

														<template v-else>Select anything</template>
													</div>
													<div class="dropdawn__content">
														<ul class="dropdawn__options">
															<li
																v-for="el in careersData.toolsTranslate"
																@click="updateToolsTranslate(el)"
															>
																{{el}}
															</li>
														</ul>
													</div>
												</div>
											</label>
											<div class="careers-calc__form-pair">
												<p class="careers-calc__form-subtitle">
													Do you have proofreading experience?
												</p>
												<div class="careers-calc__pair-wrapper">
													<div class="careers-calc__radio-wrapper">
														<label
															class="careers-calc__form-label careers-calc__form-label_row careers-calc__form-label_ratio"
														>
															<input
																type="radio"
																name="qualitycheck"
																value="true"
																v-model="careers.block1.proofreading.value"
																id="fullcheck"
																class="careers-calc__form-radio"
															/>
															<span class="careers-calc__radio-box"></span>
															Yes
														</label>

														<label
															class="careers-calc__form-label careers-calc__form-label_row careers-calc__form-label_ratio"
														>
															<input
																type="radio"
																name="qualitycheck"
																value="false"
																v-model="careers.block1.proofreading.value"
																id="fullcheck"
																class="careers-calc__form-radio"
															/>
															<span class="careers-calc__radio-box"></span>
															No
														</label>
													</div>

													<label
														class="careers-calc__form-label careers-calc__form-label_row"
													>
														<input
															type="number"
															name=""
															value=""
															v-model="careers.block1.years.value"
															class="careers-calc__form-input careers-calc__form-input_small"
														/>
														years
													</label>
												</div>
											</div>

											<div class="careers-calc__form-pair">
												<p class="careers-calc__form-subtitle">
													Your pricing per word/language pair
												</p>
												<label
													class="careers-calc__form-label careers-calc__form-label_row"
												>
													<input
														type="number"
														name=""
														value=""
														v-model="careers.block1.pricing.value"
														class="careers-calc__form-input careers-calc__form-input_small"
													/>
													cents
												</label>
											</div>
											<button
												class="btn btn_tomato careers-calc__btn"
												@click="nextStep()"
											>
												Next
											</button>
										</div>
									</div>
								</div>

								<div
									v-show="careersStep === 1"
									class="careers-calc__form-block careers-calc__form-block_left"
								>
									<div class="careers-calc__block-wrapper">
										<div class="careers-calc__block-left">
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													Please select your technical skills
												</p>
												<div
													class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
												>
													<div
														class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
														:class="{'active':isTechnicalSkills}"
													>
														<div
															class="dropdawn__select-btn dropdawn--multiple__select-btn"
															@click.self="isTechnicalSkills = !isTechnicalSkills"
														>
															<template
																v-if="careers.block2.technicalSkills.value[0]"
															>
																<span
																	v-for="(item,index) in careers.block2.technicalSkills.value"
																	@click="delTechnicalSkills(index)"
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
																	{{item}}
																</span>
															</template>

															<template v-else>Select anything</template>
														</div>
														<div class="dropdawn__content">
															<ul class="dropdawn__options">
																<li
																	v-for="el in careersData.technicalSkills"
																	@click="updateTechnicalSkills(el)"
																>
																	{{el}}
																</li>
															</ul>
														</div>
													</div>
												</div>
											</label>
											<div class="careers-calc__form-pair">
												<p class="careers-calc__form-subtitle">
													Do you have content creation experience?
												</p>
												<div class="careers-calc__pair-wrapper">
													<div class="careers-calc__radio-wrapper">
														<label
															class="careers-calc__form-label careers-calc__form-label_row careers-calc__form-label_ratio"
														>
                            </label>
															<label
															class="careers-calc__form-label careers-calc__form-label_row careers-calc__form-label_ratio"
														>
															<input
																type="radio"
																name="experiencecheck"
																value="true"
																v-model="careers.block2.creationExperience.value"
																id="fullcheck"
																class="careers-calc__form-radio"
															/>
															<span class="careers-calc__radio-box"></span>
															Yes
														</label>

														<label
															class="careers-calc__form-label careers-calc__form-label_row careers-calc__form-label_ratio"
														>
															<input
																type="radio"
																name="experiencecheck"
																value="false"
																v-model="careers.block2.creationExperience.value"
																id="fullcheck"
																class="careers-calc__form-radio"
															/>
															<span class="careers-calc__radio-box"></span>
															No
														</label>
													</div>
												</div>
											</div>
											<label v-show='careers.block2.creationExperience.value == "true"' class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													Please Specify:
												</p>
												<div
													class="get-quote__form-dropdawn dropdawn dropdawn-langfrom"
													:class="{'active':isSpecify}"
												>
													<div
														class="dropdawn__select-btn"
														@click="isSpecify = !isSpecify"
													>
														<span v-if='careers.block2.specify.value != ""'>
															{{careers.block2.specify.value}}
														</span>
														<span v-else>
															Select anything
														</span>
														<i class="dropdawn__arrow"></i>
													</div>
													<div class="dropdawn__content">
														<ul class="dropdawn__options">
															<li
																v-for="item in careersData.specify"
																@click="updateSpecify(item)"
															>
																{{item}}
															</li>
														</ul>
													</div>
												</div>
											</label>
											<label class="careers-calc__form-label">
												<p class="careers-calc__form-subtitle">
													Your Qualifications <span>*</span>
												</p>
												<div
													class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
												>
													<div
														class="careers-calc__form-dropdawn dropdawn dropdawn--multiple"
														:class="{'active':isQualifications}"
													
													>
														<div
															class="dropdawn__select-btn dropdawn--multiple__select-btn"
															@click.self="isQualifications = !isQualifications"
																:class="careers.block2.qualifications.class"
														>
															<template
																v-if="careers.block2.qualifications.value[0]"
															>
																<span
																	v-for="(item,index) in careers.block2.qualifications.value"
																	@click="delQualifications(index)"
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
																	{{item}}
																</span>
															</template>

															<template v-else>Select anything</template>
														</div>
														<div class="dropdawn__content">
															<ul class="dropdawn__options">
																<li
																	v-for="el in careersData.qualifications"
																	@click="updateQualifications(el)"
																>
																	{{el}}
																</li>
															</ul>
														</div>
													</div>
												</div>
											</label>
											<button
												class="btn btn_tomato btn_tomato_outline careers-calc__btn"
												@click='prevStep()'
											>
												Go Back
											</button>
										</div>
										<div class="careers-calc__block-right">
											<p
												class="careers-calc__form-subtitle careers-calc__form-subtitle_red"
											>
												Upload your CV & certificates
											</p>
											<div class="get-quote__form-drag">
												<input
													type="file"
													name=""
													id=""
													ref="fileC"
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

													<template v-if='this.careers.block2.file.value != ""'>
														<span>{{this.careers.block2.file.value.name}}</span>
													</template>
													<template v-else>
														Drag file(s) here or click to upload
													</template>
												</p>
											</div>
											<button class="btn btn_tomato careers-calc__btn" @click='submite()'>
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</section>

  `,
	mounted() {
		this.careersSteps = document.querySelectorAll(
			'.careers-calc__form-block_left',
		).length
	},
	computed: {},
	methods: {
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
		updateTranslationExperience(val) {
			this.careers.block1.translationExperience.value = val
			this.isTranslationExperience = false
		},

		updateTranslationUsed(val) {
			if (!this.careers.block1.translationUsed.value.find(el => el === val)) {
				this.careers.block1.translationUsed.value.push(val)
			}
			this.careers.block1.translationUsed.class = 'valid'
		},
		delTranslationUsed(index) {
			this.careers.block1.translationUsed.value.splice(index, 1)
			if (this.careers.block1.translationUsed.value.length <= 0) {
				this.careers.block1.translationUsed.class = 'error'
			}
		},
		updateAreasExpertise(val) {
			if (!this.careers.block1.areasExpertise.value.find(el => el === val)) {
				this.careers.block1.areasExpertise.value.push(val)
			}
			this.careers.block1.areasExpertise.class = 'valid'
		},
		delAreasExpertise(index) {
			this.careers.block1.areasExpertise.value.splice(index, 1)
			if (this.careers.block1.translationUsed.value.length <= 0) {
				this.careers.block1.areasExpertise.class = 'error'
			}
		},
		addMorePair() {
			this.careers.block1.langPair.value.push({
				first: {
					value: '',
				},
				second: {
					value: '',
				},
			})
		},
		updateTechnicalSkills(val) {
			if (!this.careers.block2.technicalSkills.value.find(el => el === val)) {
				this.careers.block2.technicalSkills.value.push(val)
			}
		},
		delTechnicalSkills(index) {
			this.careers.block2.technicalSkills.value.splice(index, 1)
		},
		updateSpecify(val) {
			this.careers.block2.specify.value = val
			this.isSpecify = false
		},

		updateQualifications(val) {
			if (!this.careers.block2.qualifications.value.find(el => el === val)) {
				this.careers.block2.qualifications.value.push(val)
			}
			this.careers.block2.qualifications.class = 'valid'
		},
		delQualifications(index) {
			this.careers.block2.qualifications.value.splice(index, 1)
			if (this.careers.block2.qualifications.value.length <= 0) {
				this.careers.block2.qualifications.class = 'error'
			}
		},
		selectFile() {
			this.careers.block2.file.value = this.$refs.fileC.files[0]
			// select file request
			// let url = 'http://localhost/johanens/dist/files/'
			// let xhr = new XMLHttpRequest()
			// xhr.open('POST', url, true)
			// xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
			// xhr.upload.addEventListener('progress', e => {
			// 	if (e.loaded === e.total) {
			// 		this.isReadySend = true
			// 	}
			// 	console.log((e.loaded * 100.0) / e.total)
			// })
		},
		nextStep() {
			this.careersStep++
		},
		prevStep() {
			this.careersStep--
		},
		goToStep(index) {
			this.careersStep = index
		},

		submite() {
			let flag = true
			for (const key in this.careers.main) {
				if (this.careers.main[key].pattern) {
					this.careers.main[key].isValid = this.isValidCheck(
						this.careers.main[key].value,
						this.pattern[this.careers.main[key].pattern].pattern,
					)
				}
				if (
					this.careers.main[key].isImportant == true &&
					this.careers.main[key].isValid == false
				) {
					flag = false
					this.careers.main[key].class = 'error'
				} else if (
					this.careers.main[key].isImportant == true &&
					this.careers.main[key].value == ''
				) {
					flag = false
					this.careers.main[key].class = 'error'
				}
			}

			let block1Flag = true
			for (const key in this.careers.block1) {
				if (this.careers.block1[key].pattern) {
					this.careers.block1[key].isValid = this.isValidCheck(
						this.careers.block1[key].value,
						this.pattern[this.careers.block1[key].pattern].pattern,
					)
				}
				if (
					this.careers.block1[key].isImportant == true &&
					this.careers.block1[key].isValid == false
				) {
					flag = false
					block1Flag = false
					this.careers.block1[key].class = 'error'
				} else if (
					this.careers.block1[key].isImportant == true &&
					this.careers.block1[key].value == ''
				) {
					flag = false
					block1Flag = false
					this.careers.block1[key].class = 'error'
				}
			}
			if (!block1Flag) {
				this.goToStep(0)
			}

			for (const key in this.careers.block2) {
				if (this.careers.block2[key].pattern) {
					this.careers.block2[key].isValid = this.isValidCheck(
						this.careers.block2[key].value,
						this.pattern[this.careers.block2[key].pattern].pattern,
					)
				}
				if (
					this.careers.block2[key].isImportant == true &&
					this.careers.block2[key].isValid == false
				) {
					flag = false
					this.careers.block2[key].class = 'error'
				} else if (
					this.careers.block2[key].isImportant == true &&
					this.careers.block2[key].value == ''
				) {
					flag = false
					this.careers.block2[key].class = 'error'
				}
			}

			if (flag) {
				const filesData = new FormData()

				for (const key in this.careers.main) {
					if (this.careers.main[key].value != '') {
						filesData.append(key, this.careers.main[key].value)
					}
				}

				for (const key in this.careers.block1) {
					if (this.careers.block1[key].value) {
						if (
							this.careers.block1[key].value != '' &&
							this.careers.block1[key].value.length > 0
						) {
							if (key === 'langPair') {
								this.careers.block1[key].value.forEach((e, i) => {
									filesData.append('langPair' + i, [
										e.first.value,
										e.second.value,
									])
								})
							} else {
								filesData.append(key, this.careers.block1[key].value)
							}
						}
					}
				}

				for (const key in this.careers.block2) {
					if (this.careers.block2[key].value) {
						if (
							this.careers.block2[key].value != '' &&
							this.careers.block2[key].value.length > 0
						) {
							filesData.append(key, this.careers.block2[key].value)
						}
					}
				}

			}
		},
	},
})
