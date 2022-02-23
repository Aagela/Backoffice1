<script>
/**
 * Footer component
 */
export default {};
</script>

<template>
<footer class="footer">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-6">{{ new Date().getFullYear()}} © MicroGrid.</div>
            <div class="col-sm-6">
                <div class="text-sm-end d-none d-sm-block">
                    Created
                    <i class="mdi mdi-heart text-danger"></i> by
                    <a href="" target="_blank" class="text-reset">SEVHub Team</a>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
