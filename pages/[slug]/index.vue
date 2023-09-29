<script setup>
const route = useRoute()

const { data, error } = await useFetch(`https://api.qiran.id/v1/invitation/${route.params.slug}`, {
    pick: ['data'],
})
if (error.value !== null) {
    throw createError({ statusCode: error.value.statusCode, statusMessage: error.value.statusMessage })
}

useHead({
    title: 'Wedding Invitation - Qiran.id',
})
</script>

<template>
    <div>
        <TemplateNatural3Open :name="route.query.name" :title="data.data.title" :image="data.data.coverImage" />
        <TemplateNatural3 v-if="data" :data="data.data" />
    </div>
</template>
