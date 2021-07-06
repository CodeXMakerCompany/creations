import { useSnackbar } from 'notistack';
import React, { useEffect } from 'react'

export const SuccessSnackbar = (props) => {
    const { enqueueSnackbar } = useSnackbar();
    const { message, type } = props.content;
    const options = { variant : type };
    useEffect(() => {
        enqueueSnackbar(message, options);
    }, [message, type, props, enqueueSnackbar, options])

    return (
        <> </>
    )
}
