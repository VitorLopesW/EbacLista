$('#buttonId').click(function(e){
    eventEnter(e)
})

$('#textId').on( "keydown", function(e){
    if(e.key === 'Enter'){
        eventEnter(e)
    }
})

let index = 0 

function getTrashCan(target){
    const trashCan = document.createElement('span')
    trashCan.classList.add("trashCan", "material-symbols-outlined")
    trashCan.innerHTML = 'delete'
    trashCan.addEventListener('click', () => {
        $(`#${target}`).remove()
    })
    return trashCan
}


function eventEnter(e){
    if($('#textId').val() === '') return
    e.preventDefault()
    let newListBoolean = true
    if(newListBoolean){
        newListBoolean = false
        const newList = document.createElement('ul')
        newList.id = 'list'
        $('#container').append(newList)
    }
    const inputText = document.createElement('li')
    inputText.id = `lineNumber${index}`
    inputText.innerHTML = `${$('#textId').val()}      --`
    inputText.addEventListener('click', (e) => {
        if (e.target.classList.contains('stroke')) {
            inputText.className = ''
        } else {
            inputText.classList.add('stroke')
        }
    })
    inputText.append(getTrashCan(`lineNumber${index}`))
    index++
    $('#list').append(inputText)
    $('#textId').val('')
}