<?php

namespace Crater\Http\Middleware;

use Closure;

class IpWhitelistingMiddleware
{

    public function handle($request, Closure $next)
    {
        $whitelist = env('ACCESS_WHITELIST');

       $ipAddresses = explode(';', $whitelist);

      if (! in_array($request->ip(), $ipAddresses)) {
        // here instead of checking a single ip address we can do collection of ips
        //address in constant file and check with in_array function
            return abort(403);
        }

        return $next($request);
    }

}
