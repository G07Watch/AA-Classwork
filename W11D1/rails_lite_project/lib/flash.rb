require 'json'

class Flash
   
    def initialize(req)
        if req.cookies['flash']
            @flash_cookie = JSON.parse(req.cookies['flash'])
        else
            @flash_cookie = Hash.new { |h,k| h[k]= [] }
            @flash_cookie[:persist] = true
        end 
    end

    def now
        self[:persist] = false
        self
    end

    def [](key)
        @flash_cookie[key]
    end

    def []=(key, val)
        @flash_cookie[key] = val
    end

    def store_session(res)
        res.set_cookie('flash', {path: '/', value: @flash_cookie.to_json})
    end
end