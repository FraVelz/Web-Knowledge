# Github

Control de codigo en la nuve.

## git clone

* git clone rute : descargar un repositorio de github.

## git push

* git push origin master: subir cambios a el repositorio de github.

* git push -u origin master: Configurar para cuando se utilize "git push" por defecto se ubique en "origin master".

## git pull & git fetch

* git pull // git pull origin master: actualizar el repositorio local del repositorio de github, es decir descarga los nuevos cambios que esten en el github.

* git pull -u origin master: ademas configura el "git pull" para que cuando se utilize solo siempre apunte al "origin master".

* git fetch : crea una rama temporar para visualizar los cambios para entrar en esta rama se utiliza "git switch --detach origin/master" y luego nos movemos a la rama head "git switch master" y para aceptar los cambios de github "git pull".

## Migrar un repositorio Local a Remoto
* touch text.txt // >text.txt : Crear archivo.

* code . : Abrir VSCode en la ubicacion.

* git commit -ma "Message" : git add . + git commit -m "Message"

* git remote add origin rute : git clone

* git remote-v : Muestra lo que podemos hacer con el repositorio remoto.

## Forks
Pasa un repositorio de github a nuestra cuenta de github.

## Pull Request
Hacer un fork y luego modificar el codigo y mandarle el cambio al usuario. 

## Github Issues
Mini tareas que se pueden asignar a alguien.

> Author: Francisco Vélez | FraVelz
