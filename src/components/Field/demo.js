import { Component, Vue } from 'vue-property-decorator';
import { Field } from './index';
import CellItem from '@/components/CellItem/';

@Component
export default class FieldDemo extends Vue {
  render() {
    return (
      <div class="demo-container full-width">
        <Field title="field Title" brief="field breif">
          <CellItem title="标题内容" brief="展示摘要描述" addon="额外描述">
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
          <CellItem title="标题内容" brief="展示摘要描述" addon="额外描述">
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
        </Field>
        <Field
          title="field Title2"
          brief="field breif2"
          style="margin-top: 5px;"
        >
          <CellItem title="标题内容" brief="展示摘要描述" addon="额外描述">
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
          <div slot="footer">field footer</div>
        </Field>
      </div>
    );
  }
}
