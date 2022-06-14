<template>
    <nav
        aria-label="..."
        v-if="links.length > 3"
        class="d-flex justify-content-between align-items-center"
    >
        <ul class="pagination">
            <li
                :class="`page-item ${link.active ? 'active' : ''}`"
                v-for="(link, index) in links"
                :key="index"
            >
                <Link
                    class="page-link"
                    :href="`${link.url ? link.url : '#'}`"
                    style="cursor: pointer"
                >
                    {{
                        index == 0
                            ? "Prev"
                            : index == links.length - 1
                            ? "Next"
                            : link.label
                    }}
                </Link>
            </li>
        </ul>
        Show {{ from }} - {{ to }} from {{ total }} data
    </nav>
</template>
<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        Link,
    },
    props: {
        links: Array,
        from: Number,
        to: Number,
        total: Number,
    },
};
</script>
