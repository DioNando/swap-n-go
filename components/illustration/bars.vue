<template>
    <div class="bar">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <path :fill="theme.isDark ? color.surface : color.primary" fill-opacity="1"
                d="M-100 -100L200 -100L200 50L-100 50Z" style="animation: path0 5s linear infinite alternate" />
            <path :fill="theme.isDark ? color.surface : color.primary" fill-opacity="0.5"
                d="M-100 -100L200 -100L200 50L-100 50Z" style="animation: path1 12.5s linear infinite alternate" />
            <path :fill="theme.isDark ? color.surface : color.primary" fill-opacity="0.2"
                d="M-100 -100L200 -100L200 20L-100 20Z" style="animation: path2 30s linear infinite alternate" />
        </svg>
    </div>
</template>

<script setup lang="ts">
import color from '~/data/colors.json'

const theme = useThemeStore()

</script>

<style lang="scss">
.bar {
    height: 10rem;
    transform: rotate(180deg);

    svg {
        width: 100%;
        height: 50%;
    }
}

@keyframes path0 {
    0% {
        transform: rotate(-20deg);
    }

    100% {
        transform: rotate(20deg);
    }
}

@keyframes path1 {
    0% {
        transform: rotate(-40deg);
    }

    100% {
        transform: rotate(40deg);
    }
}

@keyframes path2 {
    0% {
        transform: rotate(60deg);
    }

    100% {
        transform: rotate(-60deg);
    }
}
</style>