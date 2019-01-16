<template>
  <component :is="component" v-bind="$attrs" 
    :theme="(isIOS && theme == 'content') ? 'default' : theme"
    :value="value"
    @input="changeHandler"
    @focus="focusHandler"
    @blur="blurHandler"
  >
    <slot name="before" slot="before" v-if="isIOS && !!$slots.before" />
    <slot v-if="!!$slots.default" />
    <slot name="after" slot="after" v-if="isIOS">Отменить</slot>
  </component>
</template>

<script>
import { platform, IOS } from '../../lib/platform';
import SearchIOS from './SearchIOS';
import SearchAndroid from './SearchAndroid';

const osname = platform();

export default {
  computed: {
    isIOS () {
      return osname === IOS
    },
    component () {
      return this.isIOS ? 'SearchIOS' : 'SearchAndroid';
    },
  },
  inheritAttrs: false,
  components: {
    SearchIOS,
    SearchAndroid,
  },
  props: {
    value: {
      type: String,
    },
    theme: {
      type: String,
      required: false,
      default: 'default',
      validator: (v) => ['header', 'default', 'content'].indexOf(v) >= 0
    },
    autoComplete: {
      type: String,
      default: 'off'
    },

    /**
     * Android only. Вызывается при клике по стрелке (слева). Этот контрол служит для выхода из режима поиска.
     */
    onClose: {
      type: Function,
    },

    /**
     * **Важно:** в коллбэк первым аргументом прилетает *значение* текстового поля.
     * Объект события передается вторым аргументом.
     */
    // onChange: {
    //   type: Function,
    // },
  },
  methods: {
    changeHandler (e) {
      this.$emit('input', e)
    },
    focusHandler (e) {
      this.focused = true
      this.$emit('focus', e)
    },
    blurHandler (e) {
      this.focused = false
      this.$emit('blur', e)
    }
  }
}
</script>