import * as ecs from '@8thwall/ecs'

const OBJECT_PLACED_EVENT = 'object-placed'

ecs.registerComponent({
  name: 'tap-to-place',

  schema: {
    prefab: 'eid'
  },

  stateMachine: ({world, eid, schemaAttribute, defineState}) => {

    defineState('initial')
      .initial()
      .listen(eid, ecs.input.SCREEN_TOUCH_START, (e) => {

        console.log("SCREEN TOUCHED")

        if (!e.data.worldPosition) {

          console.log("NO WORLD POSITION")

          return
        }

        console.log(
          "WORLD POSITION:",
          e.data.worldPosition
        )


        const prefab = schemaAttribute.get(eid).prefab


        if (!prefab) {

          console.log("NO PREFAB ASSIGNED")

          return
        }


        const newEid = world.createEntity(prefab)

        const newEntity = world.getEntity(newEid)


        newEntity.setLocalPosition(
          e.data.worldPosition
        )


        newEntity.set(
          ecs.Quaternion,
          ecs.math.quat.yRadians(0)
        )


        console.log("AR OBJECT CREATED")


        world.events.dispatch(
          eid,
          OBJECT_PLACED_EVENT
        )

      })

  }
})


export {
  OBJECT_PLACED_EVENT,
}
