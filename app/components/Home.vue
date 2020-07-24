<template>
    <Page class="page" actionBarHidden="true"
        androidStatusBarBackground="#142237">
        <GridLayout rows="auto, *, auto" columns="*, *, *">
            <Image src="~/assets/logo.png" width="300" marginTop="20" row="0"
                col="0" colSpan="3" />

            <component v-for="component in componentsArray"
                v-show="component === currentComponent" :is="component"
                row="1" col="0" colSpan="3" />

            <Button :class="navigationButtonClasses('Rules')"
                text.decode="&#xf185;" @tap="currentComponent = 'Rules'"
                row="2" col="0" />
            <Button :class="navigationButtonClasses('CardList')"
                text.decode="&#xf0c9;" @tap="currentComponent = 'CardList'"
                row="2" col="1" />
            <Button :class="navigationButtonClasses('Reading')"
                text.decode="&#xf25a;" @tap="currentComponent = 'Reading'"
                row="2" col="2" />
        </GridLayout>
    </Page>
</template>

<script>
    import Rules from "../components/Rules";
    import CardList from "../components/CardList";
    import Reading from "../components/Reading";

    export default {
        data() {
            return {
                currentComponent: "Rules",
                componentsArray: ["Rules", "CardList", "Reading"]
            };
        },

        computed: {
            navigationButtonClasses() {
                return component => ({
                    fa: true,
                    "nav-btn": true,
                    purple: component === this.currentComponent
                });
            }
        },

        components: {
            Rules,
            CardList,
            Reading
        }
    };
</script>

<style scoped>
    .nav-btn {
        color: #9D95B4;
        margin: 20;
        font-size: 30;
        padding: 10;
    }

    .purple {
        background-color: #781212;
        color: white;
        font-size: 30;
        border-radius: 10;
    }

    Button {
        background-color: rgba(255, 0, 0, 0.0);
        border-color: rgba(255, 0, 0, 0.0);
        border-radius: 10;
        border-width: 1;
        android-elevation: 0;
        android-dynamic-elevation-offset: 0;
    }

    Button:active {
        background-color: rgba(0, 0, 0, 0.25);
    }
</style>