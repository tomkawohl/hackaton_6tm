<?php

namespace ContainerB7zH4Xs;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getDoctrine_Dbal_DefaultConnectionService extends App_KernelDevDebugContainer
{
    /**
     * Gets the public 'doctrine.dbal.default_connection' shared service.
     *
     * @return \Doctrine\DBAL\Connection
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Connection.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/ConnectionFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Configuration.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Schema/SchemaManagerFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Schema/LegacySchemaManagerFactory.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Driver/Middleware.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Middleware/ConnectionNameAwareInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Middleware/DebugMiddleware.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/dbal/src/Tools/DsnParser.php';
        include_once \dirname(__DIR__, 4).'/vendor/symfony/doctrine-bridge/Middleware/Debug/DebugDataHolder.php';
        include_once \dirname(__DIR__, 4).'/vendor/doctrine/doctrine-bundle/Middleware/BacktraceDebugDataHolder.php';

        $a = ($container->privates['doctrine.dbal.default_connection.event_manager'] ?? $container->load('getDoctrine_Dbal_DefaultConnection_EventManagerService'));

        if (isset($container->services['doctrine.dbal.default_connection'])) {
            return $container->services['doctrine.dbal.default_connection'];
        }
        $b = new \Doctrine\DBAL\Configuration();

        $c = new \Doctrine\Bundle\DoctrineBundle\Middleware\DebugMiddleware(($container->privates['doctrine.debug_data_holder'] ??= new \Doctrine\Bundle\DoctrineBundle\Middleware\BacktraceDebugDataHolder(['default'])), ($container->services['debug.stopwatch'] ??= new \Symfony\Component\Stopwatch\Stopwatch(true)));
        $c->setConnectionName('default');

        $b->setSchemaManagerFactory(new \Doctrine\DBAL\Schema\LegacySchemaManagerFactory());
        $b->setMiddlewares([$c]);

        return $container->services['doctrine.dbal.default_connection'] = (new \Doctrine\Bundle\DoctrineBundle\ConnectionFactory($container->parameters['doctrine.dbal.connection_factory.types'], new \Doctrine\DBAL\Tools\DsnParser(['db2' => 'ibm_db2', 'mssql' => 'pdo_sqlsrv', 'mysql' => 'pdo_mysql', 'mysql2' => 'pdo_mysql', 'postgres' => 'pdo_pgsql', 'postgresql' => 'pdo_pgsql', 'pgsql' => 'pdo_pgsql', 'sqlite' => 'pdo_sqlite', 'sqlite3' => 'pdo_sqlite'])))->createConnection(['url' => $container->getEnv('resolve:DATABASE_URL'), 'driver' => 'pdo_mysql', 'host' => 'localhost', 'port' => NULL, 'user' => 'root', 'password' => NULL, 'driverOptions' => [], 'defaultTableOptions' => []], $b, $a, []);
    }
}