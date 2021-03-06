import React, { Component, PropTypes } from 'react';
import {observer, inject} from 'mobx-react';

function wrapSubs(subs) {
    if (subs && subs.constructor !== Array) {
        subs = [subs];
    }
    return subs || [];
}
function getSubKeys(subs) {
    return Object.keys(subs || {}).map(k => subs[k].subKey).sort().join(",");
}



export function mobxFirebaseAutoSubscriber(mobxInjectInfo) {
    return function(WrappedComponent) {
        class MobxAutoSubscriber extends Component {

            static propTypes = {
                getSubs: PropTypes.func.isRequired,
                subscribeSubs: PropTypes.func.isRequired
            }

            componentDidMount() {
                this.updateSubscriptions(this.props);
            }

            componentDidUpdate() {
                this.updateSubscriptions(this.props);
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            updateSubscriptions(props) {
                const { subscribeSubs } = this.props;

                const subs = wrapSubs(this.latestSubs);
                if (getSubKeys(subs) !== getSubKeys(this._subs)) {
                    //Only unsubscribe/subscribe if subKeys have changed
                    this._subs = subs;
                    var unsub = this._unsub;
                    this._unsub = subscribeSubs(subs, props);
                    //Unsubscribe from old subscriptions
                    if (unsub)
                        unsub();
                }
            }

            unsubscribe() {
                if (this._unsub) {
                    this._unsub();
                    this._unsub = null;
                }
            }

            render() {
                const {getSubs, ...props} = this.props;

                //Trigger updating based on observables accessed in getSubs
                this.latestSubs = getSubs(this.props);

                return <WrappedComponent {...props} />
            }
        }

        return mobxInjectInfo ?
            inject(mobxInjectInfo)(observer(MobxAutoSubscriber)) :
            observer(MobxAutoSubscriber);
    }
}