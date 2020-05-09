import React from 'react';
import { getPagination } from './utils/getPagination';


//Styles
const styles = {
    pagination: {
        display: 'flex',
        paddingLeft: 0,
        listStyle: 'none',
        margin: '20px 0',
        borderRadius: '.25rem'
    },
    page_item: {
        position: 'relative',
        display: 'block',
        padding: '.5rem .75rem',
        lineHeight: 1.25,
        color: '#007bff',
        backgroundColor: '#fff',
        border: '1px solid #dee2e6'
    }
}

export default class Pagination extends React.Component {

    render() {
        console.log(this.props);
        const { onClick, size, ariaLabel } = this.props;
        const pagination = getPagination(this.props);
        console.log({ pagination });

        return (
            <nav aria-label={ariaLabel}>
                <ul className={`pagination justify-content-center ${(size === 'sm' || size === 'lg') && 'pagination-' + size}`}>
                    {
                        pagination.map((page, i) =>
                            <li key={`${page.page}-${i}`} className={`page-item ${page.class && page.class}`} >
                                <a
                                    className={'page-link'}
                                    onClick={() => onClick && onClick(page.page)}
                                    {...onClick ? { href: '#' } : { href: page.href }} >
                                    {page.text}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </nav>

        );
    }
}

Pagination.propTypes = {
    totalPages: React.PropTypes.number.isRequired,
    currentPage: React.PropTypes.number.isRequired,
    ariaLabel: React.PropTypes.string,
    size: React.PropTypes.string,
    showMax: React.PropTypes.number,
    activeClass: React.PropTypes.string,
    defaultClass: React.PropTypes.string,
    disabledClass: React.PropTypes.string,
    threeDots: React.PropTypes.bool,
    threeDotsClass: React.PropTypes.string,
    href: React.PropTypes.string,
    pageOneHref: React.PropTypes.string,
    prevNext: React.PropTypes.bool,
    prevText: React.PropTypes.string,
    nextText: React.PropTypes.string,
    center: React.PropTypes.bool,
    onClick: React.PropTypes.func
};

Pagination.defaultProps = {
    ariaLabel: 'Page navigator',
    activeClass: 'active',
    disabledClass: 'disabled',
    showMax: 5,
    center: true,
    size: 'md', // sm md lg
    prevText: 'Previous',
    nextText: 'Next'
}