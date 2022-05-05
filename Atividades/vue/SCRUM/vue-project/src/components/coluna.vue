<template>
    <div>
        <ul>
            <section class="card">
                <h3>{{issue.titulo}}</h3>
                <p>{{issue.conteudo}}</p>
                <div class="tags">
                    <p class="tag" v-for="tag in issue.tags">
                        {{tag}}
                    </p>
                </div>
                <div>
                    <button v-on:click="$emit('moveBacklog', issue.id)"></button>
                </div>
            </section>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Issue',
        props: {
            issue: {
                type: Object,
            },
        },
    }
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.card {
    height: 15vh;
    border: 1px solid black;
}

.tags {
    display: flex;
    justify-items: baseline;
}

.tag {
    border: 1px solid black;
    margin: 4%;
}

h3 {
    margin: 0;
}
</style>
