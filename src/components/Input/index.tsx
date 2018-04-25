import { Component, Vue, Prop, Watch, Emit } from 'vue-property-decorator'
import className from 'classnames'
import './input.scss'

interface HandleNameChangeInterface {
  target: HTMLInputElement
}

type alignTextTypes = 'left' | 'center' | 'right'
@Component({
  inheritAttrs: true,
})
export default class ToInput extends Vue {
  private focused: boolean = false

  @Prop({ default: 'to-input' })
  prefixCls!: string

  @Prop([String, Number])
  value!: string | number

  @Prop({ required: true, type: String })
  id!: string

  @Prop() title!: string

  @Prop({ default: 'text' })
  type!: string

  @Prop({ default: false })
  disabled!: boolean

  @Prop() placeholder!: string

  @Prop({ default: false })
  autoFocus!: boolean

  @Prop({ default: false })
  autoComplete!: boolean

  @Prop({ default: true })
  clearable!: boolean

  @Prop({ default: false })
  readonly!: boolean

  @Prop() min!: number

  @Prop() max!: number

  @Prop({ default: false })
  required!: boolean

  @Prop({ default: false, type: [Function, Boolean] })
  validation!: any

  @Prop({ default: true })
  noValidate!: boolean

  @Prop() appendContent!: string

  @Prop() prependContent!: string

  @Prop({ default: 'left' })
  alignText!: alignTextTypes

  private get valid(): boolean {
    return typeof this.validation === 'function'
      ? this.validation.call(this, this.value)
      : this.validation
  }

  private get inputAttributes(): object {
    return {
      attrs: {
        for: this.id,
      },
      class: className({
        [this.prefixCls]: true,
        [`${this.prefixCls}--active`]: this.focused,
        [`${this.prefixCls}--invalid`]: !this.valid && !this.noValidate,
      }),
    }
  }

  get inputFieldAttributes(): object {
    return {
      class: className({
        [`${this.prefixCls}-input`]: true,
        [`text-${this.alignText}`]: true,
      }),
      attrs: {
        placeholder: this.placeholder,
        autocomplete: this.autoComplete,
        autofocus: this.autoFocus,
        required: this.required,
        readonly: this.readonly,
        disabled: this.disabled,
        min: this.min,
        max: this.max,
        type: this.type,
      },
    }
  }
  get showClear(): boolean {
    return (
      this.clearable && (typeof this.value !== 'undefined' && this.value !== '')
    )
  }

  @Emit('focus')
  handleFocus(): void {
    this.focused = true
  }

  @Emit('blur')
  handleBlur(): void {
    this.focused = false
  }

  @Emit('input')
  handleInput(value: string): void {}

  @Emit('clear')
  @Emit('input')
  handleClearClick(value: string): void {
    (this.$refs.input as HTMLElement).focus()
  }

  render() {
    const prependRender =
      this.$slots.prepend || this.prependContent ? (
        <div {...{ class: `${this.prefixCls}-prepend` }}>
          {this.$slots.prepend || this.prependContent}
        </div>
      ) : null

    const appendRender =
      this.$slots.append || this.appendContent || this.showClear ? (
        <div {...{ class: `${this.prefixCls}-append` }}>
          {this.readonly ? null : (
            <div
              {...{ class: `${this.prefixCls}-clear` }}
              onClick={() => this.handleClearClick('')}
            >
              <i {...{ class: `fa fa-times-circle` }} />
            </div>
          )}

          {this.$slots.append || this.appendContent}
        </div>
      ) : null

    return (
      <label {...this.inputAttributes}>
        {prependRender}
        <div {...{ class: `${this.prefixCls}-field` }} data-title={this.title}>
          <input
            {...this.inputFieldAttributes}
            value={this.value}
            onInput={e => this.handleInput(e.currentTarget.value.trim())}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          {this.disabled ? null : appendRender}
          <transition />
        </div>
      </label>
    )
  }
}
