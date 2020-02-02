<template>
  <div v-bind="$attrs" v-on="$listeners" :class="classNames">
    <div class="TabbarItem__in">
       <div class="TabbarItem__icon">
        <slot></slot>
        <span v-if="label" class="TabbarItem__label">{{ label }}</span>
      </div>
      <div class="TabbarItem__text">{{ text }}</div>
    </div>
  </div>
</template>

<script>
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'

const baseClassName = getClassName('TabbarItem');

export default {
  computed: {
    classNames () {
      return classnames(baseClassName, {
        'TabbarItem--selected': this.selected
      })
    },
  },
  props: {
    label: {
      type: String,
    },
    text: {
      type: String,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
  },
}
</script>

<style>
@import '../../styles/common.css';
@import './TabbarItem.css';
</style>