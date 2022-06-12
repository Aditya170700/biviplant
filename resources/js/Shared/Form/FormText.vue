<template>
    <div :id="id" :class="['form-text', type ? type : 'text-danger']">
        {{ message }}
    </div>
</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
        },
        id: {
            type: String,
            required: true,
        },
    },
    setup() {
        //
    },
};
</script>
