<template>
    <Layout :title="'Dashboard'">
        <div class="card">
            <div class="card-header">
                <h4 class="card-title">Basic Inputs</h4>
            </div>

            <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">Default Textarea</div>
                            <div class="card-body">
                                <div class="form-group mb-3">
                                    <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label"
                                        >Example textarea</label
                                    >
                                    <textarea
                                        class="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows="3"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="basicInput">Basic Input</label>
                            <input
                                class="form-control"
                                id="basicInput"
                                placeholder="Enter email"
                            />
                        </div>

                        <div class="form-group">
                            <label for="helpInputTop"
                                >Input text with help</label
                            >
                            <small class="text-muted"
                                >eg.<i>someone@example.com</i></small
                            >
                            <input
                                type="text"
                                class="form-control"
                                id="helpInputTop"
                            />
                        </div>

                        <div class="form-group">
                            <label for="helperText">With Helper Text</label>
                            <input
                                type="text"
                                id="helperText"
                                class="form-control"
                                placeholder="Name"
                            />
                            <p>
                                <small class="text-muted"
                                    >Find helper text here for given
                                    textbox.</small
                                >
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="disabledInput">Disabled Input</label>
                            <input
                                type="text"
                                class="form-control"
                                id="disabledInput"
                                placeholder="Disabled Text"
                                disabled
                            />
                        </div>
                        <div class="form-group">
                            <label for="disabledInput">Readonly Input</label>
                            <input
                                type="text"
                                class="form-control"
                                id="readonlyInput"
                                readonly="readonly"
                                value="You can't update me :P"
                            />
                        </div>

                        <div class="form-group">
                            <label for="disabledInput">Static Text</label>
                            <p class="form-control-static" id="staticInput">
                                email@mazer.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="row">
            <div class="col-12 col-lg-9">
                <div class="row">
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon purple">
                                            <i class="fas fa-eye"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">
                                            Profile Views
                                        </h6>
                                        <h6 class="font-extrabold mb-0">
                                            112.000
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon blue">
                                            <i class="fas fa-user"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">
                                            Followers
                                        </h6>
                                        <h6 class="font-extrabold mb-0">
                                            183.000
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon green">
                                            <i class="fas fa-user-plus"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">
                                            Following
                                        </h6>
                                        <h6 class="font-extrabold mb-0">
                                            80.000
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body px-3 py-4-5">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="stats-icon red">
                                            <i class="fas fa-bookmark"></i>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <h6 class="text-muted font-semibold">
                                            Saved Post
                                        </h6>
                                        <h6 class="font-extrabold mb-0">112</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3">
                <div class="card">
                    <div class="card-body py-4 px-5">
                        <div class="d-flex align-items-center">
                            <div class="avatar avatar-xl">
                                <img
                                    src="/assets/images/faces/1.jpg"
                                    alt="Face 1"
                                />
                            </div>
                            <div class="ms-3 name">
                                <h5 class="font-bold">John Duck</h5>
                                <h6 class="text-muted mb-0">@johnducky</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h4>Recent Messages</h4>
                    </div>
                    <div class="card-content pb-4">
                        <div class="recent-message d-flex px-4 py-3">
                            <div class="avatar avatar-lg">
                                <img src="/assets/images/faces/4.jpg" />
                            </div>
                            <div class="name ms-4">
                                <h5 class="mb-1">Hank Schrader</h5>
                                <h6 class="text-muted mb-0">@johnducky</h6>
                            </div>
                        </div>
                        <div class="recent-message d-flex px-4 py-3">
                            <div class="avatar avatar-lg">
                                <img src="/assets/images/faces/5.jpg" />
                            </div>
                            <div class="name ms-4">
                                <h5 class="mb-1">Dean Winchester</h5>
                                <h6 class="text-muted mb-0">@imdean</h6>
                            </div>
                        </div>
                        <div class="recent-message d-flex px-4 py-3">
                            <div class="avatar avatar-lg">
                                <img src="/assets/images/faces/1.jpg" />
                            </div>
                            <div class="name ms-4">
                                <h5 class="mb-1">John Dodol</h5>
                                <h6 class="text-muted mb-0">@dodoljohn</h6>
                            </div>
                        </div>
                        <div class="px-4">
                            <button
                                class="btn btn-block btn-xl btn-outline-primary font-bold mt-3"
                            >
                                Start Conversation
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-header">
                        <h4>Visitors Profile</h4>
                    </div>
                    <div class="card-body">
                        <div id="chart-visitors-profile"></div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import Layout from "../../Layouts/Dashboard/App.vue";

export default {
    components: { Layout },
    setup() {
        //
    },
};
</script>
