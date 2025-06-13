        var th = {
            canvas: null,
            p: null,
            
            id: function(id,context) {
                if (id) {
                    this.canvas = document.getElementById(id)
                    this.p = this.canvas.getContext(context)
                }
                else {
                    console.error("The canvas and ctx in unidefined")
                }
            },
            rect: function(x,y,w,h,c) {
                this.p.fillStyle = c
                this.p.fillRect(x,y,w,h)
            },
            line: function(x,y,ToLineW,ToLineH,c) {
                if (x && y && ToLineW && ToLineH) {
                this.p.moveTo(ToLineW,ToLineH)
                this.p.lineTo(x,y)
                this.p.stroke()
                }
                else {
                    console.error("Unidefined points the line")
                }
            }

        }
