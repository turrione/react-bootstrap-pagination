import React from 'react';
import getStyles from './utils/getStyles';

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
    shadow
}) => (
        <li className={`page-item ${className !== undefined && className !== false ? className : ''}`} >
            <a
                style={{
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
                    ...circleStyle(circle),
                    ...shadowStyle(shadow, circle)

                }}
                className={'page-link'}
                onClick={() => onClick && onClick(page)}
                {...onClick ? { href: '#' } : { href: href }} >
                {text}
            </a>
        </li >
    );

const circleStyle = (isCircle) => {
    if (!isCircle) return {}
    return {
        borderRadius: '30px',
        marginLeft: '6px',
        marginRight: '6px',
        width: '57px',
        height: '57px',
        padding: '.75rem 17px'
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
