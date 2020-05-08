import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    sessionId;
    state;

    constructor() {
        super();
        this.state = 'list';
        window.history.replaceState('list', null, '');
        window.onpopstate = (event) => {
            if (event.state) {
                this.state = event.state;
            }
        };
    }

    // Backend logic to recieve the event that was fired by sessionList component
    handleNavigate(event) {
        this.sessionId = event.detail;
        //This replaces the native 'pushState' and 'replaceState' functions on the browsers to navigate between states
        this.state = 'details';
        window.history.pushState('details', null);
    }

    get isStateList() {
        return this.state === 'list';
    }
    get isStateDetails() {
        return this.state === 'details';
    }
}
