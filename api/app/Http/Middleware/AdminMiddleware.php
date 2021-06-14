<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminMiddleware
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
        $token = $request->bearerToken();

        if ($token) return response()->json([
            'error' => 'Token not present',
        ], 401);

        $userFromToken = JWTAuth::toUser($token);

        if ($userFromToken->type !== 'admin') return response()->json([
            'error' => 'This user has not access to this page'
        ], 403);

        return $next($request);
    }
}
