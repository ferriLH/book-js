document.addEventListener("DOMContentLoaded", function () {

    const submitForm = document.getElementById("addBook");

    submitForm.addEventListener("submit", function (event) {
        event.preventDefault();
        addBook();
    });

    const submitSearch = document.getElementById("search");

    submitSearch.addEventListener("submit", function (event) {
        event.preventDefault();
        let clearSearch = document.getElementById("clear-search");
        clearSearch.style.display = "block";
        searchBook();
    });

    if (isStorageExist()) {
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", () => {
    console.log("Data berhasil disimpan.");
});
document.addEventListener("ondataloaded", () => {
    refreshDataFromBooks();
});
