
export const STORE_LIST = 'STORE_LIST';
export const STORE_LIST_SUCCESS = 'STORE_LIST_SUCCESS';
export const STORE_LIST_FAIL = 'STORE_LIST_FAIL';

export function storeList (args) {
    return {
        actionType: STORE_LIST,
        pageIndex: args.page,
        'API': {
            url: '/orders/normal/lists',
            types: [STORE_LIST, STORE_LIST_SUCCESS, STORE_LIST_FAIL],
            method: 'post',
            data: args
        }
    };
}
