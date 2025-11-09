
/* Copyright Thousandjs Todos Os Direitos são reservados © */
/* Copyright Thousandjs All Rights Reserveds © */

import CORE from "./thousand.core.js"

var thousandcanvas = document.createElement("canvas")
thousandcanvas.setAttribute("data-engine", "Thousand.js 1.3.7")

var initial = function() {
    if (CORE.RENDERING) {
        return {canvas: thousandcanvas, p: this.canvas.getContext("2d")}
    }
    else {
        console.error("[THOUSAND/GET/CORE] RENDERING ITS NOT DEFINED")
    }
}

var rendering = function(idelement) {
    var canvas = thousandcanvas
    var width = innerWidth
    var height = innerHeight

    idelement.appendChild(canvas)
    canvas.width = width
    canvas.height = height
    // Rendering 2D objs context

    THOUSAND.create.context = thousandcanvas.getContext("2d")
    
    canvas.getContext("2d").save()
    CORE.RENDERING = true

    return { 
        canvas: canvas,
        width: width,
        height: height,

    };
}
var pack = {
    background: function(r, g, b) {
        var canvas = thousandcanvas
        canvas.style.background = `rgb(${r}, ${g}, ${b})`
    },
    add: function(element) {
        element.onload = function() {
            if (element.type === "circle") {
                THOUSAND.create.circle({ map: element.maps, mesh: element.mesh})
            }
            if (element.type === "cube") {
                THOUSAND.create.cube({ map: element.maps, mesh: element.mesh})
            }
            if (element.type === "text") {
                THOUSAND.create.text(element.text, element.x, element.y)
            }
        }
    },
    remove: function(element) {
        THOUSAND.create.clear(element.x, element.y, element.w, element.h)
    },
    save: function() {
        THOUSAND.create.context.save()
    },
    load: function() {
        THOUSAND.create.context.restore()
    },
    restore() {
        THOUSAND.create.context.restore()
        THOUSAND.create.rotate(0)
    }
}
var THOUSAND = {
    rendering: rendering, 

    create: {
        context: undefined, 
        fill(c) {
          this.context.fillStyle = c
        },
        rect(x, y, w, h) {
           this.context.fillRect(x, y, w, h)
        },
        mesh(x, y, w, h) {
            return {
                x: x,
                y: y,
                w: w,
                h: h
            }
        },
        cube(info) {
            // Get info map

            var self = this

            if (info) {
                if (info.map.type === "image") {
                    var images = new Image()

                    images.onload = function() {
                        self.context.drawImage(images, info.mesh.x, info.mesh.y, info.mesh.w, info.mesh.h)
                    }
                    images.src = info.map.tile
                    CORE.loadingFiles.push(info.map.tile)
                }
                else {
                    self.fill(info.map.color)
                    self.rect(info.mesh.x, info.mesh.y, info.mesh.w, info.mesh.h)
                }
            }
            return { type: "cube", x: info.mesh.x, y: info.mesh.y, w: info.mesh.w, h: info.mesh.h, mesh: info.mesh, maps: info.map.tile }
        },
        clear(x, y, w, h) {
            this.context.clearRect(x, y, w, h)
        },
        circle(info) {
            var self = this.context
            var mesh = info.mesh
            var map = info.map
            var rotate = 0

            mesh.h = 0
            map.rotate = rotate

            if (info) {
                if (info.map.type === "color") {
                    self.beginPath()
                    self.arc(mesh.x, mesh.y, mesh.w, mesh.h, Math.PI * 2)
                    self.fillStyle = info.map.color
                    self.fill()
                    self.stroke()
                }
                if (info.map.type === "advancedcolor") {
                    self.beginPath()
                    self.arc(mesh.x, mesh.y, mesh.w, mesh.h, Math.PI * 2)
                    self.fillStyle = info.map.color
                    self.lineWidth = info.map.expressure
                    self.strokeStyle = info.map.strokeColor
                    self.fill()
                    self.stroke()
                }
                else {
                    self.context.beginPath()
                    self.context.arc(mesh.x, mesh.y, mesh.w, mesh.h, Math.PI * 2)
                    self.context.stroke()
                }
                return { type: "circle", x: mesh.x, y: mesh.y, w: mesh.w, h: mesh.h, mesh: mesh, map: map, rotate: rotate}
            }
            if (!info){
                console.error("[THOUSAND/CIRCLE] Info its not defined")
            }
        },
        text(text, x, y, info) {
            var self = this.context

            if (info) {
                if (info.font) {
                    self.font = `${info.font.font} ${info.size}`
                    self.fillStyle = info.color
                }
            }

            self.fillText(text, x, y)

            return { type: "text", x: x, y: y, text: text }
        },   
        rotate: function(angle) {
            this.context.rotate(angle)
        }
     },
    renderingPjs: function() {
        return CORE.ObjsScene
    },
    scene: function() {
        return pack;
    },
    loaderManagerFiles: function() {
        return CORE.LoaderManageFiles
    },
    info() {
        console.log("InfoLog")
        console.log("----------")
        console.log("Version: 1.8.4")
        console.log("CORE: 1.8.3")
        console.log("PACKAGE_B: Github")
        console.log("Finish process 0")
    }
}
window.addEventListener('resize', () => {
    var canvas = thousandcanvas
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.getContext("2d").restore()
})
export default THOUSAND;