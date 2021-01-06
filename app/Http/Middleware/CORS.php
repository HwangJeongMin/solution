<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // 어떤 url을 허용할 것인지에 대한 헤더
        header('Access-Control-Allow-Origin: *');
        // 어떤 요청 메서드를 허용할 것인지
        header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
        // 인증정보를 포함한 요청 ex) 쿠키
        header('Access-Control-Allow-Credentials: false');

        return $next($request);
    }
}
