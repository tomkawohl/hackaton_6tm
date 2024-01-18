<?php

namespace ContainerI1IzD83;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getHttpClient_UriTemplateService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'http_client.uri_template' shared service.
     *
     * @return \Symfony\Component\HttpClient\UriTemplateHttpClient
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-client-contracts/HttpClientInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-client/DecoratorTrait.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/http-client/UriTemplateHttpClient.php';

        return $container->privates['http_client.uri_template'] = new \Symfony\Component\HttpClient\UriTemplateHttpClient(($container->privates['http_client.transport'] ?? $container->load('getHttpClient_TransportService')), NULL, []);
    }
}
