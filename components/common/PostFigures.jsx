import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function PostFigures({ data, icon, className }) {
    return (
        <div className='opacity-60'>
            <FontAwesomeIcon icon={icon} size='sm' className='mr-[2px]' />
            <span className='mr-3'>{data}</span>
        </div>
    );
}

export default PostFigures;
