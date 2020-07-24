import { Cards } from '../data/cards';
export default {
    name: 'Card',
    data() {
        return {
            name: '',
            name_alt: '',
            alignment: '',
            effect: '',
            emoji: '',
            cards: Cards,
        };
    },
    methods: {
        getOneCard(context, sNum, rNum) {
            this.currentTab = context;
            const card = this.cards[rNum];
            this.name = card.name;
            this.name_alt = card.name_alt;
            this.alignment = card.alignment;
            this.effect = card.effect;
            this.emoji = card.emoji;
        },
    },
};
