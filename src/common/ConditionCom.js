import { Component, Vue } from 'vue-property-decorator'
import PropTypes from 'vue-types'

const isFunction = target => {
  return target && {}.toString.call(target) === '[object Function]'
}

@Component({
  functional: true,
  props: {
    of: PropTypes.any,
    or: PropTypes.any.def(null),
    when: PropTypes.oneOfType([Boolean, PropTypes.func]),
    orWith: PropTypes.oneOfType([String, PropTypes.object]),
    with: PropTypes.oneOfType([Boolean, PropTypes.func]),
  },
})
export default class ConditionComponent extends Vue {
  render(createElement, context) {
    const shallRenderOf = isFunction(context.props.when)
      ? context.props.when()
      : context.props.when

    const shallRenderWith = isFunction(context.props.with)
      ? context.props.with()
      : context.props.with

    const shallRenderChildren = !!context.children && !!context.children.length

    if (!shallRenderChildren && !context.props.orWith) return null

    function appropriateComponent() {
      return shallRenderChildren
        ? context.children
        : shallRenderOf
          ? context.props.of
          : shallRenderWith
            ? context.props.orWith
            : context.props.or
    }
    return appropriateComponent()
  }
}
