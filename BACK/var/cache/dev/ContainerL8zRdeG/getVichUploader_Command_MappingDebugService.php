<?php

namespace ContainerL8zRdeG;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getVichUploader_Command_MappingDebugService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'vich_uploader.command.mapping_debug' shared service.
     *
     * @return \Vich\UploaderBundle\Command\MappingDebugCommand
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/symfony/console/Command/Command.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Command/MappingDebugCommand.php';

        $container->privates['vich_uploader.command.mapping_debug'] = $instance = new \Vich\UploaderBundle\Command\MappingDebugCommand($container->parameters['vich_uploader.mappings']);

        $instance->setName('vich:mapping:debug');

        return $instance;
    }
}
