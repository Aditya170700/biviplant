@extends('layouts.email.app')

@section('title', 'Pesanan Selesai')

@section('content')
    <div class="row mb-3">
        <div class="col-12">
            <p>Hai {{ $order->user->name }},</p>
            <p>
                pesanan atas nama anda telah diterima. Jika ada kritik dan saran, sampaikan di kolom penilaian.</p>
        </div>
    </div>
    <div class="row mb-3">
        <div class="col-12">
            <h2 class="fw-bold">RINCIAN PEMBAYARAN</h2>
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
            <a href="{{ route('orders.detail', $order->id) }}" class="btn btn-sm btn-success text-decoration-none"
                target="_blank">Lihat
                Pesanan</a>
        </div>
    </div>
@endsection
