import { i18nSettings, Language } from "dropin-recipes"
import { BlueForest } from "./bundle"
import { HomePage } from "./pages/Home"

i18nSettings.setCurrentLanguage(Language.FRENCH)

BlueForest.Render({
  HOME: HomePage,
})
