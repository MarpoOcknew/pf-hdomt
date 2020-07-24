import Vue from 'nativescript-vue';

import Home from './components/Home';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

import { ModalStack, overrideModalViewMethod, VueWindowedModal } from './nativescript-windowed-modal';
overrideModalViewMethod();

Vue.registerElement('ModalStack', () => ModalStack);
Vue.use(VueWindowedModal);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();