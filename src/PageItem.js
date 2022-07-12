import React from 'react';
import getStyles from './utils/getStyles';

const PageElement = ({onClick, href, page, style, className, children}) => {
    return onClick ?
    <button className={["btn", className].join(" ")} onClick={(e) => onClick && onClick(page, e)} style={style}>
        {children}
    </button>
    : <a href={href} className={className} style={style}>
        {children}
    </a>
}

const PageItem = ({
    text,
    page,
    className,
    onClick,
    href,
    activeBgColor,
    activeBorderColor,
    disabledBgColor,
    disabledBorderColor,
    bgColor,
    borderColor,
    activeColor,
    disabledColor,
    color,
    circle,
    shadow,
    size
}) => {
    const style = {
        ...getStyles({
            activeBgColor,
            activeBorderColor,
            disabledBgColor,
            disabledBorderColor,
            bgColor,
            borderColor,
            activeColor,
            color,
            disabledColor
        }, className),
        ...circleStyle(circle, size),
        ...shadowStyle(shadow, circle)
    };

    return <li className={`page-item ${className !== undefined && className !== false ? className : ''}`} >
        <PageElement style={style} className={'page-link'} onClick={onClick} href={href} page={page}>
            {text}
        </PageElement>
    </li >
}

const circleStyle = (isCircle, size) => {
    if (!isCircle) return {}
    if (size === 'lg' || size === 'sm') {
        if (size === 'lg') {
            return {
                borderRadius: '30px',
                marginLeft: '6px',
                marginRight: '6px',
                width: '57px',
                height: '57px',
                padding: '.75rem 17px'
            }
        }
        if (size === 'sm') {
            return {
                borderRadius: '30px',
                marginLeft: '4px',
                marginRight: '4px',
                width: '36px',
                height: '36px',
                padding: '7px'
            }
        }
    } else {
        return {
            borderRadius: '30px',
            marginLeft: '6px',
            marginRight: '6px',
            width: '45px',
            height: '45px',
            padding: '11px'
        }
    }
}

const shadowStyle = (showShadow, isCircle) => {
    if (!showShadow) return {}
    if (!isCircle) return {}
    return {
        WebkitBoxShadow: '0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
        boxShadow: '0px 8px 17px 0px rgba(0,0,0,0.2),0px 6px 20px 0px rgba(0,0,0,0.19)'
    }
}

export default PageItem;
