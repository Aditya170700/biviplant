<template>
    <div class="container-scroller">
        <Navbar />
        <div class="container-fluid page-body-wrapper">
            <Sidebar />
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-12 grid-margin">
                            <div class="card">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead class="bg-primary">
                                                <th class="text-white">No</th>
                                                <th class="text-white">Icon</th>
                                                <th class="text-white">Name</th>
                                                <th></th>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <i
                                                            class="fas fa-tree"
                                                        ></i>
                                                    </td>
                                                    <td>Tanaman</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            class="btn btn-sm btn-success me-2"
                                                        >
                                                            <i
                                                                class="fas fa-eye"
                                                            ></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="btn btn-sm btn-warning me-2"
                                                        >
                                                            <i
                                                                class="fas fa-eye"
                                                            ></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="btn btn-sm btn-danger me-2"
                                                        >
                                                            <i
                                                                class="fas fa-trash"
                                                            ></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../../../Layouts/Dashboard/Navbar.vue";
import Sidebar from "../../../Layouts/Dashboard/Sidebar.vue";
import Footer from "../../../Layouts/Dashboard/Footer.vue";

export default {
    components: { Navbar, Sidebar, Footer },
    setup() {
        //
    },
};
</script>
