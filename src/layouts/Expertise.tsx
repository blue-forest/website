import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import { i18nExpertise } from "../i18n/expertise"
import { ExpertiseLayoutStyle } from "./Expertise.style"
import { ExpertiseBlockComponent } from "../components/ExpertiseBlock"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

export const ExpertiseLayout = BlueForest.Layout<Props>({

  render: ({ props, theme }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={ExpertiseLayoutStyle.container}>
      <Kiwi.Text
        keyPrefix={keyPrefix}
        i18n={i18nExpertise.title}
        style={ExpertiseLayoutStyle.title}
      />
      <Kiwi.Container style={ExpertiseLayoutStyle.services}>
        <ExpertiseBlockComponent
          keyPrefix={keyPrefix}
          color={theme.colors.PINK}
          title={i18nExpertise.storytellingTitle}
          description={i18nExpertise.storytellingDescription}
        />
        <ExpertiseBlockComponent
          keyPrefix={keyPrefix}
          color={theme.colors.MAGENTA}
          title={i18nExpertise.uxTitle}
          description={i18nExpertise.uxDescription}
        />
        <ExpertiseBlockComponent
          keyPrefix={keyPrefix}
          color={theme.colors.BLUE}
          title={i18nExpertise.devTitle}
          description={i18nExpertise.devDescription}
        />
        <ExpertiseBlockComponent
          keyPrefix={keyPrefix}
          color={theme.colors.PURPLE}
          title={i18nExpertise.devOpsTitle}
          description={i18nExpertise.devOpsDescription}
        />
      </Kiwi.Container>
    </Kiwi.Container>
  }

})