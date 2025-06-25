        import * as MAIN from "thousand.core.js" 
        MAIN.require_files();
        var th = {
            canvas: null,
            p: null,

            id(id,ctx) {
                this.canvas = document.getElementById(id)
                if (this.canvas) {
                    this.p = this.canvas.getContext(ctx)
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
                this.p.fillStyle = "c"
            }
        }
        window.th = th;
