import React, {Component} from 'react';
import Anime from 'react-anime';
import _ from 'underscore';



export default class KeyTracker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            classes: ['tracker'],
            pressed: [],
            shortcuts: props.shortcuts
        };

        this.previousKey = '';
        this.hideTimeout = null;
    }

    componentDidMount() {
        document.addEventListener('keydown', e => {
            const { key } = e;

            // Don't repeat
            if (key === this.previousKey) {
                return;
            }

            this.setState(prev => {
                let pressed = prev.pressed;
                pressed.push(key);

                if (pressed.length > 3) {
                    pressed.shift();
                }

                return {
                    pressed
                }
            }, this.newKeyPressHandler);

            this.previousKey = key;
        });
    }


    /**
     * Add a new class to the wrapper element
     * 
     * @param {string} name 
     * @param {callable} then 
     */
    addClass = (name, then) => {
        let classes = this.state.classes;
        classes.push(name);

        this.setState({ classes }, then);
    }


    /**
     * Remove a class from the wrapper element
     * 
     * @param {string} name 
     */
    removeClass = (name) => {
        let classes = this.state.classes;
        this.setState({ classes: classes.filter(c => c !== name) });
    }


    /**
     * What to do once a new key press has 
     * been registered
     */
    newKeyPressHandler = () => {
        this.hideTimer();

        const { shortcuts, pressed } = this.state;

        shortcuts.forEach(entry => {
            const { combo, callback } = entry;

            // Don't bother checking the combos that
            // aren't even the same length
            if (pressed.length < combo.length) {
                return;
            }

            if (_.isEqual(combo, pressed)) {
                callback();
            }
        });
    }


    /**
     * Remove all pressed key records
     */
    clearKeys = () => {
        this.setState({ 
            pressed: []
        });

        this.previousKey = '';
        this.removeClass('hidden');
    }


    /**
     * Setup a timer that hides the
     * combo display after a few seconds
     */
    hideTimer = () => {
        // Reset the timeout
        clearTimeout(this.hideTimeout);
        this.hideTimeout = setTimeout(() => {
            this.addClass('hidden', () => {
                setTimeout(this.clearKeys, 300);
            });
        }, 1000);
    }


    /**
     * Create a DOM element for the pressed key
     * 
     * @param {string} value 
     * @param {number} idx 
     */
    createKey = (value, idx) => {
        switch (value) {
            case 'Control': value = 'Ctrl'; break;
            case 'Escape': value = 'Esc'; break;
            case 'CapsLock': value = 'Caps'; break;
            case 'Delete': value = 'Del'; break;
            case 'PageUp': value = '+Page'; break;
            case 'PageDown': value = '-Page'; break;
            case 'ArrowLeft': value = '←'; break;
            case 'ArrowRight': value = '→'; break;
            case 'ArrowUp': value = '↑'; break;
            case 'ArrowDown': value = '↓'; break;
            case 'AltGraph': value = 'AltGR'; break;
        }

        return (
            <div className="key" key={ idx }>
                { value }
            </div>
        )
    }


    render() {
        const { disabled } = this.props;

        if (disabled) {
            return;
        }

        const { pressed, classes } = this.state;
        const animeProps = {
            opacity: [0, 1],
            translateY: [-24, 0]
        }

        return (
            <div className={ classes.join(' ') }>
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