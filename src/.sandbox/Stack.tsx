import React from "react"
import { Component } from "kiwi-bundle-react"

interface Props {
  data: any
  width: number
  height: number
  rackBorders: number
  rackMargins: number
  moduleBorders: number
  moduleMargins: number
}

export class Stack extends Component<Props> {
  canvas?: HTMLCanvasElement

  getTitle() {
    return "Home"
  }

  componentDidMount() {
    const { data, width, height, rackBorders, rackMargins, moduleBorders, moduleMargins } = this.props

    if(typeof this.canvas !== "undefined") {
      const context = this.canvas.getContext("2d")
      if(context !== null) {
          this.canvas.width = width
          this.canvas.height = height

          const points = [
            [ 80, 60 ],
            [ 400, 60 ],
            [ 480, 460 ],
            [ 280, 540 ],
            [ 280, 620 ],
            [ 160, 700 ],
            [ 200, 180 ],
            [ 80, 60 ],
          ]
          context.beginPath()
          context.lineWidth = 10
          let previous: any
          points.forEach((point, index) => {
            if(index === 0) {
              context.moveTo(point[0], point[1])
            } else {

              const middleMinY = 50
              const middleMaxY = 150
              const middleMaxX = 10

              const middlepointX = ((previous[0] + point[0]) / 2) + (Math.random() * middleMaxX * (previous[1] < point[1] ? 1 : -1))
              const middlepointY = ((previous[1] + point[1]) / 2) + (Math.random() * (middleMaxY - middleMinY) + middleMinY)
              context.quadraticCurveTo(middlepointX, middlepointY, point[0], point[1])

              /*let yShiftPrevious
              let yShiftCurrent
              if(previous[1] > point[1]) {
                yShiftPrevious = previous[1] + (previous[1] - point[1])
                yShiftCurrent = previous[1]
              } else {
                yShiftPrevious = point[1]
                yShiftCurrent = point[1] + (point[1] - previous[1])
              }

              const xShift = 0
              const xShiftPrevious = xShift // * (point[0] > previous[0] ? 1 : -1)
              const xShiftCurrent = xShift // * (point[0] > previous[0] ? 1 : -1)

              this.context.bezierCurveTo(
                previous[0] + xShiftPrevious, yShiftPrevious,
                point[0] + xShiftCurrent, yShiftCurrent,
                point[0], point[1],
              )*/
            }
            previous = point
          })
          context.stroke()

          // drop'in
          // const dropin = new Rack(this, 10, 10, 2, 2)

          data.recipes.forEach((recipe: any) => {
            /*const modules = [
              { type: "Recipe", id: recipe.id, name: recipe.name, links: [] }
            ]

            const dropin = new Rack(context, 10, 10, 2, modules)*/

          /*Object.keys(data.recipes[0]).forEach((rackId, rackIndex) => {
            const rackModules = this.racks[rackId]
            const rackWidth = this.moduleMargin + rackModules.length * (this.moduleWidth + this.moduleMargin)
            const rackHeight = this.moduleHeight + 2 * this.moduleMargin + this.rackBorder * 2
            const rackX = this.rackMargin + (this.rackBorder / 2)
            const rackY = this.rackMargin + (this.rackBorder / 2) + rackIndex * (this.rackBorder + rackHeight + this.rackMargin)
            new RackCanvas(context, rackX, rackY, rackModules)

            const rack: any = this.racks[rackId]

            // Values

            // Rack
            context.lineWidth = this.rackBorder
            context.beginPath()
            context.rect(rackLeft, rackTop, rackWidth, rackHeight)
            context.stroke()

            // Modules
            rack.forEach((module, moduleIndex) => {
              context.lineWidth = this.moduleBorder
              context.beginPath()
              const moduleLeft = 200 // this.rackMargin + (this.moduleBorder / 2) + this.moduleMargin + moduleIndex * (this.moduleWidth + this.moduleMargin)
              const moduleTop = rackTop + this.rackBorder + this.moduleMargin
              context.rect(moduleLeft, moduleTop, this.moduleWidth, this.moduleHeight)
              context.stroke()
            })*/
          })
        }
      }
  }

  render() {
    return <canvas className="canvas" ref={ref => {
      if(ref !== null) {
        this.canvas = ref
      }
    }}/>
  }

}
