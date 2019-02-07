<template>
  <div class="snippet">
    <h4
      v-text="title"
      :id="title"
      class="snippet-title"
    />
    <div
      v-if="$slots.description"
      class="snippet-description"
    >
      <slot name="description"></slot>
    </div>
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
  props: {
    title: {
      type: String,
      required: true,
    },
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
  &-title {
    word-break: break-word;

    color: #363636;

    font-size: 1.5rem;
    line-height: 1.125;
    text-transform: capitalize;
  }

  &-description {
    padding: 1rem 0;
  }
  &-block {
    border: 2px solid #f5f5f5;
    border-radius: 6px;
    display: flex;
    margin-top: 2rem;
  }
  &-preview {
    flex: 1;
    padding: 1rem;
    position: relative;
    &:before {
      content: 'Snipnet';
      align-items: stretch;
      display: flex;
      background: #ffd16d;
      border-radius: 2px 2px 0 0;
      bottom: 100%;
      color: rgba(0, 0, 0, 0.7);
      font-size: 7px;
      font-weight: 700;
      left: -1px;
      letter-spacing: 1px;
      margin-left: -1px;
      padding: 3px 5px;
      position: absolute;
      text-transform: uppercase;
      vertical-align: top;
    }
  }
  &-code {
    flex: 1;
    position: relative;
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
      border-radius: 2px;
      background: 0 0;
      border: none;
      color: #4a4a4a;
      cursor: pointer;
      font-size: 0.625rem;
      outline: 0;
      position: absolute;
      right: 0.25rem;
      top: 0.25rem;
      z-index: 3;
      line-height: 2;
      &:hover {
        background-color: #ffd16d;
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
}
</style>


