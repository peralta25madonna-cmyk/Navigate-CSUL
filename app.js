const onxrloaded = () => {

  console.log("XR Ready")

}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)