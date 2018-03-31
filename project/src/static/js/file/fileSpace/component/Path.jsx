import React from 'react';
import PropTypes from 'prop-types';

import './Path.scss';

class Path extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let names = this.props.path === '' ? [] : this.props.path.split('/');
        let curPath = [];
        return (
            <div className='path-component'>
                {
                    names.map((item, i) => {
                        curPath.push(item);
                        let cp = curPath.join('/');
                        return !i ? (
                            <div key={i} onClick={() => { this.props.onChange(cp) }} className='item'>{item}</div>
                        ) : (
                                <div key={i} onClick={() => { this.props.onChange(cp) }} className='item'><span></span>{item}</div>
                            );
                    })
                }
            </div>
        );
    }
}

Path.propTypes = {
    onChange: PropTypes.func,
    path: PropTypes.string
}
Path.defaultProps = {
    onChange: () => { },
    path: ''
}

export default Path;
