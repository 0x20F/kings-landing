import React, {Component} from 'react';

import Header from 'components/layout/Header';
import Background from 'components/layout/Background';


export default class BookmarkView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="content-section">
                <Background/>

                <Header text="Bookmarks"/>
            </section>
        )
    }
}