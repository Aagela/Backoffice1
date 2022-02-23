<script>
/**
 * Dashboard component
 */
// import axios from 'axios'
// import {mapGetters} from 'vuex'
// import login from "~/pages/auth/login-1.vue/"
// import profile from "~/pages/account/profile.vue"

export default {
    head() {
        return {
            title: `${this.title}`,
        };
    },
    data() {
        return {
            title: "Dashboard",
            items: [{
                    text: "EnSmartEv",
                },
                {
                    text: "Dashboard",
                    active: true,
                },
            ],
            user: null
        };
    },

    // components: {
    //     login,
    //     profile
    // },

    // setup() {
    //     store.user = this.$supabase.auth.user()
    //     supabase.auth.onAuthStateChange((_, session) => {
    //         store.user = session.user
    //     })
    //     return {
    //         store,
    //     }
    // },

    // async created() {
    //     const response = await axios.get('user'
    //     //, 
    //     //{
    //         //headers: {
    //             //Authorization: 'Bearer' + localStorage.getItem('token')
    //         //}
    //     //}
    //     );

    //    // console.log(response)
    //    this.user = response.data
    // },
    middleware: "authentication",
    //may need to comment this out cos user uninstantiated
    // methods: {
    //     handleClick() {
    //         localStorage.removeItem('token');
    //         this.$store.dispatch('user', null);
    //         this.$router.push('/');
    //     }
    // },
    // computed: {
    //     ...mapGetters(['user'])
    // },
    // props: ['user']

};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />
        <div> 
            <!-- <h3  v-if="user"> Hi, {{username}} </h3>
            <h3 v-if="!user">You are not logged In! </h3> -->
        </div>
    <!-- conditional rendering of rest of page based on log in status -->


    <Stat />

    <div class="row">
        <SalesAnalytics />
        <div class="col-xl-4">
            <div class="card bg-primary">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-sm-8">
                            <p class="text-white font-size-18">
                               System 
                                <b>maintenance </b> schedule 
                                <i class="mdi mdi-arrow-right"></i>
                            </p>
                            <div class="mt-4">
                                <a href="javascript: void(0);" class="btn btn-success waves-effect waves-light">Set up!</a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="mt-4 mt-sm-0">
                                <img src="~/assets/images/setup-analytics-amico.svg" class="img-fluid" alt />
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card-body-->
            </div>
            <!-- end card-->
            <SellingProduct />
        </div>
    </div>

    <div class="row">
        <TopUsers />
        <Activity />
        <SocialSource />
    </div>
</div>
</template>

<style></style>
