import * as React from "react"
import * as Kiwi from "kiwi-bundle-react"
import { BlueForest } from "../bundle"
import NewsletterImage from "../../assets/newsletter.png"
import { NewsletterLayoutStyle } from "./Newsletter.style"
import { i18nNewsletter } from "../i18n/newsletter"
import ReCAPTCHA from "react-google-recaptcha"

interface Props extends Kiwi.ComponentProps {
  keyPrefix: string
}

interface State extends Kiwi.ComponentState {
  email: string
}

export const NewsletterLayout = BlueForest.Layout<Props, State>({
  state: {
    email: "",
  },

  values: {
    reCaptchaKey: "6LcWlfEUAAAAAHFs68IlVCJdale-t3vBoeT-1tOz",
    reCaptchaRef: React.createRef(),
  },

  render: ({ props, colors, state, values, setState }) => {
    const { keyPrefix } = props
    return <Kiwi.Container style={NewsletterLayoutStyle.container}>
      <Kiwi.Container style={NewsletterLayoutStyle.imageContainer}>
        <Kiwi.Image source={NewsletterImage} style={NewsletterLayoutStyle.image}/>
      </Kiwi.Container>
      <Kiwi.Container style={NewsletterLayoutStyle.content}>
        <Kiwi.Text id={keyPrefix} children={i18nNewsletter.title} style={NewsletterLayoutStyle.title}/>
        <Kiwi.Text id={keyPrefix} children={i18nNewsletter.text} style={NewsletterLayoutStyle.text}/>
        <Kiwi.Form onSubmit={() => {
          if(values.reCaptchaRef.current.getValue().length === 0) {
            alert("Erreur lors de la validation reCAPTCHA")
          } else {
            const xhr = new XMLHttpRequest()
            xhr.open("POST", "https://listmonk.blueforest.cc/subscription/form", true)
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
            xhr.send(`nonce=&l=8bd5a34a-4206-43dc-8af9-12515786baa2&email=${state.email.replace(" ", "%20")}`)
            xhr.onreadystatechange = () => {
              if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                try {
                  const response = JSON.parse(xhr.responseText)
                  if(typeof response.error !== "undefined") {
                    alert(response.error)
                  } else {
                    alert("Une erreur inconnue s'est produite")
                  }
                } catch {
                  alert(`Merci, votre adresse e-mail a bien été enregistrée !`)
                  setState({ email: "" })
                }
              }
            }

            /*const response = xhr.responseText
            */
          }
        }}>
          <Kiwi.Input
            type="email"
            value={state.email}
            onChange={email => { setState({ email }) }}
            required={true}
            placeholder={i18nNewsletter.email}
            placeholderColor={colors.BLUE}
            style={NewsletterLayoutStyle.form}
          />
          <Kiwi.Text id={keyPrefix} children={i18nNewsletter.checkbox} style={NewsletterLayoutStyle.terms}/>

          <Kiwi.Container style={NewsletterLayoutStyle.reCaptcha}>
            <ReCAPTCHA ref={values.reCaptchaRef} size="normal" sitekey={values.reCaptchaKey}/>
          </Kiwi.Container>

          <Kiwi.Button type="submit" children={i18nNewsletter.register} style={NewsletterLayoutStyle.button}/>
        </Kiwi.Form>
      </Kiwi.Container>

      {/*<Kiwi.Container style={NewsletterLayoutStyle.content}>
        <Kiwi.Container style={[ ...NewsletterLayoutStyle.item, ...NewsletterLayoutStyle.itemLeft ]}>
        </Kiwi.Container>
        <Kiwi.Container style={[ ...NewsletterLayoutStyle.item, ...NewsletterLayoutStyle.itemRight ]}>
          <Kiwi.Text id={keyPrefix} children={i18nNewsletter.title} style={TextStyles.h2}/>
          <Kiwi.Text id={keyPrefix} children={i18nNewsletter.text} style={NewsletterLayoutStyle.text}/>
          <Kiwi.Input placeholder={i18nNewsletter.email} style={NewsletterLayoutStyle.form} placeholderColor={options.theme.colors.BLUE}/>
          <Kiwi.Text id={keyPrefix} children={i18nNewsletter.checkbox} style={NewsletterLayoutStyle.terms}/>
          <Kiwi.Button children={i18nNewsletter.register} style={NewsletterLayoutStyle.button}/>
        </Kiwi.Container>
      </Kiwi.Container>*/}
    </Kiwi.Container>
  }

})
