import React from 'react';
import PropTypes from 'prop-types';

import './style/main';

class Line extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'line ' + (this.props.index % 2 === 0 ? 'even' : 'odd')}>
                <div className='name fl'>
                    <span className={'type-icon ' + this.props.type}></span>
                    <span style={{ position: 'relative', 'left': '60px' }}>{this.props.name}</span>
                </div>
                <div className='size fl'>{this.props.size}</div>
                <span className='edit line-icon fr'></span>
            </div>
        );
    }
}
Line.propTypes = {
    name: PropTypes.string,
    index: PropTypes.number,
    type: PropTypes.string,
    size: PropTypes.number
};
Line.defaultProps = {
    index: 0,
    name: '',
    type: 'file',
    size: ''
};


class Dir extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='dir-component'>
                <div className='header'>
                    <div className='fl' style={{ textAlign: 'left', width: '47%', paddingLeft: '15px', boxSizing: 'border-box' }}>文件名</div>
                    <div className='fl' style={{ textAlign: 'left', width: '47%' }}>文件大小</div>
                </div >
                {
                    this.props.lines.map((cf, i) => {
                        let pros = {
                            index: i,
                            name: cf.name,
                            type: cf.type,
                            size: cf.size
                        }
                        return <Line key={i} {...pros}></Line >
                    })
                }
            </div >
        );
    }
}

export default Dir;
