---
title: Button 按钮
---

<ClientOnly>
  <template>
    <CodeBlocks title="Types">
      <ButtonGroup>
        <Button>default</Button>
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

  <template slot="description">
    <div>四种按钮类型</div>
  </template>
  <template slot="code">

```vue
  <Button>default</Button>
  <Button type="secondary">secondary</Button>
  <Button type="warn">warn</Button>
  <Button type="error">error</Button>
```

  </template>
  </CodeBlocks>
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
| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| type | 按钮类型 | String | `primary`、`warn`、`error`, `secondary` | `primary` |
| prefixCls | class前缀 | String | - | `to-button` |
| disabled | 是否禁用 | Boolean | `true` \| `false` | `false` |
| size | 按钮大小 | String | `small`、`medium` | `medium` |

#### Button events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| click | 按钮被点击时触发 | 无 |
