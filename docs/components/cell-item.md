---
title: Cell Item 列表单元
description: 单元格列表用于展现并列层级的信息内容。
lang: 'zh-CN'
---

### Cell Item 列表单元
> CellItem 单元格列表用于展现并列层级的信息内容。

<ClientOnly>

#### 基础用法

  <template>
    <CodeBlocks style="background: #f9fafb;">
      <Field title="Cell Item" brief="CellItem List">
        <CellItem title="禁用条目" disabled arrow />
        <CellItem title="有箭头" arrow />
        <CellItem title="无箭头" />
      </Field>

  <template slot="code">

```jsx
import { Field, CellItem } from '@toojs/too-ui';

<Field title="Cell Item" brief="CellItem List">
  <CellItem title="禁用条目" disabled arrow />
  <CellItem title="有箭头" arrow />
  <CellItem title="无箭头" />
</Field>;
```

  </template>
  </CodeBlocks>
  </template>

#### 单行

  <template>
    <CodeBlocks style="background: #f9fafb;">
      <Field title="Cell Item" brief="CellItem List">
        <CellItem title="禁用条目" addon="额外内容" disabled arrow />
        <CellItem title="无分隔线" arrow noBorder/>
        <CellItem title="无箭头" disabled><Toggle slot="right" disabled :value="true"/></CellItem>
        <CellItem title="无箭头"><Toggle slot="right" /></CellItem>
        <CellItem title="无箭头" addon="￥300.00">
          <Placeholder slot="prefix" />
        </CellItem>
        <CellItem title="无箭头" addon="￥300.00">
          <Placeholder slot="prefix" shape="square"/>
        </CellItem>
        <CellItem title="有箭头" addon="￥300.00" arrow/>
      </Field>

  <template slot="code">

```jsx
import { Field, CellItem } from '@toojs/too-ui';

<Field title="Cell Item" brief="CellItem List">
  <CellItem title="禁用条目" addon="额外内容" disabled arrow />
  <CellItem addon="无分隔线" arrow noBorder/>
  <CellItem title="无箭头" disabled>
    <Toggle slot="right" disabled value={true} />
  </CellItem>
  <CellItem title="无箭头">
    <Toggle slot="right" />
  </CellItem>
  <CellItem title="无箭头" addon="￥300.00">
    <Placeholder slot="prefix" />
  </CellItem>
  <CellItem title="无箭头" addon="￥300.00">
    <Placeholder slot="prefix" shape="square" />
  </CellItem>
  <CellItem title="有箭头" addon="￥300.00" arrow />
</Field>;
```

  </template>
  </CodeBlocks>
  </template>

#### 多行

  <template>
    <CodeBlocks style="background: #f9fafb;">
      <Field title="Cell Item" brief="CellItem List">
        <CellItem title="禁用条目" addon="额外内容" disabled brief="摘要内容" />
        <CellItem title="无箭头" brief="摘要内容摘要内容摘要内容摘要内容">
          <Toggle slot="right" />
        </CellItem>
        <CellItem title="无箭头" brief="摘要内容摘要内容摘要" />
        <CellItem title="有箭头" arrow>
          <span slot="brief">摘要内容摘要内容摘要内容摘要内容</span>
          <span slot="extra" style="font-size: 0.8em;">
            列表单元下方的额外内容
          </span>
        </CellItem>
      </Field>

  <template slot="code">

```jsx
import { Field, CellItem } from '@toojs/too-ui';

<Field title="Cell Item" brief="CellItem List">
  <CellItem title="禁用条目" addon="额外内容" disabled brief="摘要内容" />
  <CellItem title="无箭头" brief="摘要内容摘要内容摘要内容摘要内容">
    <Toggle slot="right" />
  </CellItem>
  <CellItem title="无箭头" brief="摘要内容摘要内容摘要" />
  <CellItem title="有箭头" arrow>
    <span slot="brief">摘要内容摘要内容摘要内容摘要内容</span>
    <span slot="extra" style="font-size: 0.8em;">
      列表单元下方的额外内容
    </span>
  </CellItem>
</Field>;
```

  </template>
  </CodeBlocks>
  </template>
</ClientOnly>

### API

#### Cell Item props
| 属性 | 说明 | 类型 | 默认值 | 说明 |
| :------------ | :------------ | :------------ | :------------ | :------------ |
| prefixCls | class前缀 | String | `to-cell-item` | - |
| title | 标题 | String | - | - |
| brief | 描述内容 | String | - | 位于标题下方 |
| addon | 额外内容 | String | - | 单元列表尾部 |
| arrow | 箭头 | Boolean | false | 列表的箭头 |
| disabled | 禁用状态 | Boolean | false | 是否禁止点击 |
| noBorder | 无分割线 | Boolean | false | - |

#### Cell Item slots
| 名称 | 说明 |
| :------------ | :------------ |
| prefix | 同 `props:prefix` |
| brief | 同 `props:brief` |
| right | 同 `props:addon` |
| default | 默认内容插槽 |

#### Cell Item events
| 事件名 | 说明 | 返回值 |
| :------------ | :------------ | :------------ |
| click | 单元格被点击时触发 | 无 |
