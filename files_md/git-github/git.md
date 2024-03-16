# Git

## Areas
1. **Area de trabajo:** Donde modificamos los archivos.

2. **Staging:** Almacena los archivos que van al servidor.

3. **Repositorio:** Almacena el staging en el servidor.

## Glosario
* Carpeta y Directorio es lo mismo.
* system, local, global.
* git reset --hard => Reescribe el archivo si es nesesario.

## Configuracion Inicial
* git config --global user.name="FraVelz"

* git config --global user.email="fravelz_@hotmail.com"

* git config --list

* git config --global --list

* git config --global core.editor "code --wait"  (Configurar VSCode)

* git config --global color.ui true (Mejorar Color de interfaz)

* git config --global core.autocrlf true (Configura "\r\n" para windows)

* git config --global core.autocrlf input (Configura "\n" para linux)

\r\n : Windows \
\n : Linux

## Comandos de Consola
* Cd: Mover entre directorios/carpetas ("cd carpeta/" "cd ..")

* (Cd g:): Entrar al disco G 

* ls: Lista los archivos y directorios.

* (ls -a): Muestra archivos ocultos.

* (ls -la): Muestra archivos ocultos y info de cada uno.

* mkdir: Crea una carpeta (mkdir carpeta)

* rmdir: Eliminar una carpeta (rmdir carpeta)

* pwd: Muestra la ruta actual.

* clear: Limpiar consola.

## 1ros Pasos en Git (add/Commit)
* (git init): Inicializa git es decir crea una carpeta de confguraciones como carpeta oculta.

* (git status): Informacion del directorio y area de preparacion.

* (git status -s)(git status --short) : Info Mas limpia.

* (git add .): Todos los archivos en el directorio se agregan a la area de preparacion.
* (git add archivo): Solo los archivos seleccionados se agregan. (git add archivo .. ..)

* (git rm --cached archivo): Solo los archivos seleccionados se eliminan de la area de preparacion.

* (git commit -m "mensaje...") : Agregar mensaje a la actualizacion.
* (git commit) : Agregar mensaje a la actualizacion.

* (git commit -a): git commit + git add 

* (git commit -m "mensaje..." -a) : Eliminar archivo con mensaje.

## Restore, Checkout, y mas

* (git restore archivo.txt) : Un archivo eliminado del area de trabajo lo recuperamos gracias al area de preparacion.

* (git checkout archivo.txt) : Modifica el archivo y coloca la info del ultimo add. (puede cambar texto o nombre del archivo segun el ultimo add).

* (git reset --hard archivo.txt) : Modifica el archivo y coloca la info del ultimo add, y elimina el add actual.

* (git mv nombre1.txt nombre2.txt) : Cambio de nombre 1 a 2

## Git Diff

* (git show nombre.txt) : Ver archivo

* (git diff --staged) : Comparar version sin commit con commit

* (git log) : Info de los commits.

* (git log --oneline) : Info de los commits en 1 linea.

* (git diff --staged [b632b9b] [b632b9b]) : Comparar version de commits

* (git diff --name-only [b632b9b] [b632b9b]) : Comparar nombre de dos commits

* (git diff --word-diff [b632b9b] [b632b9b]) : Comparar lineas de dos commits

## Modficar y deshacer Commits

* (git commit --amend) : Modificar mensaje del ultimo commit y agrega los archivos del area de preparacion al staging.

* git rebase -i head~1 : Modificar un commit, te aparecen varios commit y selecionas el nombre del commit a modificar cambas el "pick" por "edit" y cierras.

* git rebase --continue : Despues de modificar el ultimo commit continuar en la ultima rama.

* **git reset --soft [b632b9b]:** Colocar el puntero en el commit selecionado y todos los commit en adelante son eliminados y el ultimo commit lo envia al staging. 

* **git reset --soft head~1** : ubicar uno atras del head (se puede elegir cualquier numero) (El commit head al ser eliminado los archivos son agregados a el staging, y si el staging tiene los archivos los modifica y si no los agrega).

* **git reset --mixed head~1** : Deja vacio el Staging, y deja el area de trabajo como estaba.

* **git reset --hard head~1** : Al colocar el putero en un commit solo coloca la informacion que tenian los archivos cuando se hizo ese commit y descarta el area de staging.

# Combinar Commits
git rebase -i HEAD~3 : Hable en VSCode un archivo donde debemos colocar "s" donde esta pick a los commits a combinar y dejar el "pick" al que se le deja como principal.

## Ramas
* git branch : Muestra las ramas creadas.

* git branch rama-1 : Crea una rama con el nombre de "rama-1".

* git checkout rama-1 : Nos ubica en la rama llamada "rama-1".

* git switch rama-1 : Nos ubica en la rama llamada "rama-1" (Este es el mas aconsejable comando para movernos entre ramas).

* git checkout -b rama-new : Crear una nueva rama desde el lugar actual. (NO Recomendado)

* git switch -c rama-new : Crear una nueva rama desde el lugar actual (Recomendado)

* git branch -d rama-new : Eliminar rama.

* git branch -m rama modify-text : Cambiar el nombre de la rama "rama" por "modify-text"

* git branch -m modify-text : Cambiar el nombre de la rama actual por "modify-text"

## Fusionar Ramas 
* git merge optimize-func-sum-v1 : Fusiona los commit de las ramas.

* git reset --hard [12345] : Eliminar Fusiona de los commit de las ramas.

## Merge Conflicts 
* git log --oneline --all : Muestra todos los commits de todas las ramas.

## Git Ignore
Archivo desarrollado para ignorar archivos y no subirlos al repositorio.

* git ls-tree -r --name-only [12345] : Nombre de archivos de un repositorio seleccionado.

Si un archivo se subio para ignorarlo hay que eliminarlo.

## Alias
* git log --oneline --all --graph : Mustra de forma graficada cencilla las ramas.

* git log --oneline --all --graph --pretty=format:"%C(auto)%h%d %s %C(black)%C(bold)%cr" : Ademas agrega hace cuanto se hizo el commit.

* git config --global alias.log-improved "comando" : crea un atajo con "git log-improved" hace lo mismo que "git comando".

## Git Reflog

* git reset --hard a54eb47 : Eliminar referencia al commit y si no existe lo recupera. 

* git reflog : Muestra adonde va apuntando el head.

git checkout [12345] : selecciona el commit eliminado [12345] y luego "git switch -c name-branch" la info del commit eliminado la guarda en la nueva rama creada "name-branch".

Note: Para salir de los de los ":" dos puntos colocar la "q" y dar enter.

# Varios comandos en una linea
git add . && git commit -m "Update"

> Author: Francisco Vélez | FraVelz
