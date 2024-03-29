<?php

// This file has been auto-generated by the Symfony Routing Component.

return [
    'pentatrion_vite_build_proxy' => [['path'], ['_controller' => 'Pentatrion\\ViteBundle\\Controller\\ViteController::proxyBuild'], ['path' => '.+'], [['variable', '/', '.+', 'path', true], ['text', '/build']], [], [], []],
    '_preview_error' => [['code', '_format'], ['_controller' => 'error_controller::preview', '_format' => 'html'], ['code' => '\\d+'], [['variable', '.', '[^/]++', '_format', true], ['variable', '/', '\\d+', 'code', true], ['text', '/_error']], [], [], []],
    'admin' => [[], ['_controller' => 'App\\Controller\\Admin\\DashboardController::index'], [], [['text', '/admin']], [], [], []],
    'app_api' => [[], ['_controller' => 'App\\Controller\\ApiController::fetchData'], [], [['text', '/api/employees']], [], [], []],
    'app_api/agency' => [[], ['_controller' => 'App\\Controller\\ApiController::getByAgency'], [], [['text', '/api/employees/agency']], [], [], []],
    'app_api/team' => [[], ['_controller' => 'App\\Controller\\ApiController::getByTeam'], [], [['text', '/api/employees/team']], [], [], []],
    'app_api/job' => [[], ['_controller' => 'App\\Controller\\ApiController::getByJob'], [], [['text', '/api/employees/job']], [], [], []],
    'app_api/firstName' => [[], ['_controller' => 'App\\Controller\\ApiController::getByFirstName'], [], [['text', '/api/employees/firstName']], [], [], []],
    'homepage' => [[], ['_controller' => 'App\\Controller\\DefaultController::index'], [], [['text', '/']], [], [], []],
    'login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], [], []],
    'persons_index' => [[], ['_controller' => 'App\\Controller\\PersonController::index'], [], [['text', '/persons']], [], [], []],
    'person_create' => [[], ['_controller' => 'App\\Controller\\PersonController::create'], [], [['text', '/persons/create']], [], [], []],
    'App\Controller\Admin\DashboardController::index' => [[], ['_controller' => 'App\\Controller\\Admin\\DashboardController::index'], [], [['text', '/admin']], [], [], []],
    'App\Controller\ApiController::fetchData' => [[], ['_controller' => 'App\\Controller\\ApiController::fetchData'], [], [['text', '/api/employees']], [], [], []],
    'App\Controller\ApiController::getByAgency' => [[], ['_controller' => 'App\\Controller\\ApiController::getByAgency'], [], [['text', '/api/employees/agency']], [], [], []],
    'App\Controller\ApiController::getByTeam' => [[], ['_controller' => 'App\\Controller\\ApiController::getByTeam'], [], [['text', '/api/employees/team']], [], [], []],
    'App\Controller\ApiController::getByJob' => [[], ['_controller' => 'App\\Controller\\ApiController::getByJob'], [], [['text', '/api/employees/job']], [], [], []],
    'App\Controller\ApiController::getByFirstName' => [[], ['_controller' => 'App\\Controller\\ApiController::getByFirstName'], [], [['text', '/api/employees/firstName']], [], [], []],
    'App\Controller\DefaultController::index' => [[], ['_controller' => 'App\\Controller\\DefaultController::index'], [], [['text', '/']], [], [], []],
    'App\Controller\SecurityController::login' => [[], ['_controller' => 'App\\Controller\\SecurityController::login'], [], [['text', '/login']], [], [], []],
];
