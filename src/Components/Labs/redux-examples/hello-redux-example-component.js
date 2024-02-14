import React from 'react';
import {useSelector} from 'react-redux';

const HelloReduxExampleComponent = () => {

    const messgae = useSelector(state => state.hello.message);
    return(
        <h1>{messgae}</h1>
    );
};

export default HelloReduxExampleComponent;