import React from 'react'
import { Provider } from 'react-redux'
import { MainReduxStore, PersistStore } from '../../reduxStore/ReduxStore'
import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <Provider store={MainReduxStore}>
            <PersistGate loading={<p>...loading</p>} persistor={PersistStore}>
                {children}
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider