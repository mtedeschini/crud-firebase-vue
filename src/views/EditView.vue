<template>
    {{user}}
    <form @submit.prevent="updateUser(user)">
      <Input :user="user"/>
    </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Input from '../components/Input.vue'

export default {
    components: {
        Input,
    },
    computed: {
        ...mapState(['user']),
    },
    methods: {
        ...mapActions(['setUser', 'updateUser'])
    },
    created(){
        this.setUser(this.$route.params.id);
    }

}
</script>
