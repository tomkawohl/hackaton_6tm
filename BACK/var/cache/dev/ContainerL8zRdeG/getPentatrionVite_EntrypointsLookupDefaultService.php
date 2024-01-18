<?php

namespace ContainerL8zRdeG;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getPentatrionVite_EntrypointsLookupDefaultService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'pentatrion_vite.entrypoints_lookup[_default]' shared service.
     *
     * @return \Pentatrion\ViteBundle\Service\EntrypointsLookup
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/pentatrion/vite-bundle/src/Service/EntrypointsLookup.php';
        include_once \dirname(__DIR__, 4).'/vendor/pentatrion/vite-bundle/src/Service/FileAccessor.php';

        return $container->privates['pentatrion_vite.entrypoints_lookup[_default]'] = new \Pentatrion\ViteBundle\Service\EntrypointsLookup(new \Pentatrion\ViteBundle\Service\FileAccessor((\dirname(__DIR__, 4).'/public'), $container->parameters['pentatrion_vite.configs'], NULL), '_default', false);
    }
}
