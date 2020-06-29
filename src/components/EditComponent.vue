<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            user: { }
        }
    },
    created() {
        let apiURL = `api/edit/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.user = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `api/update/${this.$route.params.id}`;

            axios.post(apiURL, this.user).then((res) => {
                console.log(res)
                this.$router.push('/view')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>