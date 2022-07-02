<template>
    <div :class="`alert alert-${type ?? 'success'}`" role="alert">
        <i :class="`fas fa-${icon ?? 'check'} me-2`"></i
        >{{ message ?? "Success" }}
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
        },
        icon: {
            type: String,
        },
        message: {
            type: String,
        },
    },
};
</script>
