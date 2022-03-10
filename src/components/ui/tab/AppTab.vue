<template>
  <div class="app-tab">
    <ul>
        <li
        v-for="(option, index) in options"
        :key="index"
        >
            <button
            @click="handleAction(option.action)"
            :class="option.action === itemSelected ? 'active' : ''"
            >{{ option.label }}</button>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'app-tab',
    props: {
        options: {
            type: Array,
            required: true
        },
        itemSelected: {
            type: String,
            required: true
        }
    },
    methods: {
        handleAction(ev) {
            this.$emit('tabAction', ev)
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    display: flex;
    li{
        padding: .2rem .5rem;
    }
}
.active{
    border-bottom: 3px solid var(--primary-blue)
}
</style>