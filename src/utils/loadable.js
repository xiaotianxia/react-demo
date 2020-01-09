import React from 'react';
import Loadable from 'react-loadable';

function Loading () {
    return <div>loading</div>
}

export default (loader) => {
    return Loadable({
        loader,
        loading: Loading,
    });
}