<template>
  <div :class="classNames">
    <div class="Search__container">
      <div class="Search__before">
        <vkui-icon name="search" size="24" v-if="theme != 'header'" @click="cancelHandler" />
        <HeaderButton v-if="theme === 'header'" @click="closeHandler">
          <vkui-icon name="back" size="24" />
        </HeaderButton>
      </div>
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
          :placeholder="placeholder"
        />
      </div>
      <div class="Search__after" v-if="!!value">
        <vkui-icon name="cancel" size="24" v-if="theme != 'header'" @click.native="cancelHandler" />
        <HeaderButton v-if="theme === 'header'" @click="cancelHandler">
          <vkui-icon name="cancel" size="24" />
        </HeaderButton>
      </div>
    </div>
  </div>
</template>

<script>
import getClassName from '../../helpers/getClassName'
import classnames from '../../lib/classnames'
import HeaderButton from '../../components/HeaderButton/HeaderButton'

const baseClassName = getClassName('Search')

let searchId = 0

export default {
  data: () => ({
    
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
        'Search--has-value': !!this.value
      };
      return classnames(baseClassName, modifiers)
    },
  },
  components: {
    HeaderButton
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
  mounted() {
    this.theme === 'header' && this.$el.focus()
  },
  methods: {
    changeHandler (e) {
      this.$emit('input', this.$refs.input.value)
    },
    focusHandler (e) {
      this.$emit('focus', e)
    },
    blurHandler (e) {
      this.focused = false
      this.$emit('blur', e)
    },
    cancelHandler () {
      this.$emit('input', '')
    },
    closeHandler () {
      this.$emit('input', '')
    }
  }
}
</script>

<style>
@import '../../styles/common.css';
@import './SearchAndroid.css';


/*
  content theme
 */

.Search--android.Search--content {
  padding: 8px;
  background-color: var(--background_content); 
  }

.Search--android.Search--content .Search__container {
  background-color: var(--field_background);
  border-radius: 8px;
  padding: 0 4px;
  }

.Search--android.Search--content .Search__before {
  margin-right: 8px;
  }

.Search--android.Search--content .Search__after {
  margin-left: 8px;
  }

.Search--android.Search--content .Search__before .Icon,
.Search--android.Search--content .Search__after .Icon {
  padding: 8px;
  color: var(--icon_secondary);
  }

.Search--android.Search--content .Search__input {
  padding: 11px 0 9px;
  color: var(--text_primary);
  }

.Search--android.Search--content .Search__input::placeholder {
  color: var(--field_text_placeholder);
  }
</style>