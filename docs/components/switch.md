---
title: Switch 开关
description: 开关按钮，用于表示开关状态/两种状态之间的切换
lang: 'zh-CN'
---
### Switch 开关
> 开关按钮，用于表示开关状态/两种状态之间的切换

<ClientOnly>


::: tip
  如果需要在`jsx`中使用`v-model` 可以安装 [babel-plugin-jsx-v-model](https://github.com/nickmessing/babel-plugin-jsx-v-model)
:::

#### 激活状态

  <template>
     <CodeBlocks>
      <Toggle v-model="value1"/>
   <template slot="code">

```jsx
<Toggle v-model={value1} />
```

  </template>
     </CodeBlocks>

  </template>

#### 非激活状态

  <template>
     <CodeBlocks>
      <Toggle v-model="value2"/>
   <template slot="code">

```jsx
<Toggle v-model={value2} />
```

  </template>
     </CodeBlocks>

  </template>

#### 激活不可用状态

  <template>
     <CodeBlocks>
      <Toggle disabled v-model="value3"/>
   <template slot="code">

```jsx
<Toggle disabled v-model={value3} />
```

  </template>
     </CodeBlocks>

  </template>

#### 未激活不可用状态

  <template>
     <CodeBlocks>
      <Toggle disabled v-model="value4"/>
   <template slot="code">

```jsx
<Toggle disabled v-model={value4} />
```

  </template>
     </CodeBlocks>

  </template>

  <script>
  export default {
    data() {
      return {
        value1: true,
        value2: false,
        value3: true,
        value4: false
      }
    }
  }
</script>

</ClientOnly>

### API
#### Switch props
| 属性      | 说明       | 类型    | 默认值  | 说明 |
| :-------- | :--------- | :------ | :------ | :--- |
| prefixCls | class前缀  | Boolean | `false` | -    |
| value     | Switch的值 | Boolean | `false` | -    |
| disabled  | 禁用状态   | Boolean | `false` | -    |

#### Switch events
| 事件名 | 说明                                | 返回值                |
| :----- | :---------------------------------- | :-------------------- |
| input  | 当前状态，用以`v-model`双向绑定使用 | Boolean               |
| change | 点击事件 & 当前实例                 | `mouse event`, `this` |
