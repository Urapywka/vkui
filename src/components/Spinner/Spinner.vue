<template>
  <div :class="classNames">
    <vkui-icon name="spinner" :size="iconSize" class="Spinner__self" />
  </div>
</template>

<script>
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'

const baseClassName = getClassName('Spinner');

export default {
  computed: {
    classNames () {
      return classnames(baseClassName)
    },
    iconSize () {
      switch (this.size) {
        case 'large':
          return 44;
        case 'medium':
          return 32;
        case 'small':
          return 16;
        default:
          return 24;
      }
    }
  },
  props: {
    size: {
      type: String,
      default: 'regular',
      validator: (v) => ['small', 'regular', 'large', 'medium'].indexOf(v) >= 0
    },
  },
}
</script>

<style>
@import './Spinner.css';
</style>