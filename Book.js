document.getElementById("fetchBooks").addEventListener("click", function() {
    const button = this;
    const table = document.getElementById("bookTable");
    const bookData = document.getElementById("bookData");


    button.disabled = true;


    const books = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: "10000 Rs" },
        { title: "1984", author: "George Orwell", price: "1200 Rs" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", price: "15000 Rs" },
        { title: "Moby Dick", author: "Herman Melville", price: "8000 Rs" },
        { title: "Pride and Prejudice", author: "Jane Austen", price: "1000 rs" }
    ];

    bookData.innerHTML = "";
    table.style.display = "table";


    books.forEach(book => {
        const row = `<tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
        </tr>`;
        bookData.innerHTML += row;
    });

    button.disabled = false;
});
