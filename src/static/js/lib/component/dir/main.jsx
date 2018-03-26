import React from 'react';
import PropTypes from 'prop-types';

class Line extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'line ' + (this.props.index % 2 === 0 ? 'even' : 'odd')}>
                <div classnName='name fl'>
                    <span className={'type-icon ' + this.props.type}></span>
                    <span>{this.props.name}</span>
                </div>
                <div classnName='size fl'>{this.props.size}</div>
                <span classnName='edit line-icon fl'></span>
            </div>
        );
    }
}
Line.PropTypes = {
    name: PropTypes.string,
    index: PropTypes.number,
    type: PropTypes.string,
    size: PropTypes.string
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
            <div>
                <div className='header'>
                    <div className='fl' style={{ width: '47%' }}>文件名</div>
                    <div className='fl' style={{ width: '47%' }}>文件大小</div>
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
