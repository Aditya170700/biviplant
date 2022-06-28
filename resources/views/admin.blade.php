<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ env('APP_NAME') }}</title>

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/css/main/app.css">
    <link rel="icon" href="{{ asset('img/icons/icon-72x72.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.4.17/dist/sweetalert2.all.min.js"></script>
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <script src="{{ mix('/js/app.js') }}" defer></script>
    <script src="/assets/js/app.js"></script>
    <script src="/assets/js/pages/dashboard.js"></script>
    <script src="{{ asset('js/helper.js') }}"></script>
    @routes
    @inertiaHead
    <style>
        * {
            font-family: sans-serif;
        }

        .rounded-custom {
            border-radius: .7rem;
        }
    </style>
</head>

<body class="theme-dark">
    @inertia
    <script src="/js/bootstrap.bundle.min.js"></script>
</body>

</html>
