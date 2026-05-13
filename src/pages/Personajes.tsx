import { motion, AnimatePresence } from 'framer-motion'
import {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react'

import {
  Sparkles,
  Crown,
  Sword,
  Stars,
  Eye,
  X,
  Expand,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react'

/* =========================================================
   🩸 FALLBACKS
========================================================= */

const FALLBACK_IMAGE = '/fallback.jpg'

const FALLBACK_HERO = '/fallback.jpg'

/* =========================================================
   🩸 TYPES
========================================================= */

type Character = {
  name: string
  images: string[]
  title: string
  universe: string
  desc: string
  tags: string[]
}

/* =========================================================
   🩸 DATA
========================================================= */

const characters: Character[] = [
  {
    name: 'Olivia',
    images: [
      '/pj/Olivia/Olivia.jpeg',
      '/pj/Olivia/Olivia12.jpeg',
      '/pj/Olivia/Olivia1.jpeg',
      '/pj/Olivia/Olivia3.jpeg',
      '/pj/Olivia/Olivia2.jpeg',
      '/pj/Olivia/Olivia4.jpeg',
      '/pj/Olivia/Olivia5.jpeg',
      '/pj/Olivia/Olivia6.jpeg',
      '/pj/Olivia/Olivia10.jpeg',
      '/pj/Olivia/Olivia8.jpeg',
      '/pj/Olivia/Olivia11.jpeg',
      '/pj/Olivia/Olivia7.jpeg',
      '/pj/Olivia/Olivia9.jpeg',
      '/pj/Olivia/Olivia13.jpeg',
      '/pj/Olivia/Olivia14.jpeg',
      '/pj/Olivia/Olivia15.jpeg',
      '/pj/Olivia/Olivia16.jpeg',
    ],
    title: 'Protagonista',
    universe: 'Un Amanecer Tranquilo',
            desc: `
            
            Olivia no parecía pertenecer al mismo mundo que el resto de las personas. Había algo en ella que desentonaba con la miseria que cubría la Tierra; una calma imposible, demasiado pura para sobrevivir en un lugar consumido por los placeres del hombre, la guerra, la corrupción y el miedo.\n\n
            
            Sus ojos verdes no transmitían sólo inocencia, sino cansancio. El cansancio de alguien que había visto más de lo que quisiera ver frente a ella.\n\n

            Era una joven de diecisiete años, amable, de voz suave, tan amante del café con queso en las mañanas.\n\n
            
            Y... a simple vista parecía una chica común, alguien capaz de sonreír con ternura incluso en los días más grises. Pero detrás de aquella humanidad tranquila se ocultaba algo mucho más antiguo.\n\n

            Olivia era la reencarnación de un valiente ángel dispuesto a regresar eternamente al mundo de los vivos. Vida tras vida, había vuelto con el mismo propósito: detener a Azz y recuperar la Esfera de Luz, un fragmento esencial de la magia cuyo poder era capaz de alterar el destino de todas las especies.\n\n

            Sin embargo, su existencia estaba profundamente ligada a uno de los capítulos más oscuros de la humanidad.\n\n

            Mucho antes de su nacimiento actual, una organización revolucionaria, manipulada por Hortensia, aquel demonio ancestral consumido por el odio y la ambición. Inició experimentos para crear seres capaces de superar la magia mediante modificaciones humanas.\n\n
            
            Clínicas clandestinas, cuerpos deformes, fetos desechados y niños utilizados como pruebas formaron parte de aquel proyecto monstruoso. Diane, una mujer rota por el abandono y la pobreza, fue utilizada como recipiente en uno de esos experimentos, dando origen al cuerpo donde Olivia renacería.

            Y de entre toneladas de bebés, ella constituyó al tercer éxito.\n\n

            Desde su nacimiento, Olivia manifestó una telequinesis tan inestable y destructiva que cualquiera atrapado dentro de su rango visual podía morir despedazado por esa fuerza invisible que emanaba de su cuerpo. Por lo que fue utilizada como piezas de ajedrez dentro de una guerra entre ángeles, demonios y humanos consumidos por la desesperación.\n\n

            Aun así, Olivia jamás perdió aquello que la hacía diferente.\n\n

            En un mundo donde la crueldad era más común que la bondad, su presencia transmitía refugio. Había paz en ella. Como si el viento disminuyera su fuerza a su alrededor. Como si todavía existiera esperanza mientras siguiera respirando.\n\n

            Muchos la describían como una santa; otros, como una bendición caída del cielo. Pero detrás de aquella serenidad habitaba una mujer marcada por incontables pérdidas, perseguida por vidas que no logró salvar y recuerdos que el tiempo jamás pudo borrar.\n\n

            Olivia no nació para gobernar ni para conquistar.\n\n

            Nació para resistir y ser la oposición a su mundo.\n\n

            Para caminar incluso después de que el sufrimiento intentara destruirla una y otra vez. Para cargar dolores que nadie quiso mirar. Para enfrentar un mundo más negro que la propia oscuridad... y aun así seguir creyendo que podía ser salvado.
            `,
    tags: ['Paz', 'Confianza', 'Sacrificio'],
  },

  {
    name: 'Delier',
    images: [
      '/pj/Delier/Delier.jpeg',
      '/pj/Delier/Delier1.jpeg',
      '/pj/Delier/Delier2.jpeg',
      '/pj/Delier/Delier3.jpeg',
      '/pj/Delier/Delier4.jpeg',
      '/pj/Delier/Delier5.jpeg',
      '/pj/Delier/Delier6.jpeg',
      '/pj/Delier/Delier7.jpeg',
      '/pj/Delier/Delier8.jpeg',
    ],
    title: 'Una mujer de carácter fuerte',
    universe: 'Un Amanecer Tranquilo',
    desc: `Delier es una joven de dieciséis años cuya apariencia refleja una vida marcada por el sufrimiento. Sus brazos y piernas permanecen cubiertos por vendas, ocultando múltiples cicatrices y heridas que jamás terminaron de sanar por completo.\n\n

          A pesar de su aspecto frágil y silencioso, Delier transmite una extraña fortaleza, como alguien que aprendió a seguir adelante incluso después de haber sido destruida muchas veces. Y en contraste a su personalidad fría, suele mantenerse cerca de Felicia, encontrando en ella una de las pocas presencias capaces de brindarle calma y seguridad.`,
    tags: ['Osada', 'Resiliente', 'Fragmentada'],
  },

  {
    name: 'Alicia',
    images: [
      '/pj/Alicia/Alicia.jpeg',
      '/pj/Alicia/Alicia1.jpeg',
      '/pj/Alicia/Alicia2.jpeg',
    ],
    title: 'Una obstinada aventurera',
    universe: 'Un Amanecer Tranquilo',
    desc: `Alicia ha seguido mariposas desde que era una niña pequeña. Mientras otros las veían como simples criaturas pasajeras, ella sentía que ocultaban algo más; un mensaje, una dirección, una presencia observándola desde algún lugar imposible de alcanzar. \n\n
    
          Con el paso de los años, aquella curiosidad infantil se transformó en una convicción absoluta: alguien guiaba a las personas a través de las mariposas, conduciéndolas lejos del peligro, tal como si fueran mensajeras. \n\n

          Alicia creció aferrándose sobre aquella creencia. En un mundo consumido por el miedo y la oscuridad, las mariposas se convirtieron en su única señal de esperanza, el rastro delicado que seguía para no perderse. Y aunque muchos consideraban absurda su obsesión, ella jamás dejó de perseguirlas. \n\n

          “Yo encontraré al dios que nos guía... Quiero que me muestre el camino hacia donde está mi padre.”`,
    tags: ['Confort', 'Busqueda', 'Fé'],
  },

  {
    name: 'Felicia',
    images: [
      '/pj/Felicia/Felicia.jpeg',
      '/pj/Felicia/Felicia14.jpeg',
      '/pj/Felicia/Felicia1.jpeg',
      '/pj/Felicia/Felicia2.jpeg',
      '/pj/Felicia/Felicia12.jpeg',
      '/pj/Felicia/Felicia11.jpeg',
      '/pj/Felicia/Felicia3.jpeg',
      '/pj/Felicia/Felicia4.jpeg',
      '/pj/Felicia/Felicia5.jpeg',
      '/pj/Felicia/Felicia6.jpeg',
      '/pj/Felicia/Felicia8.jpeg',
      '/pj/Felicia/Felicia9.jpeg',
      '/pj/Felicia/Felicia10.jpeg',
      '/pj/Felicia/Felicia15.jpeg',
      '/pj/Felicia/Felicia16.jpeg',
      '/pj/Felicia/Felicia13.jpeg',
      '/pj/Felicia/Felicia17.jpeg',
      '/pj/Felicia/Felicia18.jpeg',
      '/pj/Felicia/Felicia19.jpeg',
      '/pj/Felicia/Felicia20.jpeg',
    ],
    title: 'Un alien del terror',
    universe: 'Un Amanecer Tranquilo',
    desc: ` Felicia no nació en la Tierra, ni siquiera pertenecía a algo que pudiera llamarse “vida” bajo la comprensión humana. Era una entidad llegada desde más allá de las estrellas; un ser intangible, incapaz de sentir empatía, culpa o amor. Vagaba por el universo destruyendo todo por placer no por necesidad, sembrando caos únicamente porque podía hacerlo. Para ella, las vidas ajenas no tenían significado. \n\n

Pero todo cambió cuando encontró a una joven llamada Felicia. \n\n

Ella llegó a la Tierra por casualidad, deseando experimentar el mundo físico, la criatura tomó posesión completa de su cuerpo, consumiendo su alma hasta hacerla desaparecer. Robó su rostro, sus recuerdos y hasta su nombre. Sin embargo, jamás imaginó que el corazón de aquella muchacha estuviera tan profundamente marcado por el dolor, los sueños rotos y el deseo desesperado de ser amada. Poco a poco, los sentimientos de la verdadera Felicia comenzaron a filtrarse dentro del monstruo, como heridas imposibles de cerrar. \n\n

La verdadera Felicia veía las estrellas deseando que se detuvieran, anhelando escapar a otro lugar, a otro mundo donde pudiera ser feliz.\n\n
Pero sus sueños jamás se hicieron realidad; su cuerpo y su dignidad nunca fueron respetados.\n\n

Hizo todo lo posible por alcanzar la felicidad, entregando su humanidad y muriendo en el intento. Fue ahí que alguien más ocupó su lugar: un monstruo. Fue él quien robó su cuerpo, sus recuerdos y su nombre: Felicia.\n\n

Ahora sólo queda ese monstruo, controlando su cuerpo y sembrando desgracia en el universo, mientras intenta lidiar con el corazón adolorido de la verdadera Felicia.\n\n

Ahora, aquella entidad vive atrapada entre dos naturalezas: la monstruosa indiferencia con la que llegó al universo y la sensibilidad humana que lentamente aprendió a sentir. Observa a las personas intentando entender por qué aman, por qué sufren y por qué continúan viviendo aun cuando el mundo las destruye... Y sobre todo, intentando comprender qué es lo que ella misma siente.\n\n

Sus ojos grandes y redondos parecen atravesar el alma de cualquiera que los mire demasiado tiempo, como si buscaran respuestas que ni siquiera ella entiende, esos ojos grandes y penetrantes.\n\n

“¿Crees que mereces ser amado...?\n\n
No creo que exista alguien capaz de amarme.”\n\n

Irónicamente; Felicia es un nombre demasiado alegre para una existencia que ha dejado dolor en incontables mundos. Y aun así, en medio de toda esa oscuridad, sigue observando las mariposas blancas, aferrándose a la absurda idea de que quizás exista un lugar donde incluso un monstruo pueda encontrar la paz.`,
    tags: ['Terror', 'Vacía', 'Humanidad', 'Melancolía'],
  },

  {
    name: 'Diane',
    images: [
      '/pj/Diane/Diane1.jpeg',
      '/pj/Diane/Diane3.jpeg',
      '/pj/Diane/Diane5.jpeg',
      '/pj/Diane/Diane6.jpeg',
    ],
    title: 'Madre de Olivia',
    universe: 'Un Amanecer Tranquilo',
    desc: `
    
          Mi hija, Olivia...\n\n
          Sé que no podía darte una buena vida, pero llegué a imaginar un futuro en donde yo sería una buena madre, mucho mejor de lo que fue mi madre conmigo.\n\n
          Yo nunca te vendería a otros hombres, no dejaría que pasarás miedo...\n\n
          Pero ahora estoy muriendo y tengo mucho miedo de lo que te puedan hacer esos hombres... no quiero que te dañen como a mí... No quiero, no quiero dejarte sola.\n\n
          —Diane\n\n

          Diane era el tipo de persona que aprendió demasiado pronto que el mundo no tenía intención de salvarla. Su sonrisa nunca transmitía felicidad; era una tristeza silenciosa disfrazada de calma, la expresión de alguien que se acostumbró al dolor hasta dejar de resistirse a él.\n\n

           Sus cabellos rojizos, intensos como llamas vivas, atraían miradas cargadas de deseo y morbo. Los hombres la observaban como un cuerpo antes que como una persona, consumiéndola poco a poco hasta hacerle creer que jamás sería vista como una mujer real, digna de amor o ternura. Diane no buscaba afecto, porque nadie le enseñó que merecía recibirlo. Mucho menos su madre, quien terminó entregándola a laboratorios clandestinos a cambio de dinero.\n\n

           Fue convertida en un sujeto de experimentación para uno de los proyectos más atroces jamás creados: la fabricación artificial de cuerpos capaces de superar la magia misma. Clínicas ocultas en la oscuridad, fetos desechados, algunos eran bebés que acabaron sin vida, incluso se trabajó con drogas y sustancias prohibidas que formaban parte de una maquinaria infernal orquestada por Hortensia, un demonio ancestral repleto de odio y ambición, cuya única meta era romper el equilibrio del mundo mientras corrompía lentamente a la humanidad desde las sombras.\n\n

           Fue así que durante un largo tiempo, el cuerpo de Diane fue convertido en un recipiente de pruebas, dolor y mutaciones. Y aun así... por gracia o por desgracia... sobrevivió.\n\n

           Su madre, sin consideración, no tardó en entregarla por placeres sexuales como método de ingresos económicos, pues desde joven siempre fue su hábitat.\n\n

           Las flores azules eran lo único que conservaba de su hija; el único recuerdo puro dentro de una vida destruida por la explotación sexual, la violencia física y metal, e inclusive, todo limite de la degradación humana.

           Para este punto, Diane ya comprendía demasiado bien cómo funcionaba este mundo.\n\n

           “Nadie salva a una prostituta... aunque grite.\n\n

           Creen que no sentimos. Que no sabemos qué es el amor.”\n\n

           Sin quererlo, su camino dio pie al origen de su amada Olivia y con los secretos de las reencarnaciones, los experimentos y la guerra entre ángeles y demonios. Sin saberlo, Diane se convirtió en una pieza trágica de poca importancia por formar parte de un conflicto mucho más grande que ella misma.\n\n

           Pero incluso después de todo el sufrimiento, seguía conservando algo profundamente humano: la capacidad de recordar con ternura a quien siempre será su querida bebé.`,
    tags: ['Resignación', 'Abandono', 'Asedio'],
  },

  {
    name: 'Julieta Vanily',
    images: [
      '/pj/Julieta/Julieta.jpeg',
      '/pj/Julieta/Julieta1.jpeg',
      '/pj/Julieta/Julieta2.jpeg',
      '/pj/Julieta/Julieta3.jpeg',
      '/pj/Julieta/Julieta4.jpeg',
      '/pj/Julieta/Julieta5.jpeg',
      '/pj/Julieta/Julieta6.jpeg',
      '/pj/Julieta/Julieta7.jpeg',
      '/pj/Julieta/Julieta8.jpeg',
      '/pj/Julieta/Julieta9.jpeg',
      '/pj/Julieta/Julieta10.jpeg',
      '/pj/Julieta/Julieta11.jpeg',
      '/pj/Julieta/Julieta12.jpeg',
      '/pj/Julieta/Julieta13.jpeg',
      '/pj/Julieta/Julieta14.jpeg',
      '/pj/Julieta/Julieta15.jpeg',
      '/pj/Julieta/Julieta16.jpeg',
      '/pj/Julieta/Julieta17.jpeg',
      '/pj/Julieta/Julieta18.jpeg',
      '/pj/Julieta/Julieta19.jpeg',
      '/pj/Julieta/Julieta20.jpeg',
      '/pj/Julieta/Julieta21.jpeg',
      '/pj/Julieta/Julieta22.jpeg',
      '/pj/Julieta/Julieta23.jpeg',
      '/pj/Julieta/Julieta24.jpeg',
      '/pj/Julieta/Julieta25.jpeg',
      '/pj/Julieta/Julieta26.jpeg',
      '/pj/Julieta/Julieta27.jpeg',
      '/pj/Julieta/Julieta28.jpeg',
      '/pj/Julieta/Julieta29.jpeg',
      '/pj/Julieta/Julieta30.jpeg',
    ],
    title: 'Semi ángel',
    universe: 'Un Amanecer Tranquilo',
    desc: 
    `
           Ella creció rodeada de lujos, fama, poder y apellidos capaces de mover países enteros con su voz. Pero jamás conoció lo que era un verdadero hogar.\n\n
           
           Vivió dentro de la prestigiosa familia Vanille, un linaje noble construido sobre riquezas, influencias, pero sus padres sólo eran un matrimonio por conveniencia. Julieta desde niña entendió que, dentro de aquella mansión, el amor no existía; sólo el poder, el apellido y la obsesión enfermiza por crear un heredero perfecto.\n\n

           Su padre despreciaba a su madre y descargaba su frustración sobre ambas. Julieta creció escuchando gritos detrás de las puertas, viendo el humo de cigarro llenar los pasillos antes de cada noche de violencia, el saber y ser consciente de que el olor a tabaco era un presagio del terror.\n\n
           
           Mientras otros niños soñaban con cuentos de hadas, ella deseaba que alguien apareciera para salvar a su madre del monstruo en que se había convertido su padre.\n\n

           Pero nadie llegó.\n\n

           ¿Qué fue lo que hizo mi mamá... para merecer esto?\n\n

           Verla sufrir me hace sentirlo también.\n\n

           Con el tiempo, Julieta aprendió a vivir en silencio. A esconder el miedo. A soportar el dolor sin llorar frente a nadie. Aquella infancia rota la convirtió en una niña distante, incapaz de relacionarse con otros, aislándose del mundo mientras la rabia crecía lentamente dentro de ella.\n\n

           Tras ser abandonada en un orfanato con apenas siete años, el infierno no terminó. Al contrario, sÓlo cambió de forma... mil veces más fuerte.

           Julieta pasaba los días encogida en un rincón, lejos de los demás niños. Fue entonces cuando empezaron a llevarla con un médico que supuestamente debía ayudarla. Era también psicólogo. Durante años, ese hombre abusó sexualmente de ella una y otra vez, mientras fingía ser su protector y su salvador a ojos de todos, la gente pensaba que tenían una sana y cercana relación al pasar tanto tiempo juntos... y totalmente solos.\n\n

           El abuso constante la fue rompiendo por dentro. Y naturalmente, se volvió agresiva, desconfiada, explosiva. Peleaba con cualquiera que se le acercara. Su comportamiento era tan inestable con el resto de niños que las autoridades del orfanato decidieron trasladarla. Fue en ese momento cuando el médico se ofreció a adoptarla. Todos lo vieron como un acto de bondad, un hombre de buen corazón, el héroe de la pequeña Julieta.\n\n
           
           El trámite avanzó sin oposición operativa por parte de los empleados.\n\n

           Completamente atrapada en sus manos, totalmente a su merced...\n\n

           Si no hubiera sido porque Melissa, una mujer que sin saber nada de lo que ocurría, luchó con uñas y dientes para adoptarla. A pesar de que el médico ya tenía los papeles casi listos, Melissa no se rindió. Insistió, peleó y finalmente se la llevó.

           Cuando Melissa descubrió lo que le habían hecho, intentó denunciarlo. Cosa que no sirvió de nada ya que no había pruebas suficientes. Y el médico se fue libre.\n\n
           
           Pero por su parte, Julieta y Melissa terminaron mudándose a Francia.\n\n

           Allí, por primera vez en su vida, aunque las heridas seguían ahí, Julieta tuvo una madre que la trataba con cariño, lejos de los mounstros que la atormentaron todo el tiempo que llevaba viva. Y Melissa le enseñó cosas tan simples y tan grandes como qué es la Luna y qué es el Sol. Le dio una rutina, una casa, una vida que se parecía a lo que cualquier niña debería tener. Y más importante... le dio una vida normal, una identidad.\n\n

           Sin embargo, el destino jamás dejó de perseguirla.\n\n

           Julieta era en realidad una semiángel creada como parte de un proyecto obsesionado con construir una raza superior dentro del linaje Vanille. A pesar de haber sido menospreciada y utilizada toda su vida, terminó arrebatándole el control absoluto a la misma familia que la destruyó.\n\n

           Pero el verdadero amor de su vida no fue el poder.\n\n

           Fue su hija.\n\n

           Una niña nacida de una aventura fugaz cuyo padre desapareció de su historia antes incluso de comenzar. Dado que no fue nada más allá de una aventura.\n\n
           
           Pero Julieta amó con todas sus fuerzas a esa pequeña con una intensidad desesperada, como si toda la ternura que jamás recibió hubiera despertado únicamente para entregársela a ella. Su hija se convirtió en su refugio, su hogar y la única razón por la que todavía soportaba seguir viviendo.\n\n

           Y aun así, había una fuerte incertidumbre que todas las noches carcomía la mente de Julieta... pues estaba destinada a perderla.\n\n

           Porque Julieta era inmortal... y su hija no.\n\n

           Así que como era de esperar, el paso del tiempo terminó arrebatándole lo único que había amado de verdad, desde que perdió a Melissa, dejándola condenada a una eternidad de soledad, junto a una tortura; un torrente de recuerdos.\n\n
           
           Desde entonces, Julieta vive aferrándose a fotografías, objetos y pequeños rastros de aquella niña. Con algunas adicciones a estupefacientes y cigarros, intentando llenar el vacío imposible que quedó dentro de su corazón con el pasar de los años.\n\n

           Y de todo lo que tuvo que sobrevivir, lo que más le dolió, fue perder lo mejor de estar viva.
    `,
    tags: ['Soledad', 'Maltratos', 'Perdida'],
  },

    {
    name: 'Odel',
    images: [
      '/pj/Odel/Odel.jpeg',
      '/pj/Odel/Odel1.jpeg',
      '/pj/Odel/Odel2.jpeg',
    ],
    title: 'La herrera de los ojos arcoíris',
    universe: 'OC Kimetsu no Yaiba',
    desc: `
      Herrera... soy... una... herrera.\n\n

      “Demonio...\n\n

       Yo sólo era una niña.
       Era demasiado pequeña como para entender por qué me hicieron esto...
       por qué me convirtieron en un monstruo.\n\n

       Cuando lo único que quería...
       era que alguien me amara.” Dijo entre lágrimas.\n\n

      Odel es una mujer mestiza de ascendencia japonesa e inglesa cuya existencia estuvo marcada por el dolor desde la infancia. Su pasado es tan traumático que muchos de sus recuerdos desaparecieron por completo, como si su mente hubiera decidido enterrarlos para permitirle seguir viviendo. Aun así, las heridas jamás abandonaron su cuerpo.\n\n

      Antes de convertirse en herrera, Odel sobrevivía asesinando personas. Desde muy pequeña sufrió abusos constantes, hambre, humillaciones y violencia física. Vivía en condiciones miserables, extremadamente desnutrida, cubierta de suciedad por el carbón y las chimeneas que limpiaba. Su aspecto físico provocaba rechazo en muchas personas; sus rasgos extranjeros, producto del mestizaje entre un japonés y una inglesa, hacían que otros la vieran como alguien desagradable o monstruosa.\n\n

      A pesar de ello, Odel siempre fue una persona dulce, calmada y paciente.\n\n

      Su padre había sido un experimento fallido creado por científicos japoneses que buscaban desarrollar soldados capaces de soportar cualquier amenaza en una futura guerra. Tras escapar hacia Inglaterra, terminó fusionando su ADN modificado con el de la madre de Odel, dando origen a un fenómeno biológico inesperado. Odel nació con una fuerza física monstruosa, comparable a la de Gyomei Himejima, además de sus característicos ojos arcoíris que fueron producto de su tan extraña genética.\n\n

      Sin embargo, aquella fuerza jamás la protegió del sufrimiento humano.\n\n

      Fue manipulada con facilidad durante gran parte de su vida debido a su carácter sumiso y su poco sentido común. Varias personas se aprovecharon de ella y terminaron castigándola brutalmente después de que asesinara a quienes le hicieron daño. Le quemaron la mano izquierda entre varias personas y, durante una muy fría noche; recibió cincuenta latigazos que dejaron cicatrices permanentes sobre su espalda. Estuvo sola en el invierno\n\n

      Con el tiempo, el Patrón logró ocultarla dentro de la Villa de los Herreros, haciendo que oficialmente “muriera” para quienes todavía la buscaban como criminal. Allí comenzó una nueva vida trabajando como herrera desde hacía dos años. Odel no fabrica katanas; únicamente se dedica a producir acero cada vez más puro y resistente, mismo que sí mejora la calidad de las katanas. En sus días libres, le gusta mucho fabricar carbón para otros herreros y también ayuda en las aguas termales de la villa.\n\n

      Además, posee una peligrosa alergia a las glicinas. Un simple roce con esa flor puede provocarle inflamación severa, ampollas, desmayos o incluso poner en riesgo su vida. Durante una fuerte fiebre fue trasladada a la Finca Mariposa, donde la exposición prolongada a la esencia de glicina terminó dejándola en coma durante varias semanas sin que Shinobu Kocho comprendiera inicialmente la gravedad de aquella reacción.\n\n

      Detesta usar la máscara de herrero porque le hace sudar demasiado, pero sabe que jamás debe quitársela fuera de la villa, y ella obedece para no ser regañada, además que es importante llevarla puesta.\n\n

      En las noches, Kokushibo la observa obsesivamente desde la distancia, por lo que debe usar la máscara para protegerse.\n\n

      Aunque normalmente no es una cazadora, porta un sansetsukon de acero plateado extremadamente resistente, pues pese a su acero pulido color plata, nunca se ha roto, pero puede notarse algunos rasguños por el alto uso; lo carga consigo al salir. Es la única arma que domina a la perfección. Fue un regalo y enseñanza de un ex monje Shaolin que migró a Japón y la acogió durante un tiempo, intentando aliviar el dolor que cargaba dentro de sí. Ese sansetsukon es la única pertenencia que considera verdaderamente valiosa, porque representa a la única persona que llegó a tratarla como familia.\n\n

      Odel no utiliza respiraciones ni técnicas especiales. Aun así, es aterradoramente fuerte.\n\n

      Durante el ataque a la Villa de los Herreros, pasó casi tres días sin dormir antes de quedarse dormida accidentalmente en una pequeña casa. Cuando despertó y descubrió que varios herreros habían sido heridos por demonios, los llevó hasta una zona segura rodeada de árboles de glicina y una casa de refugio. Después de interrogar a los enemigos; partió sola hacia la villa, la cual ya no era segura.\n\n

      La batalla se prolongó hasta el amanecer.\n\n

      Debido a que su sansetsukon no estaba hecho con minerales Nichirin, no podía destruir definitivamente a los demonios como una katana de cazador. Aun así, Odel logró decapitarlos y destrozar sus cuerpos repetidas veces hasta que la luz del Sol terminó por eliminarlos. Ese día, ella estuvo cerca de morir.\n\n

      A pesar de toda la violencia que existe dentro de ella, Odel continúa buscando algo parecido a una vida normal. Llegó a enamorarse profundamente de un hombre que la salvó del maltrato y le mostró una bondad que jamás había conocido. Aquella relación se convirtió en el centro de su vida, desarrollando un apego intenso hacia él. Ella no recordaba, pero de pequeña vio al mismo hombre que tanto amó, y aunque para entonces no lo conocía, fue en la época de esa tormenta de dolor, mismos traumas que la hicieron olvidarse. \n\n
      
      Pero cuando por fin podía amar y ser amada, le fue inevitable desarrollar una fuerte dependencia emocional... O al menos, eso fue hasta que su amado murió. Y tras su muerte, Odel cayó en una profunda depresión de la que nunca logró recuperarse por completo.\n\n

      Incluso después de todo, sigue intentando encontrar un propósito para continuar viviendo.\n\n

      Pero dentro de Odel existe otra parte mucho más peligrosa: una personalidad dominada completamente por la ira, capaz de consumirla hasta hacerla perderse a sí misma mientras sólo piensa en matar y destruir todo a su alrededor.\n\n

      Y aun así, Odel continúa trabajando el acero con esfuerzo, como si intentara reparar su propia vida golpe a golpe.\n\n

      “Sé que mi rostro es feo, pero no es para que pongas esa cara de horror.”
      `,
    tags: ['Amor', 'Ira', 'Fortaleza'],
  },

  {
    name: 'Holly',
    images: [
      '/pj/Holly/Holly.jpeg',
      '/pj/Holly/Holly1.jpeg',
      '/pj/Holly/Holly2.jpeg',

    ],
    title: 'La esclava que quiso ver el cielo',
    universe: 'Un Amanecer Tranquilo',
    desc:`
       Holly nació en un reino donde las personas dejaron de ser vistas como seres humanos hace mucho tiempo. Allí, la vida sólo tenía un propósito: servir al rey, reproducirse y crear guerreros capaces de expandir un imperio construido sobre sangre, miedo y obediencia absoluta. Amar, soñar o desear libertad eran lujos prohibidos para quienes nacían esclavos.\n\n

       Holly creció rodeada de cadenas invisibles. Aprendió a bajar la mirada, a callar y a sobrevivir. Pero mientras todos aceptaban aquel mundo cruel como algo natural, ella comenzó a cuestionarlo en el silencio. No entendía por qué la gente debía vivir aterrada. No entendía por qué desear seguir con vida era considerado un pecado.\n\n

       “Me pregunto qué es ser feliz...
       To  tengo miedo a muchas cosas.
       Yo no quiero morir.”\n\n

       A diferencia de otros, Holly todavía conservaba algo que el reino no había conseguido destruir por completo: humanidad.\n\n

       Y su destino terminó cruzándose con el de Aurora, una mujer que en contraste a Holly, estaba enamorada del mismo rey que condenaba a su pueblo al sufrimiento. Pero Aurora luchaba con temas de traición mientras Holly observaba cómo el reino se hundía cada vez más en la violencia y la desesperación.\n\n
       
       Así que juntas comenzaron a conspirar para acabar con el reinado del hombre que era visto como un dios cruel entre sus esclavos.\n\n

       Pero sus planes fueron descubiertos.\n\n

       Y ante la penumbra, Aurora eligió quedarse atrás, enfrentando el destino que la esperaba en manos del rey al que alguna vez amó. Holly, en cambio, fue obligada a escapar sola.\n\n

       Desde entonces, vive huyendo con la culpa clavada en el pecho, cargando el recuerdo de quienes murieron soñando con libertad. Y aun así, continúa avanzando. Porque en el fondo de su corazón sigue existiendo un deseo pequeño, casi infantil, que nunca desapareció:\n\n

       Ver el cielo con sus propios ojos y descubrir si realmente existe un lugar donde las personas puedan vivir sin miedo. 
    
     `,
    tags: ['Sometimiento', 'Esclavitud', 'Esperanza'],
  },

  {
    name: 'Aurora',
    images: [
      '/pj/Aurora/Aurora.jpeg',
      '/pj/Aurora/Aurora1.jpeg',
      '/pj/Aurora/Aurora2.jpeg',
    ],
    title: 'Amante del Rey',
    universe: 'Un Amanecer Tranquilo',
    desc: `
          Aurora nació en un reino donde el miedo era más poderoso que la esperanza. Desde pequeña aprendió que los habitantes no eran vistos como personas, sino como herramientas destinadas a servir al rey: esclavos cuya única función era obedecer a raja tabla, limitarse a alimentar la ambición de un imperio construido sobre sufrimiento.\n\n

          Y aun así... Aurora se enamoró del hombre que gobernaba aquel infierno.\n\n

          Del rey cruel que no conocía la compasión. Del hombre incapaz de amar, incapaz de entender la bondad o la misericordia. Donde todos veían poder y tiranía, ella vio belleza.\n\n
          
          Admiró y amó incluso sabiendo que sus manos estaban manchadas con la sangre de su propio pueblo. Tal vez porque, en algún rincón de su corazón, todavía deseaba creer que incluso un monstruo podía cambiar.\n\n

          Pero amar a alguien así significaba destruirse lentamente.\n\n

          Aurora vivió atrapada entre dos dolores imposibles: el amor que sentía por el rey y el sufrimiento de las personas que veía morir cada día bajo su mandato. Mientras el reino se hundía en la desesperación, comenzó a comprender que seguir callando la convertía en cómplice de aquella crueldad.\n\n

          Fue entonces cuando coincidió con Holly y decidió traicionar al amor de su vida.\n\n

          Junto a Holly conspiró en secreto para poner fin al reinado que había convertido a los seres humanos en ganado. No buscaba poder, ni venganza. Sólo quería liberar a su pueblo.\n\n

          Pero fue en vano, el rey descubrió la fuerte conspiración.\n\n

          Ante la causa, sólo Holly logró escapar. Pero Aurora no.\n\n

          Feliz por su amiga, y dispuesta a confrontar las ordenes del temido rey.\n\n

          Aurora nunca fue una heroína perfecta. Fue una mujer aterrada, rota y profundamente enamorada. Pero incluso en medio de ese vórtice, encontró el valor suficiente para enfrentarse al monstruo que gobernaba su mundo y sus semejantes.
    `,
    tags: ['Tragedia', 'Amor', 'Sacrificio'],
  },

    {
    name: 'Serena',
    images: [
      '/pj/Serena/Serena.jpeg',
      '/pj/Serena/Serena1.jpeg',
      '/pj/Serena/Serena2.jpeg',
    ],
    title: '¿Bruja... o reina?',
    universe: 'Un Amanecer Tranquilo',
    desc: 
    `
      Serena es recordada por muchos como la mujer más despiadada de su era. En los pueblos susurran que alcanzó el trono mediante magia negra, engaños y hechizos prohibidos. Otros aseguran que enamoró a un hombre imposible de matar; un ser jorobado y monstruoso que destruiría el mundo entero con tal de verla sonreír. Pero para la mayoría, Serena no es más que una villana vestida de reina.\n\n

      Y aun así, casi todo lo que cuentan sobre ella está distorsionado por el miedo.\n\n

      Serena nació como princesa legítima del imperio, pero desde joven se negó a vivir bajo las reglas impuestas por un sistema que reducía a las mujeres a figuras obedientes dentro de la corte. Mientras otros esperaban que aceptara el silencio y la sumisión, ella decidió abrirse camino por sí misma, incluso si para hacerlo debía adentrarse en conocimientos prohibidos y utilizar magia oscura.\n\n

      Eso fue suficiente para convertirla en un monstruo ante los ojos del reino, pese a que públicamente no sean más que conjeturas.\n\n

      Con el paso de los años, su nombre terminó asociado a desgracias, conspiraciones y muerte. La llamaban “bruja” no sólo por sus poderes, sino porque Serena jamás actuó como la clase de mujer que el imperio deseaba controlar. Era demasiado inteligente, demasiado decidida y demasiado peligrosa para quienes querían mantener el poder.\n\n

      Sin embargo, detrás de la imagen cruel que todos construyeron sobre ella, Serena sólo busca una cosa: la prosperidad eterna de su reino.\n\n

      Cada decisión que toma, incluso las más cuestionables, nace de su obsesión por proteger aquello que ama. Aunque eso signifique cargar sola con el odio de miles de personas.\n\n

      Y a su lado permanece un hombre considerado un monstruo por el mundo. Un ser del que dicen que ni siquiera la muerte puede reclamar. Y aun así, frente a Serena, él sólo parece alguien dispuesto a destruir cualquier cosa que amenace su felicidad, pues Serena es su serenidad.\n\n

      Porque si el mundo decidió convertirla en una bruja... entonces Serena aprendió a reinar como una.
    
    `,
    tags: ['Estigma', 'Determinación', 'Ambición'],
  },

    {
    name: 'Emilia',
    images: [
      '/pj/Emilia/Emilia.jpeg',
      '/pj/Emilia/Emilia1.jpeg',
      '/pj/Emilia/Emilia2.jpeg',
      '/pj/Emilia/Emilia3.jpeg',
      '/pj/Emilia/Emilia4.jpeg',
    ],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

  {
    name: 'Olivia Hazbin Hotel',
    images: [
      '/pj/OliviaHH/OliviaHH.jpeg',
      '/pj/OliviaHH/OliviaHH1.jpeg',
      '/pj/OliviaHH/OliviaHH3.jpeg',
      '/pj/OliviaHH/OliviaHH2.jpeg',
      '/pj/OliviaHH/OliviaHH3.jpeg',
      '/pj/OliviaHH/OliviaHH4.jpeg',
      '/pj/OliviaHH/OliviaHH5.jpeg',
      '/pj/OliviaHH/OliviaHH6.jpeg',
      '/pj/OliviaHH/OliviaHH7.jpeg',
      '/pj/OliviaHH/OliviaHH8.jpeg',
      '/pj/OliviaHH/OliviaHH9.jpeg',
      '/pj/OliviaHH/OliviaHH10.jpeg',
      '/pj/OliviaHH/OliviaHH11.jpeg',
      '/pj/OliviaHH/OliviaHH12.jpeg',
      '/pj/OliviaHH/OliviaHH13.jpeg',
      '/pj/OliviaHH/OliviaHH14.jpeg',
    ],
    title: 'Titulo',
    universe: 'OC Hazbin Hotel',
    desc: 'Personaje diseñado con una dirección artística enfocada en elegancia, fantasía y narrativa emocional. Cada detalle visual busca transmitir identidad propia y una presencia cinematográfica.',
    tags: ['Fantasia', 'Semi Realista', 'Cinemático'],
  },

      {
    name: 'Lilith Hazbin Hotel',
    images: [
      '/pj/LilithHH/LilithHH.jpeg',
      '/pj/LilithHH/LilithHH.jpeg',
    ],
    title: 'Titulo',
    universe: 'OC Hazbin Hotel',
    desc: 'Personaje diseñado con una dirección artística enfocada en elegancia, fantasía y narrativa emocional. Cada detalle visual busca transmitir identidad propia y una presencia cinematográfica.',
    tags: ['Fantasia', 'Semi Realista', 'Cinemático'],
  },

    {
    name: 'Heal',
    images: [
      '/pj/Heal/Heal.jpeg',
      '/pj/Heal/Heal1.jpeg',
      '/pj/Heal/Heal2.jpeg',
      '/pj/Heal/Heal3.jpeg',
      '/pj/Heal/Heal4.jpeg',
      '/pj/Heal/Heal5.jpeg',
      '/pj/Heal/Heal6.jpeg',

    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

    {
    name: 'Ann',
    images: ['/pj/Ann/Ann.jpeg'],
    title: 'Titulo',
    universe: 'Original',
    desc: 'Pieza inspirada en naturaleza, fantasía orgánica y composición visual relajante.',
    tags: ['Nature', 'Fantasy', 'Relaxing'],
  },

    {
    name: 'Delier modo Diabla',
    images: [
      '/pj/EvilDelier/EvilDelier.jpeg',
      '/pj/EvilDelier/EvilDelier1.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Diseño conceptual construido con iluminación ambiental, composición dinámica y una estética enfocada en misterio y profundidad visual.',
    tags: ['Magic', 'Concept Art', 'Dark'],
  },

      {
    name: 'Silvia',
    images: [
      '/pj/Silvia/Silvia.jpeg',
      '/pj/Silvia/Silvia1.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

      {
    name: 'Oscar',
    images: [
      '/pj/Oscar/Oscar.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

    {
    name: 'Lasley',
    images: [
      '/pj/Lasley/Lasley.jpeg',
      '/pj/Lasley/Lasley1.jpeg',
      '/pj/Lasley/Lasley2.jpeg',
      '/pj/Lasley/Lasley3.jpeg',
      '/pj/Lasley/Lasley4.jpeg',
      '/pj/Lasley/Lasley5.jpeg',
      '/pj/Lasley/Lasley6.jpeg',
      '/pj/Lasley/Lasley7.jpeg',
      '/pj/Lasley/Lasley8.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

        {
    name: 'Margot y Steban',
    images: [
      '/pj/MargotSteban/MargotSteban.jpeg',
      '/pj/MargotSteban/MargotSteban1.jpeg',
      '/pj/MargotSteban/MargotSteban2.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

    {
    name: 'Elix',
    images: [
      '/pj/Elix/Elix.jpeg',
      '/pj/Elix/Elix1.jpeg',
      '/pj/Elix/Elix2.jpeg',
      '/pj/Elix/Elix3.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Concepto visual con una dirección artística más intensa, contrastes marcados y energía narrativa dominante.',
    tags: ['Dark', 'King', 'Epic'],
  },

    {
    name: 'Izz',
    images: [
      '/fallback.png',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Personaje diseñado con una dirección artística enfocada en elegancia, fantasía y narrativa emocional. Cada detalle visual busca transmitir identidad propia y una presencia cinematográfica.',
    tags: ['Fantasia', 'Semi Realista', 'Cinemático'],
  },

    {
    name: 'Hortensia',
    images: [
      '/fallback.png',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Personaje diseñado con una dirección artística enfocada en elegancia, fantasía y narrativa emocional. Cada detalle visual busca transmitir identidad propia y una presencia cinematográfica.',
    tags: ['Fantasia', 'Semi Realista', 'Cinemático'],
  },

    {
    name: 'Azz',
    images: [
      '/fallback.png',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Personaje diseñado con una dirección artística enfocada en elegancia, fantasía y narrativa emocional. Cada detalle visual busca transmitir identidad propia y una presencia cinematográfica.',
    tags: ['Fantasia', 'Semi Realista', 'Cinemático'],
  },

  {
    name: 'Ernalin',
    images: [
      '/pj/Ernalin/Ernalin.jpeg',
      '/pj/Ernalin/Ernalin1.jpeg',
      '/pj/Ernalin/Ernalin2.jpeg',
      '/pj/Ernalin/Ernalin3.jpeg',
    ],
    title: 'Titulo',
    universe: 'Un Amanecer Tranquilo',
    desc: 'Pieza inspirada en naturaleza, fantasía orgánica y composición visual relajante.',
    tags: ['Nature', 'Fantasy', 'Relaxing'],
  },
]

/* =========================================================
   🩸 HELPERS
========================================================= */

function normalizeImage(path?: string) {
  if (!path) return FALLBACK_IMAGE

  const clean = path.trim()

  if (clean === '') return FALLBACK_IMAGE

  return clean
}

function safeImage(path?: string) {
  return normalizeImage(path)
}

function imageExists(path?: string) {
  if (!path) return false

  if (path.trim() === '') return false

  return true
}

/* =========================================================
   🩸 COMPONENT
========================================================= */

function Personajes() {
  const [selected, setSelected] = useState<Character | null>(null)

  const [selectedIndex, setSelectedIndex] = useState(0)

  const [mobileView, setMobileView] = useState(false)

  const [imageLoaded, setImageLoaded] = useState(true)

  const [isFullscreen, setIsFullscreen] = useState(false)

  const [showFullscreenHint, setShowFullscreenHint] = useState(false);

  const modalRef = useRef<HTMLDivElement | null>(null)

  // Mensaje temporal al entrar en fullscreen
useEffect(() => {
  if (isFullscreen) {
    setShowFullscreenHint(true);
    const timer = setTimeout(() => {
      setShowFullscreenHint(false);
    }, 1200);
    return () => clearTimeout(timer);
  }
}, [isFullscreen]);

  /* =========================================================
     🩸 MOBILE DETECT
  ========================================================= */

  useEffect(() => {
    const checkMobile = () => {
      setMobileView(window.innerWidth < 768)
    }

    checkMobile()

    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  /* =========================================================
     🩸 LOCK BODY
  ========================================================= */

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])


  useEffect(() => {
  characters.forEach((char) => {
    char.images.slice(0, 4).forEach((img) => {  // Solo las primeras 4
      const preload = new Image();
      preload.src = safeImage(img);
    });
  });
}, []);

  /* =========================================================
     🩸 ESC CLOSE
  ========================================================= */

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelected(null)
      }

      if (e.key === 'ArrowRight') {
        nextImage()
      }

      if (e.key === 'ArrowLeft') {
        prevImage()
      }
    }

    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  })

  /* =========================================================
     🩸 CURRENT IMAGE
  ========================================================= */

  const currentImage = useMemo(() => {
    if (!selected) return FALLBACK_IMAGE

    const current = selected.images[selectedIndex]

    return safeImage(current)
  }, [selected, selectedIndex])

  /* =========================================================
     🩸 NEXT IMAGE
  ========================================================= */

  const nextImage = useCallback(() => {
    if (!selected) return

    setImageLoaded(false)

    setSelectedIndex((prev) => {
      const next = prev + 1

      if (next >= selected.images.length) {
        return 0
      }

      return next
    })
  }, [selected])

  /* =========================================================
     🩸 PREV IMAGE
  ========================================================= */

  const prevImage = useCallback(() => {
    if (!selected) return

    setImageLoaded(false)

    setSelectedIndex((prev) => {
      const next = prev - 1

      if (next < 0) {
        return selected.images.length - 1
      }

      return next
    })
  }, [selected])

  /* =========================================================
     🩸 OPEN
  ========================================================= */

  const openCharacter = (char: Character) => {
    setSelected(char)

    setSelectedIndex(0)

    setImageLoaded(false)
  }

  /* =========================================================
     🩸 CLOSE
  ========================================================= */

  const closeModal = () => {
    setSelected(null)
  }

  /* =========================================================
     🩸 IMAGE ERROR
  ========================================================= */

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    const target = e.currentTarget

    if (target.src.includes(FALLBACK_IMAGE)) {
      return
    }

    target.src = FALLBACK_IMAGE
  }

  /* =========================================================
     🩸 IMAGE LOAD
  ========================================================= */

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  /* =========================================================
     🩸 CLICK OUTSIDE
  ========================================================= */

  const handleOverlayClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

/* ===================== FULLSCREEN ===================== */
const toggleFullscreen = () => {
  const wrapper = document.getElementById('image-fullscreen-wrapper');
  if (!wrapper) return;

  if (!document.fullscreenElement) {
    try {
      if (wrapper.requestFullscreen) {
        wrapper.requestFullscreen();
      } else if ((wrapper as any).webkitRequestFullscreen) {
        (wrapper as any).webkitRequestFullscreen();
      } else if ((wrapper as any).msRequestFullscreen) {
        (wrapper as any).msRequestFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen API no disponible, intentando fallback...", err);
      // Fallback simple para móviles
      wrapper.style.position = 'fixed';
      wrapper.style.top = '0';
      wrapper.style.left = '0';
      wrapper.style.width = '100vw';
      wrapper.style.height = '100vh';
      wrapper.style.zIndex = '300';
      wrapper.style.borderRadius = '0';
      setIsFullscreen(true);
    }
  } else {
    if (document.exitFullscreen) document.exitFullscreen();
    else if ((document as any).webkitExitFullscreen) (document as any).webkitExitFullscreen();
    else if ((document as any).msExitFullscreen) (document as any).msExitFullscreen();
  }
};

// Detectar cambios de fullscreen
useEffect(() => {
  const handleChange = () => {
    const isFull = 
      document.fullscreenElement !== null || 
      (document as any).webkitFullscreenElement !== null;
    
    setIsFullscreen(isFull);
  };

  document.addEventListener('fullscreenchange', handleChange);
  document.addEventListener('webkitfullscreenchange', handleChange);
  document.addEventListener('MSFullscreenChange', handleChange);

  return () => {
    document.removeEventListener('fullscreenchange', handleChange);
    document.removeEventListener('webkitfullscreenchange', handleChange);
    document.removeEventListener('MSFullscreenChange', handleChange);
  };
}, []);
  
  /* =========================================================
     🩸 PRELOAD
  ========================================================= */

  useEffect(() => {
    characters.forEach((char) => {
      char.images.forEach((img) => {
        const preload = new Image()

        preload.src = safeImage(img)
      })
    })
  }, [])

  /* =========================================================
     🩸 RENDER
  ========================================================= */

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070403] text-[#f5f0e6]">
      {/* =========================================================
          🩸 BACKGROUND
      ========================================================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            hidden md:block
            absolute inset-0
            bg-cover bg-center bg-no-repeat
            scale-105
          "
          style={{
            backgroundImage: `url('${FALLBACK_HERO}')`,
            backgroundPosition: 'center 30%',
          }}
        />

        <div
          className="
            md:hidden
            absolute inset-0
            bg-cover bg-no-repeat
          "
          style={{
            backgroundImage: `url('${FALLBACK_HERO}')`,
            backgroundPosition: 'center top',
          }}
        />

        <div
          className="
            absolute inset-0
            scale-125
            blur-3xl
            opacity-30
            bg-cover bg-center
          "
          style={{
            backgroundImage: `url('${FALLBACK_HERO}')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#070403]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_60%)]" />
      </div>

      {/* =========================================================
          🩸 HERO
      ========================================================= */}

      <section className="relative px-6 pt-36 md:pt-44 pb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-3xl 
                border border-[#d4af88]/30 bg-white/5 backdrop-blur-2xl 
                mb-10 shadow-inner">

<div className="relative">
  <Sparkles size={20} className="text-[#d4af88]" />
  <div className="
    absolute inset-0 
    bg-[#d4af88] blur-md opacity-30 rounded-full
    w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
  " />
</div>

              <span className="text-xs uppercase tracking-[0.28em] text-[#e8d5b8]/60">
                Colección de Personajes
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-gold leading-none mb-8">
              Personajes
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-[#e8d5b8]/85 max-w-4xl">
              Una colección de personajes originales construidos con narrativa visual,
              identidad propia y una dirección artística enfocada en fantasía,
              emoción y composición cinematográfica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          🩸 FEATURED INFO
      ========================================================= */}

      <section className="relative px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Crown size={24} />,
                title: 'Diseño Narrativo',
                desc: 'Cada personaje posee una estética construida para transmitir historia, personalidad y emoción visual.',
              },

              {
                icon: <Sword size={24} />,
                title: 'Concept Art Original',
                desc: 'Diseños pensados para videojuegos, novelas visuales, animación, branding y universos propios.',
              },

              {
                icon: <Stars size={24} />,
                title: 'Composición',
                desc: 'Iluminación, color y composición inspirados en producciones visuales modernas y fantasía épica.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                viewport={{ once: true }}
                className="
                  group relative overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  p-8
                "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.15),transparent_70%)]" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#d4af88]/10 border border-[#d4af88]/20 flex items-center justify-center text-gold mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-gold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-[#e8d5b8]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          🩸 GRID
      ========================================================= */}

      <section className="relative px-4 sm:px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
<div className="flex flex-col gap-3">

  {/* Subtítulo Cinemático */}
  <div className="inline-flex items-center gap-4">
    <span className="uppercase tracking-[0.225em] text-sm text-[#e8d5b8]/50 font-light">
      ✨ PORTAFOLIO VISUAL
    </span>
    
    <div className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-[#d4af88]/60 to-transparent" />
    
    <span className="text-[#d4af88]/40 text-2xl leading-none">⟡</span>
  </div>

  {/* Título Principal - Neo Cinematic Luxe */}
  <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f1d2a9] leading-none tracking-[-0.04em]">
    Colección Principal
  </h2>

{/* Barra decorativa futurista con emoji */}
<div className="relative flex items-center gap-4 w-56 sm:w-72 mt-2">
  
  {/* Línea gradient */}
  <div className="relative flex-1 h-px bg-gradient-to-r from-transparent via-[#d4af88] via-50% to-transparent">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f1d2a9] to-transparent blur-sm opacity-75" />
  </div>

  {/* Emoji al final */}
  <span className="uppercase tracking-[0.225em] text-sm text-[#e8d5b8]/50 font-light">
    🥀
  </span>

</div>
</div>
</div>

{/* EXPLORAR INDICATOR - Cyber Cinematic */}
<div className="hidden md:flex items-center gap-4 group">
  <span className="uppercase text-xs tracking-[0.3em] text-[#e8d5b8]/60 font-mono">
    ✨ SCROLL TO EXPLORE
  </span>
  
  <div className="flex items-center">
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af88]/70" />
    <ChevronRight 
      size={22} 
      className="text-[#d4af88] transition-transform duration-500 group-hover:translate-x-2" 
    />
  </div>
</div>
          </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            {characters.map((char, i) => (
                <motion.div
                key={i}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                <div
                  onClick={() => openCharacter(char)}
                  className="
                    relative overflow-hidden
                    rounded-[2rem]
                    border border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    cursor-pointer
                  "
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={
                        imageExists(char.images[0])
                          ? safeImage(char.images[0])
                          : FALLBACK_IMAGE
                      }
                      alt={char.name}
                      loading="lazy"
                      decoding="async"
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                      className="
                        w-full h-full object-cover
                        transition duration-700
                        group-hover:scale-105
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(circle_at_center,rgba(212,175,136,0.18),transparent_70%)]" />

                    <button
                      className="
                        absolute top-5 right-5
                        w-12 h-12
                        rounded-2xl
                        bg-black/40
                        border border-white/10
                        backdrop-blur-xl
                        flex items-center justify-center
                        text-white
                        transition duration-300
                        hover:scale-110
                        hover:bg-[#d4af88]
                        hover:text-black
                      "
                    >
                      <Expand size={18} />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="text-sm uppercase tracking-[0.2em] text-[#e8d5b8]/55">
                        {char.universe}
                      </span>

                      <h3 className="text-3xl font-serif text-[#f5e1c5] mt-2 mb-2">
                        {char.name}
                      </h3>

                      <p className="text-[#e8d5b8]/70 mb-4">
                        {char.title}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {char.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="
                              px-3 py-1 rounded-full
                              bg-white/5
                              border border-white/10
                              text-xs uppercase tracking-[0.15em]
                              text-[#e8d5b8]/70
                            "
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* =========================================================
    🩸 MODAL - FULL HEIGHT + FULLSCREEN ARROWS
========================================================= */}
<AnimatePresence mode="wait">
  {selected && (
    <motion.div
      key={selected.name}
      ref={modalRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-2 sm:p-4 overflow-hidden"
    >


      {/* CLOSE BUTTON */}
      <button
        onClick={closeModal}
        className="
          absolute top-4 right-4 sm:top-6 sm:right-6 z-[230]
          w-11 h-11 rounded-2xl
          border border-white/10 bg-black/70 backdrop-blur-xl
          flex items-center justify-center
          text-white hover:text-[#f1d2a9]
          hover:bg-white/10 hover:border-[#d4af88]/40
          transition-all duration-300 active:scale-95
          shadow-lg
        "
        aria-label="Cerrar modal"
      >
        <X size={22} strokeWidth={2.2} />
      </button>

      {/* MAIN CARD - FULL SCREEN HEIGHT */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="
          w-full h-[100dvh] max-w-[1350px]
          bg-[#0a0603]/95 border border-[#d4af88]/20
          rounded-3xl overflow-hidden
          shadow-[0_0_140px_-20px_rgba(212,175,136,0.6)]
        "
      >
        <div className="grid lg:grid-cols-5 h-full gap-0">

          {/* ===================== LEFT: IMAGE AREA ===================== */}
          <div className="lg:col-span-3 relative bg-black flex items-center justify-center overflow-hidden h-full">

            {/* Glow background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,136,0.15),transparent_70%)]" />

            {/* LOADING */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-30">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-4 border-[#d4af88]/20 border-t-[#d4af88] animate-spin" />
                  <p className="text-[#e8d5b8]/70 text-sm tracking-widest">CARGANDO...</p>
                </div>
              </div>
            )}

{/* IMAGE FULLSCREEN WRAPPER */}
<div 
  id="image-fullscreen-wrapper"
  className="relative w-full h-full flex items-center justify-center"
>
  <motion.img
    id="modal-character-image"
    src={currentImage}
    alt={selected.name}
    loading="eager"
    decoding="async"
    onLoad={handleImageLoad}
    onError={handleImageError}
    onDoubleClick={toggleFullscreen}
    className="w-full h-full object-contain transition-all duration-700 hover:scale-[1.015]"
  />

  {/* Cinematic vignette */}
  <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-black/70" />

  {/* NAVIGATION ARROWS - Actualizados para fullscreen */}
  {selected.images.length > 1 && (
    <>
      <button
        onClick={prevImage}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-[250] pointer-events-auto
          w-14 h-14 rounded-3xl bg-black/75 border border-white/20
          backdrop-blur-2xl flex items-center justify-center
          text-white hover:bg-white/10 hover:border-[#d4af88]/70
          transition-all active:scale-95 shadow-2xl"
      >
        <ChevronLeft size={38} strokeWidth={2.4} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[250] pointer-events-auto
          w-14 h-14 rounded-3xl bg-black/75 border border-white/20
          backdrop-blur-2xl flex items-center justify-center
          text-white hover:bg-white/10 hover:border-[#d4af88]/70
          transition-all active:scale-95 shadow-2xl"
      >
        <ChevronRight size={38} strokeWidth={2.4} />
      </button>
    </>
  )}

  {/* Fullscreen Button */}
  <button
    onClick={toggleFullscreen}
    className="absolute top-6 left-6 z-[260] pointer-events-auto
      w-12 h-12 rounded-2xl bg-black/70 border border-white/20
      backdrop-blur-xl flex items-center justify-center
      text-white hover:text-[#d4af88] hover:border-[#d4af88]
      transition-all active:scale-95"
  >
    {isFullscreen ? <X size={22} /> : <Expand size={22} />}
  </button>

              {/* Counter */}
              {selected.images.length > 1 && (
                <div className="absolute top-6 right-6 z-[220] pointer-events-auto px-4 py-2 rounded-2xl 
                  bg-black/70 border border-white/10 text-xs tracking-[0.125em] text-[#e8d5b8]/70 font-mono top-6 image-counter">
                  {selectedIndex + 1} / {selected.images.length}
                </div>
              )}
            </div>

{/* NAVIGATION ARROWS - Compatibles con Fullscreen de la imagen */}
{selected.images.length > 1 && (
  <>
    <button
      onClick={prevImage}
      className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-[250] pointer-events-auto
        w-14 h-14 rounded-3xl bg-black/75 border border-white/20
        backdrop-blur-2xl flex items-center justify-center
        text-white hover:bg-white/10 hover:border-[#d4af88]/70
        transition-all active:scale-95 shadow-2xl"
    >
      <ChevronLeft size={38} strokeWidth={2.4} />
    </button>

    <button
      onClick={nextImage}
      className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-[250] pointer-events-auto
        w-14 h-14 rounded-3xl bg-black/75 border border-white/20
        backdrop-blur-2xl flex items-center justify-center
        text-white hover:bg-white/10 hover:border-[#d4af88]/70
        transition-all active:scale-95 shadow-2xl"
    >
      <ChevronRight size={38} strokeWidth={2.4} />
    </button>
  </>
)}

            {/* Thumbnails */}
            {selected.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[205] hidden md:flex gap-3 max-w-[460px] overflow-x-auto py-2 px-4 
                bg-black/70 backdrop-blur-2xl rounded-3xl border border-white/10 scrollbar-hide">
                {selected.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedIndex(idx); setImageLoaded(false); }}
                    className={`w-16 h-16 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all duration-200 ${idx === selectedIndex
                      ? 'border-[#d4af88] scale-110 shadow-lg'
                      : 'border-white/20 hover:border-white/50'
                    }`}
                  >
                    <img src={safeImage(img)} alt="" className="w-full h-full object-cover" onError={handleImageError} />
                  </button>
                ))}
              </div>
            )}
          </div>

{/* ===================== RIGHT: INFO - NEO-CINEMATIC LUXE ===================== */}
<div className="lg:col-span-2 p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col bg-[#0a0603] overflow-y-auto relative">

  {/* Subtle cinematic vignette + glow overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,136,0.08),transparent_60%)] pointer-events-none" />

  {/* Premium Header Badge */}
  <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-3xl border border-[#d4af88]/20 bg-white/5 backdrop-blur-2xl mb-8 self-start relative z-10">
    <div className="w-2 h-2 bg-[#d4af88] rounded-full animate-pulse shadow-[0_0_8px_#d4af88]" />
    <span className="uppercase tracking-[0.175em] text-xs font-medium text-[#e8d5b8]">
      PERSONAJE ORIGINAL
    </span>
  </div>

<div className="mb-4 text-center lg:text-left">

  <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#f1d2a9] leading-none mb-3">
      <div className="h-px w-16 bg-gradient-to-r from-[#d4af88] to-transparent mb-4" />
    {selected.name}
  </h2>

  <div className="flex items-center justify-center lg:justify-start gap-4 text-[#d4af88]/60 mb-3">
    <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#d4af88]" />
    <span className="text-xl">✧</span>
    <div className="h-px flex-1 max-w-[90px] bg-gradient-to-l from-transparent to-[#d4af88]" />
  </div>

{/* Universe & Title - Futuristic Layout */}
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
      <div className="flex items-center gap-3">
        <span className="text-[#e8d5b8]/50 uppercase tracking-[0.2em] font-mono text-xs">UNIVERSE</span>
        <span className="text-xl text-[#f5e1c5] font-light border-l border-[#d4af88]/30 pl-3">
          {selected.universe}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-[#e8d5b8]/50 uppercase tracking-[0.2em] font-mono text-xs">{selected.title}</span>

      </div>
    </div>

{/* DESCRIPTION - Drop Cap Elegante */}
<div className="relative z-10 pr-4 mb-12">
  <div className="text-[#e8d5b8]/90 leading-relaxed tracking-[0.015em] text-left">
    {selected.desc.split('\n\n').map((paragraph, index) => {
      const trimmed = paragraph.trim();
      if (!trimmed) return null;

      if (index === 0) {
        const firstChar = trimmed[0];
        const restText = trimmed.slice(1);

        return (
          <p key={index} className="mb-4 last:mb-0">
            {/* Primera letra grande */}
            <span className="font-serif text-[1.76rem] md:text-[1.8rem] leading-[1.85] mr-0.2 mt-0.1 text-left">
              {firstChar}
            </span>
            {/* Resto del texto del primer párrafo */}
            <span className="font-serif text-[17.5px] leading-[1.85] text-left">
              {restText}
            </span>
          </p>
        );
      }

      // Resto de párrafos
      return (
        <p 
          key={index} 
          className="mb-4 last:mb-0 font-serif text-[17.5px] leading-[1.85] text-left"
        >
          {trimmed}
        </p>
      );
    })}
  </div>
</div>
</div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 mb-12">
              {selected.tags.map((tag, i) => (
                <div
                  key={i}
                  className="px-5 py-2 text-xs uppercase tracking-wider border border-[#d4af88]/30 rounded-3xl text-[#e8d5b8]/80 hover:text-white hover:border-[#d4af88] transition-colors"
                >
                  {tag}
                </div>
              ))}
            </div>

            {/* Metadata */}
            <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-8 text-sm">
              <div>
                <div className="text-[#e8d5b8]/50 text-xs tracking-widest mb-1">CATEGORÍA</div>
                <div className="text-[#f5e1c5]">Dramatismo-Trágico Filosofía-Fantástica Magia-Épica</div>
              </div>
              <div>
                <div className="text-[#e8d5b8]/50 text-xs tracking-widest mb-1">ESTILO</div>
                <div className="text-[#f5e1c5]">Arte Semi-Realista </div>
              </div>
              <div>
                <div className="text-[#e8d5b8]/50 text-xs tracking-widest mb-1">AÑO</div>
                <div className="text-[#f5e1c5]">2020 — 2026</div>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-auto py-4 px-8 rounded-3xl border border-white/30 hover:bg-white/5 text-white transition-all w-full"
            >
              Cerrar
            </button>

            <p className="text-center text-[#e8d5b8]/40 text-xs tracking-widest mt-8">
              Doble clic en la imagen para pantalla completa<br />
              Flechas del teclado • Desliza en móvil
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* =========================================================
          🩸 CTA
      ========================================================= */}

      <motion.section
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="
          relative
          overflow-hidden
          rounded-[3rem]
          border border-[rgba(212,175,136,0.15)]
          bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]
          backdrop-blur-2xl
          p-10 sm:p-14 md:p-20
          text-center
        "
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,136,0.18),transparent_65%)]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold/15 bg-white/5 mb-8">
            <Sparkles size={16} className="text-gold" />

            <span className="text-xs uppercase tracking-[0.25em] text-[#e8d5b8]/55">
              Comisiones Disponibles
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-gold leading-tight mb-8">
            ¡Así trabajas conmigo,
            <span className="block text-[#f1d2a9]">
              ilustremos juntos!
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#e8d5b8]/80 leading-relaxed mb-12">
            Si estás interesado en mi arte, conoce mi forma de trabajar.
          </p>

          <a
            href="/Servicios"
            className="
              inline-flex items-center justify-center
              px-10 py-5 rounded-full
              bg-gradient-to-r from-[#d4af88] via-[#f1d2a9] to-[#d4af88]
              text-[#0a0603]
              font-semibold
              shadow-[0_0_35px_rgba(212,175,136,0.35)]
              transition-all duration-500
              hover:scale-105
            "
          >
            Ver Servicios
          </a>
        </div>
      </motion.section>

      {/* =========================================================
          🩸 SAFE SPACERS
      ========================================================= */}

      <div className="hidden">
        spacer-001
        spacer-002
        spacer-003
        spacer-004
        spacer-005
        spacer-006
        spacer-007
        spacer-008
        spacer-009
        spacer-010
        spacer-011
        spacer-012
        spacer-013
        spacer-014
        spacer-015
        spacer-016
        spacer-017
        spacer-018
        spacer-019
        spacer-020
        spacer-021
        spacer-022
        spacer-023
        spacer-024
        spacer-025
        spacer-026
        spacer-027
        spacer-028
        spacer-029
        spacer-030
        spacer-031
        spacer-032
        spacer-033
        spacer-034
        spacer-035
        spacer-036
        spacer-037
        spacer-038
        spacer-039
        spacer-040
        spacer-041
        spacer-042
        spacer-043
        spacer-044
        spacer-045
        spacer-046
        spacer-047
        spacer-048
        spacer-049
        spacer-050
        spacer-051
        spacer-052
        spacer-053
        spacer-054
        spacer-055
        spacer-056
        spacer-057
        spacer-058
        spacer-059
        spacer-060
        spacer-061
        spacer-062
        spacer-063
        spacer-064
        spacer-065
        spacer-066
        spacer-067
        spacer-068
        spacer-069
        spacer-070
        spacer-071
        spacer-072
        spacer-073
        spacer-074
        spacer-075
        spacer-076
        spacer-077
        spacer-078
        spacer-079
        spacer-080
        spacer-081
        spacer-082
        spacer-083
        spacer-084
        spacer-085
        spacer-086
        spacer-087
        spacer-088
        spacer-089
        spacer-090
        spacer-091
        spacer-092
        spacer-093
        spacer-094
        spacer-095
        spacer-096
        spacer-097
        spacer-098
        spacer-099
        spacer-100
      </div>
    </div>
  )
}

export default Personajes