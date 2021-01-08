<template>
  <div class="container">
    <md-card class="card">
      <md-card-header>
        <p class="md-title">Enter weight</p>
      </md-card-header>
      <form novalidate @submit.prevent="validate">
        <md-card-content>
          <div class="weight-inputs">
            <md-field :class="getValidationClass('stone')">
              <label>Enter stone</label>
              <md-input
                type="number"
                id="stone"
                name="stone"
                v-model="form.stone"
              ></md-input>
              <span class="md-helper-text">st</span>
              <span class="md-error" v-if="!$v.form.stone.required"
                >The stone is required</span
              >
              <span class="md-error" v-else-if="!$v.form.stone.maxlength"
                >Invalid stone</span
              >
            </md-field>
          </div>
          <div class="weight-inputs">
            <md-field :class="getValidationClass('pound')">
              <label>Enter pounds</label>
              <md-input
                type="number"
                id="pound"
                name="pound"
                v-model="form.pound"
              ></md-input>
              <span class="md-helper-text">lbs</span>
              <span class="md-error" v-if="!$v.form.pound.required"
                >The pound is required</span
              >
              <span class="md-error" v-else-if="!$v.form.pound.maxlength"
                >Invalid pound</span
              >
            </md-field>
          </div>
        </md-card-content>
        <md-card-actions>
          <md-button type="submit" class="md-raised md-primary"
            >Submit</md-button
          >
        </md-card-actions>
      </form>
    </md-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  name: "AddWeight",
  mixins: [validationMixin],
  data() {
    return {
      form: {
        stone: null,
        pound: null
      }
    };
  },
  validations: {
    form: {
      stone: {
        required,
        maxlength: maxLength(2)
      },
      pound: {
        required,
        maxlength: maxLength(2)
      }
    }
  },
  methods: {
    ...mapActions(["addNewWeight"]),
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    validate() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.onSubmit();
      }
    },
    onSubmit() {
      this.addNewWeight({ stone: this.form.stone, pound: this.form.pound });
      this.form.stone = null;
      this.form.pound = null;
      this.$v.$reset();
    }
  }
};
</script>

<style scoped>
.container {
  padding-left: 10px;
  padding-right: 10px;
  width: 40%;
}

.card {
  display: flex;
}
</style>
