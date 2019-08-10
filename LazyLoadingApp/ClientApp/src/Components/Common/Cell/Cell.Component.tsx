import * as React from 'react';
import CellStyles from './Cell.module.scss';

const alignStyles: any = {
    right: {
        marginLeft: 'auto'
    },

    left: {
        marginRight: 'auto'
    },

    center: {
        margin: '0 auto'
    },

    bottom: {
        marginTop: 'auto'
    }
};

type paddingAndMargin = '' | 'none' | 'small' | 'medium' | 'large' | 'smaller' |
    'none-smaller' | 'none-small' | 'none-medium' | 'none-large' |
    'small-none' | 'medium-smaller' | 'small-medium' | 'small-large' |
    'medium-none' | 'medium-small' | 'medium-large' |
    'large-none' | 'large-small' | 'large-medium';

interface IProps {
    align?: 'right' | 'left' | 'center' | 'bottom',
    alignContent?: 'right' | 'left' | 'center' | 'stretch' | 'center-left',
    alignItems?: 'center' | 'baseline',
    basis?: string,
    padding?: paddingAndMargin,
    margin?: paddingAndMargin,
    children?: any,
    grow?: string,
    shrink?: string,
    wrap?: string,
    className?: any,
    onClick?: any,
    onTouchEnd?: any,
    direction?: "row" | "column",
    style?: any,
    scrollable?: boolean,
    innerRef?: React.RefObject<HTMLDivElement>
}

interface IStates {}

export default class CellComponent extends React.Component<IProps, IStates> {

    constructor (props: IProps) {
        super(props);
    }

    render () {

        const { 
            basis,
            children, 
            grow = '0',
            shrink,
            wrap,
            align = '', 
            alignItems,
            padding = '', 
            margin, 
            alignContent = 'center', 
            direction = 'column', 
            className,
            onClick,
            onTouchEnd,
            innerRef,
            scrollable,
            ...props
        } = this.props;

        const style = alignStyles[align] || null;

        return (
            <div 
                style={ style }
                ref={ innerRef }
                data-basis={ basis }
                data-direction={ direction } 
                className={ [CellStyles.cellComponent, scrollable ? CellStyles.scrollable : '', className].join(' ') } 
                data-scrollable={ scrollable }
                data-grow={ grow }
                data-shrink={ shrink } 
                data-nowrap={ wrap }
                data-align-content={ alignContent }
                data-align-items={ alignItems }
                data-padding={ padding } 
                data-margin={ margin }
                onClick={ onClick }
                onTouchEnd={ onTouchEnd }
                { ...props }>
                { children ? children : null }
            </div>
        );
    }
}
