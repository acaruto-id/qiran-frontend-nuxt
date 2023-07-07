<script setup>
const route = useRoute()
useHead({
    title: `Undangan untuk ${route.query.name} - Qiran.id`,
})

const { data, error } = await useFetch(`https://api.qiran.id/v1/invitation/${route.params.slug}`, {
    transform: ({ data }) => {
        return {
            title: data.title,
            coverImage: data.coverImage,
        }
    },
})
if (error) {
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>

<template>
    <TemplateNaturalOpen
        :name="route.query.name"
        :slug="route.params.slug"
        :title="data.title"
        :image="data.coverImage"
    />
</template>
