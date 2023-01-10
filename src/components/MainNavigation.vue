<template>
    <header>
        <ul>
            <li>
                <router-link to="/">HOME</router-link>
            </li>
            <li>
                <router-link to="/page1">Page 1</router-link>
            </li>
        </ul>
    </header>
</template>
<script>

export default {
    name: 'MainNavigation',
    components: {},
    setup() {
    },
}
</script>
<style scoped>
    header {
        background-color: #333;
        color: #fff;
        height: 50px;
    }
    ul {
        align-content: center;
        display: flex;
        flex-flow: wrap;
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0 16px;
    }

    ul li {
        display: block;
        padding: 0 16px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
