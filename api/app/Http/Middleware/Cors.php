<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Cors
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
        $request->header("Access-Control-Allow-Origin", "*");
        $request->header("Accept", "application/json");
        $request->header("Acces-Control-Allow-Headers", "Content-Type, Authorization");


        $response = $next($request);

        $response->headers->set("Access-Control-Allow-Origin", "*");
        $response->headers->set("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
        $response->headers->set('Content-Type', 'application/json');
        $response->headers->set("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Authorization, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

        return $response;
    }
}
