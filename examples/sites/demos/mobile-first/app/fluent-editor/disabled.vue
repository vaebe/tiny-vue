<template>
  <div>
    <tiny-fluent-editor v-model="content" disabled></tiny-fluent-editor>
    内容：<br />
    {{ content }}
  </div>
</template>

<script>
import TinyFluentEditor from '@opentiny/vue-fluent-editor'

export default {
  components: {
    TinyFluentEditor
  },
  data() {
    return {
      content: '{"ops":[{"insert":"Hello "},{"attributes":{"bold":true},"insert":"FluentEditor"},{"insert":"!"}]}'
    }
  }
}
</script>
