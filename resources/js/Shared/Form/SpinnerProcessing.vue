<template>
    <div :class="`spinner-border ${color} ${me} ${size}`"></div>
</template>

<script>
export default {
    props: {
        me: {
            type: String,
            default: "me-5",
        },
        color: {
            type: String,
            default: "text-success",
        },
        size: {
            type: String,
            default: "",
        },
    },
};
</script>
