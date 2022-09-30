<?php

namespace App\Exceptions;

use Throwable;
use Illuminate\Support\Facades\Log;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Validation\ValidationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException;

class Handler extends ExceptionHandler
{
    /**
     * A list of exception types with their corresponding custom log levels.
     *
     * @var array<class-string<\Throwable>, \Psr\Log\LogLevel::*>
     */
    protected $levels = [
        //
    ];

    /**
     * A list of the exception types that are not reported.
     *
     * @var array<int, class-string<\Throwable>>
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     *
     * @return void
     */
    public function register()
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        dd($e);
        if (in_array('api', $request->route()->middleware())) {
            $code = 500;
            $message = $e->getMessage();

            if ($e instanceof ModelNotFoundException) {
                $message = 'Data not found';
                $code = 404;
            } elseif ($e instanceof ValidationException) {
                $message = $e->validator->errors()->first();
                $code = 422;
            } elseif ($e instanceof MethodNotAllowedHttpException) {
                $code = 405;
            } elseif ($e instanceof AuthenticationException) {
                $code = 401;
            }

            return response()->json([
                'status' => $code,
                'message' => $message,
                'data' => null
            ], $code);
        }

        if (!$e instanceof ValidationException) {
            return redirect()->back()->with('failed', $e->getMessage());
        }

        return redirect()->back()->withErrors($e->validator->errors())->withInput();
    }
}
