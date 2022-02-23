<script>
/**
 * Login-1 component
 */
import axios from 'axios'

export default {
    layout: "auth",
    head() {
        return {
            title: `${this.title}`
        };
    },
    data() {
        return {
            title: "Log in",
            username: " ",
            userpassword: " "

        };
    },
    methods: {
        async handleSubmit() {
            const response =  await axios.post('login', {
                username: this.username,
                password: this.password
            });

            //console.log(response);
            localStorage.setItem('token', response.data.token); 
            this.$router.push('/');
        }
    }
};
</script>

<template>
<div>
    <div class="home-btn d-none d-sm-block">
        <nuxt-link to="/" class="text-dark"><i class="mdi mdi-home-variant h2"></i></nuxt-link>
    </div>
    <div class="account-pages my-5 pt-sm-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-center">
                        <nuxt-link to="/" class="mb-5 d-block auth-logo">
                            <img src="~/assets/images/logo-dark.png" alt="" height="22" class="logo logo-dark" />
                            <img src="~/assets/images/logo-light.png" alt="" height="22" class="logo logo-light" />
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="row align-items-center justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-5">
                    <div class="card">
                        <div class="card-body p-4">
                            <div class="text-center mt-2">
                                <h5 class="text-primary">Welcome Back !</h5>
                                <p class="text-muted">Sign in to SEVHub Back Office.</p>
                            </div>
                            <div class="p-2 mt-4">
                                <form @submit.prevent="handleSubmit">
                                    <div class="mb-3">
                                        <label for="username">Username</label>
                                        <input type="text" class="form-control" id="username" v-model="username" placeholder="Enter username" />
                                    </div>

                                    <div class="mb-3">
                                        <div class="float-end">
                                            <nuxt-link to="/auth/recoverpwd" class="text-muted">
                                                Forgot password?</nuxt-link>
                                        </div>
                                        <label for="userpassword">Password</label>
                                        <input type="password" class="form-control"  v-model="password" id="userpassword" placeholder="Enter password" />
                                    </div>

                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="auth-remember-check" />
                                        <label class="form-check-label" for="auth-remember-check">Remember me</label>
                                    </div>

                                    <div class="mt-3 text-end">
                                         <nuxt-link to="/">
                                        <button class="btn btn-primary w-sm waves-effect waves-light" type="submit">
                                            Log In
                                        </button>
                                        </nuxt-link>
                                    </div>

                                    <div class="mt-4 text-center">
                                         <div class="signin-other-title">
                                              <nuxt-link to="/auth/register-1" class="fw-medium text-primary">
                                            <h5 class="font-size-14 mb-3 title">Admin</h5></nuxt-link>
                                        </div> 



                                        <!-- <ul class="list-inline">
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-primary text-white border-primary">
                                                    <i class="mdi mdi-facebook"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-info text-white border-info">
                                                    <i class="mdi mdi-twitter"></i>
                                                </a>
                                            </li>
                                            <li class="list-inline-item">
                                                <a href="javascript:void()" class="social-list-item bg-danger text-white border-danger">
                                                    <i class="mdi mdi-google"></i>
                                                </a>
                                            </li>
                                        </ul> -->
                                    </div> -->

                                    <!-- <div class="mt-4 text-center">
                                        <p class="mb-0">
                                            Don't have an account ?
                                            <nuxt-link to="/auth/register-1" class="fw-medium text-primary">
                                                Signup now</nuxt-link>
                                        </p>
                                    </div> -->
                                </form>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 text-center">
                        <p>
                            © {{ new Date().getFullYear()}} Back Office
                            <i class="mdi mdi-heart text-danger"></i> by SEVHub Team
                        </p>
                    </div>
                </div>
            </div>
            <!-- end row -->
        </div>
        <!-- end container -->
    </div>
</div>
</template>
