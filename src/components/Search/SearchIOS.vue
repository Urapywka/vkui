<template>
  <div :class="classNames">
    <div class="Search__in">
      <div class="Search__width" />
      <div class="Search__control">
        <input
          v-bind="$attrs"
          :id="'search-'+searchId"
          ref="input"
          type="text"
          class="Search__input"
          :value="value"
          @input="changeHandler"
          @focus="focusHandler"
          @blur="blurHandler"
          :autoComplete="autoComplete"
        />
        <div class="Search__after-width" v-if="!!$slots.after">
          <!-- <slot name="after"></slot> -->
        </div>
        <label class="Search__placeholder" :for="'search-'+searchId">
          <div class="Search__placeholder-in">
            <vkui-icon name="search" size="16" />
            <div class="Search__placeholder-text" v-html="placeholder" />
          </div>
        </label>
      </div>
      <div class="Search__after" @click="cancelHandler" v-if="!!$slots.after">
        <div class="Search__after-in">
          <slot name="after"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getClassName from '../../helpers/getClassName'
import classnames from '../../lib/classnames'

const baseClassName = getClassName('Search')

let searchId = 0

export default {
  data: () => ({
    showAfter: false,
    focused: false,
    placeholderOffset: null,
    afterWidth: null
  }),
  inheritAttrs: false,
  computed: {
    searchId() {
      return searchId
    },
    classNames () {
      const modifiers = {
        [`Search--${this.theme}`]: true,
        'Search--focused': this.focused,
        'Search--has-value': !!this.value,
        'Search--has-after': !!this.$slots.after
      };
      return classnames(baseClassName, modifiers)
    },
  },
  props: {
    value: {
      type: String,
    },
    placeholder: {
      type: String,
      default: 'Поиск',
    },
    theme: {
      type: String,
      required: false,
      default: 'default',
      validator: (v) => ['header', 'default'].indexOf(v) >= 0
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
  },
  created () {
    searchId++
  },
  methods: {
    changeHandler (e) {
      this.$emit('input', this.$refs.input.value)
    },
    focusHandler (e) {
      this.focused = true
      this.$emit('focus', e)
    },
    blurHandler (e) {
      this.focused = false
      this.$emit('blur', e)
    },
    cancelHandler () {
      this.$emit('input', '')
      this.focused = false
    }
  }
}
</script>

<style>
@import '../../styles/common.css';
@import './SearchIOS.css';
</style>