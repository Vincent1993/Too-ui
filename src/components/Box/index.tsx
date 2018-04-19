import { Component, Vue, Prop } from 'vue-property-decorator'
import className from 'classnames'
import './box.scss'

@Component
export default class Box extends Vue {
  @Prop({ default: 'to-box' })
  prefixCls!: string
  @Prop({ default: '#ffffff' })
  boxColor!: string
  @Prop({ default: false })
  noBorder!: boolean
  @Prop({ default: false })
  noGutter!: boolean
  @Prop({ default: false })
  fullWidth!: boolean

  get boxAttributes(): object {
    return {
      style: {
        backgroundColor: this.boxColor,
      },
      class: className({
        [this.prefixCls]: true,
        [`${this.prefixCls}--fullWidth`]: this.fullWidth,
        [`${this.prefixCls}--noGutter`]: this.noGutter,
        [`${this.prefixCls}--noBorder`]: this.noBorder,
      }),
    }
  }
  render() {
    return <div {...this.boxAttributes}>{this.$slots.default}</div>
  }
}
