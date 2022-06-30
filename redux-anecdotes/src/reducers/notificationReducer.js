import { createSlice } from '@reduxjs/toolkit'


const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        voteNotif(state, action) {
            const notification = `you voted '${action.payload.content}'`
            return notification
        },
        createNotif(state, action) {
            const notification = `created an anecdote: '${action.payload}'`
            return notification
        },
        deleteNotif(state, action) {
            return null
        }
    }
})


export const { voteNotif, deleteNotif, createNotif } = notificationSlice.actions
export default notificationSlice.reducer