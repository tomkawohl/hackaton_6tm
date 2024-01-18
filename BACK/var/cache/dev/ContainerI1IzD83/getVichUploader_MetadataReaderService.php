<?php

namespace ContainerI1IzD83;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getVichUploader_MetadataReaderService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'vich_uploader.metadata_reader' shared service.
     *
     * @return \Vich\UploaderBundle\Metadata\MetadataReader
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/MetadataReader.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/MetadataFactoryInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/AdvancedMetadataFactoryInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/MetadataFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/DriverInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/AdvancedDriverInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/DriverChain.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/AbstractFileDriver.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/Driver/XmlDriver.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/FileLocatorInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/AdvancedFileLocatorInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/TraceableFileLocatorInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Driver/FileLocator.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/Driver/AnnotationDriver.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/Driver/AttributeReader.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/Driver/AbstractYamlDriver.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/Driver/YamlDriver.php';
        include_once \dirname(__DIR__, 4).'/vendor/vich/uploader-bundle/src/Metadata/Driver/YmlDriver.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Cache/CacheInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Cache/ClearableCacheInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/jms/metadata/src/Cache/FileCache.php';

        $a = new \Metadata\Driver\FileLocator([]);

        $b = new \Metadata\MetadataFactory(new \Metadata\Driver\DriverChain([new \Vich\UploaderBundle\Metadata\Driver\XmlDriver($a), new \Vich\UploaderBundle\Metadata\Driver\AnnotationDriver(new \Vich\UploaderBundle\Metadata\Driver\AttributeReader(), [($container->services['doctrine'] ?? self::getDoctrineService($container))]), new \Vich\UploaderBundle\Metadata\Driver\YamlDriver($a), new \Vich\UploaderBundle\Metadata\Driver\YmlDriver($a)]), 'Metadata\\ClassHierarchyMetadata', true);
        $b->setCache(new \Metadata\Cache\FileCache(($container->targetDir.''.'/vich_uploader')));

        return $container->privates['vich_uploader.metadata_reader'] = new \Vich\UploaderBundle\Metadata\MetadataReader($b);
    }
}
