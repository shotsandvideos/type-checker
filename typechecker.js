const sentenceTag = document.querySelector(`input[type="text"]`)
const outputTag = document.querySelector("textarea.output")
const originalText = outputTag.value
const typesizeTag = document.querySelector(`input[name="typesize"]`)
const typesizeOutput = document.querySelector("span.typesize-output")
const typeSpacingTag = document.querySelector(`input[name="fontspacing"]`)
const typeSpacingOutput = document.querySelector("span.fontspacing-output")
const typeWeightTag = document.querySelector(`input[name="fontweight"]`)
const typeWeightOutput = document.querySelector("span.fontweight-output")

const italicTag = document.querySelector(`input[name="italic"]`)

const typeFaceTag = document.querySelector(`select[name=typeface]`)

const colorTags = document.querySelectorAll("div.colors div")


sentenceTag.addEventListener("keyup", function(){
    
    if(this.value){
        outputTag.value = this.value
    } else {
        outputTag.value = originalText
    }
})

// update output and input accordingly

outputTag.addEventListener("keyup", function(){
    sentenceTag.value = this.value
})

//change font size with input range


typesizeTag.addEventListener("input", function(){
    outputTag.style.fontSize = this.value + "px"
    typesizeOutput.innerHTML = this.value + " px"
    console.log(this)
})

typeSpacingTag.addEventListener("input", function(){
    outputTag.style.lineHeight = this.value 
    typeSpacingOutput.innerHTML = this.value
})

typeWeightTag.addEventListener("input", function(){
    outputTag.style.fontWeight = this.value 
    typeWeightOutput.innerHTML = this.value
})

italicTag.addEventListener("change", function(){
    if (this.checked)   {
        outputTag.style.fontStyle = "italic"
    } else {
        outputTag.style.fontStyle = "normal"
    }
})

typeFaceTag.addEventListener("input", function(){
    outputTag.style.fontFamily = this.value
})


colorTags.forEach(tag => {
    tag.addEventListener("click", function(){
        outputTag.style.backgroundColor = this.style.backgroundColor
        outputTag.style.color = this.style.color
    })
})