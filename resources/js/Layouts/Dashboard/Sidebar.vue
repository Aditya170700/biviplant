<template>
    <aside class="sidebar-wrapper" data-simplebar="true">
        <div class="sidebar-header">
            <div>
                <img
                    src="/img/icons/icon-72x72.png"
                    class="logo-icon"
                    alt="logo icon"
                />
            </div>
            <div>
                <h4 class="logo-text text-success">Biviplant</h4>
            </div>
            <div class="toggle-icon ms-auto">
                <i class="fas fa-bars text-success"></i>
            </div>
        </div>
        <ul class="metismenu" id="menu">
            <li>
                <Link href="/admin/categories">
                    <div class="parent-icon">
                        <i class="fas fa-boxes"></i>
                    </div>
                    <div class="menu-title">Category</div>
                </Link>
            </li>
        </ul>
    </aside>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
};
</script>
