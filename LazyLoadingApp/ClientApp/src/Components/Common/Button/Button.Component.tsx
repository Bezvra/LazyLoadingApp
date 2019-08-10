import * as React from "react";
import * as ButtonStyles from './Button.module.scss';
import { Loader } from "../../../Components/Index";

interface IProps { 
    id?: string,
    text?: string,
    onClick?: Function,
    type?: 'default' | 'success' | 'info' | 'warning' | 'danger' | 'link' | 'text' | 'label' | 'secondary' | 'secondary-info' | 'secondary-success' | 'secondary-danger' | 'secondary-warning',
    loaderType?: any,
    active?:boolean,
    submit?:boolean,
    disabled?:boolean,
    size?: 'small' | 'large',
    className?: string,
    style?: any,
    padding?: 'none',
    onMouseDown?: any,
    onMouseUp?: any,
    onTouchStart?: any,
    onTouchEnd?: any,
    children?: any,
    isLoading?: boolean
}

interface IStates {}

export default class ButtonComponent extends React.Component<IProps, IStates> {

    constructor (props: IProps) {
        super(props);

        // Bindings
        this.onClick = this.onClick.bind(this);
    }

    onClick (e: any) {
        const { onClick } = this.props;

        onClick && onClick(e);
    }

    render () {
        
        const { 
            id, 
            text,
            type, 
            active, 
            size, 
            className, 
            style,
            padding,
            submit = false,
            disabled = false,
            children,
            isLoading,
            loaderType,
            onClick,
            ...restProps
        } = this.props;

        const childComponents = children ? children : text;

        return (
            <div data-type={ type || 'default' }
                 data-padding={ padding }
                 data-is-loading={ isLoading }
                 data-size={ size }
                 data-id={ id }
                 style={ style }
                 className={ [
                 ButtonStyles.buttonComponent,
                 active ? ButtonStyles.active : '',
                 className ? className : ''
            ].join(' ') }>
                <button
                    className={ active ? ButtonStyles.active : '' }
                    data-id={ id }
                    onClick={ (e) => this.onClick(e) }
                    type={submit ? 'submit': 'button'}
                    disabled={disabled}
                    {...restProps}>
                    { isLoading ? <Loader type={loaderType}/> : childComponents }
                </button>

            </div>
        );
    }
}
