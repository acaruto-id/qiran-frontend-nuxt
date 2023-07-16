<script setup>
import { ref } from 'vue'

const props = defineProps({
    name: {
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

const cover = ref(null)

onBeforeMount(() => {
    document.documentElement.style.overflow = 'hidden'
})

function open() {
    const URL = 'https://res.cloudinary.com/dk8so2dgw/video/upload/v1686580761/sample/n7oiqea4clgquovgnzhz.mp3'
    const audio = new Audio(URL)
    audio.play().then(() => {
        window.scrollTo(0, 0)
        document.documentElement.style.overflow = 'auto'
        cover.value.classList.add('-translate-y-full')
    })
}
</script>

<template>
    <div
        ref="cover"
        class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-center text-white transition-transform duration-1000"
    >
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
            <button class="w-full rounded-lg border border-white py-2" @click="open()">Buka Undangan</button>
        </div>
    </div>
</template>
