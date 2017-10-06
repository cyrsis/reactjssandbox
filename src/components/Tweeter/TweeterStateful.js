import React, { Component } from 'react';
import TweetList from './TweetList'
import TweetStore from '../../Stores/TweetStore'

const config = {
    databaseURL: 'https://onpaper-9c248.firebaseio.com',
};
export default class TweeterStateful extends Component {

    componentWillMount() {
        this.store = new TweetStore(config);
    }

    render() {
        return (
            <div>
                <div className="flex one center">
                    <div className="third-800">
                        <h1>MobX-Firebase Twitter Clone</h1>
                        <TweetList store={this.store} />
                    </div>
                </div>
            </div>
        );
    }
}


