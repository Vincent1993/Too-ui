<template>
  <div class="snippet">
    <div class="snippet-block">
      <div class="snippet-preview">
        <slot></slot>
      </div>
      <div :class="codeBlockClass">
        <slot name="code"></slot>
        <button
          class="copy-btn"
          data-clipboard-target=".snippet-code"
          @mouseover="() => highlightSnippetCode = true"
          @mouseleave="() => highlightSnippetCode = false"
        >Copy</button>
      </div>
    </div>
  </div>
</template>
<script>
import Clipboard from 'clipboard';
export default {
  name: 'CodeBlockSnippet',

  data() {
    return {
      highlightSnippetCode: false,
    };
  },
  computed: {
    codeBlockClass() {
      return {
        'snippet-code': true,
        'is-highlight': this.highlightSnippetCode,
      };
    },
  },

  mounted() {
    this.clipboard = new Clipboard('.copy-btn');

    this.clipboard.on('success', function(e) {
      alert('Copy success!');
      e.clearSelection();
    });
  },

  beforeDestroy() {
    this.clipboard.destroy();
  },
};
</script>
<style lang="scss">
.snippet {
  &-title,
  &-description,
  &-block {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  &-block {
    display: flex;

    margin-top: 2rem;

    border: 2px solid #f5f5f5;
    border-radius: 6px;
    a {
      &:hover {
        text-decoration: none !important;
      }
    }
  }
  &-preview {
    position: relative;

    flex: 1;

    padding: 1rem;
    &:before {
      position: absolute;
      bottom: 100%;
      left: -1px;

      display: flex;
      align-items: stretch;

      margin-left: -1px;
      padding: 3px 5px;

      content: 'Snipnet';
      vertical-align: top;
      letter-spacing: 1px;
      text-transform: uppercase;

      color: rgba(0, 0, 0, 0.7);
      border-radius: 2px 2px 0 0;
      background: #ffd16d;

      font-size: 7px;
      font-weight: 700;
    }
  }
  &-code {
    position: relative;

    flex: 1;
    pre[class*='language-'],
    div[class*='language-'],
    &.is-highlight {
      border-radius: 0 6px 6px 0;
    }
    pre[class*='language-'] {
      margin: 0;
    }
    div[class*='language-'] {
      height: 100%;
    }
    &.is-highlight {
      box-shadow: 0 0 0 2px #ffd16d;
    }
    code {
      color: #4a4a4a !important;
    }
    .copy-btn {
      position: absolute;
      z-index: 3;
      top: 0.25rem;
      right: 0.25rem;

      cursor: pointer;

      color: #4a4a4a;
      border: none;
      border-radius: 2px;
      outline: 0;
      background: 0 0;

      font-size: 0.625rem;
      line-height: 2;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
        background-color: #ffd16d;
      }
    }
  }
}
</style>


