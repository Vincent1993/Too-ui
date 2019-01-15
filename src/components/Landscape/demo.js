import { Component, Vue } from 'vue-property-decorator';
import { Button, Landscape } from 'components';
@Component
export default class LandscapeDemo extends Vue {
  showLandscape = false;
  showLandscape1 = false;
  showLandscape2 = false;
  render() {
    return (
      <div class="demo-container">
        <Button.Group>
          <Button type="primary" onClick={() => (this.showLandscape = true)}>
            图片广告
          </Button>
          <Button type="primary" onClick={() => (this.showLandscape1 = true)}>
            点击蒙层无法关闭
          </Button>
          <Button type="primary" onClick={() => (this.showLandscape2 = true)}>
            无蒙层
          </Button>
        </Button.Group>
        <Landscape v-model={this.showLandscape} closePosition="top-right">
          <img src="https://cdn.dancite.com/dev/attach/pics/bailinghai01/8144dd7a8d5b698e3b73599cefd7073593a3c9da.jpg?x-oss-process=image/quality,q_90/resize,w_375" />
        </Landscape>
        <Landscape v-model={this.showLandscape1} maskClosable={false}>
          <img src="https://cdn.dancite.com/dev/attach/pics/bailinghai01/8144dd7a8d5b698e3b73599cefd7073593a3c9da.jpg?x-oss-process=image/quality,q_90/resize,w_375" />
        </Landscape>
        <Landscape v-model={this.showLandscape2} transparent>
          <img src="https://cdn.dancite.com/dev/attach/pics/bailinghai01/8144dd7a8d5b698e3b73599cefd7073593a3c9da.jpg?x-oss-process=image/quality,q_90/resize,w_375" />
        </Landscape>
      </div>
    );
  }
}
