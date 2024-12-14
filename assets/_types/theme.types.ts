export interface IThemeVars {
  primary: IThemeItem;
  secondary: IThemeItem;
  accent: IThemeItem;
  background: IThemeItem;
  fontFamily: IThemeItem;
  fontSize: IThemeItem;
  borderRadius: IThemeItem;
  borders: IThemeItem;
  transition: IThemeItem;
  button: IThemeItem;

  [key: string]: IThemeItem;
}
type IThemeItem = { [key: string]: string };
