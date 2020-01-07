document.addEventListener("DOMContentLoaded", () => {

    let counterDisplay = document.querySelector("#counter")
    let plusButton = document.querySelector("#plus")
    let minusButton = document.querySelector("#minus")
    let heartButton  = document.querySelector("#heart")
    let pauseButton = document.querySelector("#pause")
    let likesList = document.querySelector(".likes") 
    let likesListArray = document.querySelector("ul.likes li")

    function incrementCounterDisplay(e){
        let counter = parseInt(counterDisplay.innerText)
        counter ++
        counterDisplay.innerText = `${counter}`

    }

    function decrementCounterDisplay(e){
        let counter = parseInt(counterDisplay.innerText)
        counter --
        counterDisplay.innerText = `${counter}`
        
    }

    function automaticCounter(e){
        setInterval(incrementCounterDisplay, 1000)
    }

    function likeNumber(e){

        let currentTime = counterDisplay.innerText

        let targetLiElement = document.getElementById(currentTime)
        
    //   if the likesList  contains the CounterDisplayText.innerText  (number) then  increment the  existing like 
        if (targetLiElement != null){
        
            targetLiElement.value = parseInt(targetLiElement.value) +1
        
            targetLiElement.innerText =`${currentTime} has been liked ${targetLiElement.value}  times`
      }
        else{
        
            let likeComment = document.createElement("li") 
            likeComment.id = currentTime
            likeComment.value = 1

            likeComment.innerText =`${currentTime} has been liked ${likeComment.value}  time`
            likesList.appendChild(likeComment)
        }
    }


    automaticCounter()

    plusButton.addEventListener("click", incrementCounterDisplay);
    minusButton.addEventListener("click", decrementCounterDisplay);
    heartButton.addEventListener("click", likeNumber)


    let commentForm = document.querySelector("form")
    let commentList = document.querySelector("#list") 
    let commentInputField = document.querySelector("#comment-input")
    let submitCommentButton = document.querySelector("#submit")
    
    function newComment(e){
        e.preventDefault();
        let comment = document.createElement("p")
        comment.innerText = commentInputField.value
        commentList.appendChild(comment)
        commentForm.reset();
    }

    submitCommentButton.addEventListener("click", newComment);


});
