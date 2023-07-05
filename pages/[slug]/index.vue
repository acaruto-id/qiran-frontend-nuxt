<script setup>
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
    <TemplateNatural />
</template>
