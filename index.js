addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = 'https://cloud.umami.is/script.js'
  const response = await fetch(url, {
    headers: {
      'User-Agent': request.headers.get('User-Agent'),
    },
  })
  
  const newResponse = new Response(response.body, response)
  newResponse.headers.set('Access-Control-Allow-Origin', '*')
  return newResponse
}
