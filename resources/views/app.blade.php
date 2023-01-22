<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="title" content="">
    <meta name="description" content="">
    <meta name="keyword" content="">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#100DD1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"
        rel="stylesheet">
    <link rel="icon" href="{{ asset('img/icons/icon-72x72.png') }}">
    <link rel="apple-touch-icon" href="{{ asset('img/icons/icon-96x96.png') }}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{ asset('img/icons/icon-152x152.png') }}">
    <link rel="apple-touch-icon" sizes="167x167" href="{{ asset('img/icons/icon-167x167.png') }}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('img/icons/icon-180x180.png') }}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        integrity="sha512-tS3S5qG0BlhnQROyJXvNjeEM4UpMXHrQfTGmbQ1gKmelCxlSEBUaxhRBj/EFTzpbP4RVSrpEikbmdJobCvhE3g=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        integrity="sha512-sMXtMNL1zRzolHYKEujM2AqCLUR9F2C4/05cdbxjjLSRvMQIciEPCQZo++nk7go3BtSuK9kfa/s+a4f4i5pLkw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="{{ asset('css/font-awesome.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/lineicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/magnific-popup.css') }}">
    <link rel="stylesheet" href="{{ asset('style.css') }}">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    {{-- <link rel="manifest" href="manifest.json"> --}}
    {{-- <link href="{{ mix('/css/app.css') }}" rel="stylesheet" /> --}}
    <style>
        body,
        html {
            background-color: #f1f5f0 !important;
        }

        .bg-fug {
            background-color: #f1f5f0 !important;
        }

        .bg-fug-2 {
            background-color: #00b894 !important;
        }

        .bg-fug-3 {
            background-color: #100DD1 !important;
        }

        .blink {
            animation: blinkingText 1s infinite;
        }

        @keyframes blinkingText {
            0% {
                opacity: 0;
            }

            25% {
                opacity: 0.5;
            }

            50% {
                opacity: 0.75;
            }

            75% {
                opacity: 1;
            }

            100% {
                opacity: 0;
            }
        }

        .one-line {
            display: -webkit-box;
            overflow: hidden !important;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
        }

        .two-line {
            display: -webkit-box;
            overflow: hidden !important;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }

        .three-line {
            display: -webkit-box;
            overflow: hidden !important;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        .four-line {
            display: -webkit-box;
            overflow: hidden !important;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
        }

        .five-line {
            display: -webkit-box;
            overflow: hidden !important;
            -webkit-line-clamp: 5;
            -webkit-box-orient: vertical;
        }
    </style>
    @routes
    @vite('resources/js/app.js')
    @inertiaHead
</head>

<body>
    @inertia

    @env('local')
    @endenv
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="{{ asset('js/jquery.min.js') }}"></script>
    <script src="{{ asset('js/waypoints.min.js') }}"></script>
    <script src="{{ asset('js/jquery.easing.min.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
        integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="{{ asset('js/jquery.magnific-popup.min.js') }}"></script>
    <script src="{{ asset('js/jquery.counterup.min.js') }}"></script>
    <script src="{{ asset('js/jquery.countdown.min.js') }}"></script>
    <script src="{{ asset('js/jquery.passwordstrength.js') }}"></script>
    <script src="{{ asset('js/dark-mode-switch.js') }}"></script>
    {{-- <script src="js/no-internet.js"></script> --}}
    <script src="{{ asset('js/active.js') }}"></script>
    {{-- <script src="js/pwa.js"></script> --}}
    <script>
        $(document).ready(function() {});
    </script>
</body>

</html>
