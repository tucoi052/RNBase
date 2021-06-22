export interface ApplicationState {

}
export interface IAction {
    type: string;
}
export interface ThunkAction<TAction> {
    (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}