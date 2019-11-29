export const LOAD_STATICS = 'mcga/LOAD_STATICS'


export const loadStatics =(selectedPos) => {
    return {
        type: LOAD_STATICS,
        payload: {
            position: selectedPos
        }
    }
}

