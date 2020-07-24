<template>
    <GridLayout rows="auto,auto" verticalAlignment="top">
        <Label row="0" text="Card of the Day" class="title med" />

        <GridLayout row="1" rows="*,3*,*,4*" class="card">
            <Label row="0" textWrap="true" class="card-title" :text="name"
                paddingTop="20" />

            <Label row="1" class="emoji" :text="emoji" />

            <FlexboxLayout row="2" justifyContent="center">
                <Label class="" text="Alignment: " />

                <Label class="" :text="alignment" />
            </FlexboxLayout>

            <Label row="3" class="meaning" textWrap="true" :text="effect" />
        </GridLayout>
    </GridLayout>
</template>

<script>
    import {
        Cards
    } from "../data/cards";
    import Tarot from "./tarot";

    export default {
        mixins: [Tarot],

        methods: {
            getCard(context) {
                let sNum = Math.floor(Math.random() * 2);
                let rNum = Math.round(Math.random() * 72);
                this.getOneCard(context, sNum, rNum);
            }
        },

        created() {
            this.getCard("day");
        }
    };
</script>

<style scoped>
    .meaning {
        font-size: 16;
        color: #131636;
        text-align: center;
        margin: 0 20;
    }

    .emoji {
        font-size: 100;
    }

    .status {
        color: #323340;
        opacity: .5;
        font-size: 14;
    }
</style>