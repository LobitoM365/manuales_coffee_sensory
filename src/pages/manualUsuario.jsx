import React from "react";

export const ManualUsuario = () => {
  return (
    <>
      <link rel="stylesheet" href="style.css" />
      <div className="main-content w-[100%] max-w-[800px] p-[50px]">
        <h2 className="text-[red] text-[2em] text-center pb-[40px]">
          MANUAL DE USUARIO DEL SISTEMA DE ANÁLISIS SENSORIAL DEL CAFÉ
        </h2>
        <div className="section flex flex-col gap-[45px]">
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
              6.1 OBJETIVO DEL SISTEMA DE INFORMACIÓN DESARROLLADO
            </div>
            <div className="subtitulo"></div>
            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>El Sistema de Análisis
              Sensorial del Café tiene como objetivo facilitar la gestión
              digital de registros en la Escuela Nacional del Café,
              específicamente enfocado en el análisis sensorial de muestras de
              café. El sistema busca proporcionar una plataforma intuitiva y
              eficiente para el almacenamiento y consulta de datos relacionados
              con usuarios, fincas, resultados y análisis de muestras de café.
            </div>
          </div>
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
              ÍNDICE DEL CONTENIDO
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
              INTRODUCCIÓN
            </div>
            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>
              El Sistema de Análisis Sensorial del Café es una herramienta
              diseñada para simplificar y mejorar la gestión de registros de
              análisis sensorial de café en la Escuela Nacional del Café. A
              través de este manual, los usuarios podrán comprender las
              funciones clave y utilizar eficientemente las distintas
              características del sistema.
            </div>
          </div>
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
              ALCANCE FUNCIONAL Y ORGANIZACIONAL
            </div>

            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>
              Desde la perspectiva funcional, el sistema abarca la gestión de
              usuarios, fincas, resultados y análisis de muestras de café.
              Organizacionalmente, se integra con las operaciones de la Escuela
              Nacional del Café para optimizar el análisis sensorial.
            </div>
          </div>
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
              FUNCIONES Y UTILIZACIÓN DEL SISTEMA 3.1 PRERREQUISITOS PARA EL USO
              DEL SISTEMA DE INFORMACIÓN POR PARTE DEL USUARIO FINAL
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
              1.) Requerimientos de Hardware
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Desde la perspectiva funcional, el sistema abarca la gestión de
              usuarios, fincas, resultados y análisis de muestras de café.
              Organizacionalmente, se integra con las operaciones de la Escuela
              Nacional del Café para optimizar el análisis sensorial.
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Dispositivo de Acceso:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Se puede utilizar cualquier computadora personal, laptop,
                  tablet o dispositivo móvil con acceso a Internet.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Conexión a Internet:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Se requiere una conexión a Internet estable para acceder al
                  sistema y realizar operaciones en línea.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Navegador Web:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Se recomienda el uso de un navegador web actualizado, como
                  Google Chrome, Mozilla Firefox, o Microsoft Edge, para una
                  experiencia óptima.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Resolución de Pantalla:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Se sugiere una resolución de pantalla mínima de 1366x768
                  píxeles para una visualización clara de la interfaz del
                  sistema.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="titulo-guion font-bold ">
                <span className="pr-[60px]"></span> Requerimientos de Software:
              </div>
              <div className="guion">
                <span className="pr-[60px]"></span>- Sistema Operativo:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  El sistema es compatible con varios sistemas operativos,
                  incluyendo Windows, macOS y Linux. Utilice el sistema
                  operativo de su preferencia.
                </div>
              </div>
              <div className="guion">
                <span className="pr-[60px]"></span>- Navegador Web:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Asegúrese de tener instalado y actualizado un navegador web
                  moderno. Se recomienda Google Chrome, Mozilla Firefox o
                  Microsoft Edge.
                </div>
              </div>
            </div>

            <div className="items pb-[10px]">
              <div className="titulo-guion font-bold ">
                <span className="pr-[60px]"></span> Roles y permisos:
              </div>
              <div className="guion">
                <span className="pr-[60px]"></span>- Administrador:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">Todos</div>
              </div>
              <div className="guion">
                <span className="pr-[60px]"></span>- Catador:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Todos a excepción de Registrar, Eliminar, Listar usuarios y
                  Listar información no perteneciente a su usuario.
                </div>
              </div>
              <div className="guion">
                <span className="pr-[60px]"></span>- Cliente:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                  Visualizar información perteneciente a su usuario, eliminar y
                  crear Navegadores compatibles.
                </div>
              </div>
            </div>
          </div>
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
            3.2 CONFIGURACIÓN DEL SISTEMA EN EL COMPUTADOR DEL USUARIO
            </div>
            <div className="subtitulo"></div>
            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>El Sistema de Análisis
              Configuraciones adicionales para el correcto funcionamiento, como permisos de firewall y accesos a carpetas compartidas.
            </div>
          </div>
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
            3.3 FUNCIONALIDAD Y SERVICIOS OFRECIDOS
            </div>
            <div className="subtitulo"></div>
            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>Módulos: Usuarios, Fincas, Cafés, Muestras, Resultados, Café, Resultados, Análisis de Muestras.
            </div>
            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>Acceso gráfico a cada funcionalidad.
            </div>
          </div>


          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
            3.4 PASO A PASO DE CADA OPCIÓN DEL SISTEMA
            </div>
            <div className="subtitulo"></div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Inicio de Sesión:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Ingrese sus credenciales.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Registro y Consulta de Usuarios:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Complete el formulario o filtre usuarios existentes.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Registro y Consulta de Fincas:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Agregue nueva finca o explore las existentes.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Registro y Consulta de Resultados:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Capture y analice los resultados de análisis sensorial.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Registro y Consulta de Análisis de Muestras
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Digitalice y analice las muestras de acuerdo con el formato SCA.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Dashboard:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Visualice gráficos e información relevante.
                </div>
              </div>
            </div>
            <div className="items pb-[10px]">
              <div className="guion">
                <span className="pr-[60px]"></span>- Botones de Acción:
              </div>
              <div className="content-guion flex justify-end">
                <div className=" div-content-guion">
                Cambie estados y actualice registros.
                </div>
              </div>
            </div>
         
          </div>

          <div className="part">
          <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
          PREGUNTAS FRECUENTES
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            1.	¿Qué acciones puedo realizar con los resultados?
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Puede visualizar, analizar y gestionar los resultados de análisis sensorial. Utilice las opciones de la tabla de registros para cambiar estados, actualizar información y generar informes detallados.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            2.	¿Qué significan los términos utilizados en el sistema?
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              En el Glosario, encontrará definiciones de términos técnicos específicos utilizados en el contexto del análisis sensorial del café. Consulte esta sección para obtener aclaraciones sobre conceptos específicos.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            3.	¿Cómo realizo diferentes procedimientos?
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              El apartado "Paso a Paso de Cada Opción del Sistema" proporciona instrucciones detalladas para realizar diferentes procedimientos. Siga las indicaciones específicas para cada módulo, como el registro de usuarios, fincas, resultados y análisis de muestras.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            4.	¿Qué ocurre en distintas situaciones e interpretaciones?
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              La sección de Solución de Problemas ofrece información detallada sobre problemas comunes y sus soluciones, diferenciados por roles y funcionalidades. Consulte esta sección para resolver cualquier inconveniente que pueda surgir durante el uso del sistema.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            5.	¿Cómo navego eficientemente por el sistema?
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              El sistema ha sido diseñado para ser intuitivo. Utilice el menú principal para acceder a las diferentes funcionalidades, y la tabla de registros para explorar y filtrar información. Revise el apartado de Preguntas Frecuentes para obtener tips adicionales sobre la navegación eficiente.
            </div>
          </div>

          <div className="part">
          <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
          SOLUCIÓN DE PROBLEMAS
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            1.	Dificultad en la Gestión de Registros en Papel:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Problema: Antes del sistema, la Escuela Nacional del Café dependía de registros en papel, lo que dificultaba la organización y búsqueda eficiente de datos.
Solución: El sistema digitaliza y centraliza todos los registros, permitiendo una gestión más fácil, rápida y precisa.

            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            2.	Desafíos en el Análisis de Muestras de Café:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Problema: El análisis sensorial manual de muestras de café puede ser propenso a errores y consumir mucho tiempo.
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Solución: La digitalización en el formato SCA facilita y agiliza el proceso de análisis de muestras, reduciendo la posibilidad de errores y mejorando la eficiencia.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            3.	Falta de Visibilidad Geoespacial de las Fincas de Café:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Problema: La ubicación geográfica de las fincas no está claramente visible para los usuarios.
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Solución: El sistema proporciona un mapa interactivo que muestra la ubicación de las fincas de café, permitiendo una visión geoespacial de los datos.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            4.	Inconsistencia en los Cambios de Estado y Actualización de Registros:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Problema: Cambios de estado y actualizaciones manuales pueden llevar a errores y falta de consistencia en los datos.
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Solución: El sistema incorpora botones específicos para cambiar el estado y actualizar registros, garantizando consistencia y reduciendo posibles errores humanos.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            5.	Dificultad en la Visualización de Datos Relevantes:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Problema: La falta de herramientas visuales hace que sea difícil analizar patrones y tendencias en los resultados.
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Solución: El dashboard del sistema presenta gráficos visuales que proporcionan una visión rápida y clara de los datos, facilitando el análisis y la toma de decisiones informada.
            </div>
          </div>

          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
            DATOS DE CONTACTO
            </div>
            <div className="subtitulo"></div>
            <div className="parrafo pb-[25px]">
              <span className="pr-[60px]"></span>Información para obtener ayuda técnica o funcional sobre el sistema.
            </div>
          </div>




          <div className="part">
          <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
          GLOSARIO
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            1.	Análisis Sensorial:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Evaluación y examen de las características organolépticas del café, incluyendo aroma, sabor, acidez, cuerpo y otros aspectos que afectan la experiencia de degustación.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            2.	Formato SCA:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Formato establecido por la Asociación de Cafés Especiales (SCA, por sus siglas en inglés) para la estandarización de la información en el análisis sensorial del café.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            3.	Dashboard:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Panel visual que muestra de manera resumida y gráfica información clave, como resultados estadísticos, gráficos y datos relevantes del análisis sensorial..
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            4.	Fincas:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Terrenos o áreas específicas dedicadas al cultivo de café. En el contexto del sistema, se refiere a la información relacionada con la ubicación y características de las fincas de café.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            5.	Registros:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Datos digitales que representan información sobre usuarios, fincas, resultados y análisis de muestras almacenados en el sistema.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            6.	Roles:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Categorías predefinidas que determinan los permisos y la funcionalidad que un usuario tiene dentro del sistema.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            7.	Cambiar Estado:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Acción que permite modificar el estado de un registro, indicando cambios significativos en su progreso o condición.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            8.	Actualizar Registros:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Proceso de modificar o editar la información existente en un registro para mantenerla actualizada y precisa.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            9.	Mapa Geográfico:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Representación visual de datos en un mapa que muestra la ubicación geográfica de las fincas de café, facilitando la identificación y visualización espacial.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            10.	Permisos:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Conjunto de autorizaciones que determinan las acciones específicas que un usuario puede realizar dentro del sistema, según su rol.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            11.	Digitalización:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Conversión de información analógica o en papel a formato digital, facilitando el almacenamiento, búsqueda y acceso eficientes de los datos.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            12.	Menú Principal:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Interfaz que proporciona acceso a las diferentes funcionalidades del sistema, generalmente organizadas en opciones como Usuarios, Fincas, Resultados y Análisis de Muestras.
            </div>
            <div className="subtitulo font-[coursive] titulo text-blue-800 font-bold text-[1em] pb-[10px]">
            13.	Navegación Eficiente:
            </div>
            <div className="parrafo pb-[25px] pb-[25px]">
              <span className="pr-[60px] "></span>
              Acciones y técnicas que permiten a los usuarios moverse de manera rápida y efectiva dentro del sistema para acceder a la información deseada.
            </div>
          </div>

          

        </div>
      </div>
    </>
  );
};
