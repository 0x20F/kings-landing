import React, {Component} from 'react';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, classes } = this.props;

        let c = [];

        if (classes) {
            c = classes;
        }

        c.push('view-header');


        return (
            <>
                <header className={ c.join(' ') }>{ text }</header>
            </>
        )
    }
}