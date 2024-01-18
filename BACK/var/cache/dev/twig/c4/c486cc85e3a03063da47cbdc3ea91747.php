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

    // line 6
    public function block_content_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content_title"));

        echo "Tableau de bord";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 8
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "content"));

        // line 9
        echo "
    <style> 
        .intro {
            text-align: center;

        }
        .intro p {
            font-size: 20px;
        }
        .intro a {
            font-size: 20px;
        }
        .chart-container {
            max-width: 400px;
            margin: auto;
            color: white;
        }
        .chart-container h1 {
            font-size: 20px;
            text-align: center;
        }
    
    
    </style>

    <div class=\"intro\">
        <img src=\"/imgs/logo_colors.png\" alt=\"Image du tableau de bord administrateur\" style=\"max-width: 10%; height: auto; margin-top: 20px;\">
        <p><br><br><br>Bienvenue dans le tableau de bord administrateur.<br>Ce panneau vous permet de gérer les membres du Trombinoscope et d'effectuer des tâches de gestion des utilisateurs.</p>
        

            <h2><a href=\"";
        // line 39
        echo twig_escape_filter($this->env, (isset($context["person_url"]) || array_key_exists("person_url", $context) ? $context["person_url"] : (function () { throw new RuntimeError('Variable "person_url" does not exist.', 39, $this->source); })()), "html", null, true);
        echo "\">Gérer les membres du Trombinoscope</h2>
            <h2><a href=\"";
        // line 40
        echo twig_escape_filter($this->env, (isset($context["admin_url"]) || array_key_exists("admin_url", $context) ? $context["admin_url"] : (function () { throw new RuntimeError('Variable "admin_url" does not exist.', 40, $this->source); })()), "html", null, true);
        echo "\">Gérer les administrateurs</a><br><br><br><br></h2>
        
        <div class=\"chart-container\">
            <h1>Ratio des membres par Ville: </h1>
            <canvas id=\"pieChart\" width=\"400\" height=\"400\"></canvas>
        </div>

    </div>

    
    <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>
    <script>
    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/employees/agency');
            const data = await response.json();

            createPieChart(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }

    function createPieChart(data) {
        const cities = data.map(entry => entry.city);
        const proportions = data.map(entry => entry.proportion);

        const canvas = document.getElementById('pieChart');
        const ctx = canvas.getContext('2d');

        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: cities,
                datasets: [{
                    data: proportions,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Répartition des proportions par ville'
                }
            }
        });
    }

    fetchData();
    </script>

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
        return array (  109 => 40,  105 => 39,  73 => 9,  66 => 8,  53 => 6,  36 => 3,);
    }

    public function getSourceContext()
    {
        return new Source("{# templates/admin/dashboard.html.twig #}

{% extends '@EasyAdmin/page/content.html.twig' %}


{% block content_title %}Tableau de bord{% endblock %}

{% block content %}

    <style> 
        .intro {
            text-align: center;

        }
        .intro p {
            font-size: 20px;
        }
        .intro a {
            font-size: 20px;
        }
        .chart-container {
            max-width: 400px;
            margin: auto;
            color: white;
        }
        .chart-container h1 {
            font-size: 20px;
            text-align: center;
        }
    
    
    </style>

    <div class=\"intro\">
        <img src=\"/imgs/logo_colors.png\" alt=\"Image du tableau de bord administrateur\" style=\"max-width: 10%; height: auto; margin-top: 20px;\">
        <p><br><br><br>Bienvenue dans le tableau de bord administrateur.<br>Ce panneau vous permet de gérer les membres du Trombinoscope et d'effectuer des tâches de gestion des utilisateurs.</p>
        

            <h2><a href=\"{{ person_url }}\">Gérer les membres du Trombinoscope</h2>
            <h2><a href=\"{{ admin_url }}\">Gérer les administrateurs</a><br><br><br><br></h2>
        
        <div class=\"chart-container\">
            <h1>Ratio des membres par Ville: </h1>
            <canvas id=\"pieChart\" width=\"400\" height=\"400\"></canvas>
        </div>

    </div>

    
    <script src=\"https://cdn.jsdelivr.net/npm/chart.js\"></script>
    <script>
    async function fetchData() {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/employees/agency');
            const data = await response.json();

            createPieChart(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }

    function createPieChart(data) {
        const cities = data.map(entry => entry.city);
        const proportions = data.map(entry => entry.proportion);

        const canvas = document.getElementById('pieChart');
        const ctx = canvas.getContext('2d');

        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: cities,
                datasets: [{
                    data: proportions,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(255, 206, 86, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Répartition des proportions par ville'
                }
            }
        });
    }

    fetchData();
    </script>

{% endblock %}
", "admin/dashboard.html.twig", "/var/www/html/templates/admin/dashboard.html.twig");
    }
}
