export const TOP_DETAIL_CONFIG = 'TOP_DETAIL_CONFIG';
export const TOP_DETAIL_CONFIG_SUCCESS = 'TOP_DETAIL_CONFIG_SUCCESS';
export const TOP_DETAIL_CONFIG_FAIL = 'TOP_DETAIL_CONFIG_FAIL';

export function topDetail() {
  return {
    actionType: TOP_DETAIL_CONFIG,
    'API': {
      url: 'toplist/detail',
      types: [TOP_DETAIL_CONFIG, TOP_DETAIL_CONFIG_SUCCESS, TOP_DETAIL_CONFIG_FAIL],
      method: 'get'
    }
  }
}
