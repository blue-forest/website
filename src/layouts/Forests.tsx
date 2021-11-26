import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nForests } from "../i18n/forests"
import { ForestsLayoutStyle } from "./Forests.style"
import { TextStyles } from "../styles/text.style"

import LaCloche from "../../assets/companies/LaCloche.png"
import MaoBoa from "../../assets/companies/MaoBoa.png"
import Qapex from "../../assets/companies/Qapex.png"
import ERMImage from "../../assets/companies/ERM.png"
import IZIHOME from "../../assets/companies/IZIHOME.png"
import LCDM from "../../assets/companies/LCDM.png"
import LaRhumerie from "../../assets/companies/LaRhumerie.png"
import MBLocation from "../../assets/companies/MBLocation.png"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

interface State extends Kiwi.ComponentState {
  selected: number
}

export const ForestsLayout = BlueForest.Layout<Props, State>({
  state: {
    selected: 0,
  },

  render: ({ props, state, setState }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={ForestsLayoutStyle.container}>

      <Kiwi.Text id={keyPrefix} children={i18nForests.title} style={ForestsLayoutStyle.title}/>

      <Kiwi.Image
        source={LaCloche}
        style={ForestsLayoutStyle.image(state.selected === 0)}
        onClick={() => { setState({ selected: 0 }) }}
      />

      <Kiwi.Image
        source={ERMImage}
        style={ForestsLayoutStyle.image(state.selected === 1)}
        onClick={() => { setState({ selected: 1 }) }}
      />

      <Kiwi.Image
        source={Qapex}
        style={ForestsLayoutStyle.image(state.selected === 2)}
        onClick={() => { setState({ selected: 2 }) }}
      />

      <Kiwi.Image
        source={MaoBoa}
        style={ForestsLayoutStyle.image(state.selected === 3)}
        onClick={() => { setState({ selected: 3 }) }}
      />

      <Kiwi.Image
        source={IZIHOME}
        style={ForestsLayoutStyle.image(state.selected === 4)}
        onClick={() => { setState({ selected: 4 }) }}
      />

      <Kiwi.Image
        source={LCDM}
        style={ForestsLayoutStyle.image(state.selected === 5)}
        onClick={() => { setState({ selected: 5 }) }}
      />

      <Kiwi.Image
        source={LaRhumerie}
        style={ForestsLayoutStyle.image(state.selected === 6)}
        onClick={() => { setState({ selected: 6 }) }}
      />

      <Kiwi.Image
        source={MBLocation}
        style={ForestsLayoutStyle.image(state.selected === 7)}
        onClick={() => { setState({ selected: 7 }) }}
      />

      <Kiwi.Container
        style={ForestsLayoutStyle.cardContainer}
        children={(() => {
          switch(state.selected) {
            case 0: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={LaCloche} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.laCloche.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
            </Kiwi.Container>
            case 1: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={ERMImage} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.ERM.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
            </Kiwi.Container>
            case 2: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={Qapex} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.Qapex.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
            </Kiwi.Container>
            case 3: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={MaoBoa} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.MaoBoa.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
              </Kiwi.Container>
            case 4: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={IZIHOME} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.IZIHOME.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
              </Kiwi.Container>
            case 5: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={LCDM} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.LCDM.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
              </Kiwi.Container>
            case 6: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={LaRhumerie} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.LaRhumerie.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}
              </Kiwi.Container>
            case 7: return <Kiwi.Container style={ForestsLayoutStyle.card}>
              <Kiwi.Image source={MBLocation} style={ForestsLayoutStyle.cardImage}/>
              {i18nForests.MBLocation.map((text, index) => {
                return <Kiwi.Text id={keyPrefix} key={index} children={text} style={TextStyles.content}/>
              })}

            </Kiwi.Container>
          }
        })()}
      />


      {/*
      <Kiwi.Text id={id} children={i18nForests.description} style={ForestsLayoutStyle.description}/>

      <Kiwi.Container style={ForestsLayoutStyle.cardsContainer}>
        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image source={LaCloche} style={ForestsLayoutStyle.cardImage}/>
          <Kiwi.Text id={id} children={i18nForests.laClocheDescription} style={ForestsLayoutStyle.cardTitle}/>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image source={Erm} style={ForestsLayoutStyle.cardImage}/>

          <Kiwi.List style={ForestsLayoutStyle.cardTags}>
            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.ermTag1} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.ermTag2} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.ermTag3} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.ermTag4} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.ermTag5} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.ermTag6} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>
          </Kiwi.List>

          <Kiwi.Container style={ForestsLayoutStyle.cardBtn}>
            <Kiwi.Text id={id} children={i18nForests.visitERM} style={ForestsLayoutStyle.cardTagText}/>
          </Kiwi.Container>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image source={Qapex} style={ForestsLayoutStyle.cardImage}/>

          <Kiwi.List style={ForestsLayoutStyle.cardTags}>
            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.qapexTag1} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.qapexTag2} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.qapexTag3} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.qapexTag4} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.qapexTag5} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>

            <Kiwi.ListElement style={ForestsLayoutStyle.cardTag}>
              <Kiwi.Text id={id} children={i18nForests.qapexTag6} style={ForestsLayoutStyle.cardTagText}/>
            </Kiwi.ListElement>
          </Kiwi.List>

          <Kiwi.Container style={ForestsLayoutStyle.cardBtn}>
            <Kiwi.Text id={id} children={i18nForests.visitQapex} style={ForestsLayoutStyle.cardTagText}/>
          </Kiwi.Container>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image source={MaoBoa} style={ForestsLayoutStyle.cardImage}/>
          <Kiwi.Text id={id} children={i18nForests.maoboaDescription} style={ForestsLayoutStyle.cardTitle}/>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.card}>
          <Kiwi.Image source={Telaqua} style={ForestsLayoutStyle.cardImage}/>
        </Kiwi.Container>

        <Kiwi.Container style={ForestsLayoutStyle.emptyCard}>
        </Kiwi.Container>
  </Kiwi.Container>*/}

    </Kiwi.Container>
  }

})
