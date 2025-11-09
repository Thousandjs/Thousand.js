
var TH = null
var TypeTiles = "png"

var config = function(thConfig, typeTiles) {
    TH = thConfig
    if (typeTiles) {
        TypeTiles = typeTiles
    }
}
var createTiles = function(WidthTile, url, HeighTile=null, coordX, coordY) {
    var urlHash = window.location.hash.substring(1)
    var calc = urlHash.split("/")

    var zoom = calc[1]
    var x = calc[2]
    var y = calc[3]

    const map = {
        type: "image",
        tile: `${url}/${zoom}/${x}/${y}.${TypeTiles}`
    }
    var mesh = null
    if (HeighTile && coordX && coordY) {
        mesh = TH.create.mesh(0, 0, WidthTile, HeighTile)
    } else if (HeighTile && !x && !y) {
        mesh = TH.create.mesh(0, 0, WidthTile, HeighTile)
    } else {
        mesh = TH.create.mesh(0, 0, WidthTile, WidthTile)
    }
    mesh.x = coordX
    mesh.y = coordY
    const cube = TH.create.cube({ mesh: mesh, map: map })
    
    TH.scene().add(cube)
    console.log("Bloco criado " + "url: " + map.tile + " x: " + coordX + " y: " + coordY + " w: " + WidthTile + " h: " + HeighTile)
}
var urlTileBar = function(Zoom, coordX, coordY) {
    window.location.href = `#map/${Zoom}/${coordX}/${coordY}/`
}
var clearTile = function(x, y, w, h) {
    TH.create.clear(x, y, w, h)
}
var stagiunsZoom = function(zoom) {
    var zoomParts = []
    for (var z = 0; z<zoom; z+=1) {
        zoomParts.push(z)
    }
    return zoomParts;
}
var createStreet = function(coordX, coordY, view, angle, info) {
    if (view === 1) {
        TH.create.rotate(angle)
        TH.create.fill(info.color)
        TH.create.rect(coordX, coordY, info.widthStreet, info.heightStreet)
        if (info) {
            if (info.name) {
                for (var i = 0; i<info.widthStreet; i += 300) {
                    TH.create.fill(info.nameColor)
                    const font = {
                        font: "Arial",
                        size: "5px"
                    }
                    TH.create.text(info.name, coordX+i+50/2, coordY+6, font)
                    console.log(i)
                }
            }
            if (info.StreetViewImage) {
                clearTile()
                createTiles(info.width, info.StreetViewImage.url+"StreetView3D/", info.height, info.x, info.y)
            }
        }
    }
}
var contextmenu = function(e, options=[], propieters) {
    var DivOptionContextMenu = document.createElement("div")
    DivOptionContextMenu.className = "Divoptionmenu"
    for (var o = 0; o<options.length; o++) {
        var option = document.createElement("button")
        option.class = "Button-divOptionMenu"
        option.textContent = options[o].text

    }
    DivOptionContextMenu.style.position = "absolute"
    DivOptionContextMenu.style.left = e.clientX
    DivOptionContextMenu.style.top = e.clientY
    if (propieters) {
        if (propieters.color) {
            DivOptionContextMenu.style.backgroundColor = propieters.color
        }
        if (propieters.radius) {
            DivOptionContextMenu.style.borderRadius = propieters.radius
        }
    }
}

var MapOpen = {
    config: config,
    contextmenu: contextmenu,
    Map: {
        createTiles: createTiles,
        urlTileBar: urlTileBar,
        clearTile: clearTile,
        stagiunsZoom: stagiunsZoom,
        callTile: window.callTile,
        Street: {
            createStreet: createStreet,
            callStreet: window.callStreet,
        }
    }
}

window.addEventListener('resize', () => {
    window.location.reload()
})
export default MapOpen
