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
onMounted(() => {
    const URL = 'https://res.cloudinary.com/dk8so2dgw/video/upload/v1686580761/sample/n7oiqea4clgquovgnzhz.mp3'
    const audio = new Audio(URL)
    audio.play()
})
</script>

<template>
    <TemplateNatural v-if="data" :data="data.data" />
</template>
