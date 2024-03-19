'use strict'

const btn_file = document.querySelector('.btn-file') 

const preview_file = file => {
    const reader = new FileReader();
  
    reader.addEventListener(
        'load', () => { format_text(reader.result) }, false,
    )
  
    if (file) { reader.readAsText(file); }
}

const format_text = txt => {
    const article = document.createElement('ARTICLE')
    article.classList.add('articles')

    // ************************** ************************** //
    let [return_txt, temporal_ul, temporal_txt, temporal_ol] = ['', '', '', '']
    let [cancel_ul, cancel_txt, cancel_ol] = [false, false, false]
    let num_ol = 1

    for (let line of txt.split('\n')) {

        if ( !(line.lastIndexOf('## ', 3) == -1) ) {
            return_txt += `<h2 class="subtitle">${line.replace('## ', '')}</h2>`

        } else if ( !(line.lastIndexOf('# ', 2) == -1) ) { 
            return_txt += `<h1 class="title">${line.replace('# ', '')}</h1>`
        
        } else if ( !(line.lastIndexOf('> ', 2) == -1) ) { 
            return_txt += `<p class="txt_author">${line.replace('> ', '')}</p>`

        } else if ( !(line.lastIndexOf('. ', 2) == -1) || cancel_ol) {             
            if ( !(line.lastIndexOf('. ', 2) == -1) ) {
                if (temporal_ol == '') {temporal_ol += '<ol class="ol">'}
                temporal_ol += `<li class="li">${line.replace(`${num_ol}. `, '')}</li>`
                cancel_ol = true
                num_ol += 1

            } else {
                return_txt += `${temporal_ol} </ol>`
                temporal_ol = ''
                cancel_ol = false
                num_ol = 1
            }

        } else if ( !(line.lastIndexOf('* ', 2) == -1) || cancel_ul) {
            
            if ( !(line.lastIndexOf('* ', 2) == -1) ) {
                if (temporal_ul == '') {temporal_ul += '<ul class="ul">'}
                temporal_ul += `<li class="li">${line.replace('* ', '')}</li>`
                cancel_ul = true

            } else {
                return_txt += `${temporal_ul} </ul>`
                temporal_ul = ''
                cancel_ul = false
            }

        } else { 
            if (!line.trim() == ''  || cancel_txt) {
                if (!line.trim() == '') {
                    if (temporal_txt == '') {temporal_txt += '<p class="text">'}
                    temporal_txt += line
                    cancel_txt = true

                } else {
                    return_txt += `${temporal_txt} </p>`
                    temporal_txt = ''
                    cancel_txt = false
                }
            }
        }
    }    

    // ************************** ************************** //

    article.innerHTML = return_txt
    document.querySelector('.main').appendChild(article)
}

btn_file.addEventListener('change', e => {
    const file__info = document.querySelector('.file__info')
    const files = e.target.files

    if (files.length == 0) {
        file__info.innerHTML = 'Ningun Archivo Seleccionado'

    } else if (files.length > 1) {
        file__info.innerHTML = `${files.length} Archivos Seleccionados`
        
        for (let i = 0; i < files.length; i++) {
            preview_file(files[i])
        }
    
    } else {
        file__info.innerHTML = files[0].name
        preview_file(files[0])
    }
})

//* Author: Francisco Vélez | FraVelz
