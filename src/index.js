import React from 'react';
import { getPagination } from './utils/getPagination';
import PageItem from './PageItem';

export default class Pagination extends React.Component {

    render() {

        const {
            onClick,
            size,
            ariaLabel,
            activeBgColor,
            activeBorderColor,
            disabledBgColor,
            disabledBorderColor,
            bgColor,
            borderColor,
            activeColor,
            color,
            disabledColor,
            circle,
            shadow,
            center
        } = this.props;
        const pagination = getPagination(this.props);
        return (
            <nav
                aria-label={ariaLabel}
                className={`row ${center && 'justify-content-center'}`}>
                <ul
                    style={shadowStyle(shadow, circle)}
                    className={`pagination ${(size === 'sm' || size === 'lg') && 'pagination-' + size}`}>
                    {
                        pagination.map((page, i) =>
                            <PageItem
                                key={`${page}-${i}`}
                                text={page.text}
                                page={page.page}
                                className={page.class}
                                href={page.href}
                                onClick={onClick}
                                activeBgColor={activeBgColor}
                                activeBorderColor={activeBorderColor}
                                disabledBgColor={disabledBgColor}
                                disabledBorderColor={disabledBorderColor}
                                bgColor={bgColor}
                                borderColor={borderColor}
                                activeColor={activeColor}
                                color={color}
                                disabledColor={disabledColor}
                                circle={circle}
                                shadow={shadow}
                                size={size} />
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
    href: React.PropTypes.string,
    pageOneHref: React.PropTypes.string,
    prevNext: React.PropTypes.bool,
    prevText: React.PropTypes.string,
    nextText: React.PropTypes.string,
    center: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    activeBgColor: React.PropTypes.string,
    activeBorderColor: React.PropTypes.string,
    disabledBgColor: React.PropTypes.string,
    disabledBorderColor: React.PropTypes.string,
    bgColor: React.PropTypes.string,
    borderColor: React.PropTypes.string,
    activeColor: React.PropTypes.string,
    disabledColor: React.PropTypes.string,
    color: React.PropTypes.string,
    circle: React.PropTypes.bool,
    shadow: React.PropTypes.bool
};

Pagination.defaultProps = {
    currentPage: 1,
    ariaLabel: 'Page navigator',
    activeClass: 'active',
    disabledClass: 'disabled',
    showMax: 5,
    center: false,
    size: 'md', // sm md lg
    prevNext: true,
    prevText: '⟨',
    nextText: '⟩',
    circle: false,
    shadow: false,
    center: true
}

const shadowStyle = (showShadow, isCircle) => {
    if (!showShadow) return {}
    if (isCircle) return {}
    return {
        WebkitBoxShadow: '0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
        boxShadow: '0px 8px 17px 0px rgba(0,0,0,0.2),0px 6px 20px 0px rgba(0,0,0,0.19)'
    }
}
