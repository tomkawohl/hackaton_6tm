<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/admin' => [[['_route' => 'admin', '_controller' => 'App\\Controller\\Admin\\DashboardController::index'], null, null, null, false, false, null]],
        '/api/employees' => [[['_route' => 'app_api', '_controller' => 'App\\Controller\\ApiController::fetchData'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'homepage', '_controller' => 'App\\Controller\\DefaultController::index'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/persons' => [[['_route' => 'persons_index', '_controller' => 'App\\Controller\\PersonController::index'], null, null, null, false, false, null]],
        '/persons/create' => [[['_route' => 'person_create', '_controller' => 'App\\Controller\\PersonController::create'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/build/(.+)(*:18)'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:53)'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        18 => [[['_route' => 'pentatrion_vite_build_proxy', '_controller' => 'Pentatrion\\ViteBundle\\Controller\\ViteController::proxyBuild'], ['path'], null, null, false, true, null]],
        53 => [
            [['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
