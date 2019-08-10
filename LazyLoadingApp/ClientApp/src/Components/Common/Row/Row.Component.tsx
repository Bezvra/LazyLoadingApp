import * as React from 'react';
import RowStyles from './Row.module.scss';

interface IProps {
    children?: any,
    className?: string,
    direction?: 'row' | 'column',
    alignItems?: 'bottom' | 'top' | 'center' | 'space-between',
    alignChildren?: 'center' | 'center-bottom',
    onClick?: any,
    position?: 'relative' | 'absolute',
    grow?: '0' | '1',
    shrink?: '0' | '1',
    wrap?: 'wrap',
    onBlur?: any,
    onFocus?: any,
    tabIndex?: number,
    scrollable?: boolean,
    innerRef?: React.RefObject<HTMLDivElement>,
    style?: any,
    padding?: string
}
interface IStates {}

export default class RowComponent extends React.Component<IProps, IStates> {
	
    constructor (props: IProps) {
        super(props);
    }

    render () {
        const {
            direction = 'row',
            className,
            alignItems,
            alignChildren,
            children = null,
            position,
            scrollable,
            grow,
            shrink,
            padding,
            wrap,
            innerRef,
            style,
            ...props
        } = this.props;

        return (
            <div
                data-padding={ this.props.padding }
                ref={ innerRef }
                data-grow={ grow }
                data-shrink={ shrink }
                data-wrap={ wrap }
                style={ style }
                data-position={ position }
                className={ [RowStyles.rowComponent, scrollable ? RowStyles.scrollable : '', className].join(' ') }
                data-scrollable={ scrollable }
                data-direction={ direction }
                data-align-items={ alignItems }
                data-align-children={ alignChildren }
                { ...props }>
                { children }
            </div>
        );
    }
}