<template>
    <GridLayout rows="auto,*" verticalAlignment="top">
        <Label row="0" text="Card Meanings" class="title med" />

        <StackLayout row="1" class="meaning-card" orientation="vertical">
            <ListView class="list-group" for="item in allCards"
                backgroundColor="transparent" separatorColor="transparent">
                <v-template>
                    <StackLayout class="list-item-container">
                        <GridLayout class="list-item"
                            @tap="showDetailPageModally(item)" columns="50,*"
                            rows="*" class="list-item list-item-name">
                            <Label col="0" :text="item.emoji" class="lab"
                                verticalAlignment="center" />
                            <Label col="1" :text="item.name" class="lab"
                                verticalAlignment="center" />
                        </GridLayout>
                    </StackLayout>
                </v-template>
            </ListView>
        </StackLayout>
    </GridLayout>
</template>

<script>
    import {
        Cards
    } from "../data/cards";

    const Detail = {
        props: ["name", "name_alt", "effect", "alignment", "emoji"],
        template: `
<ModalStack class="modal-container">
	<GridLayout class="card modal" rows="auto,auto" verticalAlignment="middle">
        <Button row="0" @tap="$modal.close" class="fa close" 
            text.decode="&#xf00d;" horizontalAlignment="right" />

        <StackLayout row="1" ref="meaningContainer" class="list-item 
            list-item-meaning">
                
            <Label :text="name" class="card-title" 
                style="text-align: center;padding-bottom: 30;" />

			<Label :text="emoji" style="text-align: center; font-size: 100; margin-bottom: 30;" />

            <FlexboxLayout justifyContent="center" style="margin-bottom: 30;">
				<Label col="0" text="Alignment: " style="text-align: right;" />
				<Label col="1" :text="alignment" />
            </FlexboxLayout>
            
            <Label verticalAlignment="top" :text="effect" 
                textWrap="true" style="margin-bottom:25; font-size: 16;" />
        </StackLayout>
    </GridLayout>
</ModalStack>
`
    };

    export default {
        data() {
            return {
                cards: Cards,
                name: "",
                name_alt: "",
                alignment: "",
                effect: "",
                emoji: "",
                allCards: [],
                detailPage: Detail
            };
        },

        methods: {
            getAllCards() {
                this.cards.forEach((card, index) => {
                    this.allCards.push({
                        name: card.name,
                        name_alt: card.name_alt,
                        alignment: card.alignment,
                        effect: card.effect,
                        emoji: card.emoji
                    });
                });
            },

            showDetailPageModally(item) {
                this.$showModal(Detail, {
                    props: {
                        name: item.name,
                        name_alt: item.name_alt,
                        alignment: item.alignment,
                        effect: item.effect,
                        emoji: item.emoji
                    }
                });
            }
        },

        created() {
            this.getAllCards();
        }
    };
</script>

<style scoped>
    .meaning-card {
        margin: 10;
        padding: 5;
    }

    .list-item-container {
        margin-bottom: 20;
    }

    .list-item-container:last-child {
        margin-bottom: 0;
    }

    .list-item {
        padding: 20 10;
    }

    .arrow {
        margin-right: 5;
    }

    .arrow2 {
        margin-right: 5;
    }
</style>