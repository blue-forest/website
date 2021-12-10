import { i18nData } from "dropin-recipes"

export const i18nTechnologies = i18nData({

  title: {
    fr: "De l'idée à la production, nous vous aidons à déployer l'architecture technique de vos solutions",
  },

  intro: {
    fr: "L'équipe de Blue Forest met à votre disposition un écosystème de technologies :",
  },

  dropinDescription: (years: number): i18nData => ({
    fr: [
      "Développée ces ",
      years,
      " dernières années et aujourd'hui destinée aux architectures de nos clients, drop'in est une technologie capable de **créer**, **organiser** et **déployer** l'ensemble de vos projets.",
    ],
  }),

  dropinConclusion: {
    // fr: "Envie d'en savoir plus ? Nous avons dédié un espace à la description de son fonctionnement sur **[dropin.recipes](https://dropin.recipes){target:_blank}**.",
    fr: "Envie d'en savoir plus ? Inscrivez-vous à la newsletter ci-dessous afin de recevoir les prochaines mises à jour du projet.",
  },

  kiwiBundleDescription: [
    {
      fr: "Suite de librairies TypeScript permettant la création simplifiée d'application cross-platform web, desktop, Android et iOS avec **une unique codebase**.",
    },
    {
      fr: "Cette technologie Open Source comprend la pré-configuration de TypeScript, WebPack, Babel, React, Sass, React Native, Electron, MobX ainsi que toutes les possibilités offertes par l'API de drop'in."
    },
  ],

  kiwiBundleConclusion: {
    fr: "Retrouvez plus d'informations sur le Kiwi Bundle sur GitHub : **[theblueforest/kiwi-bundle](https://github.com/theblueforest/kiwi-bundle){target:_blank}**."
  },

})
