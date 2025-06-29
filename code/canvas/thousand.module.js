        const TD_REQUIRE = false
        const DD_REQUIRE = true
        const TH_WIDTH = "defalt"

        const ElementsRequire = () => {
        


        }
        var th = {
            canvas: null,
            p: null,

            id(id,ctx) {
                this.canvas = document.getElementById(id)
                if (this.canvas) {
                    this.p = this.canvas.getContext(ctx)
                    if (this.p === "2d") {
                        DD_REQURE = true
                        TD_REQUIRE = false
                    }
                    if (this.p === "3d" || this.p === "webgl") {
                        if (this.p === "3d") {
                            this.p = this.canvas.getContext("webgl")
                        }
                        TD_REQUIRE = true
                        DD_REQUIRE = false
                    }
                } else {
                    console.error(`[Thousand] Canvas com id "${id}" não encontrado no DOM.`)
                }


            },
            rect(x,y,w,h,c) {
                if (this.canvas && this.p) {
                    if (x && y && w && h) {
                        this.p.fillStyle = c
                        this.p.fillRect(x,y,w,h)
                    }
                }
            },
            ellips(x,y,w,c) {
                this.p.beginPath();
                this.p.fillStyle = c
                this.p.arc(x,y,w,c,180,190)
                this.p.fill();
            },
            arc(x,y,r,start,stop,c) {
                this.p.beginPath();
                this.p.arc(x,y,star,stop);
                this.p.fillStyle = c
            },
            width(auto,width,height) {
                if (this.p) {
                    if (auto === "yes") {
                        TH_WIDTH = "integer"
                    }
                    if (auto === "no") {
                        TH_WIDTH = "defalt"
                    }
                }

            }
        }
        window.th = th;
        const docs = {
        if (TH_WIDTH === "integer") {
          window.th.canvas.width = innerWidth
          window.th.canvas.height = innerHeight
        }
        
        }
        docs()
        window.setInterval(1000000, docs())
