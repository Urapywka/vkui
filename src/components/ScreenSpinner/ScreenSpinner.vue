<template>
  <PopoutWrapper :class="classNames">
    <div class="ScreenSpinner__container">
      <Spinner size="large" v-bind="$attrs" />
    </div>
  </PopoutWrapper>
</template>

<script>
import Spinner from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames'

const baseClassName = getClassName('ScreenSpinner');

export default {
  computed: {
    classNames () {
      return classnames(baseClassName)
    },
  },
  components: {
    Spinner,
    PopoutWrapper,
  },
}
</script>

<style>
@import '../../styles/common.css';
@import './ScreenSpinner.css';
</style>