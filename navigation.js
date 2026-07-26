import * as ecs from '@8thwall/ecs'

ecs.registerComponent({
  name: 'navigation',

  stateMachine: ({world, eid, defineState}) => {

    const waypoints = [
      {x: 0, y: 0, z: -2},
      {x: 2, y: 0, z: -5},
      {x: 4, y: 0, z: -8},
      {x: 6, y: 0, z: -12},
    ]

    let current = 0

    defineState('start')
      .initial()
      .onEnter(() => {

        const entity = world.getEntity(eid)

        entity.setLocalPosition(waypoints[current])

        console.log('Navigation Started')

      })

  }
})