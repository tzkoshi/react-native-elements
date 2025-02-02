import React from 'react';
import { Modal, View, ViewStyle, FlexStyle, StyleProp, ColorValue } from 'react-native';
import { ThemeProps } from '../config';
export declare type TooltipProps = {
    withPointer?: boolean;
    popover?: React.ReactElement<{}>;
    toggleOnPress?: boolean;
    toggleAction?: string | 'onPress' | 'onLongPress';
    height?: FlexStyle['height'];
    width?: FlexStyle['width'];
    containerStyle?: StyleProp<ViewStyle>;
    pointerColor?: ColorValue;
    onClose?(): void;
    onOpen?(): void;
    overlayColor?: ColorValue;
    withOverlay?: boolean;
    backgroundColor?: ColorValue;
    highlightColor?: ColorValue;
    skipAndroidStatusBar?: boolean;
    ModalComponent?: typeof React.Component;
    closeOnlyOnBackdropPress?: boolean;
} & typeof defaultProps;
declare const defaultProps: {
    withOverlay: boolean;
    overlayColor: string;
    highlightColor: string;
    withPointer: boolean;
    toggleOnPress: boolean;
    toggleAction: string;
    height: number;
    width: number;
    containerStyle: {};
    backgroundColor: string;
    onClose: () => void;
    onOpen: () => void;
    skipAndroidStatusBar: boolean;
    ModalComponent: typeof Modal;
    closeOnlyOnBackdropPress: boolean;
};
declare type TooltipState = {
    isVisible: boolean;
    yOffset: number;
    xOffset: number;
    elementWidth: number;
    elementHeight: number;
};
declare class Tooltip extends React.Component<TooltipProps & Partial<ThemeProps<TooltipProps>>, TooltipState> {
    static defaultProps: {
        withOverlay: boolean;
        overlayColor: string;
        highlightColor: string;
        withPointer: boolean;
        toggleOnPress: boolean;
        toggleAction: string;
        height: number;
        width: number;
        containerStyle: {};
        backgroundColor: string;
        onClose: () => void;
        onOpen: () => void;
        skipAndroidStatusBar: boolean;
        ModalComponent: typeof Modal;
        closeOnlyOnBackdropPress: boolean;
    };
    _isMounted: boolean;
    state: {
        isVisible: boolean;
        yOffset: number;
        xOffset: number;
        elementWidth: number;
        elementHeight: number;
    };
    renderedElement?: View | null;
    toggleTooltip: () => void;
    wrapWithPress: (toggleOnPress: TooltipProps['toggleOnPress'], toggleAction: TooltipProps['toggleAction'], children: React.ReactNode) => {};
    containerStyle: (withOverlay: boolean, overlayColor: string) => ViewStyle;
    getTooltipStyle: () => ViewStyle | (false & {}) | {
        [x: string]: string | number;
        position: string;
        top: number;
        width: number;
        height: number;
        backgroundColor: string;
        display: string;
        alignItems: string;
        justifyContent: string;
        flex: number;
        borderRadius: number;
        padding: number;
    };
    renderPointer: (tooltipY: FlexStyle['top']) => JSX.Element;
    getTooltipHighlightedButtonStyle: () => ViewStyle;
    renderTouchableHighlightedButton: () => JSX.Element;
    renderStaticHighlightedButton: () => JSX.Element;
    renderHighlightedButton: () => JSX.Element;
    renderContent: (withTooltip: boolean) => {};
    componentDidMount(): void;
    componentWillUnmount(): void;
    getElementPosition: () => void;
    renderStaticModalContent: () => JSX.Element;
    renderTogglingModalContent: () => JSX.Element;
    renderModalContent: () => JSX.Element;
    render(): JSX.Element;
}
export { Tooltip };
declare const _default: React.FunctionComponent<Pick<{
    withPointer?: boolean;
    popover?: React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    toggleOnPress?: boolean;
    toggleAction?: string;
    height?: string | number;
    width?: string | number;
    containerStyle?: StyleProp<ViewStyle>;
    pointerColor?: ColorValue;
    onClose?(): void;
    onOpen?(): void;
    overlayColor?: ColorValue;
    withOverlay?: boolean;
    backgroundColor?: ColorValue;
    highlightColor?: ColorValue;
    skipAndroidStatusBar?: boolean;
    ModalComponent?: typeof React.Component;
    closeOnlyOnBackdropPress?: boolean;
} & {
    withOverlay: boolean;
    overlayColor: string;
    highlightColor: string;
    withPointer: boolean;
    toggleOnPress: boolean;
    toggleAction: string;
    height: number;
    width: number;
    containerStyle: {};
    backgroundColor: string;
    onClose: () => void;
    onOpen: () => void;
    skipAndroidStatusBar: boolean;
    ModalComponent: typeof Modal;
    closeOnlyOnBackdropPress: boolean;
} & Partial<ThemeProps<TooltipProps>>, "width" | "height" | "backgroundColor" | "containerStyle" | "overlayColor" | "ModalComponent" | "toggleOnPress" | "toggleAction" | "onOpen" | "withPointer" | "popover" | "pointerColor" | "onClose" | "withOverlay" | "highlightColor" | "skipAndroidStatusBar" | "closeOnlyOnBackdropPress">> | React.ForwardRefExoticComponent<{
    withPointer?: boolean;
    popover?: React.ReactElement<{}, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>;
    toggleOnPress?: boolean;
    toggleAction?: string;
    height?: string | number;
    width?: string | number;
    containerStyle?: StyleProp<ViewStyle>;
    pointerColor?: ColorValue;
    onClose?(): void;
    onOpen?(): void;
    overlayColor?: ColorValue;
    withOverlay?: boolean;
    backgroundColor?: ColorValue;
    highlightColor?: ColorValue;
    skipAndroidStatusBar?: boolean;
    ModalComponent?: typeof React.Component;
    closeOnlyOnBackdropPress?: boolean;
} & {
    withOverlay: boolean;
    overlayColor: string;
    highlightColor: string;
    withPointer: boolean;
    toggleOnPress: boolean;
    toggleAction: string;
    height: number;
    width: number;
    containerStyle: {};
    backgroundColor: string;
    onClose: () => void;
    onOpen: () => void;
    skipAndroidStatusBar: boolean;
    ModalComponent: typeof Modal;
    closeOnlyOnBackdropPress: boolean;
} & Partial<ThemeProps<TooltipProps>>>;
export default _default;
