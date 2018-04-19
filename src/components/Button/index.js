import React from 'react';
import { Button as AntButton } from 'antd';
import './Button.styl';

const Button = props => <AntButton {...props} className='Button'>
    {props.children}
</AntButton>

export default Button;
