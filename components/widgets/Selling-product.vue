<script>
/**
 * Selling-product component
 */
export default {};
</script>

<template>
<div class="card">
    <div class="card-body">
        <div class="float-end">
            <b-dropdown right toggle-class="text-reset p-0" variant="white">
                <template v-slot:button-content>
                    <span class="font-weight-semibold">Sort By:</span>
                    <span class="text-muted">
                        Yearly
                        <i class="mdi mdi-chevron-down ml-1"></i>
                    </span>
                </template>
                <a class="dropdown-item" href="#">Monthly</a>
                <a class="dropdown-item" href="#">Yearly</a>
                <a class="dropdown-item" href="#">Weekly</a>
            </b-dropdown>
        </div>

        <h4 class="card-title mb-4">Stations Persfomance</h4>

        <div class="row align-items-center no-gutters mt-3">
            <div class="col-sm-3">
                <p class="text-truncate mt-1 mb-0">
                    <i class="mdi mdi-circle-medium text-primary me-2"></i> Station 1
                </p>
            </div>

            <div class="col-sm-9">
                <b-progress :value="22" variant="primary" class="mt-1" height="6px"></b-progress>
            </div>
        </div>
        <!-- end row-->

        <div class="row align-items-center no-gutters mt-3">
            <div class="col-sm-3">
                <p class="text-truncate mt-1 mb-0">
                    <i class="mdi mdi-circle-medium text-info me-2"></i> Station 2
                </p>
            </div>
            <div class="col-sm-9">
                <b-progress :value="33" variant="info" class="mt-1" height="6px"></b-progress>
            </div>
        </div>
        <!-- end row-->

        <div class="row align-items-center no-gutters mt-3">
            <div class="col-sm-3">
                <p class="text-truncate mt-1 mb-0">
                    <i class="mdi mdi-circle-medium text-success me-2"></i> Station 3
                </p>
            </div>
            <div class="col-sm-9">
                <b-progress :value="18" variant="success" class="mt-1" height="6px"></b-progress>
            </div>
        </div>
        <!-- end row-->

        <div class="row align-items-center no-gutters mt-3">
            <div class="col-sm-3">
                <p class="text-truncate mt-1 mb-0">
                    <i class="mdi mdi-circle-medium text-warning me-2"></i> Station 4
                </p>
            </div>
            <div class="col-sm-9">
                <b-progress :value="42" variant="warning" class="mt-1" height="6px"></b-progress>
            </div>
        </div>
        <!-- end row-->

        <div class="row align-items-center no-gutters mt-3">
            <div class="col-sm-3">
                <p class="text-truncate mt-1 mb-0">
                    <i class="mdi mdi-circle-medium text-purple me-2"></i> Station 5
                </p>
            </div>
            <div class="col-sm-9">
                <b-progress :value="18" variant="purple" class="mt-1" height="6px"></b-progress>
            </div>
        </div>
        <!-- end row-->
    </div>
    <!-- end card-body-->
</div>
<!-- end card-->
</template>
