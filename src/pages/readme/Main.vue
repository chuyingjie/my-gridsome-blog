<template>
  <Layout>
    <div style="min-height: 600px">
      <el-card shadow="never">
        <div v-html="$markdown(text)" class="markdown-body" v-if="text"></div>
        <div
          style="
            min-height: 400px;
            margin-bottom: 20px;
            padding: 20px 0px 20px 0px;
            text-align: center;
          "
          v-else
        >
          <font style="font-size: 30px; color: #dddddd">
            <b>◔ ‸◔？没有博客介绍</b>
          </font>
        </div>
      </el-card>
    </div>
  </Layout>
</template>

<script>
export default {
  name: "ReadmeMainPage",
  data() {
    return {
      text: "",
    };
  },
  methods: {},
};
</script>

<style>
</style>