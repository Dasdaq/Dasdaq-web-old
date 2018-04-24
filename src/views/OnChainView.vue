<template>
<div id="on-chain" class="container">
    <section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        一键上链
      </h1>
      <h2 class="subtitle">
        有什么要我帮忙传达给全世界吗？我们提供信息一键上链服务！
      </h2>
    </div>
  </div>
</section>
    <div class="field">
        <div class="control">
            <textarea class="textarea is-primary"
            v-model="inputData"
            type="text" placeholder="把你想说的话写在这里吧">
            </textarea>
    </div>
        </div>
        <div class="field is-grouped">
    <div class="control">
        <button class="button is-primary">提交</button>
    </div>
    <div class="control">
        <button class="button is-danger">清空</button>
    </div>
    </div>

</div>
</template>

<script>
export default {
  name: 'OnChainView',
  data() {
    return {
      inputData: '',
    };
  },
  methods: {

  },
};
</script>
