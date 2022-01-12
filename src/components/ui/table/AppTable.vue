<template>
    <div class="app-table-responsive">
        <table 
        class="app-table"
        table-layout="auto"
        >
            <caption
            v-if="caption"
            >{{caption}}</caption>
            <thead>
                <tr>
                    <th 
                    scope="col"
                    v-for="header in headers"
                    :key="`th-${header}`"
                    >{{header}}</th>
                </tr>
            </thead>
            <tbody>
                <slot></slot>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        headers: {
            type: Array,
            required: true
        },
        rows: {
            type: Number,
            required: true
        },
        hasCaption: {
            type: Boolean,
            default: false
        },
        caption: String
    }
}
</script>

<style lang="scss" scoped>
.app-table-responsive{
    display: block;
    width: 100%;
    overflow-x: auto;
}
.app-table{
    width: 100%;
    max-width: 100%;
    caption{
        text-align: left;
        margin-bottom: 20px;
    }
    th, td{
        text-align: left;
        padding: 10px;
        font-size: 13px;
    }
    tbody th, td{
        border-top: 1px solid var(--secondary-grey)
    }
}
</style>