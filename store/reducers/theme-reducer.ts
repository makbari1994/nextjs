export default function theme(state: any = 'light', action: any) {
    switch (action.type) {
        case 'dark':
            state = 'dark';
            return state;
        case 'light':
            state = 'light';
            return state;
    }

    state = 'light'
    return state;


}