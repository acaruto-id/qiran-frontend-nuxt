<script setup>
const route = useRoute()
useHead({
    title: `Undangan untuk ${route.query.name} - Qiran.id`,
})
</script>

<template>
    <TemplateNaturalOpen :name="route.query.name" :slug="route.params.slug" />
</template>
