---
title: Button 按钮
description:
---

<ClientOnly>
  ### Displays
  #### Types

  > 按钮组件拥有四种不同类型

  <template>
    <CodeBlocks>
      <ButtonGroup>
        <Button>default</Button>
        <Button type="primary">primary</Button>
        <Button type="secondary">
          secondary
        </Button>
        <Button type="warn">
          warn
        </Button>
        <Button type="error">
          error
        </Button>
      </ButtonGroup>

  <template slot="code">

```jsx
  <Button>default</Button>
  <Button type="primary">primary</Button>
  <Button type="secondary">secondary</Button>
  <Button type="warn">warn</Button>
  <Button type="error">error</Button>
```
  </template>
  </CodeBlocks>

  #### Sizes
  > 按钮组件拥有三种大小

  <template>
    <CodeBlocks>
      <ButtonGroup>
        <Button size="small">small</Button>
        <Button>default</Button>
        <Button size="medium">medium</Button>
        <Button size="large">large</Button>
      </ButtonGroup>

  <template slot="code">

  ```jsx

    <Button size="small">small</Button>
    <Button>default</Button>
    <Button size="medium">medium</Button>
    <Button size="large">large</Button>
  ```
  </template>
  </CodeBlocks>
  </template>

  #### Block
  > 将按钮宽度调整为其父容器等宽

  <template>
    <CodeBlocks>
      <ButtonGroup>
        <Button subtle block>block</Button>
        <Button outline block>block</Button>
        <Button block>block</Button>
        <Button type="secondary" block>block</Button>
        <Button type="warn" block>block</Button>
        <Button type="error" block>block</Button>
      </ButtonGroup>

   <template slot="code">

  ```jsx

    <Button subtle block>block</Button>
    <Button outline block>block</Button>
    <Button block>block</Button>
    <Button type="secondary" block>block</Button>
    <Button type="warn" block>block</Button>
    <Button type="error" block>block</Button>
  ```
  </template>
    </CodeBlocks>
  </template>
  ### Styles
  #### Round
  > 圆形边框的按钮

  <template>
    <CodeBlocks>
      <Button type="primary" round>round</Button>
      <Button type="secondary" round>round</Button>
      <Button type="warn" round>round</Button>
      <Button type="error" round>round</Button>

   <template slot="code">

  ```jsx

    <Button type="primary" round>round</Button>
    <Button type="secondary" round>round</Button>
    <Button type="warn" round>round</Button>
    <Button type="error" round>round</Button>
  ```
  </template>
    </CodeBlocks>
  </template>

  #### Outline
  > 边框按钮

  <template>
    <CodeBlocks>
      <ButtonGroup>
        <Button type="primary" outline>outline</Button>
        <Button type="secondary" outline>outline</Button>
        <Button type="warn" outline>outline</Button>
        <Button type="error" outline>outline</Button>
      </ButtonGroup>
        <Button type="primary" outline size="small">outline</Button>
        <Button type="secondary" outline size="small">outline</Button>
        <Button type="warn" outline size="small">outline</Button>
        <Button type="error" outline size="small">outline</Button>
   <template slot="code">

  ```jsx

    <Button type="primary" outline>outline</Button>
    <Button type="secondary" outline>outline</Button>
    <Button type="warn" outline>outline</Button>
    <Button type="error" outline>outline</Button>

    <Button type="primary" outline size="small">outline</Button>
    <Button type="secondary" outline size="small">outline</Button>
    <Button type="warn" outline size="small">outline</Button>
    <Button type="error" outline size="small">outline</Button>
  ```
  </template>
    </CodeBlocks>
  </template>

  ### States
  #### Loading
  > 加载状态，常用于处理异步请求

  <template>
    <CodeBlocks>
      <Button type="primary" loading>primary</Button>
      <Button type="secondary" loading>secondary</Button>
      <Button type="warn" loading>warn</Button>
      <Button type="error" loading>error</Button>

   <template slot="code">

  ```jsx

    <Button type="primary" loading>primary</Button>
    <Button type="secondary" loading>secondary</Button>
    <Button type="warn" loading>warn</Button>
    <Button type="error" loading>error</Button>
  ```
  </template>
    </CodeBlocks>
  </template>

  #### Disabled
  > 禁用状态

  <template>
    <CodeBlocks>
      <Button subtle disabled>disabled</Button>
      <Button outline disabled>disabled</Button>
      <Button type="warn" disabled>disabled</Button>
      <Button type="error" disabled>disabled</Button>

   <template slot="code">

  ```jsx

    <Button subtle disabled>disabled</Button>
    <Button outline disabled>disabled</Button>
    <Button type="warn" disabled>disabled</Button>
    <Button type="error" disabled>disabled</Button>
  ```
  </template>
    </CodeBlocks>
  </template>

  #### Inactive
  > 未激活状态

  <template>
    <CodeBlocks>
      <Button subtle inactive>inactive</Button>
      <Button outline inactive>inactive</Button>
      <Button inactive>inactive</Button>
      <Button type="secondary" inactive>inactive</Button>
      <Button type="warn" inactive>inactive</Button>
      <Button type="error" inactive>inactive</Button>

   <template slot="code">

  ```jsx

    <Button subtle inactive>inactive</Button>
    <Button outline inactive>inactive</Button>
    <Button inactive>inactive</Button>
    <Button type="secondary" inactive>inactive</Button>
    <Button type="warn" inactive>inactive</Button>
    <Button type="error" inactive>inactive</Button>
  ```
  </template>
    </CodeBlocks>
  </template>

  ### Buttons
  #### Default
  > 默认按钮组合

  <template>
    <CodeBlocks>
      <ButtonGroup>
        <Button type="primary">primary</Button>
        <Button type="secondary">secondary</Button>
        <Button type="warn">warn</Button>
        <Button type="error">error</Button>
      </ButtonGroup>

   <template slot="code">

  ```jsx

    <ButtonGroup>
      <Button type="primary">primary</Button>
      <Button type="secondary">secondary</Button>
      <Button type="warn">warn</Button>
      <Button type="error">error</Button>
    </ButtonGroup>
  ```
  </template>
    </CodeBlocks>
  </template>

  #### Addons
  > 默认按钮组合

  <template>
    <CodeBlocks>
      <ButtonGroup addons>
        <Button type="primary">primary</Button>
        <Button type="secondary" inactive>secondary</Button>
        <Button type="warn">warn</Button>
        <Button type="error">error</Button>
      </ButtonGroup>
      <ButtonGroup addons>
        <Button type="primary" outline>primary</Button>
        <Button type="primary" outline>primary</Button>
        <Button type="primary" outline>primary</Button>
        <Button type="primary" outline>primary</Button>
      </ButtonGroup>

   <template slot="code">

  ```jsx

    <ButtonGroup addons>
      <Button type="primary">primary</Button>
      <Button type="secondary" inactive>secondary</Button>
      <Button type="warn">warn</Button>
      <Button type="error">error</Button>
    </ButtonGroup>
    <ButtonGroup addons>
      <Button type="primary" outline>primary</Button>
      <Button type="primary" outline>primary</Button>
      <Button type="primary" outline>primary</Button>
      <Button type="primary" outline>primary</Button>
    </ButtonGroup>
  ```
  </template>
    </CodeBlocks>
  </template>

