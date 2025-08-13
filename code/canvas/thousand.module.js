        const TD_REQUIRE = false
        const DD_REQUIRE = true
        var TH_WIDTH = "defalt"

        var canvascode = document.createElement("canvas")
        canvascode.className = "thousand r137 1.3.7"
        canvascode.width = innerWidth - 200
        canvascode.height = innerHeight - 200
        document.body.appendChild(canvascode)
        var th = {
            canvas: canvascode,
            p: canvascode.getContext("2d"),
            
            fill(c) {
                this.p.fillStyle = c;
            } ,
            rect(x,y,w,h,) {
                    this.p.fillRect(x,y,w,h)
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
        export { th }
