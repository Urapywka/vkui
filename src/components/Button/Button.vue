<template>
  <component :is="componentName" :class="classNames" :stopPropagation="true" v-bind="$attrs" v-on="$listeners">
    <div class="Button__in">
      <div class="Button__before" v-if="!!$slots.before"><slot name="before"></slot></div>
      <div class="Button__content" v-if="!!$slots.default"><slot></slot></div>
    </div>
  </component>
</template>

<script>
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'

const baseClassName = getClassName('Button');

export default {
  data: () => ({
    componentName: 'Tappable',
  }),
  computed: {
    classNames () {
      return classnames(baseClassName, {
        [`Button--sz-${this.size}`]: true,
        [`Button--lvl-${this.level}`]: true,
        [`Button--aln-${this.align || 'center'}`]: true,
        [`Button--str`]: this.stretched
      })
    },
  },
  components: {
    Tappable,
  },
  props: {
    level: {
      type: String,
      required: false,
      default: 'primary',
      validator: (v) => ['primary', 'secondary', 'tertiary', 'outline', 'commerce'].indexOf(v) >= 0
    },
    size: {
      type: String,
      required: false,
      default: 'm',
      validator: (v) => ['m', 'l', 'xl'].indexOf(v) >= 0
    },
    align: {
      type: String,
      required: false,
      default: 'left',
      validator: (v) => ['left', 'center', 'right'].indexOf(v) >= 0
    },
    stretched: {
      type: Boolean,
      required: false,
      default: false
    },
    simple: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  created () {
    this.componentName = (this.simple) ? 'div' : 'Tappable';
  },
}
</script>

<style>
@import '../../styles/common.css';
@import './Button.css';
.Button {
  user-select: none;
}
</style>