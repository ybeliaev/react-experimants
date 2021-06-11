export const profileActionTypes = {
    SET_PROFILE: 'PROFILE.SET_PROFILE',
    SET_THEME: 'PROFILE.SET_THEME',
}

export const profileAction = {
    setProfile: (payload) => ({
        type: profileActionTypes.SET_PROFILE,
        payload,
    }),
}
