// APP actions

export const SET_LIST_CLIENTS = 'GET_LIST_CLIENTS'

export const setListClients = (listUsers) => {
  return {
    type: SET_LIST_CLIENTS,
    listUsers
  }
}
