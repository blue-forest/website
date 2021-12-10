import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nTechnologies } from "../i18n/technologies"
import { TechnologiesLayoutStyle } from "./Technologies.style"
import DROPinImage from "../../assets/DROPin.png"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const TechnologiesLayout = BlueForest.Layout<Props>({

  render: ({ props }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={TechnologiesLayoutStyle.container}>

      <Kiwi.Image source={DROPinImage} style={TechnologiesLayoutStyle.image}/>

      <Kiwi.Container style={TechnologiesLayoutStyle.content}>
        <Kiwi.Text children={i18nTechnologies.title} id={keyPrefix} style={TechnologiesLayoutStyle.title}/>

        <Kiwi.Text id={keyPrefix} children={i18nTechnologies.intro} style={TechnologiesLayoutStyle.intro}/>

        <Kiwi.Text children="drop'in" style={TechnologiesLayoutStyle.subtitle}/>
        <Kiwi.Text
          id={keyPrefix}
          children={i18nTechnologies.dropinDescription(new Date().getFullYear() - 2015) as any}
          style={TechnologiesLayoutStyle.listElement}
        />

        <Kiwi.Text id={`${keyPrefix}-dropin-last-text`} children={i18nTechnologies.dropinConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>

        <Kiwi.Text children="Kiwi Bundle" style={TechnologiesLayoutStyle.subtitle}/>
        {i18nTechnologies.kiwiBundleDescription.map((desc, index) => {
          return <Kiwi.Text key={index} id={`${keyPrefix}-kb-${index}-text`} children={desc} style={TechnologiesLayoutStyle.listElement}/>
        })}
        <Kiwi.Text id={`${keyPrefix}-dropin-last-text`} children={i18nTechnologies.kiwiBundleConclusion} style={TechnologiesLayoutStyle.listLastElementText}/>

      </Kiwi.Container>
    </Kiwi.Container>
  }

})
