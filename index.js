addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = 'https://analytics.umami.is/script.js'
  const response = await fetch(url, {
    headers: {
      'User-Agent': request.headers.get('User-Agent'), // Pass through the original User-Agent
    },
  })
  
  const newResponse = new Response(response.body, response)
  newResponse.headers.set('Access-Control-Allow-Origin', '*') // Enable CORS
  return newResponse
}
