$(document).ready(function() {
    ​
        // event listeners
        $(document).on("click", "#upvote", upRank);
        $(document).on("click", "#downvote", downRank);
        $(document).on("click", "#image", displayModal);
        $(document).on("click", "#fileupload", fileUpload);
    ​
    ​
    ​
        function displayModal() {
            console.log("displaying modal");
            $('#uploadModal').modal('show');
            
        }
    ​
        function fileUpload() {
            console.log("uploading file")
    ​
        }
    ​
        function upRank() {
            console.log("upvoting");
    ​
            // Ajax 
        }
    ​
        function downRank() {
            console.log("downvoting");
    ​
            // Ajax
        }
    ​
    });