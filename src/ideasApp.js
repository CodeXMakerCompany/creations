import React from 'react';
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRouter } from "./routers/AppRouter";

//Global components
import { ModalWrapper } from "./components/global/modal.global";

export const IdeasApp = () => {
    return (
        <Provider store={store}>
            <ModalWrapper onHide={null} />
            <AppRouter />
        </Provider>
    )
}
