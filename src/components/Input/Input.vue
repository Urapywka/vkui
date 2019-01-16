<template>
  <div :class="classNames">
    <input
      v-bind="$attrs"
      class="Input__el"
      ref="input"
      :placeholder="placeholder"
      :value="value"
      @input="changeHandler"
      @focus="focusHandler"
    />
    <div class="Input__border" />
  </div>
</template>

<script>
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'

const baseClassName = getClassName('Input');

export default {
  data: () => ({
    
  }),
  inject: {
    isWebView: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    classNames () {
      const modifiers = {
        [`Input--${this.alignment}`]: this.alignment,
        [`Input--s-${this.status}`]: this.status
      };
      return classnames(baseClassName, modifiers)
    }
  },
  props: {
    value: {
      type: [String, Number]
    },
    type: {
      type: String,
      required: false,
      default: 'text',
      // validator: (v) => [
      //   'text', 'password',
      //   'date', 'datetime-local', 'time', 'month',
      //   'email', 'number', 'tel', 'url'
      // ].indexOf(v) >= 0
    },
    alignment: {
      type: String,
      required: false,
      default: 'left',
      validator: (v) => ['left', 'center', 'right'].indexOf(v) >= 0
    },
    placeholder: {
      type: String,
    },
    status: {
      type: String,
      required: false,
      default: 'default',
      validator: (v) => ['default', 'error', 'verified'].indexOf(v) >= 0
    },
  },
  methods: {
    changeHandler () {
      this.$emit('input', this.$refs.input.value)
    },
    focusHandler (e) {
      this.$emit('focus', e)
    }
  }
}
</script>

<style>
@import './Input.css';
</style>