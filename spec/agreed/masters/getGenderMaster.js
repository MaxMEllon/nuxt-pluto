module.exports = {
  request: {
    path: '/beauty/styleCategory',
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
        style_category: '{:style_category}'
      }
    },
    values: {
      results_available: '2',
      results_returned: '2',
      results_start: '1',
      status: 'OK',
      style_category: [
        { code: 'SG01', name: 'レディース' },
        { code: 'SG02', name: 'メンズ' }
      ]
    }
  }
}
