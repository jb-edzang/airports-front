const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_BASEURL,
    next_app_api_url : process.env.NEXT_APP_API_URL,
    next_app_api_key : process.env.NEXT_APP_API_KEY,
    next_app_icon_url : process.env.NEXT_APP_ICON_URL,

  },
  view: {
    results: {
      minLimit: 1,
      maxLimit: 20,
      defaultLimit: 10,
    },
  },
}

export default config