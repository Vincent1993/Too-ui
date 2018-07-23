/*
 * Extends Vue interface
 */
import Vue, { VNode, VNodeData } from 'vue';
import * as builtin from './builtin-components';
import * as base from './base';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any;

      // builtin components
      transition: base.TsxComponentAttrs<builtin.TransitionProps>;
      'transition-group': base.TsxComponentAttrs<builtin.TransitionGroupProps>;
      'keep-alive': base.TsxComponentAttrs<builtin.KeepAliveProps>;
    }
  }
}
