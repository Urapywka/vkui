<template>
  <div :class="classNames" :style="{ paddingBottom: this.insets && this.insets.bottom + 'px' || null }">
    <slot></slot>
  </div>
</template>

<script>
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'

const baseClassName = getClassName('Tabbar');

export default {
  inject: {
    insets: {
      type: Object,
      default: {}
    }
  },
  computed: {
    classNames () {
      return classnames(
        baseClassName,
        `Tabbar--l-${this.typeItemLayout}`, {
        'Tabbar--shadow': this.shadow
      })
    },

    typeItemLayout() {
      switch (this.itemsLayout) {
        case 'horizontal':
        case 'vertical':
          return this.itemsLayout;
        default:
          return this.$slots.default.length > 2 ? 'vertical' : 'horizontal';
      }
    }
  },
  props: {
    /**
     * флаг для показа/скрытия верхней тени (Android) или границы (iOS)
     */
    shadow: {
      type: Boolean,
      required: false,
      default: true
    },

    itemsLayout: {
      validator: (value) => {
        return ['vertical', 'horizontal', 'auto'].indexOf(value) !== -1;
      }
    }
  },
}
</script>

<style>
@import '../../styles/common.css';
@import './Tabbar.css';
</style>