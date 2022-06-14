<template>
    <div class="wrapper">
        <Navbar />
        <Sidebar />
        <main class="page-content">
            <slot />
        </main>

        <a href="javaScript:;" class="back-to-top"
            ><i class="bx bxs-up-arrow-alt"></i
        ></a>
    </div>
</template>

<script>
import Navbar from "../../Layouts/Dashboard/Navbar.vue";
import Sidebar from "../../Layouts/Dashboard/Sidebar.vue";
import Footer from "../../Layouts/Dashboard/Footer.vue";
import { reactive } from "vue";

export default {
    components: { Navbar, Sidebar, Footer },
    props: {
        success: {
            type: String,
            default: "",
        },
        error: {
            type: String,
            default: "",
        },
    },
    setup(props) {
        let reactiveData = reactive(props);

        return {
            reactiveData,
        };
    },
    watch: {
        reactiveData: {
            handler() {
                if (this.reactiveData.success != "") {
                    swal({
                        title: "Success",
                        text: this.reactiveData.success,
                        icon: "success",
                        button: "OK",
                    });
                }
                if (this.reactiveData.error != "") {
                    swal({
                        title: "Error",
                        text: this.reactiveData.error,
                        icon: "error",
                        button: "OK",
                    });
                }
            },
            deep: true,
        },
    },
};
</script>
