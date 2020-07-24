<template>
    <GridLayout rows="auto,auto" verticalAlignment="top">
        <Label row="0" text="Instructions" class="title med" />

        <StackLayout row="1" class="card">
            <Label row="0" textWrap="true" class="card-title"
                text="How to draw from the Deck" paddingTop="20" />

            <Label row="1" class="meaning" textWrap="true"
                text="
A bearer of a Harrow Deck of Many Things who wishes to draw a card must announce how many cards he will draw before doing so. 

These cards must be drawn within 1 hour of each other, and a character can never draw any more cards from the deck than he announced (unless the effect of a drawn card states otherwise). 

If the character does not willingly draw his allotted number or is somehow prevented from doing so, the cards flip out of the deck on their own after 1 hour. 

Future attempts to draw cards from the deck made by someone who has already drawn his allotted number reveal only blank cards." />
        </StackLayout>
    </GridLayout>
</template>

<script>
    export default {
        data() {
            return {};
        }
    };
</script>

<style scoped>
    .meaning {
        font-size: 16;
        margin: 0 20;
    }
</style>