<template>
    <div>
        <div>
            <h2>Login</h2>
            <form @submit.prevent="login"></form>
            <input type="text" v-model="logs.username" placeholder="username" />
            <input type="text" v-model="logs.password" placeholder="password" />
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            logs: {
                username: "",
                password: "",
            },
        };
    },

    methods: {
        login() {
            this.$emit("login-user", this.logs);
        },
    },
};
</script>

<style></style>