</template>
</ClientOnly>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击');
    }
  }
};
</script>

### API

#### Button props
| 属性 | 说明 | 类型 | 默认值 | 说明 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| type | 按钮类型 | String | `primary` | 可选值有 `primary` `warn` `error` `secondary` |
| size | 按钮大小 | String |  `normal` | 可选值有 `small` `medium` `large`|
| prefixCls | class前缀 | String | `to-button` | - |
| subtle | 文字按钮 | Boolean | `false` | - |
| inline | 内联按钮 | Boolean | `false` | - |
| outline | 边框按钮 | Boolean | `false` | - |
| disabled | 禁用 | Boolean | `false` | - |
| round | 圆形按钮 | Boolean | `false` | - |
| inactive | 非激活状态 | Boolean | `false` | - |
| block | 父容器等宽 | Boolean | `false` | - |
| loading | 加载状态 | Boolean | `false` | - |
| sticky | 吸底按钮 | Boolean | `false` | 当按钮组拥有吸底属性时，所有按钮都会加上 `sticky` 属性 |

#### Buttons props
| 属性 | 说明 | 类型 | 默认值 | 说明 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| sticky | 吸底按钮组 | Boolean | `false` | - |
| inline | 内联按钮组 | Boolean | `false` | - |
| addons | 插件按钮组 | Boolean | `false` | - |


#### Button events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| click | 按钮被点击时触发 | 无 |
