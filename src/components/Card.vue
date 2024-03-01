<template>
    <div class="card" :class="{ 'hovered': isHovered }" @mouseover="toggleHover(true)" @mouseleave="toggleHover(false)">
        <div id="cardTitle" class="card-header bg-success text-white">
            <slot name="cardHeader"></slot>
        </div>
        <div class="card-body">
            <slot name="cardBody"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardView',
        data() {
            return {
                isHovered: false
            };
        },
        methods: {
            toggleHover(state) {
                this.isHovered = state;
            }
        }
    }
</script>

<style scoped>
    .card {
        width: 18rem;
        margin: .5rem;
        transition: transform 0.3s ease;
    }

    .hovered {
        transform: scale(1.05); /* Adjust the scale factor as per your preference */
    }

    #cardTitle {
        border-radius: 12px;
    }
</style>
