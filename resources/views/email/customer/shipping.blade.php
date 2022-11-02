@extends('layouts.email.app')

@section('title', 'Pesanan Dikirim')

@section('content')
    <div class="row mb-3">
        <div class="col-12">
            <p>Hai {{ $order->user->name }},</p>
            <p>
                pesanan atas nama anda sudah diserahkan ke pihak ekspedisi..</p>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <h2 class="fw-bold">RINCIAN PENGIRIMAN</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Order ID</div>
        <div class="col-9 fw-light">: {{ $order->payment_id }}</div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Customer</div>
        <div class="col-9 fw-light">: {{ $order->user->name }}</div>
    </div>
    @foreach ($order->order_details as $orderDetail)
        <div class="my-3">
            <div class="row">
                <div class="col-3 fw-bold">Nama Produk</div>
                <div class="col-9 fw-light">: {{ $orderDetail->product->name }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">QTY</div>
                <div class="col-9 fw-light">: {{ $orderDetail->qty }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">Penerima</div>
                <div class="col-9 fw-light">: {{ $orderDetail->user_address->receiver }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">No. HP</div>
                <div class="col-9 fw-light">: {{ $orderDetail->user_address->phone }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">Alamat</div>
                <div class="col-9 fw-light">: {{ $orderDetail->user_address->subdistrict->name }},
                    {{ $orderDetail->user_address->subdistrict->city->name }},
                    {{ $orderDetail->user_address->subdistrict->city->province->name }},
                    {{ $orderDetail->user_address->postal_code }}
                </div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">Kurir</div>
                <div class="col-9 fw-light">: {{ $orderDetail->courier }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">Servis</div>
                <div class="col-9 fw-light">: {{ $orderDetail->shipping_service }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">Biaya</div>
                <div class="col-9 fw-light">: {{ $orderDetail->shipping_cost }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">Estimasi (hari)</div>
                <div class="col-9 fw-light">: {{ $orderDetail->shipping_etd }}</div>
            </div>
            <div class="row">
                <div class="col-3 fw-bold">No. Resi</div>
                <div class="col-9 fw-light">: {{ $orderDetail->receipt }}</div>
            </div>
            <div class="row">
                <div class="col-3">
                    <a href="{{ route('orders.track', $orderDetail->id) }}"
                        class="btn btn-sm btn-success text-decoration-none" target="_blank">Lacak Paket</a>
                </div>
            </div>
        </div>
    @endforeach
@endsection
