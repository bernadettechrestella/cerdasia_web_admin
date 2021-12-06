<template>
    <div>
        <v-row align="center" justify="center" class="pb-3">
                <v-text-field
                    color="#FF5E3C"
                    label="Mau cari apa ?"
                    outlined
                    rounded
                    dense
                    clearable
                    prepend-icon="mdi-magnify"
                    class="pt-7"
                ></v-text-field>
                &emsp;
                    <v-icon
                    large
                    color="#FF5E3C">mdi-bell</v-icon>
                    &emsp;
                    <v-avatar
                    color="#FF5E3C"
                    size="40">
                    </v-avatar>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',

};
</script>