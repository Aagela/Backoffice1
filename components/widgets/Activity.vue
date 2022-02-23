<script>
/**
 * Activity component
 */
export default {};
</script>

<template>
<div class="col-xl-4">
    <div class="card">
        <div class="card-body">
            <div class="float-end">
                <b-dropdown right toggle-class="p-0" variant="white">
                    <template v-slot:button-content>
                        <span class="text-muted">
                            Recent
                            <i class="mdi mdi-chevron-down ml-1"></i>
                        </span>
                    </template>
                    <a class="dropdown-item" href="#">Recent</a>
                    <a class="dropdown-item" href="#">By Users</a>
                </b-dropdown>
            </div>

            <h4 class="card-title mb-4">Recent Activity</h4>

            <ol class="activity-feed mb-0 ps-2" data-simplebar style="max-height: 336px;">
                <li class="feed-item">
                    <div class="feed-item-list">
                        <p class="text-muted mb-1 font-size-13">
                            Today
                            <small class="d-inline-block ml-1">12:20 pm</small>
                        </p>
                        <p class="mt-0 mb-0">
                            Systm Upgrade on:
                            <span class="text-primary">
                               Runcorn Station
                            </span>
                        </p>
                    </div>
                </li>
                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        22 jan, 2022
                        <small class="d-inline-block ml-1">12:36 pm</small>
                    </p>
                    <p class="mt-0 mb-0">
                        Adding new Post on:
                        <span class="text-primary">Huddersfield Station</span>
                    </p>
                </li>
                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        18 Jan, 2022
                        <small class="d-inline-block ml-1">07:56 am</small>
                    </p>
                    <p class="mt-0 mb-0">
                        Add new Operator 
                        <span class="text-primary">James</span>
                    </p>
                </li>
                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        10 Jul, 2022
                        <small class="d-inline-block ml-1">08:42 pm</small>
                    </p>
                    <p class="mt-0 mb-0">
                        Battery Fault has been solved on:
                        <span class="text-primary">Runcorn Station</span>
                    </p>
                </li>

                <li class="feed-item">
                    <p class="text-muted mb-1 font-size-13">
                        23 Jun, 2022
                        <small class="d-inline-block ml-1">12:22 am</small>
                    </p>
                    <p class="mt-0 mb-0">
                        Changing Cooling system on 
                        <span class="text-primary">Huddersfield Station</span>
                    </p>
                </li>
                <li class="feed-item pb-1">
                    <p class="text-muted mb-1 font-size-13">
                        20 Jun, 2022
                        <small class="d-inline-block ml-1">09:48 pm</small>
                    </p>
                    <p class="mt-0 mb-0">
                        Adding Operator
                        <span class="text-primary">Aisha</span>
                    </p>
                </li>
            </ol>
        </div>
    </div>
</div>
</template>
