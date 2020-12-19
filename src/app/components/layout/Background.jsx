import React, {Component} from 'react';


export default class Background extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, classes } = this.props;

        let c = [];

        if (classes) {
            c = classes;
        }

        c.push('view-background');


        return (
            <>
                <div className={ c.join(' ') }>{ text }</div>
            </>
        )
    }
}