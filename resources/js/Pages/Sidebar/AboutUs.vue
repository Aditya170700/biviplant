<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/HeaderWithTitle.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";

let attrs = useAttrs();
</script>

<template>
    <div>
        <Head>
            <title>{{ attrs.metaTitle }}</title>
            <meta
                head-key="description"
                name="description"
                :content="attrs.metaDescription"
            />
            <meta
                head-key="keyword"
                name="keyword"
                :content="attrs.metaKeyword"
            />
        </Head>
        <Header link_back="/" title="Tentang Kami"></Header>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper py-3">
            <div class="container">
                <div class="card">
                    <div
                        class="background-shape"
                        style="background: rgb(80, 208, 72) !important"
                    ></div>
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-12" style="text-align: justify">
                                <img
                                    src="/img/core-img/logo-white.png"
                                    class="img-fluid"
                                    alt=""
                                    style="
                                        width: 40%;
                                        margin-right: 15px;
                                        float: left;
                                    "
                                />
                                <p>
                                    Untuk menjaga agar kualitas bibit tetap
                                    terjaga, kami bekerja sama dengan ahli
                                    pembibitan dari IPB sebagai konsultan dan
                                    pelatih pelaksana di kebun bibit kami.
                                    Selain itu kami juga menerapkan standard
                                    kualitas bibit hasil kebun kami. Sehingga
                                    hanya bibit yang sesuai standard yang kami
                                    kirim ke pelanggan.
                                </p>
                                <p>
                                    Harga bibit buah yang kami tampilkan adalah
                                    harga eceran/satuan. Sedangkan untuk
                                    pembelian dalam jumlah besar, kami berikan
                                    harga khusus dengan diskon 10 sd 70 %
                                    tergantung dari jumlah pemesanan dan jenis
                                    bibit buah yang di pesan. Silahkan kontak
                                    sales kami untuk mendapatkan keterangan
                                    lebih lanjut atau bernegoisasi langsung.
                                    Dengan senang hati kami berusaha membantu
                                    kebutuhan Anda.
                                </p>
                                <p>
                                    Kami memberikan garansi uang kembali atau
                                    penggantian gratis jika terbukti bibit bukan
                                    varietas asli atau bibit tanaman mati saat
                                    diterima pembeli. Garansi berlaku jika
                                    kesalahan memang terbukti dari fihak kami.
                                </p>
                                <p>
                                    Selain penjualan bibit tanaman buah secara
                                    online, kami juga men jual bibit tanaman
                                    buah secara offline. Lokasi marketing office
                                    kami berada di Cikarang Timur kabupaten
                                    Bekasi. Sedangkan perkebunan pembibitan
                                    berlokasi di Bogor, Majalengka dan sedang
                                    dalam proses pembukaan lahan baru di
                                    Sukabumi. Pembeli dipersilahkan untuk
                                    melihat dan memilih langsung bibit tanaman
                                    buah dalam polibag maupun bibit tanaman buah
                                    dalam pot (tabulampot) koleksi kami.
                                </p>
                                <p>
                                    Bagi penggemar Tanaman Buah dalam pot atau
                                    lebih populer dengan istilah TABULAMPOT,
                                    kami juga menyediakan koleksi Tabulampot.
                                    Sebagian ada yang telah berbunga, berbuah
                                    atau belum berbuah.
                                </p>
                                <p>
                                    Khusus Tabulampot, untuk saat ini kami hanya
                                    melayani pembelian offline. Hal ini karena
                                    ukuran tanaman buah dalam pot yang cukup
                                    besar agak sulit untuk di packing. Selain
                                    itu juga untuk memberikan kesempatan pada
                                    calon pembeli untuk melihat langsung kondisi
                                    stock tabulampot kami baik ukuran, bentuk,
                                    umur dan jenisnya.
                                </p>
                                <p>
                                    Karena permintaan yang cukup tinggi biasanya
                                    tabulampot yang sudah mulai berbunga dan
                                    atau berbuah akan sangat cepat sekali
                                    diambil oleh pembeli. Untuk itu jika anda
                                    berminat, sebaiknya melakukan pemesanan
                                    terlebih dahulu agar tidak diambil oleh
                                    pembeli lain. Untuk daerah Jabodetabek kami
                                    melayani juga pengiriman dengan go box atau
                                    penyewaan kendaraan lainnya.
                                </p>
                            </div>
                            <div class="col-6 mt-3">
                                <div
                                    style="
                                        width: 100%;
                                        height: 150px;
                                        background-image: url('/img/cst/1.jpeg');
                                        background-size: cover;
                                        background-repeat: no-repeat;
                                    "
                                ></div>
                            </div>
                            <div class="col-6 mt-3">
                                <div
                                    style="
                                        width: 100%;
                                        height: 150px;
                                        background-image: url('/img/cst/2.jpeg');
                                        background-size: cover;
                                        background-repeat: no-repeat;
                                    "
                                ></div>
                            </div>
                            <div class="col-6 mt-3">
                                <div
                                    style="
                                        width: 100%;
                                        height: 150px;
                                        background-image: url('/img/cst/3.jpeg');
                                        background-size: cover;
                                        background-repeat: no-repeat;
                                    "
                                ></div>
                            </div>
                            <div class="col-6 mt-3">
                                <div
                                    style="
                                        width: 100%;
                                        height: 150px;
                                        background-image: url('/img/cst/4.jpeg');
                                        background-size: cover;
                                        background-repeat: no-repeat;
                                    "
                                ></div>
                            </div>
                        </div>
                        <div class="row mb-3 text-center">
                            <div class="col">
                                <i class="fa fa-money"></i>
                                <p>Pembayaran Terintegrasi</p>
                            </div>
                            <div class="col">
                                <i class="fa fa-truck"></i>
                                <p>Kirim Seluruh Indonesia</p>
                            </div>
                            <div class="col">
                                <i class="fa fa-check"></i>
                                <p>100% Terpercaya</p>
                            </div>
                        </div>
                        <hr />
                        <div class="row mt-3">
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="card-title">
                                        <strong>Kontak Kami</strong>
                                    </div>
                                    <div class="col-12 small">
                                        {{ attrs.setting.email }}
                                    </div>
                                    <div class="col-12 small">
                                        {{ attrs.setting.phone }}
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 mb-3">
                                <div class="row">
                                    <div class="card-title">
                                        <strong>Temukan Kami di</strong>
                                    </div>
                                    <div
                                        class="col-12 d-flex justify-content-start"
                                    >
                                        <img
                                            src="assets/images/logo/instagram.jpg"
                                            class="opacity-75 me-3"
                                            style="width: 15%"
                                        />
                                        <img
                                            src="assets/images/logo/youtube.png"
                                            class="opacity-75 me-3"
                                            style="width: 15%"
                                        />
                                        <img
                                            src="assets/images/logo/tiktok.png"
                                            class="opacity-75"
                                            style="width: 15%"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="row">
                                    <div class="card-title">
                                        <strong>Kebun Kami</strong>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="row mb-2"
                                            v-for="(origin, i) in attrs.origins"
                                            :key="i"
                                        >
                                            <div class="col-lg-12">
                                                <div
                                                    class="d-flex align-items-center"
                                                >
                                                    <img
                                                        src="assets/images/logo/map-point.png"
                                                        class="opacity-75 me-2"
                                                        style="width: 10%"
                                                    />
                                                    <div class="tex-left">
                                                        <p class="mb-2">
                                                            {{
                                                                origin
                                                                    .subdistrict
                                                                    .city
                                                                    .province
                                                                    .name
                                                            }}
                                                        </p>
                                                        <p>
                                                            {{ origin.detail }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <hr />
                                <div class="text-center text-muted mt-3">
                                    <p>
                                        All rights reserved Biviplant
                                        {{ new Date().getFullYear() }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
