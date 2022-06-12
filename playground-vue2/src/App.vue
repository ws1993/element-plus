<script setup lang="ts">
import Vue from 'vue'
import { ElTag } from 'element-plus/es/components/tag'
import 'element-plus/es/components/tag/style/index'

import { ElButton } from 'element-plus/es/components/button'
import 'element-plus/es/components/button/style/index'
</script>

<template>
  <div>
    <div>
      <el-tag>Tag</el-tag>
      <el-button type="primary">Button</el-button>
    </div>
    Vue {{ Vue.version }}
  </div>
</template>
