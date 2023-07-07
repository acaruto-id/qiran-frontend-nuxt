<script setup>
const props = defineProps({
    color: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="flex min-h-screen flex-col items-center" :class="props.color">
        <div class="relative w-screen grow shadow-3xl md:w-96">
            <slot />
        </div>
    </div>
</template>
