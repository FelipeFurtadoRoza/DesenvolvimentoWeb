<template>
    <div class="board">
        <div class="coluna">
            <Coluna v-for="issue in issuesBacklog" :key="issue.id" :issue="issue"/>
        </div>
        <div class="coluna">
            <Coluna v-for="issue in issuesToDo" :key="issue.id" :issue="issue"/>
        </div>
        <div class="coluna">
            <Coluna v-for="issue in issuesDoing" :key="issue.id" :issue="issue"/>
        </div>
    </div>
</template>

<script>
    import Coluna from "./components/coluna.vue";

    export default {
        data() {
            return{
                issuesToDo: [
                    { id: 1, titulo: 'ISSUE - 1', conteudo: 'Erro no login', tags: ['IMPORTANTE', 'BUG'] },
                    { id: 2, titulo: 'ISSUE - 2', conteudo: 'Problemas ao gerar pdf', tags: ['IMPORTANTE', 'BUG', 'PDF'] }
                ],
                issuesDoing: [
                    { id: 1, titulo: 'ISSUE - 3', conteudo: 'Modal não abre', tags: ['PODRE', 'BUG'] },
                    { id: 2, titulo: 'ISSUE - 4', conteudo: 'Ao clicar no botão de compra nada acontece', tags: ['PODRE', 'BUG'] },
                    { id: 3, titulo: 'ISSUE - 5', conteudo: 'aiaiai flip para de mamar minha bingolinha aiaiai chup chup gozzz foit flip hahah', tags: ['PODRE', 'BUG'] }
                ],
                issuesBacklog: [
                    { id: 1, titulo: 'ISSUE - 423', conteudo: 'Arrumar css da pagina principal', tags: ['IMPORTANTE', 'IMPROVEMENT'] },
                    { id: 2, titulo: 'ISSUE - 424', conteudo: 'Problemas de sql', tags: ['PODRE', 'BUG'] },
                    { id: 3, titulo: 'ISSUE - 425', conteudo: 'Vermes vomitam na boca do flip', tags: ['FLIP', 'HAHAHAHA'] },
                    { id: 4, titulo: 'ISSUE - 426', conteudo: 'Problemas com o form do cadastro de usuario', tags: ['IMPORTANTE', 'BUG'] },
                    { id: 5, titulo: 'ISSUE - 427', conteudo: 'Para de morder meu mamilo Flip, estou gostando', tags: ['IMPORTANTE', 'BUG'] },
                ],
            }
        },
        components: { Coluna },
    };
</script>

<style>
.coluna {
    padding-right: 2.84%;
    height: 100vh;
    width: 100%;
    border: 1px solid black;
}
.board {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
}

</style>
