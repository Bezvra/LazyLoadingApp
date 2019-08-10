import * as React from "react";
import * as TextStyles from './Text.module.scss';

interface IProps {
    id?: string,
    children?: any,
    className?: string,
    style?: {
        [key: string]: string | number
    },
    type?: 'primary' | 'secondary' | 'success' | 'danger' | 'label' | 'link' | 'none' | 'accent',
    weight?: 'light' | 'default' | 'medium' | 'bold' | 'extra-bold',
    size?: 'smallest' | 'small' | 'default-small' | 'default' | 'medium' | 'large',
    display?: 'inline' | 'block' | 'inline-block' | 'flex',
    textTransform?: 'none' | 'lowercase' | 'uppercase',
    textAlign?: 'left' | 'center' | 'right' | 'inherit',
    lineHeight?: number,
    clickable?: boolean,
    onClick?: any,
    innerRef?: any,
    ref?: any,
    whiteSpace?: 'nowrap' | 'normal'
}

interface IStates { }

const textType: any = {
    primary: TextStyles.primary,
    secondary: TextStyles.secondary,
    success: TextStyles.success,
    danger: TextStyles.danger,
    label: TextStyles.label,
    accent: TextStyles.accent
};

export default class TextComponent extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);
    }

    render() {

        const { type = 'primary', id, children, className, weight, size, style, display, textTransform, textAlign, lineHeight, clickable, innerRef = null, whiteSpace, ...props } = this.props;
        const computedStyles: any = { textTransform, lineHeight, textAlign, ...style};

        if (clickable) {
            computedStyles.cursor = 'pointer';
        }

        return (
            <span
                {...props}
                ref={innerRef}
                data-id={id}
                data-display={ display }
                style={computedStyles}
                data-weight={weight}
                data-size={size}
                data-white-space={ whiteSpace }
                className={[TextStyles.textComponent, textType[type], className].join(' ')}>{ children }</span>
        );
    }
}
