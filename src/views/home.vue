<template>
    <div>
        <ul>
            <li v-for="(item, index) in store.getters.get_animals" :key="index">
                <label>
                    <input type="checkbox" />{{ item }}
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: "Home",
    components: {},
    setup() {
        const store = useStore();

        return {
            store
        }
    },
};
</script>
<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 5px 0;
    }

    input[type=checkbox] {
        margin-right: 8px;
    }
</style>
