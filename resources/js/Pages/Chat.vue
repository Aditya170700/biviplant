<script setup>
    import HeaderWithTitle from '../Shared/HeaderWithTitle.vue';
    import Sidebar from "./../Shared/Homepage/Sidebar.vue";


</script>

<template>
    <div>
        <HeaderWithTitle link_back="/" title="Terhubung Dengan Kami"></HeaderWithTitle>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper">
            <!-- Live Chat Intro-->
            <div class="live-chat-intro mb-3">
                <p>Mulai Percakapan Dengan Admin</p>
                <img src="img/bg-img/9.jpg" alt="" />
                <div class="status online">Admin sedang online</div>
                <!-- Use this code for "Offline" Status-->
                <!-- .status.offline We’ll be back soon-->
            </div>
            <!-- Support Wrapper-->
            <div class="support-wrapper py-3">
                <div class="container">
                    <!-- Live Chat Wrapper-->
                    <div class="live-chat-wrapper">
                        <!-- Agent Message Content-->
                        <div
                            class="agent-message-content d-flex align-items-start"
                        >
                            <!-- Agent Thumbnail-->
                            <div class="agent-thumbnail me-2 mt-2">
                                <img src="img/bg-img/9.jpg" alt="" />
                            </div>
                            <!-- Agent Message Text-->
                            <div class="agent-message-text">
                                <div class="d-block">
                                    <p>
                                        Hi there! You can start asking your
                                        question below. I am ready to help.
                                    </p>
                                </div>
                                <div class="d-block">
                                    <p>How can I help you with?</p>
                                </div>
                                <span>12:00</span>
                            </div>
                        </div>
                        <!-- User Message Content-->
                        <div class="user-message-content">
                            <!-- User Message Text-->
                            <div class="user-message-text">
                                <div class="d-block">
                                    <p style="background-color: #FFFFFF !important; color: #747794;">
                                        I liked your template.
                                    </p>
                                </div>
                                <span>12:18</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Type Message Form-->
        <div class="type-text-form">
            <form action="#">
                <div class="form-group file-upload mb-0">
                    <input type="file" /><i class="lni lni-plus"></i>
                </div>
                <textarea
                    class="form-control"
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Tulis pesan . . ."
                ></textarea>
                <button type="submit">
                    <i class="lni lni-telegram-original"></i>
                </button>
            </form>
        </div>
    </div>
</template>
