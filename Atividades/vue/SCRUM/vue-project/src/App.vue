<template>
    <div class="board">
        <div class="coluna">
            <Coluna v-for="issue in issuesBacklog" :key="issue.id" :issue="issue" @moveBacklog="moveBacklog"/>
        </div>
        <div class="coluna">
            <Coluna v-for="issue in issuesToDo" :key="issue.id" :issue="issue" @moveBacklog="moveBacklog"/>
        </div>
        <div class="coluna">
            <Coluna v-for="issue in issuesDoing" :key="issue.id" :issue="issue" @moverTras="moverTras" @moveBacklog="moveBacklog"/>
        </div>
    </div>
</template>

<script>
    import Coluna from "./components/coluna.vue";

    export default {
        data() {
            return{
                issuesToDo: [
                    { id: 1, idArray: 'issuesToDo', titulo: 'ISSUE - 1', conteudo: 'Erro no login', tags: ['IMPORTANTE', 'BUG'] },
                    { id: 2, idArray: 'issuesToDo', titulo: 'ISSUE - 2', conteudo: 'Problemas ao gerar pdf', tags: ['IMPORTANTE', 'BUG', 'PDF'] }
                ],
                issuesDoing: [
                    { id: 3, idArray: 'issuesDoing', titulo: 'ISSUE - 3', conteudo: 'Modal não abre', tags: ['PODRE', 'BUG'] },
                    { id: 4, idArray: 'issuesDoing', titulo: 'ISSUE - 4', conteudo: 'Ao clicar no botão de compra nada acontece', tags: ['PODRE', 'BUG'] },
                    { id: 5, idArray: 'issuesDoing', titulo: 'ISSUE - 5', conteudo: 'aiaiai flip para de mamar minha bingolinha aiaiai chup chup gozzz foit flip hahah', tags: ['PODRE', 'BUG'] }
                ],
                issuesBacklog: [
                    { id: 6, idArray: 'issuesBacklog', titulo: 'ISSUE - 423', conteudo: 'Arrumar css da pagina principal', tags: ['IMPORTANTE', 'IMPROVEMENT'] },
                    { id: 7, idArray: 'issuesBacklog', titulo: 'ISSUE - 424', conteudo: 'Problemas de sql', tags: ['PODRE', 'BUG'] },
                    { id: 8, idArray: 'issuesBacklog', titulo: 'ISSUE - 425', conteudo: 'Vermes vomitam na boca do flip', tags: ['FLIP', 'HAHAHAHA'] },
                    { id: 9, idArray: 'issuesBacklog', titulo: 'ISSUE - 426', conteudo: 'Problemas com o form do cadastro de usuario', tags: ['IMPORTANTE', 'BUG'] },
                    { id: 10, idArray: 'issuesBacklog', titulo: 'ISSUE - 427', conteudo: 'Para de morder meu mamilo Flip, estou gostando', tags: ['IMPORTANTE', 'BUG'] },
                ],
            }
        },
        components: { Coluna },

        methods: {
            moveBacklog(idLoko, id2) {
                let cont = 0;
                if (id2 == "issuesBacklog") {
                    for(var i in this.issuesBacklog){
                        var row = this.issuesBacklog[i];
                        if(row['id'] == idLoko) {
                            var index = cont;
                        }
                        cont++
                    }
                    this.issuesToDo.push({id: this.issuesBacklog[index].id, idArray: 'issuesToDo', titulo: this.issuesBacklog[index].titulo, conteudo: this.issuesBacklog[index].conteudo, tags: this.issuesBacklog[index].tags})
                    this.issuesBacklog.splice(index, 1);
                } else if(id2 == "issuesToDo") {
                    for(var i in this.issuesToDo){
                        var row = this.issuesToDo[i];
                        if(row['id'] == idLoko) {
                            var index = cont;
                        }
                        cont++
                    }
                    this.issuesDoing.push({id: this.issuesToDo[index].id, idArray: 'issuesDoing', titulo: this.issuesToDo[index].titulo, conteudo: this.issuesToDo[index].conteudo, tags: this.issuesToDo[index].tags})
                    this.issuesToDo.splice(index, 1);
                }


            },
            moverTras(idLoko, id2) {
                let cont = 0;
                if (id2 == "issuesBacklog") {
                    for(var i in this.issuesBacklog){
                        var row = this.issuesBacklog[i];
                        if(row['id'] == idLoko) {
                            var index = cont;
                        }
                        cont++
                    }
                    this.issuesToDo.push({id: this.issuesBacklog[index].id, idArray: 'issuesToDo', titulo: this.issuesBacklog[index].titulo, conteudo: this.issuesBacklog[index].conteudo, tags: this.issuesBacklog[index].tags})
                    this.issuesBacklog.splice(index, 1);
                } else if(id2 == "issuesDoing") {
                    for(var i in this.issuesDoing){
                        var row = this.issuesDoing[i];
                        if(row['id'] == idLoko) {
                            var index = cont;
                        }
                        cont++
                    }
                    this.issuesToDo.push({id: this.issuesDoing[index].id, idArray: 'issuesToDo', titulo: this.issuesDoing[index].titulo, conteudo: this.issuesDoing[index].conteudo, tags: this.issuesDoing[index].tags})
                    this.issuesDoing.splice(index, 1);
                }
            }
        },
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
