<template>
    <div>
        <v-row class="pb-3">
                <v-text-field
                    color="#FF5E3C"
                    label="Mau cari apa ?"
                    outlined
                    rounded
                    dense
                    clearable
                    prepend-inner-icon="mdi-magnify"
                    class="pt-3"
                ></v-text-field>
                &emsp;
                    <v-icon
                    color="#FF5E3C">mdi-bell</v-icon>
                    &emsp;
                    <v-icon
                    color="#FF5E3C">mdi-cog</v-icon>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',

};
</script>