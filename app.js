import * as ecs from '@8thwall/ecs'

const onxrloaded = () => {

  console.log("XR Ready")

  XR8.addCameraPipelineModule({

    name: 'camera',

    onStart: () => {
      console.log("Camera Started")
    },

  })

}

window.XR8 ? onxrloaded() : window.addEventListener('xrloaded', onxrloaded)
