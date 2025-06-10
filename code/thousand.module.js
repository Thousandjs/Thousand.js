  var th = {
    scen: null,
    ctx: null,
    centerHeight: innerHeight - (innerHeight - (innerHeight - 500)) + "px",
    centerWidth: innerWidth - (innerWidth - (innerWidth - 500)) + "px",

    scene(op, ctxType) {
      if (op === "no") {
        const canvas = document.createElement("canvas");
        canvas.id = "thousand-canvas";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        document.body.appendChild(canvas);

        this.scen = canvas;
        this.ctx = canvas.getContext(ctxType.toLowerCase());
      }

      if (op === "yes") {
        const canvas = document.getElementById("thousand-canvas");
        if (canvas) {
          this.scen = canvas;
          this.ctx = canvas.getContext(ctxType.toLowerCase());
        } else {
          console.error("Canvas com ID 'thousand-canvas' não foi encontrado.");
        }
      }
    },

    rect(x, y, w, h, c) {
      if (this.ctx) {
        this.ctx.fillStyle = c;
        this.ctx.fillRect(x, y, w, h);
      } else {
        console.error("Contexto não iniciado.");
      }
    },
    ellipse(x, y, r, c) {
  if (this.ctx) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * 2);
    this.ctx.fillStyle = c;
    this.ctx.fill();
  } else {
    console.error("Contexto não iniciado.");
  }
},
 arc(x, y, r, math) {
      if (this.ctx) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, Math.PI * math);
    this.ctx.fillStyle = c;
  } else {
    console.error("Contexto não iniciado.");
  }
 }
  };
