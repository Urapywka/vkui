<template>
  <Tappable
    :class="classNames"
    :component="componentName"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <span class="ActionSheetItem__in"><slot></slot></span>
  </Tappable>
</template>

<script>
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import Tappable from '../Tappable/Tappable'

const baseClassNames = getClassName('ActionSheetItem');

export default {
  data: () => ({
    componentName: 'div',
  }),
  props: {
    theme: {
      type: String,
      default: 'default',
      validator: (v) => ['default', 'destructive', 'cancel'].indexOf(v) >= 0
    },
    autoclose: {
      type: Boolean,
    }
  },
  computed: {
    classNames () {
      return classnames(baseClassNames, { [`ActionSheetItem--${this.theme}`]: true });
    },
  },
  components: {
    Tappable,
  },
  created () {
    this.componentName = this.theme === 'cancel' ? 'span' : 'div';
  },
}
</script>