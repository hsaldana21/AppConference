import { LightningElement } from 'lwc';
import { getSessions } from 'data/sessionService';
export default class SessionList extends LightningElement {
    sessions = [];
    connectedCallback() {
        getSessions().then((result) => {
            this.sessions = this.allSessions = result;
        });
    }

    //Event that gets called when a user start typing on the search box element
    handleSearchKeyInput(event) {
        const searchKey = event.target.value.toLowerCase();
        this.sessions = this.allSessions.filter((session) =>
            session.name.toLowerCase().includes(searchKey)
        );
    }

    //Event get called when a session was clicked
    handleSessionClick(event) {
        const index = event.currentTarget.dataset.index;
        //This logic helps on dispatching the event to whichever component is listening
        const navigateEvent = new CustomEvent('navigate', {
            detail: this.sessions[index].id
        });
        this.dispatchEvent(navigateEvent);
    }
}
