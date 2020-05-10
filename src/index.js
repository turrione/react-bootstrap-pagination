import React from 'react';
import { getPagination } from './utils/getPagination';
import PageItem from './PageItem';

export default class Pagination extends React.Component {

    render() {

        const { onClick, size, ariaLabel } = this.props;
        const pagination = getPagination(this.props);

        return (
            <nav aria-label={ariaLabel}>
                <ul className={`pagination justify-content-center ${(size === 'sm' || size === 'lg') && 'pagination-' + size}`}>
                    {
                        pagination.map((page, i) =>
                            <PageItem
                                key={`${page}-${i}`}
                                text={page.text}
                                page={page.page}
                                className={page.class}
                                href={page.href}
                                onClick={onClick} />
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
    currentPage: 1,
    ariaLabel: 'Page navigator',
    activeClass: 'active',
    disabledClass: 'disabled',
    showMax: 5,
    center: true,
    size: 'md', // sm md lg
    prevNext: true,
    prevText: '⟨',
    nextText: '⟩'
}
