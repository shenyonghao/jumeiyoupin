module.exports = {
  devServer: {
    proxy: {
      '/yiqituan': {
        target: 'http://s.h5.jumei.com',
        headers: {
          'Referer': 'http://s.h5.jumei.com/yiqituan/list'
        },
        //   ws: true,
        changeOrigin: true
      },
      '/product': {
        target: 'https://h5.jumei.com',
        //   ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      },
      '/pages': {
        target: 'http://s.h5.jumei.com',
        changeOrigin: true
      },
      '/index': {
        target: 'https://m.jumei.com',
        //   ws: true,
        headers: {
          'Referer': 'http://m.jumei.com/',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Tingyun-Id': '6uu12q6oAkM;r=386391251',
          Cookie: 'PHPSESSID=4fd9707d641e5f521de6fab9f294daa4; sid=4fd9707d641e5f521de6fab9f294daa4; referer_site_cps=wap_touch_; guide_download_show=1; route=6cf9ffe4014f0bf241681c1db92a3674; has_download=1; device_platform=iphone; sensorsdata_is_new_user=true; Hm_lvt_884477732c15fb2f2416fb892282394b=1560306005,1560319278,1560385621,1560387133; Hm_lpvt_884477732c15fb2f2416fb892282394b=1560387133; TY_SESSION_ID=442c7149-5f98-44c0-b96f-b7c694407efc; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%2216b4e521de141b-0e6c984218dae-2d604637-250125-16b4e521de234c%22%2C%22props%22%3A%7B%22%24latest_referrer%22%3A%22%22%2C%22%24latest_referrer_host%22%3A%22%22%7D%7D; jmdl14=2; jml14=2; from_source=browser; referer_site=wap_browser_wap_touch'

        },
        changeOrigin: true
      },
      '/api': {
        target: 'http://s.mobile.jumei.com',
        changeOrigin: true
      },

      '/muandbaby': {
        target: 'http://h5.jumei.com',
        changeOrigin: true
      },
      '/luxury': {
        target: 'http://h5.jumei.com',
        changeOrigin: true
      },
      '/recommend': {
        target: 'https://h5.jumei.com',
        //   ws: true,
        changeOrigin: true
      }  
    }
  }
}
