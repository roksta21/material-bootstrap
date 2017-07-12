<template>
    <div class="side-bar" id="sidebar">
        <nav class="side-nav">
            <div>
                <h2 class="brand"><a href="/">Material Boorstrap</a></h2>
            </div>
            <div class="mui-divider"></div>
            <ul class="parent">
                <router-link to="/">
                    <li>
                        <strong>Introduction</strong>
                    </li>
                </router-link>
                <router-link to="/installation">
                    <li>
                        <strong>Installation</strong>
                    </li>
                </router-link>
                <router-link to="/nav">
                    <li>
                        <strong>Nav</strong>
                    </li>
                </router-link>
                <router-link to="/buttons">
                    <li>
                        <strong>Buttons</strong>
                    </li>
                </router-link>
                <router-link to="/typography">
                    <li>
                        <strong>Typography</strong>
                    </li>
                </router-link>
                <router-link to="/icons">
                    <li>
                        <strong>Icons</strong>
                    </li>
                </router-link>
                <router-link to="/tables">
                    <li>
                        <strong>Tables</strong>
                    </li>
                </router-link>
                <router-link to="/forms">
                    <li>
                        <strong>Forms</strong>
                    </li>
                </router-link>
                <router-link to="/navs">
                    <li>
                        <strong>Navs</strong>
                    </li>
                </router-link>
                <router-link to="/indicators">
                    <li>
                        <strong>Indicators</strong>
                    </li>
                </router-link>
                <router-link to="/progress-bars">
                    <li>
                        <strong>Progress Bars</strong>
                    </li>
                </router-link>
                <router-link to="/containers">
                    <li>
                        <strong>Containers</strong>
                    </li>
                </router-link>
                <router-link to="/dialogs">
                    <li>
                        <strong>Dialogs</strong>
                    </li>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {

    }
</script>