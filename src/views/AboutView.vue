<template>
  <div class="card">
		<div class="flex-group">
			<input v-model="ml" type="number" id="ml">
			<label for="ml">
				ml
			</label>
      <input v-model="tsp" type="number" id="tsp">
			<label for="tsp">
				tsp
			</label>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
		//Does some nice formatting on the number, if it's a decimal, to make it a little more readable and limit it to 10 total characters
		format(num) {
			num = Number(num);
			return parseInt(num) === num ? num : num.toString().substring(0, 10);
		}
	},

	computed: {
		tsp: {
			get() {
				return this.format(this.oz * 6);
			},
			set(val) {
				this.oz = val / 6;
			}
		},
		ml: {
			get() {
				return parseInt(this.format(this.oz * 29.57352968750042));
			},
			set(val) {
				this.oz = val / 29.57352968750042;
			}
		},
		tbsp: {
			get() {
				return this.format(this.oz * 2);
			},
			set(val) {
				this.oz = val / 2;
			}
		},
		ounce: {
			get() {
				return this.format(this.oz);
			},
			set(val) {
				this.oz = val;
			}
		},
		cup: {
			get() {
				return this.format(this.oz / 8);
			},
			set(val) {
				this.oz = val * 8;
			}
		},
		pint: {
			get() {
				return this.format(this.oz / 16);
			},
			set(val) {
				this.oz = val * 16;
			}
		},
		quart: {
			get() {
				return this.format(this.oz / 32);
			},
			set(val) {
				this.oz = val * 32;
			}
		},
		liter: {
			get() {
				return Number(this.format(this.oz * 0.02957352968750042)).toFixed(2);
			},
			set(val) {
				this.oz = val / 0.02957352968750042;
			}
		},
		gallon: {
			get() {
				return this.format(this.oz / 128);
			},
			set(val) {
				this.oz = val * 128;
			}
		}
	}
}


</script>