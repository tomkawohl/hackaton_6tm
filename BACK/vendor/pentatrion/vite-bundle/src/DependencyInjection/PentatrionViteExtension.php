<?php

namespace Pentatrion\ViteBundle\DependencyInjection;

use Pentatrion\ViteBundle\Service\EntrypointsLookup;
use Pentatrion\ViteBundle\Service\TagRenderer;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Compiler\ServiceLocatorTagPass;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Definition;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\DependencyInjection\Reference;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;
use Symfony\Component\WebLink\EventListener\AddLinkHeaderListener;

class PentatrionViteExtension extends Extension
{
    public function load(array $bundleConfigs, ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(\dirname(__DIR__).'/Resources/config'));
        $loader->load('services.yaml');

        $bundleConfig = $this->processConfiguration(
            $this->getConfiguration($bundleConfigs, $container),
            $bundleConfigs
        );

        if (isset($bundleConfig['builds']) && !isset($bundleConfig['configs'])) {
            $bundleConfig['configs'] = $bundleConfig['builds'];
        }
        if (isset($bundleConfig['default_build']) && !isset($bundleConfig['default_config'])) {
            $bundleConfig['default_config'] = $bundleConfig['default_build'];
        }

        $defaultAttributes = [];

        if (false !== $bundleConfig['crossorigin']) {
            $defaultAttributes['crossorigin'] = $bundleConfig['crossorigin'];
        }

        $container->setParameter('pentatrion_vite.preload', $bundleConfig['preload']);
        $container->setParameter('pentatrion_vite.public_directory', self::preparePublicDirectory($bundleConfig['public_directory']));
        $container->setParameter('pentatrion_vite.absolute_url', $bundleConfig['absolute_url']);
        $container->setParameter('pentatrion_vite.proxy_origin', $bundleConfig['proxy_origin']);
        $container->setParameter('pentatrion_vite.throw_on_missing_entry', $bundleConfig['throw_on_missing_entry']);

        if (
            count($bundleConfig['configs']) > 0) {
            if (is_null($bundleConfig['default_config']) || !isset($bundleConfig['configs'][$bundleConfig['default_config']])) {
                throw new \Exception('Invalid default_config, choose between : '.join(', ', array_keys($bundleConfig['configs'])));
            }
            $defaultConfigName = $bundleConfig['default_config'];
            $lookupFactories = [];
            $tagRendererFactories = [];
            $configs = [];

            foreach ($bundleConfig['configs'] as $configName => $config) {
                if (!preg_match('/^[0-9a-zA-Z_]+$/', $configName)) {
                    throw new \Exception('Invalid config name, you should use only a-z A-Z and _ characters.');
                }

                $configs[$configName] = $configPrepared = self::prepareConfig($config);
                $lookupFactories[$configName] = $this->entrypointsLookupFactory(
                    $container,
                    $configName
                );
                $tagRendererFactories[$configName] = $this->tagRendererFactory(
                    $container,
                    $defaultAttributes,
                    $configName,
                    $configPrepared
                );
            }
        } else {
            $defaultConfigName = '_default';
            $configs[$defaultConfigName] = $configPrepared = self::prepareConfig($bundleConfig);

            $lookupFactories = [
                '_default' => $this->entrypointsLookupFactory(
                    $container,
                    $defaultConfigName
                ),
            ];
            $tagRendererFactories = [
                '_default' => $this->tagRendererFactory(
                    $container,
                    $defaultAttributes,
                    $defaultConfigName,
                    $configPrepared
                ),
            ];
        }

        if ('link-header' === $bundleConfig['preload']) {
            if (!class_exists(AddLinkHeaderListener::class)) {
                throw new \LogicException('To use the "preload" option, the WebLink component must be installed. Try running "composer require symfony/web-link".');
            }
        } else {
            $container->removeDefinition('pentatrion_vite.preload_assets_event_listener');
        }

        $container->setParameter('pentatrion_vite.default_config', $defaultConfigName);
        $container->setParameter('pentatrion_vite.configs', $configs);

        $container->getDefinition('pentatrion_vite.entrypoints_lookup_collection')
            ->addArgument(ServiceLocatorTagPass::register($container, $lookupFactories))
            ->addArgument($defaultConfigName);

        $container->getDefinition('pentatrion_vite.tag_renderer_collection')
            ->addArgument(ServiceLocatorTagPass::register($container, $tagRendererFactories))
            ->addArgument($defaultConfigName);

        if ($bundleConfig['cache']) {
            $container->getDefinition('pentatrion_vite.file_accessor')
                ->replaceArgument(2, new Reference('pentatrion_vite.cache'));
        }
    }

    private function entrypointsLookupFactory(
        ContainerBuilder $container,
        string $configName
    ): Reference {
        $id = $this->getServiceId('entrypoints_lookup', $configName);
        $arguments = [
            new Reference('pentatrion_vite.file_accessor'),
            $configName,
            '%pentatrion_vite.throw_on_missing_entry%',
        ];
        $definition = new Definition(EntrypointsLookup::class, $arguments);
        $container->setDefinition($id, $definition);

        return new Reference($id);
    }

    private function tagRendererFactory(
        ContainerBuilder $container,
        $defaultAttributes,
        string $configName,
        array $config
    ): Reference {
        $id = $this->getServiceId('tag_renderer', $configName);
        $arguments = [
            $defaultAttributes,
            $config['script_attributes'],
            $config['link_attributes'],
            $config['preload_attributes'],
        ];
        $definition = new Definition(TagRenderer::class, $arguments);
        $container->setDefinition($id, $definition);

        return new Reference($id);
    }

    private function getServiceId(string $prefix, string $configName): string
    {
        return sprintf('pentatrion_vite.%s[%s]', $prefix, $configName);
    }

    public static function prepareConfig(array $config): array
    {
        $base = $config['build_directory'];
        $base = '/' !== substr($base, 0, 1) ? '/'.$base : $base;
        $base = '/' !== substr($base, -1) ? $base.'/' : $base;

        return [
            'base' => $base,
            'script_attributes' => $config['script_attributes'],
            'link_attributes' => $config['link_attributes'],
            'preload_attributes' => $config['preload_attributes'],
        ];
    }

    public static function preparePublicDirectory(string $publicDir)
    {
        $publicDir = '/' !== substr($publicDir, 0, 1) ? '/'.$publicDir : $publicDir;
        $publicDir = rtrim($publicDir, '/');

        return $publicDir;
    }
}
