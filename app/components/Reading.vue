<template>
    <StackLayout>
        <Label row="0" text="Draw from the Harrow Deck" class="title med" />

        <GridLayout rows="*,1,auto" columns="*" class="card">

            <GridLayout row="0" rows="*,4*,*,6*" class="card">
                <Label row="0" textWrap="true" class="card-title"
                    :text="name" />

                <Label row="1" class="emoji" :text="emoji" />

                <FlexboxLayout v-if="alignment" row="2" justifyContent="center"
                    alignItems="center">
                    <Label class="" text="Alignment: " />

                    <Label class="" :text="alignment" />
                </FlexboxLayout>

                <Label row="3" class="meaning" textWrap="true"
                    :text="effect" />
            </GridLayout>

            <StackLayout row="1" backgroundColor="#8089A8"
                style="opacity: .2"></StackLayout>

            <GridLayout row="2" rows="*" columns="*">
                <Label col="0" :class="tabButtonClasses('Present')"
                    text="Draw a Card" @tap="getCard('Present')" />
            </GridLayout>
        </GridLayout>
    </StackLayout>
</template>

<script>
    import Tarot from "./tarot";

    export default {
        mixins: [Tarot],

        data() {
            return {
                currentTab: "Present"
            };
        },

        computed: {
            tabButtonClasses() {
                return tab => ({
                    label: true,
                    selected: tab === this.currentTab
                });
            }
        },

        methods: {
            getCard(context) {
                let sNum = Math.floor(Math.random() * 2);
                let rNum = Math.round(Math.random() * 54);
                this.getOneCard(context, sNum, rNum);
            }
        },

        created() {
            //this.getCard("Present");
        }
    };
</script>

<style scoped>
    .label {
        font-family: Nunito, Nunito-Sans;
        font-size: 15;
        opacity: .5;
        text-align: center;
        margin: 15;
    }

    .emoji {
        font-size: 100;
        text-align: center;
    }

    .selected {
        color: #5326BF;
        opacity: 1;
    }
</style>