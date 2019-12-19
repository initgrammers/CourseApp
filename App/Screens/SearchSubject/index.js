import React, { Component } from "react";
import Layout from "./SearchSubject.layout";
const SUBJECTS_ARRAY = [
  {
    title: "Inglés",
    image: require("../../assets/images/inglés.png"),
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ]
  },
  {
    title: "Dibujo",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/química.png")
  },
  {
    title: "Inglés",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/química.png")
  },
  {
    title: "Inglés",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/química.png")
  },
  {
    title: "Inglés",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/inglés.png")
  },
  {
    title: "Dibujo",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/dibujo.png")
  },
  {
    title: "Física",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/física.png")
  },
  {
    title: "Geometría",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/geometria.png")
  },
  {
    title: "Matemáticas",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/matematicas.png")
  },
  {
    title: "Programación",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/programacion.png")
  },
  {
    title: "Psicologia",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/psicologia.png")
  },
  ,
  {
    title: "Química",
    optionsServices: [
      {
        label: "Escoge el servicio que necesitas",
        value: 0
      },
      {
        label: "Clases particulares",
        value: 7
      },
      {
        label: "Resolución de ejercicios",
        value: 5
      },
      {
        label: "Clases particulares y resolucion de ejercicios",
        value: 12
      }
    ],
    optionsSite: [
      {
        label: "Escoge el lugar",
        value: 0
      },
      {
        label: "Biblioteca Central EPN",
        value: "CentalEPN"
      },
      {
        label: "Biblioteca FIEE",
        value: "FIEE"
      },
      {
        label: "Biblioteca ICB",
        value: "ICB"
      },
      {
        label: "Biblioteca SIS",
        value: "SIS"
      }
    ],
    image: require("../../assets/images/química.png")
  }
];
class SearchSubject extends Component {
  state = {
    renderListSubject: SUBJECTS_ARRAY,
    noData: false
  };

  navigateFormSubject = item => {
    this.props.navigation.navigate("FormSubject", { item });
  };
  onChangeText = value => {
    let searchWord = value.toLowerCase();
    let subjectFilter = SUBJECTS_ARRAY.filter(subject =>
      subject.title.toLowerCase().match(searchWord)
    );
    if (subjectFilter.length == 0) {
      this.setState({ renderListSubject: subjectFilter, noData: true });
    } else {
      this.setState({ renderListSubject: subjectFilter, noData: false });
    }
  };
  render() {
    const { noData, renderListSubject } = this.state;
    return (
      <Layout
        noData={noData}
        subjects={renderListSubject}
        onChangeText={this.onChangeText}
        navigateFormSubject={this.navigateFormSubject}
      />
    );
  }
}
export default SearchSubject;
