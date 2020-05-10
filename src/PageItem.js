import React from 'react';

const PageItem = ({ text, page, className, onClick, href }) => (
    <li className={`page-item ${className && className}`} >
        <a
            className={'page-link'}
            onClick={() => onClick && onClick(page)}
            {...onClick ? { href: '#' } : { href: href }} >
            {text}
        </a>
    </li>
);

export default PageItem;
