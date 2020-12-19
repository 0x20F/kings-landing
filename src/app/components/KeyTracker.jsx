import React, {Component} from 'react';
import Anime from 'react-anime';



export default class KeyTracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pressed: []
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            const { key } = e;

            this.setState(prev => {
                let pressed = prev.pressed;
                pressed.push(key);

                return {
                    pressed
                }
            });
        });
    }


    /**
     * Create a DOM element for the pressed key
     * 
     * @param {string} value 
     * @param {number} idx 
     */
    createKey = (value, idx) => {
        return (
            <div key={ idx }>
                { value }
            </div>
        )
    }


    render() {
        const { pressed } = this.state;
        const animeProps = {
            opacity: [0, 1],
            translateY: [-64, 0]
        }

        return (
            <div className="tracker">
                { 
                    pressed.map((k, i) => {
                        let keyContainer = this.createKey(k, i);

                        // If it's the last element, animate it
                        if (i === pressed.length - 1) {
                            return <Anime {...animeProps} key={ i }>{ keyContainer }</Anime>;
                        }

                        return keyContainer;
                    })
                }
            </div>
        )
    }
}