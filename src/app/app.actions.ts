export const INCREMENT: any = 'INCREMENT';
export const DECREMENT: any = 'DECREMENT';

export const counter: any = (state = 0, action: any) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}