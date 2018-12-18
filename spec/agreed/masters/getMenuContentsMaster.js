module.exports = {
  request: {
    path: '/beauty/menuContents',
    method: 'GET',
    params: {
      start: '{:start}'
    },
    values: {
      start: 1
    }
  },
  response: {
    body: {
      results: {
        results_available: '{:results_available}',
        results_returned: '{:results_returned}',
        results_start: '{:results_start}',
        status: '{:status}',
        menu_content: '{:menu_content}'
      }
    },
    values: {
      results_available: '3',
      results_returned: '3',
      results_start: '1',
      status: 'OK',
      menu_content: [
        { code: 'MC01', name: 'パーマ' },
        { code: 'MC02', name: 'ストレートパーマ・縮毛矯正' },
        { code: 'MC03', name: 'エクステ' }
      ]
    }
  }
}
