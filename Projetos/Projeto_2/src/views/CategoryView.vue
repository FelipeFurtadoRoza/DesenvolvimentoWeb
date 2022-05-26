<script>
    import { mapActions, mapState, mapStores } from 'pinia';
    import { useCategoryStore } from "@/stores/category"
        export default {
            computed: {
                ...mapStores(useCategoryStore),
                ...mapState(useCategoryStore, ['categories']),
            },
            methods: {
                ...mapActions(useCategoryStore, ["getAllCategories", "saveCategory"]),
                save() {
                    this.saveCategory(this.currentCategory);
                }
            },
            mounted() {
                this.getAllCategories();
            }
        }

</script>
<template>
    <div>
        <h1>Cadastro de Categoria</h1>
        <div>
            <input type="text" id="currentCategory">
            <button @click="save()">Adicionar</button>
        </div>
    </div>
    <div class="category-list">
        <table class="table">
            <thead>
                <tr>
                    <th class="text-left">
                        <span> <h2>ID</h2> </span>
                    </th>
                    <th class="text-left">
                        <span> <h2>Descrição</h2> </span>
                    </th>
                    <th class="text-left">
                        <span> <h2>Ações</h2> </span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id" :category="category">
                <td>{{category.id}}</td>
                <td>{{category.description}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.category-list {
    width: 70%;
    margin: 0 auto;
}

table {
    display: table;
    border-collapse: separate;
    border-spacing: 2px;
    border-color: gray;
    width: 100%;
}
td {
    padding: 10px;
}
tbody tr:nth-child(even) {
    background-color: gray;
}
thead {
    background-color: black;
    color: white
}
th {
    border-bottom: 2px solid black;
    text-align: left;
}
</style>
