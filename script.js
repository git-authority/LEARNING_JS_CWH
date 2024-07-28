function showConfirm() {
    // Display a confirmation dialog
    let userResponse = confirm("Do you want to proceed?");

    // Check the user's response
    if (userResponse) {
        alert("You clicked OK!");
    } else {
        alert("You clicked Cancel!");
    }
}