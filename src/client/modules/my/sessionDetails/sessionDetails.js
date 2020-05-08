import { LightningElement, api } from 'lwc';
import { getSession } from 'data/sessionService';
export default class sessionDetails extends LightningElement {
    session;
    @api //This decorator helps om defining the session property as public
    set sessionId(id) {
        this._sessionId = id;
        this.session = getSession(id);
    }
    get sessionId() {
        return this._sessionId;
    }
}
