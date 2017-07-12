<template>
    <div>
        <h1>Installation</h1>
        <div class="well">
            <h2>NPM</h2>
            <p>NPM is preferred due to its potential for further customization.</p>
            <code>
                npm install material-bootstrap
            </code>
            <br>
            <h3>Directory Structure</h3>
            <h4>1. assets</h4>
            <p>This contains the source files to import and compile into your project.</p>
            <p>The js directory contains the js files.</p>
            <ol>
                <li>material_bootstrap_full.js - includes all the dependencies (jquery, bootstrap.js, ...etc)</li>
                <li>material_bootstrap.js - includes only the elements added for these theme. it is the main js file and is what is imported by npm</li>
            </ol>
            <p>The scss diretory contains the scss files.</p>
            <ol>
                <li>material_bootstrap_full.scss - includes all the dependencies (bootstrap, font-awesome, ...etc) </li>
                <li>material_bootstrap.scss - includes only the theme files required.</li>
                <li>_variables.scss - contains the default color variables for the theme. Copy this file to your development environment. If you define these values, the defaults will be ignored.</li>
                <li>_theme.scss - contains the theme scss itself.</li>
            </ol>
            <br>
            <h4>2. dist</h4>
            <p>This contains the compiled files. These are the direct download files and are ready to import without any changes or further processing.</p>
            <ol>
                <li>material_bootstrap_full.css - includes all the dependencies like bootstrap It is a one file import and everything works immediately.</li>
                <li>material_bootstrap_full.min.css - it is a minified version of material_bootstrap_full.css</li>
                <li>material_bootstrap.css - inludes only the theme file. you will need to import bootstrap to your project and other dependencie for this file to be useful.</li>
                <li>material_bootsrap.min.css - it is a minified verion of material_bootstrap.css</li>
            </ol>
            <br>
            <h4>3. fonts</h4>
            <p>This is a placeholder directory for the fonts included. It is only necessary for this package's development for running the index.html file.</p>
            <br>
            <h4>4. samples</h4>
            <p>This directory contains samples for theme in vue.js</p>
            <br>
            <h4>5. index.html</h4>
            <p>This is the sample html file</p>
            <br>
            <h4>Other files</h4>
            <p>The other files serve the purpose defined by their names.</p>
            <br>
            <h3>import</h3>
            <p>in your development, import the scss and js files as:</p>
            <p>for the scss, first create the variables file in your directory and import it first. See the variables availabe below</p>
            <pre>
                $body_background: #EEEEEE;

                $default_text: rgba(0,0,0,.87);
                $white_text: #FFFFFF;

                $primary: #78909C;
                $danger: #F44336;
                $default: #78909C;
                $warning: #f0ad4e;
                $info: #03A9F4;
                $success: #4CAF50;
                $secondary: #ff5a92;
                $tertiary: #009688;

                $navbar_content_color: $white_text;
                $navbar_primary_background: $tertiary;
                $navbar_primary_content_color: $white_text;
            </pre>
            <p>Then import it</p>
            <pre>
                @import "variables"
                @import "node_modules/material-bootstrap/assets/material_bootstrap";
            </pre>
            <br>
            <p>for the js</p>
            <code>
                require('material-bootstrap')
            </code>
            <br>
        </div>
        <div class="well">
            <h2>Direct Download / CDN</h2>
            <p>Coming soon.</p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>