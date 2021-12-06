<template>
    <div>
        <v-row>
            <v-col cols="11">
                <v-text-field
                color="#FF5E3C"
                label="Mau cari apa ?"
                outlined
                rounded
                dense
                clearable
                height="30"
                prepend-icon="mdi-magnify"
                ></v-text-field>
            </v-col>
            <v-col>
                <v-row class="pt-3">
                    <v-icon
                    large
                    color="#FF5E3C">mdi-bell</v-icon>
                    &emsp;
                    <v-avatar
                    color="#FF5E3C"
                    size="40">
                    </v-avatar>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
  name: 'SearchBar',

};
</script>