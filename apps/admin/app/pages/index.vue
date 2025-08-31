<script setup lang="ts">
const { count, inc } = useCounter(5)
</script>

<template>
  <div>
    <h1>Admin Page</h1>
    <p>This is the admin page content.</p>
    <UButton @click="inc">테스트</UButton>
    {{ count }}
  </div>
</template>
