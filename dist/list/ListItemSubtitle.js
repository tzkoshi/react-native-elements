var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { withTheme } from '../config';
import Text from '../text/Text';
const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';
const ListItemSubtitle = (_a) => {
    var { style, right, children } = _a, props = __rest(_a, ["style", "right", "children"]);
    return (<Text testID="listItemTitle" style={StyleSheet.flatten([
        styles.subtitle,
        right && styles.rightSubtitle,
        style,
    ])} {...props}>
      {children}
    </Text>);
};
const styles = StyleSheet.create({
    subtitle: Object.assign({ backgroundColor: 'transparent' }, Platform.select({
        ios: {
            fontSize: 15,
        },
        default: {
            color: ANDROID_SECONDARY,
            fontSize: 14,
        },
    })),
    rightSubtitle: {
        color: ANDROID_SECONDARY,
    },
});
export default withTheme(ListItemSubtitle, 'ListItemSubtitle');
