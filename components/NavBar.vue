<script setup>

const user = useSupabaseUser()
const supabase = useSupabaseClient()

const logout = async()=>{
    const {error} = supabase.auth.signOut()

    if (error){
        console.log(error)
        return
    }

    user.value = null
    navigateTo('/')
}

</script>

<template>
    <header class="sticky top-0 z-50 flex justify-between items-center space-x-1 border-b bg-white p-4 shadow-md">
        <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink>
        <div v-if="user">
            <NuxtLink to="/profile/listings" class="mr-5">profile</NuxtLink>
            <p class="cursor-pointer" @click="logout">Logout</p>
        </div>
        <NuxtLink v-else to="/login" class="mr-5">login</NuxtLink>
    </header>
</template>
  