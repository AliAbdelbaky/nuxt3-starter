import type { IThemeVars } from 'assets/_types/theme.types';

export const _lightThemeVars: IThemeVars = {
  primary: {
    base: '#051638',
    baseRgb: '5, 22, 56',
    hover: 'rgb(3,12,28)',
    pressed: '#030c1c',
  },
  secondary: {
    base: '#656E81',
    baseRgb: '101, 110, 129',
    hover: '#515667',
    pressed: 'rgba(81,86,103,0.84)',
  },
  third: {
    base: '#ededed',
    baseRgb: '237, 237, 237',
    hover: '#b9b9b9',
    pressed: '#b8b8b8',
  },
  accent: {
    base: '#fdda00',
    baseRgb: '253, 218, 0',
    hover: 'rgba(253,218,0,0.72)',
    pressed: '#fdda00',
  },
  background: {
    base: '#fcfcfd',
    baseRgb: '240, 240, 240',

    sec: '#ffe7b2',
    secRgb: '255, 231, 178',

    accent: '#ffe7b2',
    accentRgb: '255, 231, 178',

    third: '#ffffff',
    thirdRgb: '255, 255, 255',
  },
  fontFamily: {
    ar: `'Baloo Bhaijaan 2', sans-serif`,
    en: `'Rubik', sans-serif`,
  },
  fontSize: {
    sm: '0.8rem',
    base: '0.9rem',
    lg: '1.25rem',
    xlg: '2.1rem',
    md: '1.5rem',
  },
  borderRadius: {
    sm: '0.2rem',
    base: '0.5rem',
  },
  borders: {
    base: '1px solid #e5e7eb',
  },
  borderWidth: {
    base: '1px',
  },
  borderColor: {
    base: '#ededed',
  },
  transition: {
    base: '0.3s',
    hover: '0.3s',
    pressed: '0.3s',
  },
  button: {
    baseText: '#333333',
    baseTextHover: '#ffffff',
    baseBg: '#ffffff',
    baseBgHover: '#333333',
    baseBorder: `1px solid #ededed`,

    primaryText: '#ffffff',
    primaryTextHover: '#333333',
    primaryBg: '#333333',
    primaryBgHover: '#ffffff',
    primaryBorder: `1px solid #333333`,

    infoText: '#051638',
    infoTextHover: '#051638',
    infoBg: '#ffffff',
    infoBgHover: '#ffffff',
    infoBorder: `1px solid #333333`,
  },
  navHeight: {
    base: '56px',
  },
  sidebar: {
    widthCollapsed: '66px',
    widthExpanded: '200px',
    iconWidth: '24',
  },
};

export default function (theme: IThemeVars) {
  const processKey = (key: string) => {
    return key.replace(/([A-Z])/g, '-$1').toLowerCase();
  };
  const processValue = (value: any, prefix: string = '') => {
    if (typeof value === 'string') {
      return `--${prefix}: ${value};` + '\n';
    } else if (typeof value === 'object') {
      let subVars = '';
      for (const subKey in value) {
        const subValue = value[subKey];
        const processedSubKey = processKey(subKey);
        subVars += processValue(subValue, `${prefix}${processedSubKey}`);
      }
      return subVars;
    }
  };
  const transformThemeVars = (themeVars: IThemeVars) => {
    let cssVars = '';

    for (const key in themeVars) {
      // @ts-ignore
      const value = themeVars[key];
      const processedKey = processKey(key);
      const processedValue = processValue(value, `${processedKey}-`);
      cssVars += `${processedValue}\n`;
    }

    return cssVars;
  };
  return transformThemeVars(theme);
}
