<template>
    <section>
        Hello {{this.message.prenom}} {{this.message.nom}}
    </section>
</template>

<script>

export default {
    name: 'EspaceClient',

    data () {
        return {
        message: '',
        personne: {
            prenom: 'Enguerran',
            nom: 'BEST',
        },
        erreurs: '',
        }
    }, 
    methods: {

    }
}
</script>

<style lang="scss">

</style>