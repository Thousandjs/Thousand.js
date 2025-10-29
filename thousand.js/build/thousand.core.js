var RENDERING = false
var ObjsScene = []

// Loader Var
var loadingFiles = []
var loadedFiles = 0
var loaderError = false


// LoaderManagerFiles
var onstart = function(event, totalFiles, loadFilesU, url) {
    window.onload = function() {
        var FilesUpload = loadingFiles.length
        const xhr = new XMLHttpRequest()
        const urls = loadingFiles[1]

        totalFiles = FilesUpload
        loadFilesU = loadedFiles
        url = urls

        xhr.open('GET', url, true)
        if (event) {
            event()
        }
        xhr.onerror = function() {
            loaderError = true
            onError()
        }
    }
}
// onProgress
var onProgress = function(event,totalFiles, loadFilesU, url) {
    window.onload = function() {
        for (var files = 0; files<loadingFiles.length; files++) {
            var FilesUpload = loadingFiles.length
            const xhr = new XMLHttpRequest()
            const urls = loadingFiles[files]

            totalFiles = FilesUpload
            loadFilesU = loadedFiles
            url = urls

            xhr.open('GET', url, true)
            
            xhr.onload = function() {
                if (xhr.status === 200) {
                    loadedFiles += 1

                    console.log(`Loaded file sucess: ${url}`)
                    console.log(`Total files to upload: ${FilesUpload}`)

                    if (loadedFiles === FilesUpload) {
                        onFinish()
                    }
                    if (event) {
                        event()
                    }
                }
            }
            xhr.onerror = function() {
                loaderError = true
                onError()
            }
            xhr.send()
        }
        return { totalFiles: totalFiles, loadFilesU: loadFilesU, url: url };
    }
}
// onerror
var onError = function() {
    console.error("[THOUSAND/LOADMANAGER:Error]: An error occurred while installing the image or sixnare, please check your code and see the documentation for any errors.")
    console.warn("[THOUSAND/LOADMANAGER:Warn]: Option not suitable, try again")

    loadedFiles = 0
    loaderError = false
}
var onFinish = function(event, totalFiles, loadFilesU, FinalFiles) {
    window.onload = function() {
        console.log('All files uploaded');
        console.log('Total files uploaded: ' + totalFiles);
        console.log('Errors: ' + loaderError);
        if (event) {
            event()
        }
    }
}

// export
var exportToday = {
    RENDERING: RENDERING,
    ObjsScene: ObjsScene,
    loadingFiles: loadingFiles,
    LoaderManageFiles: {
        onstart: onstart,
        onprogress: onProgress,
        onerror: onError,
        onfinish: onFinish

    }
}
var exportDependencies = function() {
    return exportToday
}

export default exportDependencies()