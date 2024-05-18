import type {GlobalThemeOverrides} from "naive-ui";
import {_lightThemeVars} from '~/_theme.config'

export type IThemeNames = "dark" | "light";

export default function () {
    const {
        button,
        fontSize,
        primary,
        background,
        accent,
        borderRadius,
        secondary,
        borderColor,
        third
    } = _lightThemeVars
    const baseBorder = `1px solid ${accent.base}`
    const baseShadow = `0 0 1px 2px rgba(${accent.baseRgb},0.2)`
    const theme_overrides: GlobalThemeOverrides = {
        common: {
            borderRadius: '0.5rem',

            primaryColor: primary.base,
            primaryColorHover: accent.base,
            primaryColorPressed: accent.base,
            borderColor: borderColor.base,
            placeholderColor: '#9ca3af',
            heightMedium: '40px',
            heightSmall: '32px',
            heightMini: '24px',
            heightLarge: '48px',
            // boxShadow1: 'none',
            // boxShadow2: 'none',
            // boxShadow3: 'none',
            closeIconColor: primary.base,
            closeIconColorHover: primary.base,
            closeIconColorPressed: primary.base,
        },
        Input: {
            boxShadowFocus: baseShadow
        },
        InternalSelection: {
            boxShadowActive: baseShadow,
            boxShadowFocus: baseShadow,
            boxShadowHover: baseShadow,
            borderFocus: baseBorder,
            borderActive: baseBorder

        },
        Tooltip: {
            borderRadius: '0.5rem',
            boxShadow: '0 0 #0000, 0 0 #0000, 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            color: primary.base,
            textColor: third.base,
            padding: '7px 10px',
            fontSize: fontSize.sm,
            fontWeight: '700',
        },
        DataTable: {
            tdColor: background.third,
            tdColorHover: accent.hover,
            tdPaddingMedium: '1rem',
            borderRadius: '0.5rem',
            boxShadowBefore: '0px 0px 0px 10px #f00',
            // borderColor
            boxShadowAfter: '0px 0px 0px 10px #f00',

            thFontWeight: '700',
            fontSizeMedium: fontSize.base,

            thTextColor: secondary.base,
            tdTextColor: primary.base,
            thColorHover: 'transparent',
            thColor: 'transparent',
            thColorPopover: primary.base,
            tdTextColorHover: primary.base,
            actionDividerColor: accent,
            borderColor: borderColor.base,
        },
        Tag: {
            borderRadius: '0.5rem',
            textColor: primary.base,
            borderPrimary: accent.base,
            textColorPrimary: accent.base,
            border: baseBorder,
        },
        Button: {
            // base button
            paddingMedium: '0.5rem 1.25rem',
            borderRadius: '2rem',

            color: button.baseBg,
            colorHover: button.baseBgHover,
            colorPressed: button.baseBg,
            colorFocus: button.baseBg,

            textColor: button.baseText,
            textColorHover: button.baseTextHover,
            textColorTextFocus: button.baseText,
            textColorPressed: button.baseText,
            textColorFocus: button.baseText,

            border: `1px solid ${borderColor.base}`,
            borderHover: `1px solid ${accent.base}`,
            borderPressed: `1px solid ${borderColor.base}`,
            borderFocus: `1px solid ${borderColor.base}`,


            // primary button
            colorPrimary: button.primaryBg,
            colorHoverPrimary: button.primaryBgHover,
            colorPressedPrimary: button.primaryBg,
            colorFocusPrimary: button.primaryBg,

            textColorPrimary: button.primaryText,
            textColorHoverPrimary: button.primaryTextHover,
            textColorTextFocusPrimary: button.primaryText,
            textColorPressedPrimary: button.primaryText,

            borderPrimary: `1px solid ${button.base}`,
            borderHoverPrimary: `1px solid ${primary.base}`,
            borderPressedPrimary: `1px solid ${button.base}`,
            borderFocusPrimary: `1px solid ${button.base}`,

            // info button
            colorInfo: button.infoBg,
            colorHoverInfo: button.infoBgHover,
            colorPressedInfo: button.infoBg,
            colorFocusInfo: button.infoBg,
            colorDisabledInfo: button.infoBg,

            textColorInfo: button.infoText,
            textColorHoverInfo: button.infoText,
            textColorPressedInfo: button.infoText,
            textColorFocusInfo: button.infoText,
            textColorDisabledInfo: button.infoText,

            borderInfo: `1px solid ${borderColor.base}`,
            borderHoverInfo: `1px solid ${accent.base}`,
            borderPressedInfo: `1px solid ${accent.base}`,
            borderFocusInfo: `1px solid ${accent.base}`,
            borderDisabledInfo: `1px solid ${accent.hover}`,


        },
        Notification: {
            color: background.base,
            borderRadius: '0.5rem',
            textColor: primary.base,
        },
        Badge: {
            color: primary.base,
            fontSize: '10px',
        },
        Popover: {
            borderRadius: '0.5rem',
            padding: '0.5rem',

        },
        Switch: {
            railColorActive: accent.base,
            boxShadowFocus: 'none'
        }
    }
    return {
        theme_overrides
    }
}