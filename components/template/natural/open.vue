<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <TemplateWrapper color="bg-sage-700">
        <div class="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-center text-white">
            <img :src="image" alt="Cover" class="absolute inset-0 -z-10 h-full w-full object-cover brightness-50" />
            <h1 class="pb-20 font-monte text-5xl">{{ title }}</h1>
            <h2 class="pb-12 text-xl">
                Kepada Yth. <br />
                Bapak/Ibu/Saudara/i
            </h2>
            <h2 class="pb-20 text-3xl font-bold">
                {{ props.name }}
            </h2>
            <div class="w-full max-w-sm px-12">
                <NuxtLink :to="'/' + props.slug">
                    <button class="w-full rounded-lg border border-white py-2">Buka Undangan</button>
                </NuxtLink>
            </div>
        </div>
    </TemplateWrapper>
</template>
