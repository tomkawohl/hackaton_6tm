<?php

namespace ContainerXea2fQ1;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getViteControllerService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'Pentatrion\ViteBundle\Controller\ViteController' shared service.
     *
     * @return \Pentatrion\ViteBundle\Controller\ViteController
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/pentatrion/vite-bundle/src/Controller/ViteController.php';

        return $container->services['Pentatrion\\ViteBundle\\Controller\\ViteController'] = new \Pentatrion\ViteBundle\Controller\ViteController('_default', $container->parameters['pentatrion_vite.configs'], ($container->privates['http_client.uri_template'] ?? $container->load('getHttpClient_UriTemplateService')), ($container->privates['pentatrion_vite.entrypoints_lookup_collection'] ?? $container->load('getPentatrionVite_EntrypointsLookupCollectionService')), NULL);
    }
}