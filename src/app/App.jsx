import React, {Component} from 'react';

import KeyTracker from 'components/KeyTracker';


export default class App extends Component {
    constructor(props) {
        super(props);

        // TODO: This should come from local storage
        this.shortcuts = [
            { 
                combo: ['Shift', 'A', '1'],
                callback: () => window.location.href = 'https://github.com/0x20f'
            },
            { 
                combo: ['Shift', '!'],
                callback: () => window.location.href = 'https://github.com'
            }
        ];
    }

    render() {
        return (
            <>
                <KeyTracker shortcuts={ this.shortcuts }/>
            </>
        )
    }
}