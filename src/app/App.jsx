import React, {Component} from 'react';

import KeyTracker from 'components/KeyTracker';


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <KeyTracker/>
            </>
        )
    }
}