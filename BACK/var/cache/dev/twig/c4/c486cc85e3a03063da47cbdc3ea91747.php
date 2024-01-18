<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* admin/dashboard.html.twig */
class __TwigTemplate_396482fa3808f11806cd368876ca7478 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'content_title' => [$this, 'block_content_title'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 3
        return "@EasyAdmin/page/content.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/dashboard.html.twig"));

        $this->parent = $this->loadTemplate("@EasyAdmin/page/content.html.twig", "admin/dashboard.html.twig", 3);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 5
    public function block_content_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_title"));

        echo "Tableau de bord";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 7
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        // line 8
        echo "    <div>
        <img src=\"/imgs/logo_colors.png\" alt=\"Image du tableau de bord administrateur\" style=\"max-width: 10%; height: auto; margin-top: 20px;\">
        <p><br><br><br>Bienvenue dans le tableau de bord administrateur.<br>Ce panneau vous permet de gérer les membres du Trombinoscope et d'effectuer des tâches de gestion des utilisateurs.</p>
        
        <ul>
            <li><a href=\"";
        // line 13
        echo twig_escape_filter($this->env, (isset($context["person_url"]) || array_key_exists("person_url", $context) ? $context["person_url"] : (function () { throw new RuntimeError('Variable "person_url" does not exist.', 13, $this->source); })()), "html", null, true);
        echo "\">Gérer les membres du Trombinoscope</a></li>
            <li><a href=\"";
        // line 14
        echo twig_escape_filter($this->env, (isset($context["admin_url"]) || array_key_exists("admin_url", $context) ? $context["admin_url"] : (function () { throw new RuntimeError('Variable "admin_url" does not exist.', 14, $this->source); })()), "html", null, true);
        echo "\">Gérer les administrateurs</a></li>
        </ul>
    </div>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "admin/dashboard.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  84 => 14,  80 => 13,  73 => 8,  66 => 7,  53 => 5,  36 => 3,);
    }

    public function getSourceContext()
    {
        return new Source("{# templates/admin/dashboard.html.twig #}

{% extends '@EasyAdmin/page/content.html.twig' %}

{% block content_title %}Tableau de bord{% endblock %}

{% block content %}
    <div>
        <img src=\"/imgs/logo_colors.png\" alt=\"Image du tableau de bord administrateur\" style=\"max-width: 10%; height: auto; margin-top: 20px;\">
        <p><br><br><br>Bienvenue dans le tableau de bord administrateur.<br>Ce panneau vous permet de gérer les membres du Trombinoscope et d'effectuer des tâches de gestion des utilisateurs.</p>
        
        <ul>
            <li><a href=\"{{ person_url }}\">Gérer les membres du Trombinoscope</a></li>
            <li><a href=\"{{ admin_url }}\">Gérer les administrateurs</a></li>
        </ul>
    </div>
{% endblock %}
", "admin/dashboard.html.twig", "/var/www/html/templates/admin/dashboard.html.twig");
    }
}
