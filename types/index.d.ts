/*
 * Extends Vue interface
 */
import Vue, { VNode, VNodeData } from 'vue';
import * as builtin from './builtin-components';

declare global {
  namespace JSX {
    interface ElementClass extends Vue {}

    interface IntrinsicElements {
      [elem: string]: any;

    }
  }
}
