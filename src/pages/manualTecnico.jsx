import React from "react";

export const ManualTecnico = () => {
  return (
    <>
      <link rel="stylesheet" href="style.css" />
      <div className="main-content w-[100%] max-w-[800px] p-[50px]">
        <h2 className="text-[red] text-[2em] text-center pb-[40px]">
          MANUAL TECNICO DEL SISTEMA DE ANÁLISIS SENSORIAL DEL CAFÉ
        </h2>
        <div className="section flex flex-col gap-[45px]">
          <div className="part">
            <div className="titulo text-blue-950 font-bold text-[1em] pb-[20px]">
              Prerrequisitos de instalación del sistema:
            </div>
            <div className="subtitulo"></div>
            <div className="guion">
              • Requerimientos mínimos y recomendados de hardware (Disco Duro,
              Memoria, CPU, etc.)
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Disco duro: Mínimo 500GB de espacio disponible en el disco
                duro. Se recomienda 1TB. preferencia disco de estado sólido
                (SSD).
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Memoria RAM: Mínimo 8GB de memoria RAM, se recomiendan más de
                16GB.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - CPU: Mínimo AMD Ryzen 5 5000U/ i5 13600k, recomendado AMD
                Ryzen 9 5000X/ i7 14700k.
              </div>
            </div>
            <div className="guion">
              • Frameworks y estándares con los que se construyó el sistema:
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Frameworks: React JavaScript.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Estándares: Estándar de calidad CMMI.
              </div>
            </div>

            <div className="guion">• Diagrama de casos de uso del sistema.</div>
            <img src="/img/casos_uso.png" className="w-full" alt="xd" srcset="" />
            <div className="guion">
              • Modelo entidad relación de la base de datos
            </div>
            <img src="/img/relacion.png" className="w-full" alt="xd" srcset="" />
            <div className="guion">• Diccionario de datos.</div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Data: Información que se recibe de un modelo de un
                controlador.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Req: Información que se pasa a través de la ruta y llega al
                controlador.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Res: Variable que responde a una solicitud con un tipo de
                dato.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - sql: Variable que contiene una consulta SQL.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - rows: Variable que almacena la información que retorna una
                consulta SQL.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - status: Clave para identificar como concluyó el proceso de una
                solicitud (True - False).
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - message: Clave que identifica el mensaje que se retorna para
                mostrar el resultado de la operación.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - errors: Clave que contiene los errores de validación de
                entrada.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - find_error: Clave para identificar que un registro no pudo ser
                encontrado.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - register_error: Clave que identifica el proceso no exitoso de
                un registro.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - update_error: Clave usada para la identificación de que una
                actualización no pudo ser exitosa.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - delete_error: Clave para identificar que una entidad no pudo
                ser eliminada o desactivada.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - modalError: Clave que identifica un error en la transacción de
                la consulta SQL.
              </div>
            </div>

            <div className="guion">• Scripts de instalación:</div>

            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - npm: sudo apt install npm.
              </div>
            </div>
            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - NodeJs:
                <div className="content-guion flex justify-end">
                  <div className=" div-content-guion">
                    • sudo npm install -g n
                  </div>
                </div>
                <div className="content-guion flex justify-end">
                  <div className=" div-content-guion">• sudo n stable</div>
                </div>
              </div>
            </div>

            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                - Mysql Server:
                <div className="content-guion flex justify-end">
                  <div className=" div-content-guion">
                    • Instalar Servidor Mysql: sudo apt install mysql-server.
                  </div>
                </div>
                <div className="content-guion flex justify-end">
                  <div className=" div-content-guion">
                    • Configurar Seguridad:
                  </div>
                </div>
                <div className="content-guion flex justify-end">
                  <div className=" div-content-guion">
                    • SOURCE/ruta/coffee_sensory.sql: Importación de la base de
                    datos.
                  </div>
                </div>
              </div>
            </div>

            <div className="content-guion flex justify-end">
              <div className=" div-content-guion">
                -npm i: Comando para instalar todas las dependencias requeridas
                en el proyecto.
              </div>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
};
