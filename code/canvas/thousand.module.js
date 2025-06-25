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
            }
        }
        window.th = th;
