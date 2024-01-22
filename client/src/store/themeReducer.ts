import { ThemeState } from "../types/theme";
import { SetThemeAction, ThemeActions } from "./actions";

const defaultState: ThemeState = {
    themeLight: true
};

type ThemeAction = SetThemeAction;

export function themeReducer(state: ThemeState = defaultState, action: ThemeAction): ThemeState {
    switch (action.type) {
        case ThemeActions.SET_THEME:
            localStorage.setItem("theme", JSON.stringify(action.payload));
            return { ...state, themeLight: action.payload }
        default:
            return state;
    };
};

export const setThemeAction = (payload: boolean): SetThemeAction => ({ type: ThemeActions.SET_THEME, payload });