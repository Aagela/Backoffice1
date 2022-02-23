<script>
/**
 * User grid component
 */
export default {
    head() {
        return {
            title: `${this.title}`,
        };
    },
    data() {
        return {
            title: "EV Stations Grid",
            items: [{
                    text: "EV Stations",
                },
                {
                    text: "EV Stations Grid",
                    active: true,
                },
            ],
            gridList: [{
                    profile: require("~/assets/images/stations/greenev.jpg"),
                    name: "Runcorn EV Station",
                    designation: "6 Charging Post",
                },
                {
                    profile: require("~/assets/images/stations/greenev.jpg"),
                    name: "Tesco Huddersfield EV Station",
                    designation: "4 Charging Post",
                },
                {
                    profile: require("~/assets/images/stations/redev.webp"),
                    name: "University of Huddersfield EV Station",
                    designation: "6 Charging Post",
                },
              
                
            ],
        };
    },
    middleware: "authentication",
};
</script>

<template>
<div>
    <PageHeader :title="title" :items="items" />

    <div class="row">
        <div class="col-xl-3 col-sm-6" v-for="(item, index) in gridList" :key="index">
            <div class="card text-center">
                <div class="card-body">
                    <b-dropdown class="float-end" variant="white" right toggle-class="font-size-16 text-body p-0">
                        <template v-slot:button-content>
                            <i class="uil uil-ellipsis-h"></i>
                        </template>
                        <a class="dropdown-item" href="#">Edit</a>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Remove</a>
                    </b-dropdown>
                    <div class="clearfix"></div>
                    <div class="mb-4">
                        <img v-if="item.profile" :src="item.profile" alt class="avatar-lg rounded-circle img-thumbnail" />
                        <div class="avatar-lg mx-auto mb-4" v-if="!item.profile">
                            <div class="avatar-title bg-soft-primary rounded-circle text-primary">
                                <i class="mdi mdi-account-circle display-4 m-0 text-primary"></i>
                            </div>
                        </div>
                    </div>
                    <h5 class="font-size-16 mb-1">
                        <a href="#" class="text-dark">{{ item.name }}</a>
                    </h5>
                    <p class="text-muted mb-2">{{ item.designation }}</p>
                </div>

                <div class="btn-group" role="group">
                    <button type="button" class="btn btn-outline-light text-truncate">
                        <i class="uil uil-user mr-1"></i> Monitoring
                    </button>
                    <button type="button" class="btn btn-outline-light text-truncate">
                        <i class="uil uil-envelope-alt mr-1"></i> Details
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!-- end row -->

    <div class="row mt-3">
        <div class="col-xl-12">
            <div class="text-center my-3">
                <a href="javascript:void(0);" class="text-primary">
                    <i class="mdi mdi-loading mdi-spin font-size-20 align-middle mr-2"></i>
                    Load more
                </a>
            </div>
        </div>
    </div>
    <!-- end row -->
</div>
</template>
