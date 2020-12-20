import React, {Component} from 'react';


export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { text, className, secondaryText } = this.props;

        let c = [];
        let secondText = secondaryText;

        if (!secondaryText) {
            secondText = text;
        }

        if (className) {
            c = className.split(' ');
        }

        c.push('view-header');

        let final = c.join(' ');

        c.push('secondary');
        let secondary = c.join(' ');


        return (
            <>
                <header className={ final }>{ text }</header>
                <header className={ secondary }>{ secondText }</header>
            </>
        )
    }
}