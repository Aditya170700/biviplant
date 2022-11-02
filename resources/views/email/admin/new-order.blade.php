@extends('layouts.email.app')

@section('title', 'Pesanan Baru')

@section('content')
    <div class="row mb-3">
        <div class="col-12">
            <p>Hai Min,</p>
            <p>
                pesanan atas nama {{ $order->user->name }} sudah masuk. Jika pembayaran telah dilakukan, segera lakukan
                pengiriman.</p>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <h2 class="fw-bold">RINCIAN PESANAN</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Order ID</div>
        <div class="col-9 fw-light">: {{ $order->payment_id }}</div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Order Date</div>
        <div class="col-9 fw-light">: {{ date('d/m/Y', strtotime($order->created_at)) }}</div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Customer</div>
        <div class="col-9 fw-light">: {{ $order->user->name }}</div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Produk</div>
        <div class="col-9 fw-light">: {{ $order->order_details[0]->product->name }} @if ($order->order_details->count() > 1)
                dan {{ $order->order_details->count() - 1 }} produk lainnya
            @endif
        </div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Metode Pembayaran</div>
        <div class="col-9 fw-light">: {{ strtoupper($order->payment_method) }}</div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Channel</div>
        <div class="col-9 fw-light">: {{ strtoupper($order->payment_channel) }}</div>
    </div>
    <div class="row">
        <div class="col-3 fw-bold">Total</div>
        <div class="col-9 fw-light">: {{ $order->total_rp }}</div>
    </div>
    <div class="row mt-3">
        <div class="col-3">
            <a href="{{ route('admin.orders.show', $order->id) }}" class="btn btn-sm btn-success text-decoration-none"
                target="_blank">Lihat
                Pesanan</a>
        </div>
    </div>
@endsection
