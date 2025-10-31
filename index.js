addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const requestUrl = new URL(request.url)
  
  // Handle robots.txt endpoint
  if (requestUrl.pathname === '/robots.txt') {
    return new Response('User-agent: *\nDisallow: /', {
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'public, max-age=86400',
      },
    })
  }
  
  // Handle script.js proxy (default behavior)
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
