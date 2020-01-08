export const PLAY_DETAIL_CONFIG = 'PLAY_DETAIL_CONFIG';
export const PLAY_DETAIL_CONFIG_SUCCESS = 'PLAY_DETAIL_CONFIG_SUCCESS';
export const PLAY_DETAIL_CONFIG_FAIL = 'PLAY_DETAIL_CONFIG_FAIL';

export function playDetail(id) {
  return {
    actionType: PLAY_DETAIL_CONFIG,
    'API': {
      url: 'playlist/detail',
      types: [PLAY_DETAIL_CONFIG, PLAY_DETAIL_CONFIG_SUCCESS, PLAY_DETAIL_CONFIG_FAIL],
      method: 'get',
      data: {
        id
      }
    }
  }
}
