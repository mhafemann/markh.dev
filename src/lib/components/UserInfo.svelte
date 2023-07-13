<script lang="ts">
    import profile from '$lib/assets/global/profile.jpg';
</script>

<!-- prettier-ignore -->
<div class="flex items-center space-x-4 h-12">
    <img class="w-12 h-12 rounded-lg" src={profile} alt="Mark Hafemann" />
    <div class="text-2xl leading-none h-12 flex flex-col justify-between">
    
        <p class="pt-px font-bold text-lg h-6 flex items-center">
            <slot name="name">User Name</slot>
        </p>

        <div class="h-6 flex items-end">
            <small class="text-sm -mb-1 text-sky-700">
                <slot name="meta">...</slot>
            </small>
        </div>
  
    </div>
</div>
