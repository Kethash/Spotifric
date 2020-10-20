<template>
    <div>
        <div>
            <h2>Register</h2>
            <form @submit.prevent="register"></form>
            <input
                type="text"
                v-model="newUser.username"
                placeholder="username"
            />
            <input
                type="text"
                v-model="newUser.password"
                placeholder="password"
            />
        </div>
    </div>
</template>

<script>
module.exports = {
    data() {
        return {
            newUser: {
                username: "",
                password: "",
            },
        };
    },

    methods: {
        register() {
            this.$emit("register-user", this.newUser);
        },
    },
};
</script>

<style></style>
