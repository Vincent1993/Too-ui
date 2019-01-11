import { Component, Vue } from 'vue-property-decorator';

@Component({
  functional: true
})
export default class Icon extends Vue {
  render(createElement, context) {
    const { type, scriptUrl, ...restAttrs } = context.data.attrs;
    if (
      typeof document !== 'undefined' &&
      typeof window !== 'undefined' &&
      typeof document.createElement === 'function' &&
      typeof scriptUrl === 'string' &&
      scriptUrl.length &&
      !document.querySelector(`script[data-namespace="${scriptUrl}"]`)
    ) {
      const script = document.createElement('script');
      script.setAttribute('src', scriptUrl);
      script.setAttribute('data-namespace', scriptUrl);

      document.body.appendChild(script);
    }

    return createElement(
      'svg',
      {
        attrs: {
          xmlns: 'http://www.w3.org/2000/svg',
          viewBox: '0 0 1024 1024',
          height: '1em',
          width: '1em',
          ...restAttrs
        }
      },
      [
        createElement(
          'use',
          { attrs: { href: `#icon-${type}` } },
          context.children
        )
      ]
    );
  }
}
