<template>
  <div class="flex h-full w-full">
    <p class="my-auto mx-auto block text-blue-700 dark:text-blue-300">Oops! The page <span class="font-mono text-blue-500 dark:text-blue-200">/{{ slug }}</span> does not currently exist.</p>
  </div>
</template>

<script>
export default {
    async asyncData({params}){
        return {slug:params.slug}
    }
}
</script>

<style>

</style>