import { Component, Vue } from 'vue-property-decorator';
import { CellItem } from './index';
import { Field } from '@/components/Field/';

@Component
export default class CellItemDemo extends Vue {
  render() {
    return (
      <Field title="CellItem" brief="CellItem List">
        <CellItem title="标题内容" brief="展示摘要描述" addon="额外描述" arrow>
          <span
            slot="prefix"
            style={{
              display: 'block',
              width: '48px',
              height: '48px',
              borderRadius: '100%',
              background: '#ddd'
            }}
          />
        </CellItem>

        <CellItem
          title="标题内容"
          brief="展示摘要描述"
          addon="额外描述"
          disabled
        >
          <span
            slot="prefix"
            style={{
              display: 'block',
              width: '48px',
              height: '48px',
              borderRadius: '100%',
              background: '#ddd'
            }}
          />
        </CellItem>
        <CellItem title="无边框" brief="展示摘要描述" addon="额外描述" noBorder>
          <span
            slot="prefix"
            style={{
              display: 'block',
              width: '12px',
              height: '12px',
              background: '#f3f3f3'
            }}
          />
        </CellItem>
        <CellItem title="标题内容" addon="额外描述" />
        <CellItem title="标题内容" brief="展示摘要描述" arrow />
        <CellItem title="标题内容" brief="展示摘要描述" arrow>
          <p slot="extra" style="font-size: 0.8em;">
            面向金融场景的Vue移动端UI组件库，丰富、灵活、实用，快速搭建优质的金融类产品，让复杂的金融场景变简单。基于「合理、好用」设计价值观，从交互操作、视觉抽象、图形可视等角度共同解决问题。
          </p>
        </CellItem>
      </Field>
    );
  }
}
